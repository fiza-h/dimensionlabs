import { google } from "googleapis";

export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
    const privateKey = process.env.GOOGLE_PRIVATE_KEY;

    console.log("📧 SERVICE EMAIL:", clientEmail);
    console.log("🔑 KEY LENGTH:", privateKey?.length);

    if (!clientEmail || !privateKey) {
      throw new Error("Google credentials missing");
    }

    // 🔑 THIS IS THE KEY CHANGE
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: clientEmail,
        private_key: privateKey.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({
      version: "v4",
      auth: await auth.getClient(),
    });

    const body = req.body || {};

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: "Sheet1",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[
          body.name,
          body.email,
          body.college || "",
          body.city || "",
          body.linkedin || "",
          body.cv_link,
          body.video_link,
          new Date().toISOString(),
        ]],
      },
    });

    console.log("✅ ROW APPENDED");
    return res.status(200).json({ success: true });

  } catch (err) {
    console.error("❌ APPLY ERROR FULL:", err);
    return res.status(500).json({ error: err.message });
  }
}