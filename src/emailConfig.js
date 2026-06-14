// =============================================================
//  EMAILJS CONFIG  (for the working contact form)
// =============================================================
// To make the form send real emails to your inbox:
//   1. Create a free account at https://www.emailjs.com/
//   2. Add an Email Service (e.g. Gmail) -> copy its Service ID
//   3. Create an Email Template -> copy its Template ID
//      (use the variables {{name}}, {{email}}, {{message}} in it)
//   4. Account -> General -> copy your Public Key
//   5. Paste all three below.
//
// Until these are filled in, the form falls back to opening the
// visitor's email app (mailto) — so it still works right away.
// =============================================================

export const emailConfig = {
  serviceId: "",   // e.g. "service_abc123"
  templateId: "",  // e.g. "template_xyz789"
  publicKey: "",   // e.g. "AbCdEfGhIjKlMnOp"
};

// True only when all three values are filled in.
export const emailConfigured = Boolean(
  emailConfig.serviceId && emailConfig.templateId && emailConfig.publicKey
);
