// import express from "express";
// import serverless from "serverless-http";

// const app = express();
// app.use(express.json());

// app.get("/", (req, res) => {
//     res.json({ message: "Hello from Express backend 🚀" });
// });

// app.post("/", (req, res) => {
//     const { name, email, message } = req.body;
//     res.json({ success: true, data: { name, email, message } });
// });

// export const handler = serverless(app);

import nodemailer from "nodemailer";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ success: false, message: "Method not allowed" });
    }

    const { name, email, message, honeypot } = req.body;

    // Honeypot spam check
    if (honeypot?.trim()) {
        return res.status(400).json({ success: false, message: "Spam detected" });
    }

    // Validation
    if (!name || !email || !message) {
        return res.status(400).json({ success: false, message: "All fields are required" });
    }

    try {
        // Create transporter (Gmail SMTP example)
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Send email
        await transporter.sendMail({
            from: `"${name}" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_RECEIVER || process.env.EMAIL_USER,
            replyTo: email,
            subject: `New Contact Message from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`,
        });

        return res.status(200).json({ success: true, message: "Email sent successfully" });
    } catch (error) {
        console.error("Email sending error:", error);
        return res.status(500).json({
            success: false,
            message: "Email failed to send",
            error: error.message,
        });
    }
}

