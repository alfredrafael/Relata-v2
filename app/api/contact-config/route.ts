// Read deployment settings at request time, rather than freezing them into JS at build time.
export const dynamic = "force-dynamic";

export async function GET() {
  const read = (name: string) =>
    (process.env[name] || process.env[`NEXT_PUBLIC_${name}`] || "").trim();
  const serviceId = read("EMAILJS_SERVICE_ID");
  const templateId = read("EMAILJS_TEMPLATE_ID");
  const publicKey = read("EMAILJS_PUBLIC_KEY");
  const headers = { "Cache-Control": "no-store" };

  if (!serviceId || !templateId || !publicKey) {
    console.error("Contact form configuration missing:", {
      serviceId: !serviceId,
      templateId: !templateId,
      publicKey: !publicKey,
    });
    return Response.json({ error: "Contact form is unavailable." }, { status: 503, headers });
  }

  // These are public EmailJS browser credentials. Never return a private key here.
  return Response.json({ serviceId, templateId, publicKey }, { headers });
}
