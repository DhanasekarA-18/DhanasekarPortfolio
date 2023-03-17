import nodemailer from "nodemailer";
import path from "path";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { name, email, message } = req.body;
      let mailTransporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "dhanasekar20002@gmail.com",
          pass:"kcozzmqlgvcojnqs",
        },
      });
      let filePath = path.join(process.cwd(), 'public', 'DhanasekarResume.pdf'); //resumepath
      let mailDetails = {
        from: "dhanasekar20002@gmail.com",
        to: `${email}`,
        subject: "Please find attached the PDF version of the portfolio",
        html: `<h1 style='color:green'>Dear ${name}!</h1><p>Thanks for Contacting Me and for Your Message : ${message}</P><h3 style='color:red'>Note:This mail is auto generated</h3>`,
        attachments: [
          {
            filename: "DhanasekarResume.pdf",
            path: filePath,
            contentType: "application/pdf",
          },
        ],
      };

    await mailTransporter.sendMail(mailDetails,  function (err, data) {
        if (err) {
          console.log("error",err);
          res
            .status(500)
            .json({ success: false, error: "Error sending email" });
        } else {
          res
            .status(200)
            .json({ success: true, message: "Email sent successfully" });
        }
      });
    } catch (err) {
      console.log(err);
      res.status(405).json({success: false, error: "Method not allowed" });
    }
  }
}
