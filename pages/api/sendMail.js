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
        subject: "Message From PortFolio",
        text: `Hello ${name}!  Message:${message}`,
      };

      mailTransporter.sendMail(mailDetails, function (err, data) {
        if (err) {
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
