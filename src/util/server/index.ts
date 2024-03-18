import { NextApiRequest } from 'next';

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

export function isInvalidFormSubmission(
  req: NextApiRequest,
  method: string,
  recaptchaRes: any,
  action: string
): boolean {
  return (
    req.method !== method ||
    !recaptchaRes ||
    !recaptchaRes.success ||
    recaptchaRes.action !== action
  );
}

export async function sendMail(subject: string, text: string) {
  const from = `${'ukelele-gitaarles.nl'} <${process.env.FROM_EMAIL}>`;
  const mail = {
    to: process.env.ADMIN_EMAIL,
    from: from,
    subject: subject,
    text: text,
    replyTo: from,
  };

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  return sgMail.send(mail);
}
