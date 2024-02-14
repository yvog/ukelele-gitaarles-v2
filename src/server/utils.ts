const sgMail = require('@sendgrid/mail');

export function verifyRecaptchaToken(token: string) {
  return fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
    {
      method: 'POST',
    }
  )
    .then((res) => res.json())
    .then((res) => res);
}

export async function sendMail(subject: string, text: string) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const from = `${'ukelele-gitaarles.nl'} <${process.env.FROM_EMAIL}>`;
  const mail = {
    to: process.env.ADMIN_EMAIL,
    from: from,
    subject: subject,
    text: text,
    replyTo: from,
  };

  await sgMail
    .send(mail)
    .then(() => {
      console.log('mail sent');
    })
    .catch((error: any) => {
      console.error(error);
    });
}
