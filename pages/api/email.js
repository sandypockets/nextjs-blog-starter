import sgMail from '@sendgrid/mail'

export default function handler(req, res) {
  if (req.method === 'POST') {
    const parsedReq = {
      to: process.env.SENDGRID_TO_EMAIL,
      from: process.env.SENDGRID_FROM_EMAIL,
      subject: req.body.msg.subject,
      text: req.body.msg.text,
      html: req.body.msg.html,
    }

    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    sgMail
      .send(parsedReq)
      .then(() => {
        console.log('Email sent')
        res.send('Successfully sent! Note, the email may be queued.')
      })
      .catch((error) => {
        console.error(error)
        res.send(error)
      })
  } else {
    res.send(
      "Something's not right. Check your API call. Note, this route only accepts post requests!"
    )
  }
}
