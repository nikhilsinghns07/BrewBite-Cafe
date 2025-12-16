# BrewBite Cafe - Next.js Migration

This project has been migrated from **Vite + Express + PostgreSQL/Drizzle** to **Next.js + MongoDB/Mongoose**.

## 🚀 What Changed

### Framework & Architecture

- **Before**: Vite (frontend) + Express (backend) + Wouter (routing)
- **After**: Next.js 15 App Router (full-stack)

### Database

- **Before**: PostgreSQL with Drizzle ORM
- **After**: MongoDB with Mongoose ODM

### Authentication

- **Before**: Passport.js with express-session
- **After**: NextAuth.js with JWT sessions

### Routing

- **Before**: Wouter client-side routing
- **After**: Next.js App Router with file-based routing

## 📦 Installation

1. Install dependencies:

```bash
npm install
```

2. Set up environment variables:

```bash
cp .env.local.example .env.local
```

Edit `.env.local` with your MongoDB connection string:

```env
MONGODB_URI=mongodb://localhost:27017/brewbite-cafe
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here
```

3. Start MongoDB (if running locally):

```bash
# macOS with Homebrew
brew services start mongodb-community

# Or use Docker
docker run -d -p 27017:27017 --name mongodb mongo:latest
```

## 🏃 Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Build & Production

Build for production:

```bash
npm run build
```

Start production server:

```bash
npm start
```

## 📁 New Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   │   └── auth/          # Authentication endpoints
│   ├── cart/              # Cart page
│   ├── order/             # Order/checkout page
│   ├── product/[id]/      # Dynamic product detail page
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── layout/           # Layout components (Navbar, Footer)
│   ├── pages/            # Page components
│   └── ui/               # UI component library (shadcn)
├── hooks/                 # Custom React hooks
├── lib/                   # Utilities and context
│   ├── cart-context.tsx  # Shopping cart state
│   ├── data.ts           # Mock product data
│   ├── mongodb.ts        # MongoDB connection
│   └── utils.ts          # Helper functions
├── models/               # Mongoose schemas
│   └── User.ts           # User model
└── providers/            # React Context providers
    └── query-provider.tsx # TanStack Query provider
```

## ✨ Features Preserved

All original features have been preserved:

- ✅ Product catalog with categories
- ✅ Product detail pages with reviews
- ✅ Shopping cart functionality
- ✅ Checkout/order flow
- ✅ User authentication (login/register)
- ✅ Responsive design with Tailwind CSS
- ✅ All UI components (Radix UI primitives)
- ✅ Animations (Framer Motion)

## 🔑 Key Improvements

1. **Better Performance**: Next.js App Router with React Server Components
2. **SEO**: Server-side rendering and metadata support
3. **File-based Routing**: Automatic routing based on file structure
4. **API Routes**: Unified backend and frontend in one codebase
5. **Modern Auth**: NextAuth.js with built-in OAuth support
6. **Scalable Database**: MongoDB for flexible document storage

## 🗄️ Database Schema

### User Model (Mongoose)

```typescript
{
  username: String(unique, required);
  password: String(hashed, required);
  createdAt: Date;
  updatedAt: Date;
}
```

## 🔐 Authentication

The app uses NextAuth.js with credentials provider. To add more providers (Google, GitHub, etc.), update `src/app/api/auth/[...nextauth]/route.ts`.

## 📝 Notes

- The product data is still mocked in `src/lib/data.ts` - consider moving to MongoDB in the future
- Images are stored locally in the `public` directory
- Session management now uses JWT tokens instead of server-side sessions
- All components maintain the same UI/UX as the original application

## 🧹 Cleanup

The old project structure (client/, server/, shared/) has been preserved but can be removed once you've verified the migration:

```bash
rm -rf client/ server/ shared/ script/
rm vite.config.ts drizzle.config.ts
```

## 🆘 Troubleshooting

### MongoDB Connection Issues

- Ensure MongoDB is running
- Check your `MONGODB_URI` in `.env.local`
- For local development: `mongodb://localhost:27017/brewbite-cafe`

### Build Errors

- Clear `.next` folder: `rm -rf .next`
- Reinstall dependencies: `rm -rf node_modules package-lock.json && npm install`

### Port Already in Use

Change the port in package.json or run:

```bash
npx next dev -p 3001
```

## 📚 Tech Stack

- **Framework**: Next.js 15
- **Database**: MongoDB with Mongoose
- **Auth**: NextAuth.js
- **UI**: Radix UI + Tailwind CSS
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod
- **State**: React Context + TanStack Query
- **Notifications**: Sonner

---

**Migration completed successfully!** 🎉

Enjoy your new Next.js + MongoDB application with the same beautiful UI!
