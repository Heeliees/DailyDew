import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Daily Dew — Daily Stardew Valley Trivia",
  description: "Eight fresh Stardew Valley clues every day. Guess villagers, fish, items, locations and more.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
