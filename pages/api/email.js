import { sendEmails } from "../../utils/sendEmail";
import sgMail from "@sendgrid/mail";
async function handlePOST(data) {
  const formData = JSON.parse(data);
  console.log(formData);
  const msg = sendEmails(formData);
  const res = await promisify(formData, msg);
  const response = {
    sender_name: formData.name,
    sender_email: formData.email,
    sender_phone_number: formData.phone_number.toString(),
    sender_phone_code: 92,
    message_id: res[0].headers["x-message-id"],
  };
  return response;
}

const promisify = (data, msg) => {
  return new Promise((resolve, reject) => {
    sgMail.send(msg, (error, info) => {
      if (error) {
        reject(error);
      }
      resolve(info);
    });
  });
};

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = await handlePOST(req.body.data);
    res.status(200).json(data);
  }
}
