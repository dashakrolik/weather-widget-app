import axios from "axios";

export async function getWeather(city: string) {
  const API_KEY = process.env.TOMORROW_API_KEY;

  const geo = await axios.get("https://nominatim.openstreetmap.org/search", {
    params: {
      q: city,
      format: "json",
      limit: 1,
    },
  });

  if (!geo.data.length) throw new Error("City not found");

  const { lat, lon } = geo.data[0];

  const response = await axios.get(
    `https://api.tomorrow.io/v4/weather/forecast`, {
      params: {
        location: `${lat},${lon}`,
        apikey: API_KEY,
        timesteps: "1h",
        units: "metric",
        fields: ["temperature", "humidity", "windSpeed", "weatherCode"],
      }
    }
  );

  const values = response.data.timelines.hourly[0].values;

  return {
    temperature: values.temperature,
    humidity: values.humidity,
    windSpeed: values.windSpeed,
    weatherCode: values.weatherCode,
  };
}
