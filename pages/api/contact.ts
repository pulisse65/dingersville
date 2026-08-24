import type { NextApiRequest, NextApiResponse } from 'next'

export const config = {
  api: {
    bodyParser: true,
  },
}

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

  // In production, forward to an email provider (Netlify Forms, Resend, etc.)
  // For now, log and return success — the form handles the UX
  console.log('Contact form submission:', {
    name,
    email,
    interest: interest || 'not specified',
    message: message.slice(0, 200) + (message.length > 200 ? '...' : ''),
  })

  return res.status(200).json({ ok: true })
}
