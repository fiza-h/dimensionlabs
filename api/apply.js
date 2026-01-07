import { google } from "googleapis";

export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    const {
      name,
      email,
      college,
      city,
      linkedin,
      cv_link,
      video_link,
    } = req.body || {};

    if (!name || !email || !cv_link || !video_link) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    if (!process.env.GOOGLE_CREDENTIALS) {
      throw new Error("GOOGLE_CREDENTIALS missing");
    }

    if (!process.env.SPREADSHEET_ID) {
      throw new Error("SPREADSHEET_ID missing");
    }

    const auth = new google.auth.GoogleAuth({
      credentials: JSON.parse(process.env.GOOGLE_CREDENTIALS),
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: "Sheet1",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[
          name,
          email,
          college || "",
          city || "",
          linkedin || "",
          cv_link,
          video_link,
          new Date().toISOString(),
        ]],
      },
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("❌ APPLY ERROR:", err.message);
    return res.status(500).json({ error: err.message });
  }
}
