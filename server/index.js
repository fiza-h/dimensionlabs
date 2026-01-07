import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { appendEmailToSheet, appendApplicationToSheet } from './sheets.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.post('/api/subscribe', async (req, res) => {
    console.log("REQ BODY:", req.body);

    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ error: 'Email is required' });
    }

    try {
        await appendEmailToSheet(email);
        res.status(200).json({ message: 'Success' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to save email' });
    }
});

app.post('/api/apply', async (req, res) => {
    console.log("APPLICATION REQ BODY:", req.body);
    const { name, email, college, city, linkedin, cv, video } = req.body;

    if (!email || !name) {
        return res.status(400).json({ error: 'Name and Email are required' });
    }

    try {
        await appendApplicationToSheet({ name, email, college, city, linkedin, cv, video });
        res.status(200).json({ message: 'Application received' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to save application' });
    }
});


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});