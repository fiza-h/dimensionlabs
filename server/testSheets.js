import { google } from 'googleapis';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const auth = new google.auth.GoogleAuth({
  keyFile: path.join(__dirname, 'service-account.json'), // ✅ STRING
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheets = google.sheets({ version: 'v4', auth });

await sheets.spreadsheets.values.append({
  spreadsheetId: '1mUozQjs-p_PpVKajAKJ_gVRhIKz1waPteLmuEu-c05E',
  range: 'Sheet1',
  valueInputOption: 'USER_ENTERED',
  requestBody: {
    values: [['DIRECT_TEST@gmail.com', new Date().toISOString()]],
  },
});

console.log('DIRECT SHEETS WRITE OK');