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
  const siteUrl = 'https://dingersville.com'

  try {
    await transporter.sendMail({
      from: `Dingersville Support <${from}>`,
      to,
      replyTo: email.trim(),
      subject: `Dingersville contact form: ${name.trim()}`,
      text: [
        `Dingersville support message`,
        `Name: ${name.trim()}`,
        `Email: ${email.trim()}`,
        `Interest: ${interest?.trim() || 'Not specified'}`,
        '',
        message.trim(),
      ].join('\n'),
      html: `
        <div style="margin:0;background:#fffaf0;padding:32px 16px;font-family:'Chalkboard SE','Chalkboard','Comic Sans MS',Arial,Helvetica,sans-serif;color:#273238;">
          <div style="display:none;max-height:0;overflow:hidden;opacity:0;">New message for Dingersville support from ${safeName}.</div>
          <div style="max-width:620px;margin:0 auto;">
            <div style="border-radius:20px 20px 0 0;background:#f47b20;padding:24px 28px;text-align:center;">
              <a href="${siteUrl}" style="color:#ffffff;text-decoration:none;font-size:28px;font-weight:800;letter-spacing:.5px;">Dingersville</a>
              <div style="margin-top:6px;color:#fff7e8;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Golf with personality</div>
            </div>
            <div style="background:#ffffff;border:1px solid #f0dfc4;border-top:0;padding:32px 28px;">
              <div style="border-left:5px solid #20a7a0;padding-left:16px;">
                <h1 style="margin:0;color:#4c286f;font-size:24px;line-height:1.25;">New support message</h1>
                <p style="margin:8px 0 0;color:#68757a;font-size:14px;">Someone reached out through the Dingersville website.</p>
              </div>
              <div style="margin-top:28px;background:#fffaf0;border-radius:14px;padding:20px;">
                <p style="margin:0 0 10px;font-size:14px;"><strong style="color:#4c286f;">Name:</strong> ${safeName}</p>
                <p style="margin:0 0 10px;font-size:14px;"><strong style="color:#4c286f;">Email:</strong> <a href="mailto:${safeEmail}" style="color:#168d89;">${safeEmail}</a></p>
                <p style="margin:0;font-size:14px;"><strong style="color:#4c286f;">Interest:</strong> ${safeInterest}</p>
              </div>
              <div style="margin-top:24px;border-top:1px solid #eadfce;padding-top:22px;font-size:15px;line-height:1.7;">
                ${safeMessage}
              </div>
              <div style="margin-top:28px;text-align:center;">
                <a href="mailto:${safeEmail}" style="display:inline-block;border-radius:999px;background:#20a7a0;color:#ffffff;padding:12px 22px;text-decoration:none;font-weight:700;font-size:14px;">Reply to ${safeName}</a>
              </div>
            </div>
            <div style="border-radius:0 0 20px 20px;background:#4c286f;padding:20px 28px;text-align:center;color:#f8efe1;">
              <p style="margin:0;font-size:13px;font-weight:700;">Dingersville</p>
              <p style="margin:6px 0 0;font-size:12px;color:#dfd1e8;">Fun golf gear for your next round.</p>
              <p style="margin:12px 0 0;font-size:11px;color:#cdbbd9;"><a href="${siteUrl}" style="color:#ffffff;">dingersville.com</a></p>
            </div>
          </div>
        </div>
      `,
    })

    return res.status(200).json({ ok: true })
  } catch (error) {
    console.error('Contact email delivery failed:', error instanceof Error ? error.message : 'unknown error')
    return res.status(502).json({ error: 'Unable to deliver contact message' })
  }
}
