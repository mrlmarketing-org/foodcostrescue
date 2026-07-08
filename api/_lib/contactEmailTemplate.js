// Plain-JS HTML string template for the Contact page form — same inline-style
// approach as emailTemplate.js, for the same reason (email clients need
// inline styles, and this runs server-side, not through Vite/React).

function esc(value) {
  return String(value ?? "").replace(/[&<>"']/g, (c) => (
    { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]
  ));
}

export function buildContactEmailHtml({ name, email, message }) {
  const messageHtml = esc(message).replace(/\n/g, "<br>");

  return `<!doctype html>
<html>
  <body style="margin:0;padding:32px 16px;background:#FAFAF8;font-family:Arial,Helvetica,sans-serif;">
    <table role="presentation" width="100%" style="max-width:600px;margin:0 auto;background:#FFFFFF;border-radius:12px;overflow:hidden;border:1px solid #E1E5EA;">
      <tr>
        <td style="background:#334155;padding:24px 28px;">
          <span style="color:#FAFAF8;font-size:18px;font-weight:800;">supplynegotiator</span>
        </td>
      </tr>
      <tr>
        <td style="padding:24px 28px 8px;">
          <h1 style="margin:0 0 8px;font-size:20px;color:#334155;">New contact form message</h1>
          <p style="margin:0 0 20px;color:#5B6B7C;font-size:14px;">Sent from the /contact page.</p>
        </td>
      </tr>
      <tr>
        <td style="padding:0 28px;">
          <table role="presentation" width="100%" style="border-collapse:collapse;border:1px solid #E1E5EA;border-radius:8px;overflow:hidden;">
            <tr>
              <td style="padding:10px 16px;border-bottom:1px solid #E1E5EA;color:#5B6B7C;font-size:13px;font-weight:700;white-space:nowrap;vertical-align:top;">Name</td>
              <td style="padding:10px 16px;border-bottom:1px solid #E1E5EA;color:#334155;font-size:14px;">${esc(name)}</td>
            </tr>
            <tr>
              <td style="padding:10px 16px;border-bottom:1px solid #E1E5EA;color:#5B6B7C;font-size:13px;font-weight:700;white-space:nowrap;vertical-align:top;">Email</td>
              <td style="padding:10px 16px;border-bottom:1px solid #E1E5EA;color:#334155;font-size:14px;">${esc(email)}</td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td style="padding:24px 28px 28px;">
          <h2 style="margin:0 0 10px;font-size:15px;color:#334155;">Message</h2>
          <p style="margin:0;color:#334155;font-size:14px;line-height:1.6;">${messageHtml}</p>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}
