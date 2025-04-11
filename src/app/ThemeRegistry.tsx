"use client";

import { ThemeProvider } from "@mui/material/styles";
import theme from "@/theme";
import React from "react";

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}