// Contact form endpoint for henryknowsweb.pages.dev
// Receives the site's contact form and emails it to Henry via Resend.
// The Resend API key lives ONLY in the RESEND_API_KEY Pages secret.

const TO_EMAIL = "henryknowsweb@gmail.com";
const FROM_EMAIL = "henryknowsweb contact form <onboarding@resend.dev>";

function json(body, status) {
  return new Response(JSON.stringify(body), {
    status: status || 200,
    headers: { "Content-Type": "application/json" },
  });
}

function clean(value, max) {
  return String(value == null ? "" : value).trim().slice(0, max);
}

export async function onRequestPost(context) {
  const { request, env } = context;
  if (!env.RESEND_API_KEY) {
    return json({ ok: false, error: "not_configured" }, 500);
  }

  let data;
  try {
    data = await request.json();
  } catch (e) {
    return json({ ok: false, error: "bad_request" }, 400);
  }

  // Honeypot: bots fill the hidden "website" field. Pretend success, send nothing.
  if (clean(data.website, 200)) {
    return json({ ok: true });
  }

  const name = clean(data.name, 120);
  const email = clean(data.email, 254);
  const sells = clean(data.sells, 300);
  const message = clean(data.message, 4000);

  if (!name || !email || !message) {
    return json({ ok: false, error: "missing_fields" }, 400);
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ ok: false, error: "bad_email" }, 400);
  }

  const text = [
    "New message from the henryknowsweb contact form",
    "",
    "Name: " + name,
    "Email: " + email,
    "What they sell: " + (sells || "—"),
    "",
    "What's not working / their message:",
    message,
  ].join("\n");

  let res;
  try {
    res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + env.RESEND_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [TO_EMAIL],
        reply_to: email,
        subject: "New contact from henryknowsweb — " + name,
        text: text,
      }),
    });
  } catch (e) {
    return json({ ok: false, error: "send_failed" }, 502);
  }

  if (!res.ok) {
    return json({ ok: false, error: "send_failed" }, 502);
  }
  return json({ ok: true });
}
