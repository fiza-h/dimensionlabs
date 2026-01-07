import multer from "multer";
import { google } from "googleapis";
import streamifier from "streamifier";

const upload = multer({ storage: multer.memoryStorage() });

const auth = new google.auth.GoogleAuth({
  credentials: JSON.parse(process.env.GOOGLE_CREDENTIALS),
  scopes: [
    "https://www.googleapis.com/auth/drive",
    "https://www.googleapis.com/auth/spreadsheets",
  ],
});

const drive = google.drive({ version: "v3", auth });
const sheets = google.sheets({ version: "v4", auth });

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  upload.fields([
    { name: "cv", maxCount: 1 },
    { name: "video", maxCount: 1 },
  ])(req, res, async (err) => {
    if (err) {
      console.error("MULTER ERROR:", err);
      return res.status(500).json({ error: "Upload failed" });
    }

    try {
      console.log("🔥 APPLY API HIT");

      const { name, email, college, city, linkedin } = req.body;

      if (!name || !email) {
        return res.status(400).json({ error: "Name and email required" });
      }

      const uploadToDrive = async (file) => {
        if (!file) return "";

        const response = await drive.files.create({
          requestBody: {
            name: file.originalname,
            parents: [process.env.DRIVE_FOLDER_ID],
          },
          media: {
            mimeType: file.mimetype,
            body: streamifier.createReadStream(file.buffer),
          },
          fields: "webViewLink",
        });

        console.log("📂 DRIVE UPLOAD RESPONSE:", response.data);

        return response.data.webViewLink;
      };

      const cvLink = await uploadToDrive(req.files?.cv?.[0]);
      const videoLink = await uploadToDrive(req.files?.video?.[0]);

      await sheets.spreadsheets.values.append({
        spreadsheetId: process.env.SPREADSHEET_ID,
        range: "Applications",
        valueInputOption: "USER_ENTERED",
        requestBody: {
          values: [[
            name,
            email,
            college || "",
            city || "",
            linkedin || "",
            cvLink,
            videoLink,
            new Date().toISOString(),
          ]],
        },
      });

      res.status(200).json({ success: true });
    } catch (e) {
      console.error("APPLY ERROR:", e);
      res.status(500).json({ error: "Server error" });
    }
  });
}
