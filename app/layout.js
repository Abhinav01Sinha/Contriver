import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Head from "next/head";

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata = {
  title: "Contriver Autonomus Systems Private Limited",
  description: "Contriver Autonomus Systems Private Limited Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/img/favicon.ico" sizes="any" />
        {/* Google Search Console */}
        <meta
          name="google-site-verification"
          content="aC6biXvzPGfLVGNOSUOM2J2vdDbpXLahshbF7qjuN5M"
        />
      </head>
      <body
        className={cn(
          "min-h-screen flex flex-col bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
