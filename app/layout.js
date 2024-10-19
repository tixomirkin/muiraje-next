import localFont from "next/font/local";
import "./globals.css";
import {basis33, ZTFormom, swissSiena, swissBT} from "@/assets/fonts/font";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${basis33.variable} ${ZTFormom.variable} ${swissSiena.variable} ${swissBT.variable}`}>
        {children}
      </body>
    </html>
  );
}
