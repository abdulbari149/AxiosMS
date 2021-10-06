import { createTransport } from "nodemailer";

export function sendEmails(data) {
  const transporter = createTransport({
    host: "in-v3.mailjet.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.MAILJET_API_KEY,
      pass: process.env.MAILJET_SECRET_KEY,
    },
  });
  const text = `Name: ${data.name} 
    Email: ${data.email}
    Phone Number: ${data.phoneNo}
    Message : ${data.message}
`;
  const html = text
    .split(/\r?\n/)
    .map((str) => `<h3>${str.trim()}</h3>`)
    .toString()
    .replace(/,/g, "");

  const mailOptions = {
    from: "'Axios' <axiosms@hotmail.com>",
    to: "'abdulbari' <abdulbari131103@gmail.com>",
    subject: "Marketing email",
    text: text,
    html: html,
  };

  return { transporter, mailOptions };
}
