# Road to Your Best

A 180-day AI-powered achievement planner. No mediocrity. No excuses. No turning back.

## What It Does

- **AI Coach** — Validates, escalates, and enhances your goal using AI. Weak goals get pushed higher.
- **6-Phase Roadmap** — Automatically generates a 180-day plan tailored to your goal category (fitness, business, creative, learning, general).
- **Daily Missions** — 5 tasks per day, generated contextually based on your current phase.
- **Coach Feedback** — Submit a daily log and get honest, personalized coaching feedback.
- **Journey Timeline** — Track every day, every task, every log, every piece of feedback.

## Tech Stack

- Static HTML/CSS/JS — zero dependencies frontend
- Vercel Serverless Functions — `/api/chat` proxies OpenRouter AI
- OpenRouter `openrouter/free` — free AI models, no credit card needed

## Getting Started

### 1. Clone & Deploy

```bash
git clone https://github.com/YOUR_USERNAME/road-to-your-best.git
cd road-to-your-best
```

Deploy to Vercel (free):

```bash
vercel
```

### 2. Add Environment Variable

In Vercel Dashboard → Settings → Environment Variables, add:

```
OPENROUTER_API_KEY = your_openrouter_key
```

Get a free key at [openrouter.ai/keys](https://openrouter.ai/keys) — no credit card required.

### 3. Done

Your app is live. Users can optionally bring their own API key via the Settings gear icon.

## How It Works

1. **Enter your goal** — The AI coach evaluates it. Too small? It escalates. Destructive? Rejected.
2. **Get your roadmap** — 6 phases, 30 days each, tailored to your goal category.
3. **Execute daily** — 5 tasks per day. Check them off as you complete them.
4. **Report & get coached** — Write a daily log. The AI coach gives personalized feedback.
5. **Track your journey** — Full timeline of every day, task, and coaching session.

## Project Structure

```
├── index.html          # Full frontend (HTML + CSS + JS)
├── api/
│   └── chat.js         # Serverless function → OpenRouter
├── package.json
└── README.md
```

## License

MIT
