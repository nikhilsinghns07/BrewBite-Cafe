import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/lib/cart-context";
import { QueryClientProvider } from "@/providers/query-provider";
import { Toaster as Sonner } from "sonner";
import { ThemeProvider } from "next-themes";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "BrewBite Cafe - Artisan Coffee & Gourmet Food",
  description:
    "Experience artisanal coffee and gourmet comfort food in a space designed for relaxation.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <QueryClientProvider>
            <CartProvider>
              {children}
              <Sonner position="bottom-right" />
            </CartProvider>
          </QueryClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
