import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/themeProvider"
import { sleep } from "@/lib/utils";
import Sidebar from "@/components/Sidebar"


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clone YT Music",
  description: "Clone Youtube Music",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={inter.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Sidebar>
            {children}  
            </Sidebar>
            
          </ThemeProvider>
      </body>
    </html>
  );
}
