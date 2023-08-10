import fetch from 'node-fetch';

export default async function handler(req, res) {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ error: 'Email is required' });
    }

    try {
        const LIST_ID = process.env.MAILCHIMP_AUDIENCE_ID; // Replace with your Mailchimp list ID
        const API_KEY = process.env.MAILCHIMP_API_KEY; // Replace with your Mailchimp API key
        const DATACENTER = API_KEY.split('-')[1];

        const response = await fetch(
            `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`,
            {
                body: JSON.stringify({
                    email_address: email,
                    status: 'subscribed'
                }),
                headers: {
                    Authorization: `apikey ${API_KEY}`,
                    'Content-Type': 'application/json'
                },
                method: 'POST'
            }
        );

        if (response.status >= 400) {
            const text = await response.text();
            throw new Error(text);
        }

        return res.status(200).json({ success: true });
    } catch (error) {
        return res.status(500).json({ error: error.message || error.toString() });
    }
}
