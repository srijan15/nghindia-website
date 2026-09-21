import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const FIELDS: { key: string; label: string }[] = [
  { key: "firstName", label: "First Name" },
  { key: "lastName", label: "Last Name" },
  { key: "email", label: "Email" },
  { key: "whatsapp", label: "WhatsApp Number" },
  { key: "city", label: "City" },
  { key: "country", label: "Country" },
  { key: "profession", label: "Current Profession / Background" },
  { key: "why", label: "Why do you want to learn hypnosis?" },
  { key: "priorTraining", label: "Prior training" },
  { key: "format", label: "Preferred format" },
  { key: "source", label: "How did you hear about NGH India?" },
  { key: "fellowship", label: "Requesting Fellowship Award" },
];

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid submission." }, { status: 400 });
  }

  // Honeypot — bots fill hidden fields, real users never see this one.
  if (body.company) {
    return NextResponse.json({ ok: true });
  }

  for (const required of ["firstName", "lastName", "email", "whatsapp", "city", "profession", "why"]) {
    if (!body[required] || String(body[required]).trim() === "") {
      return NextResponse.json({ error: `Missing required field: ${required}` }, { status: 400 });
    }
  }

  const apiKey = process.env.RESEND_API_KEY;
  const notifyEmail = process.env.APPLY_NOTIFY_EMAIL;

  if (!apiKey || !notifyEmail) {
    console.error(
      "Apply form submission received but RESEND_API_KEY / APPLY_NOTIFY_EMAIL is not configured — email not sent.",
      body
    );
    return NextResponse.json(
      { error: "Applications are temporarily unavailable. Please WhatsApp us instead." },
      { status: 503 }
    );
  }

  const rows = FIELDS.map(({ key, label }) => {
    const value = body[key];
    if (!value) return "";
    return `<tr><td style="padding:4px 12px 4px 0;color:#666;white-space:nowrap;vertical-align:top">${label}</td><td style="padding:4px 0">${escapeHtml(String(value))}</td></tr>`;
  }).join("");

  const resend = new Resend(apiKey);

  try {
    await resend.emails.send({
      from: "NGH India Applications <applications@nghindia.com>",
      to: notifyEmail,
      replyTo: String(body.email),
      subject: `New CCH Application — ${body.firstName} ${body.lastName}`,
      html: `<table style="font-family:sans-serif;font-size:14px">${rows}</table>`,
    });
  } catch (err) {
    console.error("Failed to send application email:", err);
    return NextResponse.json(
      { error: "Something went wrong sending your application. Please WhatsApp us instead." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
