import nodemailer from "nodemailer";

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

      let mailDetails = {
        from: "dhanasekar20002@gmail.com",
        to: `${email}`,
        subject: "Message From Portfolio",
        html: `<h1 style='color:green'>Hello ${name}!</h1><p>Thanks for your Message : ${message}</P><p>Here's my Resume!</p> <h3 style='color:red'>Note:This is auto generated mail by Nodemailer</h3>`,
        attachments: [
          {
            filename: "DhanasekarResume.pdf",
            path: "./public/DhanasekarResume.pdf",
            contentType: "application/pdf",
          },
        ],
      };

      mailTransporter.sendMail(mailDetails, function (err, data) {
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
