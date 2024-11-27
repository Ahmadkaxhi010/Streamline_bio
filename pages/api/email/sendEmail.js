const nodemailer = require("nodemailer");
import { render } from "@react-email/render";
import NotifyEmail from "@/components/email/Notify";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed1" });
  }

  const { email, companyName, firstName, lastName } = req.body;

  const html = await render(
    NotifyEmail({
      email,
      companyName,
      firstName,
      lastName,
    })
  );

  const transporter = nodemailer.createTransport({
    port: 2525,
    secure: false,
    host: process.env.Email_bulkmailtrap,
    auth: {
      user: process.env.password_changeusername,
      pass: process.env.password_changepass,
    },
  });

  //  const to = ["leo@streamlinebio.ai", "harvey@streamlinebio.ai"];
   const to = ["ghufran.chaudary12@gmail.com", "saadullahbutt124@gmail.com"];
  //const to = "ghufran.chaudary12@gmail.com";
  const subject = `Waitlist Request from ${companyName} (${email})`;
  const emailsender = "support@streamlinebio.ai";
  // Set up email options
  const mailOptions = {
    from: emailsender,
    to,
    subject: subject,
    html: html,
  };

  try {
    const info = await transporter.sendMail(mailOptions);

    res
      .status(200)
      .json({ success: true, message: "Email sent to StreamLine" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Error in sending email to StreamLine." });
  }
}
