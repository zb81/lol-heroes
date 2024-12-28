import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import BackTop from "@/components/BackTop";

export const metadata: Metadata = {
  title: "LOL 英雄查询",
  description: "使用多种名称快速查找英雄，跳转至 OP.GG 的英雄页面，适合国服玩家。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="">
      <body className="antialiased">
        <ThemeProvider
          attribute={"class"}
          defaultTheme="system"
          disableTransitionOnChange
          enableSystem
        >
          <div className='container mx-auto'>
            <Header />
            {children}
          </div>

          <BackTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
