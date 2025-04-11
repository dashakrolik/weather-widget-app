import Box from "@mui/material/Box";
import Image from "next/image";

interface WeatherIconProps {
  weatherCode: number;
  size?: number;
}

const weatherCodeToIcon: Record<number, string> = {
  1000: "Sun.svg", // clear
  1001: "Cloud.svg", // cloudy
  1100: "Cloud-Sun.svg", // mostly clear
  1101: "Cloud-Sun.svg",
  1102: "Cloud.svg", // default cloud
  2000: "Cloud-Fog.svg", // fog
  4000: "Cloud-Drizzle.svg", // drizzle
  4001: "Cloud.svg", // rain
  4200: "Cloud-Drizzle.svg",
  4201: "Cloud-Hail.svg", // heavy rain
  5000: "Cloud-Snow-Alt.svg", // snow
  5100: "Cloud-Snow-Alt.svg",
  5101: "Cloud-Snow-Alt.svg",// ?
  8000: "Cloud-Hail.svg", // thunderstorm
};

const weatherCodeToColor: Record<number, string> = {
  1000: "#FFD166",
  1001: "#90A4AE",
  1100: "#FFE082",
  1101: "#FFE082",
  1102: "#B0BEC5",
  2000: "#A7B1B7",
  4000: "#4FC3F7",
  4001: "#0288D1",
  4200: "#29B6F6",
  4201: "#01579B",
  5000: "#E0F7FA",
  5100: "#B2EBF2",
  5101: "#81D4FA",
  8000: "#673AB7",
};

const WeatherIcon: React.FC<WeatherIconProps> = ({ weatherCode, size = 64 }) => {
  const iconFile = weatherCodeToIcon[weatherCode] || "Cloud.svg";
  const baseColor = weatherCodeToColor[weatherCode] || "#4ca1af";
  const containerSize = size * 1.1;

  return (
    <Box
      sx={{
        width: containerSize,
        height: containerSize,
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: `radial-gradient(circle, ${baseColor}66 0%, ${baseColor}22 50%, transparent 100%)`,
        boxShadow: `0 0 8px ${baseColor}33`,
        margin: "0 auto",
      }}
    >
      <Image
        src={`/icons/${iconFile}`}
        alt="Weather icon"
        width={size}
        height={size}
      />
    </Box>
  );
};

export default WeatherIcon;
