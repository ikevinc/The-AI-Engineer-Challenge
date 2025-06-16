#!/bin/bash

# Kill any existing processes
pkill -f "node|python|uvicorn" || true

# Setup backend
cd api
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt

# Start backend in background
python3 -m uvicorn app:app --reload --host 0.0.0.0 --port 8000 &
BACKEND_PID=$!

# Setup frontend
cd ../frontend
rm -rf .next node_modules package-lock.json
npm install

# Create .env.local if it doesn't exist
if [ ! -f .env.local ]; then
    echo "OPENAI_API_KEY=your_openai_api_key_here" > .env.local
    echo "Please update the OPENAI_API_KEY in .env.local with your actual API key"
fi

# Start frontend
npm run dev

# Cleanup on exit
trap "kill $BACKEND_PID" EXIT 