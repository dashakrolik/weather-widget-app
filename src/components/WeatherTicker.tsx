"use client";

import { Box } from "@mui/material";
import Image from "next/image";

const icons = [
  "Sun.svg",
  "Cloud.svg",
  "Cloud-Sun.svg",
  "Cloud-Fog.svg",
  "Cloud-Drizzle.svg",
  "Cloud-Hail.svg",
  "Cloud-Snow-Alt.svg",
  "Wind.svg",
  "Moon.svg",
];

const WeatherTicker = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        bottom: 0,
        width: "100%",
        overflow: "hidden",
        background: "transparent",
        py: 1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          animation: "scroll 30s linear infinite",
          width: "max-content",
        }}
      >
        {icons.concat(icons).map((icon, i) => (
          <Box key={i} sx={{ mx: 2 }}>
            <Image
              src={`/icons/${icon}`}
              alt={icon.replace(".svg", "")}
              width={32}
              height={32}
              style={{ opacity: 0.6 }}
            />
          </Box>
        ))}
      </Box>

      {/* Add keyframes via global style override */}
      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </Box>
  );
};

export default WeatherTicker;
