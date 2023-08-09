import fetch from 'node-fetch';
import crypto from 'crypto';

export default async function handler(req, res) {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ error: 'Email is required' });
    }

    try {
        const LIST_ID = process.env.NEXT_PUBLIC_MAILCHIMP_AUDIENCE_ID; 
        const API_KEY = process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY; 
        const DATACENTER = API_KEY.split('-')[1];

        // Generate MD5 hash of the lowercase email address.
        const subscriberHash = crypto.createHash('md5').update(email.toLowerCase()).digest('hex');

        const response = await fetch(
            `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members/${subscriberHash}`,
            {
                headers: {
                    Authorization: `apikey ${API_KEY}`,
                    'Content-Type': 'application/json'
                },
                method: 'DELETE'
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
