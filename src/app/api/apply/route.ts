import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, guardCard, experience, availability, certifications, details } =
      body;

    if (!name || !email || !phone || !experience || !details) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const experienceLabels: Record<string, string> = {
      none: 'No prior experience',
      '1-2': '1-2 years',
      '3-5': '3-5 years',
      '5-plus': '5+ years',
    };

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json({ error: 'Email service not configured' }, { status: 500 });
    }

    const { Resend } = await import('resend');
    const resend = new Resend(apiKey);

    const availabilityList = Array.isArray(availability)
      ? availability.join(', ')
      : availability || 'Not specified';

    await resend.emails.send({
      from: 'ECT Security <careers@ectsecurity.com>',
      to: ['info@ectsecurity.com'],
      replyTo: email,
      subject: `New Job Application — ${name}`,
      html: `
        <h2>New Job Application</h2>
        <hr />
        <h3>Contact Information</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        ${guardCard ? `<p><strong>Guard Card #:</strong> ${guardCard}</p>` : ''}
        <hr />
        <h3>Qualifications</h3>
        <p><strong>Experience:</strong> ${experienceLabels[experience] || experience}</p>
        <p><strong>Availability:</strong> ${availabilityList}</p>
        ${certifications ? `<p><strong>Certifications:</strong> ${certifications}</p>` : ''}
        <hr />
        <h3>About the Applicant</h3>
        <p>${details.replace(/\n/g, '<br />')}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Application form error:', error);
    return NextResponse.json({ error: 'Failed to send application' }, { status: 500 });
  }
}
