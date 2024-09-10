import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Header from "@/component/layout/header/header";
import Footer from "@/component/layout/footer/Footer";
import Reduxstore from "@/Store/store";

import SessionRap from "./sessionrap/sessionrap";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
      <SessionRap >
          <Reduxstore>

          <Header/>
          <main className="styleforpage">
          {children}
          </main>

          <Footer/>
            
          </Reduxstore>

        </SessionRap>
        
        </body>
    </html>
  );
}
