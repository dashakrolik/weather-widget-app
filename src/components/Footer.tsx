"use client";

import { Box, Typography } from "@mui/material";

const Footer = () => (
  <Box
    sx={{
      width: "100%",
      padding: "1.5rem 1rem",
      borderBottom: "1px solid #e2e8f0",
      boxShadow: "0 2px 6px rgba(0, 0, 0, 0.05)",
      textAlign: "center",
    }}
  >
    <Typography
      variant="h4"
      sx={{
        fontWeight: 300,
        color: "#2a2a2a",
        letterSpacing: "0.4px",
      }}
    >
      Reliable. Responsive. Slightly obsessed with clouds.
    </Typography>
  </Box>
);

export default Footer;
