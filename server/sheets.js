import { google } from 'googleapis';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const auth = new google.auth.GoogleAuth({
    keyFile: path.join(__dirname, 'service-account.json'), // ✅ STRING PATH
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheets = google.sheets({ version: 'v4', auth });
const spreadsheetId = process.env.SPREADSHEET_ID;

export async function appendEmailToSheet(email) {
    const timestamp = new Date().toISOString();

    await sheets.spreadsheets.values.append({
        spreadsheetId,
        range: 'Sheet1',
        valueInputOption: 'USER_ENTERED',
        requestBody: {
            values: [[email, timestamp]],
        },
    });

    console.log(`Added ${email} to sheet.`);
}

export async function appendApplicationToSheet(data) {
    const timestamp = new Date().toISOString();
    // Columns: Name, Email, College, City, LinkedIn, CV, Video, Timestamp
    const row = [
        data.name,
        data.email,
        data.college,
        data.city,
        data.linkedin,
        data.cv,
        data.video,
        timestamp
    ];

    await sheets.spreadsheets.values.append({
        spreadsheetId,
        range: 'Sheet1',
        valueInputOption: 'USER_ENTERED',
        requestBody: {
            values: [row],
        },
    });

    console.log(`Added application for ${data.email} to sheet.`);
}