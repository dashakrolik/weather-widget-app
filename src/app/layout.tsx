import "@fontsource/manrope";
import "./globals.css";
import React from "react";
import ThemeRegistry from "./ThemeRegistry"; // ✅ use the client wrapper

export const metadata = {
  title: "Weather App",
  description: "Tomorrow.io weather widget",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}