"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Box, Snackbar, Alert } from "@mui/material";
import WeatherForm from "@/components/WeatherForm";
import WeatherWidget from "@/components/WeatherWidget";
import WeatherTicker from "./WeatherTicker";
import Header from "./Header";

interface WeatherData {
  temperature: number;
  humidity: number;
  windSpeed: number;
  weatherCode: number;
}

export default function WeatherPage() {
  const [city, setCity] = useState("Amsterdam");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);

  const fetchWeather = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`/api/weather?city=${city}`);
      setWeather(res.data);
      setError(null);
      setToast({ message: `Weather updated for ${city}`, type: "success" });
    } catch (err: any) {
      setWeather(null);
      const msg = err?.response?.status === 429 ? "Too many requests – try again soon" : "City not found";
      setError(msg);
      setToast({ message: msg, type: "error" });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, [city]);

  useEffect(() => {
    setToast({ message: "Test toast loaded!", type: "success" });
  }, []);
  

  return (
    <main>
      <Header />
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          alignItems: "center",
          gap: 3,
          padding: 4,
        }}
      >
        <WeatherForm onCityChange={setCity} />
        {weather && (
          <WeatherWidget
            temperature={weather.temperature}
            humidity={weather.humidity}
            windSpeed={weather.windSpeed}
            city={city}
            weatherCode={weather.weatherCode}
            loading={loading}
          />
        )}
      </Box>

      {/* ✅ Toast/Alert */}
      <Snackbar
        open={!!toast}
        autoHideDuration={4000}
        onClose={() => setToast(null)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          severity={toast?.type || "success"}
          onClose={() => setToast(null)}
          sx={{
            backgroundColor: toast?.type === "error" ? "#ff5252" : "#4ca1af",
            color: 'white',
            fontFamily: '"Manrope", sans-serif',
            borderRadius: "8px",
          }}
        >
          {toast?.message}
        </Alert>
      </Snackbar>
      <WeatherTicker />
    </main>
  );
}
