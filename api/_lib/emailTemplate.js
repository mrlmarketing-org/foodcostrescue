// Plain-JS (not JSX) HTML string template — this runs in a serverless
// function, not through Vite/React, and email clients need inline styles
// rather than stylesheets anyway.

const DISTRIBUTOR_LABELS = {
  sysco: "Sysco",
  "us-foods": "US Foods",
  pfg: "Performance Food Group",
  regional: "Regional or independent",
  "not-sure": "Not sure",
};

const SPEND_LABELS = {
  under10k: "Under $10k",
  "10k-30k": "$10k–$30k",
  "30k-plus": "$30k+",
};

const LOCATIONS_LABELS = {
  "1": "1",
  "2-5": "2–5",
  "6-plus": "6+",
};

function esc(value) {
  return String(value ?? "").replace(/[&<>"']/g, (c) => (
    { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]
  ));
}

export function buildAuditEmailHtml({ form, files }) {
  const rows = [
    ["First name", form.firstName],
    ["Last name", form.lastName],
    ["Business / restaurant name", form.businessName],
    ["Email", form.email],
    ["Phone", form.phone],
    ["Main distributor", DISTRIBUTOR_LABELS[form.distributor] || form.distributor],
    ["Approx. monthly food spend", SPEND_LABELS[form.monthlySpend] || form.monthlySpend],
    ["Number of locations", form.locations ? (LOCATIONS_LABELS[form.locations] || form.locations) : "Not provided"],
  ];

  const rowsHtml = rows
    .map(
      ([label, value]) => `
      <tr>
        <td style="padding:10px 16px;border-bottom:1px solid #E1E5EA;color:#5B6B7C;font-size:13px;font-weight:700;white-space:nowrap;vertical-align:top;">${esc(label)}</td>
        <td style="padding:10px 16px;border-bottom:1px solid #E1E5EA;color:#334155;font-size:14px;">${esc(value)}</td>
      </tr>`
    )
    .join("");

  const filesHtml = files.length
    ? files
        .map(
          (f) => `
        <li style="margin:0 0 8px;">
          <a href="${esc(f.url)}" style="color:#45689B;font-weight:700;text-decoration:none;">${esc(f.name)}</a>
        </li>`
        )
        .join("")
    : `<li style="color:#8D99A6;list-style:none;margin-left:-18px;">No files were uploaded.</li>`;

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
          <h1 style="margin:0 0 8px;font-size:20px;color:#334155;">New paid audit request</h1>
          <p style="margin:0 0 20px;color:#5B6B7C;font-size:14px;">The $150 audit fee has been paid. Details below.</p>
        </td>
      </tr>
      <tr>
        <td style="padding:0 28px;">
          <table role="presentation" width="100%" style="border-collapse:collapse;border:1px solid #E1E5EA;border-radius:8px;overflow:hidden;">
            ${rowsHtml}
          </table>
        </td>
      </tr>
      <tr>
        <td style="padding:24px 28px 8px;">
          <h2 style="margin:0 0 10px;font-size:15px;color:#334155;">Uploaded invoices</h2>
          <ul style="margin:0;padding-left:18px;">${filesHtml}</ul>
        </td>
      </tr>
      <tr>
        <td style="padding:20px 28px 28px;">
          <p style="margin:0;color:#8D99A6;font-size:12px;">This email was generated automatically after a successful Stripe payment.</p>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}
