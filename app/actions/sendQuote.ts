"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface QuoteFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  address: string;
  description: string;
}

export async function sendQuote(formData: QuoteFormData) {
  const { name, email, phone, service, address, description } = formData;

  // Basic server-side validation
  if (!name || !email || !phone || !service || !description) {
    return { success: false, error: "Missing required fields." };
  }

  const toEmail =
    process.env.CONTACT_TO_EMAIL || "doublerhandymanservices@gmail.com";
  const fromEmail =
    process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";

  try {
    await resend.emails.send({
      from: `Double R Handyman <${fromEmail}>`,
      to: [toEmail],
      replyTo: email,
      subject: `New Quote Request: ${service} — ${name}`,
      text: [
        `New quote request from the Double R Handyman website:`,
        ``,
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Service: ${service}`,
        `Address/ZIP: ${address || "Not provided"}`,
        ``,
        `Project Description:`,
        `${description}`,
      ].join("\n"),
    });

    return { success: true };
  } catch (err) {
    console.error("Failed to send quote email:", err);
    return { success: false, error: "Failed to send email. Please try again." };
  }
}
