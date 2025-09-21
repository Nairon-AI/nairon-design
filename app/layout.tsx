import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Build Beautiful in minutes, not days",
  description: "Design Beautiful Sites with Modern Tools",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans antialiased dark">
        {children}
      </body>
    </html>
  );
}
