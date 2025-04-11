import WeatherForm from "@/components/WeatherForm";
import WeatherPage from "@/components/WeatherPage";
import WeatherWidget from "@/components/WeatherWidget";
import { getWeather } from "@/lib/weather";
import Typography from "@mui/material/Typography";

export default async function Home() {
  return (
    <main>
      <WeatherPage />
    </main>
  );
}