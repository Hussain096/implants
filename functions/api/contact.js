const SUBJECT_RECIPIENTS = {
  'content-feedback': 'editorial@breasts-implants.com',
  'content-correction': 'corrections@breasts-implants.com',
  'general-question': 'contact@breasts-implants.com',
  'media-inquiry': 'editorial@breasts-implants.com',
  partnership: 'contact@breasts-implants.com',
  'privacy-request': 'privacy@breasts-implants.com',
  'legal-request': 'legal@breasts-implants.com',
  'technical-issue': 'contact@breasts-implants.com',
  other: 'contact@breasts-implants.com',
};

export async function onRequestPost({ request, env }) {
  try {
    const payload = await request.json();
    const name = String(payload.name || '').trim();
    const email = String(payload.email || '').trim();
    const subject = String(payload.subject || '').trim();
    const page = String(payload.page || '').trim();
    const message = String(payload.message || '').trim();

    if (!name || !email || !subject || !message) {
      return json({ error: 'Please complete all required fields.' }, 400);
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return json({ error: 'Please enter a valid email address.' }, 400);
    }

    if (!env.RESEND_API_KEY) {
      return json({ error: 'Contact email is not configured yet. Please email contact@breasts-implants.com directly.' }, 501);
    }

    const to = SUBJECT_RECIPIENTS[subject] || 'contact@breasts-implants.com';
    const from = env.CONTACT_FROM || 'Breasts-Implants.com <contact@breasts-implants.com>';

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `Website contact: ${labelForSubject(subject)}`,
        text: [
          `Name: ${name}`,
          `Email: ${email}`,
          `Topic: ${labelForSubject(subject)}`,
          page ? `Related page: ${page}` : null,
          '',
          message,
        ].filter(Boolean).join('\n'),
      }),
    });

    if (!response.ok) {
      return json({ error: 'Email provider rejected the message. Please try again later.' }, 502);
    }

    return json({ ok: true });
  } catch (error) {
    return json({ error: 'Invalid request. Please try again.' }, 400);
  }
}

export function onRequestOptions() {
  return new Response(null, { headers: corsHeaders() });
}

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json',
      ...corsHeaders(),
    },
  });
}

function corsHeaders() {
  return {
    'Access-Control-Allow-Origin': 'https://breasts-implants.com',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
}

function labelForSubject(subject) {
  return {
    'content-feedback': 'Content Feedback',
    'content-correction': 'Report a Content Error',
    'general-question': 'General Question',
    'media-inquiry': 'Media / Press Inquiry',
    partnership: 'Partnership / Collaboration',
    'privacy-request': 'Privacy Request',
    'legal-request': 'Legal / Terms Question',
    'technical-issue': 'Technical Issue',
    other: 'Other',
  }[subject] || 'General Question';
}
