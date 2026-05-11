export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { messages, temperature = 0.7, apiKey: userKey } = req.body;

  const apiKey = userKey || process.env.OPENROUTER_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: 'No API key configured.' });
  }

  try {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
        'HTTP-Referer': req.headers.origin || '',
        'X-Title': 'Road to Your Best'
      },
      body: JSON.stringify({
        model: 'openrouter/free',
        messages,
        temperature,
        max_tokens: 1500
      })
    });

    if (!response.ok) {
      const err = await response.text();
      return res.status(response.status).json({ error: err.substring(0, 500) });
    }

    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
