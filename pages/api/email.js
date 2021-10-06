import { sendEmails } from "../../utils/sendEmail";
import { getSession } from "../../utils/getSession";

class EmailApiMethods {
  POST(req, res) {
    const formData = JSON.parse(req.body.data);
    const { transporter, mailOptions } = sendEmails(formData);
    return new Promise((resolve, reject) => {
      transporter.sendMail(mailOptions, (err, success) => {
        if (err) reject(err);
        if (!!success) {
          const response = {
            sender_name: formData.name,
            sender_email: formData.email,
            sender_phone_number: formData.phoneNo,
            sender_phone_code: 92,
            message_id: success.messageId,
            message_time: success.messageTime,
            message_size: success.messageSize,
            envelope_time: success.envelopeTime,
          };
          resolve(response);
        }
      });
    })
      .then((response) => {
        console.log(response);
        res.status(200).json(response);
      })
      .catch((err) => res.status(400).json({ message: err }));
  }
  GET(){

  }
}

const { POST } = new EmailApiMethods();

export default function emailApi(req, res) {
  if (req.method === "POST") {
    POST(req, res)
  }
  if(req.method === "GET"){
    res.status(401).json({ error: "The route is not in use" })
  }
}
