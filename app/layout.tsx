import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";

// ตั้งค่าฟอนต์ Kanit
const kanit = Kanit({ 
  subsets: ["latin", "thai"],
  weight: ["300", "400", "600"],
  variable: '--font-kanit'
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Web Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body className={`${kanit.className} bg-stone-50 text-stone-800 antialiased`}>
        {/* เอา Navbar ออกแล้วครับ */}
        {children}
      </body>
    </html>
  );
}