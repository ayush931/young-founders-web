import { NextRequest, NextResponse } from 'next/server';
import { sendEmail, EmailData } from '@/app/lib/nodemailer';

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json();
    
    // Validate required fields
    const requiredFields = ['name', 'email', 'phone', 'interest'];
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { success: false, message: `${field} is required` },
          { status: 400 }
        );
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { success: false, message: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Prepare data for email
    const emailData: EmailData = {
      name: body.name,
      email: body.email,
      phone: body.phone,
      interest: body.interest
    };

    // Send the email
    const result = await sendEmail(emailData);

    if (result.success) {
      return NextResponse.json(
        { success: true, message: 'Form submitted successfully' },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { success: false, message: result.message },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Error in contact form submission:', error);
    return NextResponse.json(
      { success: false, message: 'Server error processing your request' },
      { status: 500 }
    );
  }
}