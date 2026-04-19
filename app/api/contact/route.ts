import { NextResponse } from "next/server";

type Body = {
  name?: string;
  email?: string;
  message?: string;
  intent?: string;
};

export async function POST(request: Request) {
  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const message = body.message?.trim() ?? "";
  const intent = body.intent?.trim() ?? "";

  if (!name || name.length > 120) {
    return NextResponse.json({ ok: false, error: "Name is required." }, { status: 400 });
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: "Valid email is required." }, { status: 400 });
  }
  if (!message || message.length < 10 || message.length > 8000) {
    return NextResponse.json(
      { ok: false, error: "Message must be between 10 and 8000 characters." },
      { status: 400 }
    );
  }

  const payload = {
    from: process.env.RESEND_FROM ?? "Portfolio <onboarding@resend.dev>",
    to: process.env.CONTACT_TO?.split(",").map((s) => s.trim()) ?? [],
    subject: `Portfolio inquiry from ${name}`,
    html: `<p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
${intent ? `<p><strong>Intent:</strong> ${intent}</p>` : ""}
<p><strong>Message:</strong></p><p>${message.replace(/\n/g, "<br/>")}</p>`,
  };

  const key = process.env.RESEND_API_KEY;
  if (key && payload.to.length > 0) {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: payload.from,
        to: payload.to,
        subject: payload.subject,
        html: payload.html,
        reply_to: email,
      }),
    });
    if (!res.ok) {
      const errText = await res.text();
      console.error("Resend error:", errText);
      return NextResponse.json(
        { ok: false, error: "Could not send message right now." },
        { status: 502 }
      );
    }
  } else {
    console.info("Contact form submission (email not configured):", {
      name,
      email,
      intent,
      messagePreview: message.slice(0, 200),
    });
  }

  return NextResponse.json({ ok: true });
}
