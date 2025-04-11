"use client";

import WeatherForm from "@/components/WeatherForm";
import WeatherWidget from "@/components/WeatherWidget";
import { useEffect, useState } from "react";
import axios from "axios";
import { Box } from "@mui/material";

interface WeatherData {
  temperature: number;
  humidity: number;
  windSpeed: number;
}

export default function WeatherPage() {
  const [city, setCity] = useState("Amsterdam");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   const fetchWeather = async () => {
  //     try {
  //       setLoading(true);
  //       const res = await axios.get(`/api/weather?city=${city}`);
  //       setWeather(res.data);
  //       setError(null);
  //     } catch (err: any) {
  //       setError("Failed to load weather.");
  //       setWeather(null);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   if (city) fetchWeather();
  // }, [city]);

  return (
    <main>
<Box
  sx={{
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    justifyContent: "center",
    alignItems: "flex-start", // ⬅️ important: prevents vertical stretching
    padding: 4,
    gap: { xs: 3, md: 6 },
  }}
>


        <WeatherForm onCityChange={setCity} />
        {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
        {true && (
          <WeatherWidget
            temperature={10}
            humidity={5}
            windSpeed={3}
            city={city}
            loading={loading}
          />
        )}
      </Box>
    </main>
  );
}
