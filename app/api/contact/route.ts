import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json();

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS, 
            },
        });

        await transporter.sendMail({
            from: email,
            to: process.env.GMAIL_USER,
            subject: `New Contact Form Submission from ${name}`,
            html: `
        <h3>New Message from your website</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
        });

        return new Response("Email sent successfully", { status: 200 });
    } catch (error) {
        console.error("Email error:", error);
        return new Response("Failed to send email", { status: 500 });
    }
}
