import { NextResponse } from "next/server";
import { sendTelegramLeadAlert } from "@/lib/telegram";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    // Validate required fields
    if (!name || !name.trim() || !email || !email.trim() || !message || !message.trim()) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // Map service value to readable title if needed
    const serviceLabels: Record<string, string> = {
      "web-development": "High-Performance Web Development",
      "gmb-seo": "Google Business Profile & Local SEO",
      "ecommerce": "E-Commerce & Digital Storefronts",
      "custom-software": "Custom Software & Web Applications",
      "ai-automation": "AI Workflows & Business Automation",
      "consulting-other": "Strategic Consulting / Other",
    };

    const serviceDisplay = service ? (serviceLabels[service] || service) : null;

    // Send formatted Telegram alert
    await sendTelegramLeadAlert({
      type: "contact",
      name: name.trim(),
      email: email.trim(),
      phone: phone?.trim() || null,
      service: serviceDisplay,
      message: message.trim(),
      source: "Contact Page Form",
    });

    return NextResponse.json({
      success: true,
      message: "Message received successfully.",
    });
  } catch (error: unknown) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Failed to process message. Please try again." },
      { status: 500 }
    );
  }
}
