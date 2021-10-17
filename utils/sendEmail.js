import sgMail from "@sendgrid/mail"
export function sendEmails(data) {
  sgMail.setApiKey("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")
  const text = `Name: ${data.name} 
    Email: ${data.email}
    Phone Number: ${data.phone_number}
    Message : ${data.message}
`;
  const html = text
    .split(/\r?\n/)
    .map((str) => `<h3>${str.trim()}</h3>`)
    .toString()
    .replace(/,/g, "");

  const msg = {
    to: "abdulbari131103@gmail.com",
    from: "abdulbari.khatri@outlook.com",
    subject: "Customer email",
    text: text,
    html: html,
  };

  return msg
}
