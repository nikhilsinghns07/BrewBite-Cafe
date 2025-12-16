# 🚀 Quick Start Guide - BrewBite Cafe (Next.js)

## Prerequisites

- Node.js 18.17 or later
- MongoDB (local or Atlas)

## Setup Steps

### 1. Install Dependencies ✅ (Already Done)

```bash
npm install
```

### 2. Configure Environment Variables

Create a `.env.local` file in the root directory:

```bash
cp .env.local.example .env.local
```

Edit `.env.local` and update the values:

```env
MONGODB_URI=mongodb://localhost:27017/brewbite-cafe
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-generated-secret-here
```

To generate a secure secret:

```bash
openssl rand -base64 32
```

### 3. Start MongoDB

#### Option A: Local MongoDB (with Homebrew on macOS)

```bash
brew services start mongodb-community
```

#### Option B: Docker

```bash
docker run -d -p 27017:27017 --name mongodb mongo:latest
```

#### Option C: MongoDB Atlas

Use a cloud connection string in your `.env.local`

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser!

## 📝 Available Scripts

- `npm run dev` - Start development server (port 3000)
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🧪 Testing the App

1. **Browse Products** - Visit homepage and explore menu items
2. **Add to Cart** - Click "Add to Cart" on any product
3. **View Cart** - Click the shopping bag icon in navbar
4. **Checkout** - Proceed through the order flow
5. **Product Details** - Click on any product to see reviews

## 🎨 Key Features

✅ Responsive design (mobile, tablet, desktop)
✅ Shopping cart with local storage persistence
✅ Product catalog with search and categories
✅ Product detail pages with reviews
✅ Checkout flow
✅ User authentication ready (NextAuth.js)
✅ Dark mode support (with next-themes)

## 🔧 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Database**: MongoDB + Mongoose
- **Authentication**: NextAuth.js
- **Styling**: Tailwind CSS 4
- **UI Components**: Radix UI
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod
- **State**: React Context + TanStack Query

## 📁 Project Structure

```
src/
├── app/              # Next.js pages and API routes
├── components/       # React components
├── lib/             # Utilities and context
├── models/          # Mongoose schemas
└── providers/       # React providers
```

## 🐛 Troubleshooting

### Port 3000 already in use

```bash
npx next dev -p 3001
```

### MongoDB connection error

- Check if MongoDB is running: `mongosh`
- Verify MONGODB_URI in `.env.local`

### Build errors

```bash
rm -rf .next node_modules
npm install
npm run dev
```

## 🎉 You're All Set!

The app should now be running at http://localhost:3000

Enjoy your Next.js + MongoDB cafe application! ☕
