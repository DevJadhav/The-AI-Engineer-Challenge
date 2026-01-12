# Mental Coach Frontend

A modern, beautiful chat interface for the Mental Coach AI application. Built with Next.js 14, React, and TypeScript.

## Features

- 🎨 Beautiful, modern UI with gradient design
- 💬 Real-time chat interface with message history
- 📱 Fully responsive design (mobile-friendly)
- ⚡ Fast and smooth user experience
- 🔄 Loading states and error handling
- ⌨️ Keyboard shortcuts (Enter to send, Shift+Enter for new line)

## Prerequisites

- Node.js 18+ and npm (or yarn/pnpm)
- The backend server running on `http://localhost:8000` (or configured via environment variable)

## Setup

1. Navigate to the frontend directory:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm install
```

## Running the Application

### Development Mode

Start the development server:

```bash
npm run dev
```

The frontend will be available at `http://localhost:3000`.

**Important:** Make sure your backend server is running on `http://localhost:8000` before using the frontend. You can start it with:

```bash
# From the project root
uv run uvicorn api.index:app --reload
```

### Production Build

Build the application for production:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## Environment Variables

You can configure the backend API URL using environment variables:

Create a `.env.local` file in the `frontend` directory:

```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

For production deployment (e.g., Vercel), set this to your deployed backend URL.

## Project Structure

```
frontend/
├── app/
│   ├── layout.tsx          # Root layout component
│   ├── page.tsx            # Main chat page component
│   ├── page.module.css     # Styles for the chat interface
│   └── globals.css         # Global styles
├── next.config.js          # Next.js configuration
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
└── README.md               # This file
```

## Integration with Backend

The frontend integrates with the FastAPI backend at `/api/chat` endpoint:

- **Endpoint**: `POST /api/chat`
- **Request Body**: `{ "message": "string" }`
- **Response**: `{ "reply": "string" }`

The frontend automatically handles:
- API communication
- Error handling
- Loading states
- Message history

## Deployment

### Deploying to Vercel

**Recommended: Deploy from Frontend Directory**

1. Install Vercel CLI (if not already installed):

```bash
npm install -g vercel
```

2. Deploy from the frontend directory:

```bash
cd frontend
vercel
```

Vercel will automatically detect Next.js - no configuration needed!

3. Follow the prompts to configure your deployment.

4. **CRITICAL**: Set the `NEXT_PUBLIC_API_URL` environment variable in Vercel dashboard to point to your deployed backend.
   
   **See `../VERCEL_ENV_SETUP.md` for detailed step-by-step instructions on how to set this up!**
   
   Quick steps:
   - Go to Vercel Dashboard → Your Project → Settings → Environment Variables
   - Add: `NEXT_PUBLIC_API_URL` = `https://your-backend-url.vercel.app` (your actual backend URL)
   - Redeploy your application

**Alternative: Deploy from Root Directory**

If deploying from the project root, you can use the `vercel.json` configuration. However, it's recommended to:

1. In Vercel Dashboard → Project Settings → General
2. Set "Root Directory" to `frontend`
3. This ensures Vercel correctly detects and builds your Next.js app

See `../VERCEL_DEPLOY.md` for more detailed deployment instructions.

### Manual Deployment

You can also deploy to any platform that supports Next.js:

1. Build the application: `npm run build`
2. Start the production server: `npm start`
3. Configure your hosting platform to run the Next.js application

## Troubleshooting

### Backend Connection Issues

If you see error messages about the backend:

1. Verify the backend is running: `curl http://localhost:8000/`
2. Check that `OPENAI_API_KEY` is set in your backend environment
3. Verify the API URL in your `.env.local` file matches your backend URL

### Port Conflicts

If port 3000 is already in use:

```bash
# Kill the process using port 3000
lsof -ti:3000 | xargs kill -9
```

Or run on a different port:

```bash
npm run dev -- -p 3001
```

## Features in Detail

- **Message History**: All messages are stored in component state and persist during the session
- **Auto-scroll**: Chat automatically scrolls to the latest message
- **Typing Indicator**: Shows a loading animation while waiting for the AI response
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Error Handling**: Graceful error messages if the backend is unavailable

## Next Steps

- Add message persistence (localStorage or database)
- Implement user authentication
- Add conversation history
- Include file upload capabilities
- Add voice input/output
