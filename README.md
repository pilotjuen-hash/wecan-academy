# wecan academy CommunityHub

A full-stack community platform built with React, Express, and MongoDB.

## Live Demo
- Frontend: https://wecan-academy.vercel.app/
- API: https://community-hub-api.onrender.com/api

## Features
- User registration and authentication
- Create, edit, delete posts
- Like and comment on posts
- Responsive design

## Tech Stack
- **Frontend:** React, Vite, React Router
- **Backend:** Node.js, Express
- **Database:** MongoDB, Mongoose
- **Authentication:** JWT

## Getting Started

### Prerequisites
- Node.js 18+
- MongoDB Atlas account

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/pilotjuen-hash/wecan-academy.git
   cd wecan-academy
Install backend dependencies

cd backend
npm install
Install frontend dependencies

cd ../frontend
npm install
Set up environment variables

# backend/.env
cp .env.example .env
# Edit with your values
Run development servers

# Terminal 1 - Backend
cd backend && npm run dev

# Terminal 2 - Frontend
cd frontend && npm run dev
API Endpoints
Auth
POST /api/auth/register - Register user
POST /api/auth/login - Login user
GET /api/auth/me - Get current user
Posts
GET /api/posts - Get all posts
GET /api/posts/:id - Get single post
POST /api/posts - Create post (auth required)
PUT /api/posts/:id - Update post (auth required)
DELETE /api/posts/:id - Delete post (auth required)
Author
Your Name - IYF Weekend Academy Season 11

