import { google } from "googleapis";

export default async function handler(req, res) {
  try {
    console.log("▶️ API HIT");

    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    if (!process.env.GOOGLE_CREDENTIALS) {
      throw new Error("GOOGLE_CREDENTIALS missing");
    }

    if (!process.env.SPREADSHEET_ID) {
      throw new Error("SPREADSHEET_ID missing");
    }

    const creds = JSON.parse(process.env.GOOGLE_CREDENTIALS);

    console.log("✅ ENV OK");
    console.log("📧 SERVICE EMAIL:", creds.client_email);

    const auth = new google.auth.JWT(
      creds.client_email,
      null,
      creds.private_key,
      ["https://www.googleapis.com/auth/spreadsheets"]
    );

    await auth.authorize();
    console.log("✅ AUTHORIZED");

    const sheets = google.sheets({ version: "v4", auth });

    const body = req.body || {};
    console.log("📦 BODY:", body);

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
    return res.status(500).json({
      error: err.message,
      stack: err.stack,
    });
  }
}