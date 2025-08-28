import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "CodeCraft - Professional Web Development & Maintenance",
  description: "Expert web development services in Ireland. Custom websites, web applications, and comprehensive maintenance plans. From €499 with 50% deposit.",
  keywords: "web development, website design, Ireland, maintenance, custom websites, web applications",
  authors: [{ name: "CodeCraft" }],
  creator: "CodeCraft",
  publisher: "CodeCraft",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "CodeCraft - Professional Web Development & Maintenance",
    description: "Expert web development services in Ireland. Custom websites, web applications, and comprehensive maintenance plans.",
    type: "website",
    locale: "en_IE",
  },
  twitter: {
    card: "summary_large_image",
    title: "CodeCraft - Professional Web Development & Maintenance",
    description: "Expert web development services in Ireland. Custom websites, web applications, and comprehensive maintenance plans.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
