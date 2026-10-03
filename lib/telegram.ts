/**
 * Telegram Notification Utility
 * Sends ultra-clean, mobile-optimized, executive lead cards to Telegram.
 */

export interface TelegramLeadPayload {
  type: "quote" | "contact";
  name: string;
  email: string;
  phone?: string | null;
  company?: string | null;
  services?: string[];
  budget?: string | null;
  timeline?: string | null;
  service?: string | null;
  message?: string | null;
  source?: string;
}

function cleanWhatsAppNumber(phone?: string | null): string | null {
  if (!phone) return null;
  const digits = phone.replace(/\D/g, "");
  if (!digits || digits.length < 10) return null;
  return digits.length === 10 ? `91${digits}` : digits;
}

function escapeHtml(str: string = ""): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function sendTelegramLeadAlert(
  lead: TelegramLeadPayload
): Promise<{ success: boolean; error?: string }> {
  const token = process.env.TELEGRAM_BOT_TOKEN?.trim();
  const chatId = process.env.TELEGRAM_CHAT_ID?.trim();

  // Timestamp in IST
  const timestamp = new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZone: "Asia/Kolkata",
  }).format(new Date());

  const lines: string[] = [];

  if (lead.type === "quote") {
    lines.push(`⚡ <b>NEW AUDIT &amp; STRATEGY REQUEST</b>`);
    lines.push(`────────────────────────`);
    lines.push(``);
    lines.push(`👤 <b>Client:</b> ${escapeHtml(lead.name)}`);
    if (lead.company && lead.company.trim()) {
      lines.push(`🏢 <b>Company:</b> ${escapeHtml(lead.company.trim())}`);
    }
    if (lead.phone && lead.phone.trim()) {
      lines.push(`📱 <b>Phone:</b> <code>${escapeHtml(lead.phone.trim())}</code>`);
    }
    lines.push(`📧 <b>Email:</b> <code>${escapeHtml(lead.email.trim())}</code>`);

    lines.push(``);
    if (lead.budget && lead.budget.trim()) {
      const budgetCleaned = lead.budget.trim().replace(/\?(\s*\d+)/g, "₹$1").replace(/\?/g, "₹");
      lines.push(`💰 <b>Budget:</b> ${escapeHtml(budgetCleaned)}`);
    }
    if (lead.timeline && lead.timeline.trim()) {
      const timelineCleaned = lead.timeline.trim().replace(/\?/g, "–");
      lines.push(`⏳ <b>Timeline:</b> ${escapeHtml(timelineCleaned)}`);
    }

    if (lead.services && lead.services.length > 0) {
      lines.push(``);
      lines.push(`🛠 <b>Services:</b>`);
      lead.services.forEach((s) => {
        lines.push(`  • ${escapeHtml(s)}`);
      });
    }

    if (lead.message && lead.message.trim()) {
      lines.push(``);
      lines.push(`💬 <b>Client Scope:</b>`);
      lines.push(`<blockquote>${escapeHtml(lead.message.trim())}</blockquote>`);
    }

    lines.push(``);
    lines.push(`────────────────────────`);
    lines.push(`🌐 <i>Digital Horizon • Free Audit</i>`);
    lines.push(`⏰ <i>${timestamp} IST</i>`);
  } else {
    // Contact inquiry
    lines.push(`📬 <b>NEW CONTACT INQUIRY</b>`);
    lines.push(`────────────────────────`);
    lines.push(``);
    lines.push(`👤 <b>Sender:</b> ${escapeHtml(lead.name)}`);
    if (lead.phone && lead.phone.trim()) {
      lines.push(`📱 <b>Phone:</b> <code>${escapeHtml(lead.phone.trim())}</code>`);
    }
    lines.push(`📧 <b>Email:</b> <code>${escapeHtml(lead.email.trim())}</code>`);

    if (lead.service && lead.service.trim()) {
      lines.push(``);
      lines.push(`🎯 <b>Service:</b> ${escapeHtml(lead.service.trim())}`);
    }

    if (lead.message && lead.message.trim()) {
      lines.push(``);
      lines.push(`💬 <b>Message:</b>`);
      lines.push(`<blockquote>${escapeHtml(lead.message.trim())}</blockquote>`);
    }

    lines.push(``);
    lines.push(`────────────────────────`);
    lines.push(`🌐 <i>Digital Horizon • Contact Form</i>`);
    lines.push(`⏰ <i>${timestamp} IST</i>`);
  }

  const fullText = lines.join("\n");

  // Build interactive action buttons (Telegram only accepts https:// in inline keyboard)
  const buttons: { text: string; url: string }[] = [];
  const waNumber = cleanWhatsAppNumber(lead.phone);
  if (waNumber) {
    buttons.push({
      text: "💬 Chat on WhatsApp",
      url: `https://wa.me/${waNumber}`,
    });
  }

  if (lead.email && lead.email.includes("@")) {
    buttons.push({
      text: "✉️ Open in Gmail",
      url: `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(lead.email.trim())}`,
    });
  }

  const replyMarkup =
    buttons.length > 0
      ? {
          inline_keyboard: [buttons],
        }
      : undefined;

  if (!token || !chatId) {
    console.warn("[TELEGRAM ALERT NOT CONFIGURED]\n", fullText);
    return {
      success: false,
      error: "TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID missing in .env",
    };
  }

  try {
    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: fullText,
        parse_mode: "HTML",
        disable_web_page_preview: true,
        reply_markup: replyMarkup,
      }),
    });

    const data = await res.json();

    if (!res.ok || !data.ok) {
      console.error("[TELEGRAM API ERROR]", data);
      return {
        success: false,
        error: data.description || "Failed to deliver Telegram message.",
      };
    }

    return { success: true };
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error("[TELEGRAM NETWORK ERROR]", msg);
    return { success: false, error: msg };
  }
}
