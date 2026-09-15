import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

export const config = {
  api: {
    bodyParser: true,
  },
}

const escapeHtml = (value: string) =>
  value.replace(/[&<>'"]/g, character => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;',
  })[character] || character)

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, message, interest } = req.body as {
    name?: string
    email?: string
    message?: string
    interest?: string
  }

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'name, email, and message are required' })
  }

  if (!email.includes('@') || !email.includes('.')) {
    return res.status(400).json({ error: 'invalid email' })
  }

  const smtpPassword = process.env.NEO_SMTP_PASSWORD
  if (!smtpPassword) {
    console.error('Contact email is not configured: NEO_SMTP_PASSWORD is missing')
    return res.status(503).json({ error: 'Contact email is temporarily unavailable' })
  }

  const from = process.env.NEO_SMTP_USER || 'support@dingersville.com'
  const to = process.env.CONTACT_RECIPIENT || 'support@dingersville.com'
  const smtpHost = process.env.NEO_SMTP_HOST || 'smtp0001.neo.space'
  const smtpPort = Number(process.env.NEO_SMTP_PORT || 587)

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: from,
      pass: smtpPassword,
    },
  })

  const safeName = escapeHtml(name.trim())
  const safeEmail = escapeHtml(email.trim())
  const safeInterest = escapeHtml(interest?.trim() || 'Not specified')
  const safeMessage = escapeHtml(message.trim()).replace(/\n/g, '<br />')

  try {
    await transporter.sendMail({
      from: `Dingersville Support <${from}>`,
      to,
      replyTo: email.trim(),
      subject: `Dingersville contact form: ${name.trim()}`,
      text: [
        `Name: ${name.trim()}`,
        `Email: ${email.trim()}`,
        `Interest: ${interest?.trim() || 'Not specified'}`,
        '',
        message.trim(),
      ].join('\n'),
      html: `
        <h2>Dingersville contact form</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Interest:</strong> ${safeInterest}</p>
        <hr />
        <p>${safeMessage}</p>
      `,
    })

    return res.status(200).json({ ok: true })
  } catch (error) {
    console.error('Contact email delivery failed:', error instanceof Error ? error.message : 'unknown error')
    return res.status(502).json({ error: 'Unable to deliver contact message' })
  }
}
