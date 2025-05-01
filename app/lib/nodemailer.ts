import nodemailer from 'nodemailer';

// Create a transporter object
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_SERVER || 'smtp.gmail.com',
  port: Number(process.env.EMAIL_PORT) || 587,
  secure: process.env.EMAIL_SECURE === 'true' ? true : false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Interface for email data
export interface EmailData {
  name: string;
  email: string;
  phone: string;
  interest: string;
}

// Function to send email
export async function sendEmail(data: EmailData): Promise<{ success: boolean; message: string }> {
  try {
    // Email recipient from environment variable
    const recipientEmail = process.env.RECIPIENT_EMAIL;
    
    if (!recipientEmail) {
      throw new Error('Recipient email not configured');
    }

    // Email template with form data
    const emailContent = `
      <h2>New Entrepreneur Training Inquiry</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      <p><strong>Training Interest:</strong> ${data.interest}</p>
      <p>Please follow up with this potential client.</p>
    `;

    // Send the email
    await transporter.sendMail({
      from: process.env.EMAIL_FROM || `"Entrepreneur Form" <${process.env.EMAIL_USER}>`,
      to: recipientEmail,
      subject: `New Training Inquiry from ${data.name}`,
      html: emailContent,
    });

    return { success: true, message: 'Email sent successfully' };
  } catch (error) {
    console.error('Error sending email:', error);
    return { 
      success: false, 
      message: error instanceof Error ? error.message : 'Failed to send email' 
    };
  }
}