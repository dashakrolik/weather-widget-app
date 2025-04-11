"use client";
import WeatherIcon from "./WeatherIcon";

import {
  Card,
  CardContent,
  Typography,
  Box,
  CircularProgress,
} from "@mui/material";

interface Props {
  temperature: number;
  humidity: number;
  windSpeed: number;
  city: string;
  loading: boolean;
  weatherCode: number;
}

const WeatherWidget: React.FC<Props> = ({
  temperature,
  humidity,
  windSpeed,
  city,
  weatherCode,
  loading,
}) => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      padding: 2,
      width: "100%",
    }}
  >
    <Card
      sx={{
        width: 360,
        minHeight: 280,
        borderRadius: "1.5rem",
        boxShadow: "0 12px 28px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
        padding: 3,
        backgroundColor: "#e1edf4",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <form style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography variant="h5" gutterBottom>
              Weather in {city}
            </Typography>
            <WeatherIcon weatherCode={weatherCode} size={128} />
            <Typography
              variant="h3"
              fontWeight="bold"
              mb={2}
              sx={{ color: "#4ca1af" }}
            >
              {temperature}°C
            </Typography>

            <Typography variant="body1" sx={{ mb: 1.5 }}>
              Humidity: {humidity}%
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Wind: {windSpeed} m/s
            </Typography>
          </CardContent>
          <Box sx={{ marginTop: "auto", paddingX: 3, paddingBottom: 1 }}>
            <Typography variant="body2" color="text.secondary">
              {temperature >= 15
                ? "Remember to put on some SPF!"
                : "Brr...winter is already here, time to wear a jacket."}
            </Typography>
          </Box>
        </form>
      )}
    </Card>
  </Box>
);

export default WeatherWidget;
