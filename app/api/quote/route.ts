import { NextResponse } from "next/server";
import { sendTelegramLeadAlert } from "@/lib/telegram";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      services = [],
      budget,
      timeline,
      name,
      email,
      phone,
      company,
      notes,
    } = body;

    // Validate essential fields
    if (!name || !name.trim()) {
      return NextResponse.json(
        { error: "Name is required." },
        { status: 400 }
      );
    }

    if (!email || !email.trim()) {
      return NextResponse.json(
        { error: "Email address is required." },
        { status: 400 }
      );
    }

    // Send formatted Telegram alert
    await sendTelegramLeadAlert({
      type: "quote",
      name: name.trim(),
      email: email.trim(),
      phone: phone?.trim() || null,
      company: company?.trim() || null,
      services: services.length > 0 ? services : undefined,
      budget: budget?.trim() || null,
      timeline: timeline?.trim() || null,
      message: notes?.trim() || null,
      source: "Website Free Audit",
    });

    return NextResponse.json({
      success: true,
      message: "Audit request received successfully.",
    });
  } catch (error: unknown) {
    console.error("Error processing quote request:", error);
    return NextResponse.json(
      { error: "Failed to process request. Please try again." },
      { status: 500 }
    );
  }
}
