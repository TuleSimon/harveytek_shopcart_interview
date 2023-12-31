import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ShopCart",
  description: "Created by Tule Simon",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col bg-white ">
          <Navbar/>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
