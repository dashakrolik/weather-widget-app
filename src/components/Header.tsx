"use client";

import { Box, Typography } from "@mui/material";

const Header = () => {
  return (
    <Box
      component="header"
      sx={{
        width: "100vw",
        background: "linear-gradient(to right, #3a8d9e,rgb(211, 226, 234))",
        color: "#fff",
        fontFamily: '"Manrope", sans-serif',
        paddingY: "0.75rem",
        paddingX: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        position: "relative",
        zIndex: 1,
      }}
    >
      <Typography
        variant="h6"
        fontSize="16px"
        sx={{ textShadow: "0 1px 2px rgba(0,0,0,0.2)" }}
      >
        Forecastly - a weather app that actually looks good
      </Typography>
    </Box>
  );
};

export default Header;
