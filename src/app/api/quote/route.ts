import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone,
      company,
      serviceType,
      projectName,
      serviceDate,
      location,
      details,
    } = body;

    if (!name || !email || !phone || !serviceType || !details) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const serviceLabels: Record<string, string> = {
      'unarmed-guard': 'Unarmed Guard Services',
      other: 'Other',
    };

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json({ error: 'Email service not configured' }, { status: 500 });
    }

    const { Resend } = await import('resend');
    const resend = new Resend(apiKey);

    await resend.emails.send({
      from: 'ECT Security <quotes@ectsecurity.com>',
      to: ['Rsemaan1@yahoo.com'],
      replyTo: email,
      subject: `New Quote Request: ${serviceLabels[serviceType] || serviceType} — ${name}`,
      html: `
        <h2>New Quote Request</h2>
        <hr />
        <h3>Contact Information</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
        <hr />
        <h3>Service Details</h3>
        <p><strong>Service Type:</strong> ${serviceLabels[serviceType] || serviceType}</p>
        ${projectName ? `<p><strong>Project/Site:</strong> ${projectName}</p>` : ''}
        ${serviceDate ? `<p><strong>Service Date:</strong> ${serviceDate}</p>` : ''}
        ${location ? `<p><strong>Location:</strong> ${location}</p>` : ''}
        <hr />
        <h3>Additional Details</h3>
        <p>${details.replace(/\n/g, '<br />')}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Quote form error:', error);
    return NextResponse.json({ error: 'Failed to send quote request' }, { status: 500 });
  }
}
