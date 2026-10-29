# Navin Portfolio + Chat Server

A responsive dark portfolio website with a small Express backend and floating chat widget.

## Run locally
1. Install Node.js 18 or newer.
2. Run `npm install`
3. Run `npm start`
4. Open `http://localhost:3000`

Health check: `/api/health`

## Deploy on Render
1. Create a **new GitHub repository** (recommended name: `navin-portfolio-chat`).
2. Upload the contents of this folder to the repository root.
3. In Render, choose **New + → Web Service** and connect that repository.
4. Use:
   - Runtime: Node
   - Build command: `npm install`
   - Start command: `npm start`
   - Region: Singapore (or closest available)
   - Plan: Free
5. Deploy, then test `/api/health`.

## Customize before publishing
- Update the name, bio, project details, and skills in `public/index.html`.
- Add only public contact details that you want visitors to see.
- The chat is a lightweight rule-based assistant and does not call an AI model or require an API key. To use an AI provider, add a server-side endpoint and keep its API key in Render environment variables—never in frontend code.
