import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";

const kanit = Kanit({ 
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "600"],
  variable: '--font-kanit'
});

export const metadata: Metadata = {
  title: "Weerapat's Portfolio",
  description: "Web Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body className={`${kanit.className} bg-[#050505] text-white antialiased selection:bg-orange-500/30 selection:text-orange-200`}>
        

        
        {children}
      </body>
    </html>
  );
}