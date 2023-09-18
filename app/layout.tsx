import StyledComponentsRegistry from "./registry";
import localFont from "next/font/local";
import "./globals.css";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Sidebar from "./components/sidebar/Sidebar";
import { Metadata } from "next/types";

const materialSymbols = localFont({
  variable: "--font-family-symbols", // Variable name (to reference after in CSS/styles)
  style: "normal",
  src: "../node_modules/material-symbols/material-symbols-rounded.woff2", // This is a reference to woff2 file from NPM package "material-symbols"
  display: "block",
  weight: "100 700",
});

export const metadata: Metadata = {
  title: "TMDB Movies",
  description: "A collection of movie descriptions for the TMDB API",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={`${materialSymbols.variable}`}>
      <body>
        <Navbar />
        <Sidebar />
        <div className="h-auto bg-black pl-28">
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </div>
        <Footer />
      </body>
    </html>
  );
}
