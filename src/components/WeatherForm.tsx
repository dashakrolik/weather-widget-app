"use client";

import {
  Box,
  Card,
  CardContent,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import { useState } from "react";

interface WeatherFormProps {
  onCityChange: (city: string) => void;
}

const WeatherForm: React.FC<WeatherFormProps> = ({ onCityChange }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onCityChange(input.trim());
    }
  };

  return (
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
          margin: "0 auto",
          padding: 3,
          boxShadow: "0 12px 28px rgba(0, 0, 0, 0.1)",
          borderRadius: "1.5rem",
          backgroundColor: "#e1edf4",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{ flex: 1, display: "flex", flexDirection: "column" }}
        >
          <CardContent sx={{ paddingBottom: 0 }}>
            <Typography variant="h6" gutterBottom>
              Enter a city to get the weather
            </Typography>
            <TextField
              fullWidth
              label="City"
              variant="outlined"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              sx={{ marginBottom: 2 }}
            />
          </CardContent>
          <Box sx={{ marginTop: "auto" }}>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                textTransform: "none",
                backgroundColor: "#4ca1af",
                color: "#ffffff",
                fontWeight: 500,
                borderRadius: "999px", // ✅ fully rounded pill-style
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                paddingY: 1.25, // extra vertical padding for roundness
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "#3a8d9e",
                  boxShadow: "0 6px 16px rgba(0, 0, 0, 0.2)",
                },
              }}
            >
              Get Forecast
            </Button>
          </Box>
        </form>
      </Card>
    </Box>
  );
};

export default WeatherForm;
