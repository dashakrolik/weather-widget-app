# Weather App

A modern, responsive weather forecast app built with Next.js, TypeScript, and Material UI. The application uses the Tomorrow.io Weather API to display current weather data based on user input.

## Features

- Live weather data fetched from Tomorrow.io API  
- City search
- Real-time toast notifications for errors and success states  
- Responsive layout that adapts to all screen sizes  
- Clean and modern UI with theme - consistent icons and styles  
- Weather icons matched to real conditions with color changing  
- Accessible and keyboard-friendly form inputs

## Technologies Used

- [Next.js 13 (App Router)](https://nextjs.org/)
- [React 18](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Material UI (v5)](https://mui.com/)
- [Axios](https://axios-http.com/)
- [Tomorrow.io Weather API](https://www.tomorrow.io/)

## Setup Instructions

1. **Clone the repository**

```bash
git clone https://github.com/your-username/weather-app.git
cd weather-app
npm install
npm run dev
```

2. Add your own weather.io API Key in your local .env, as "TOMORROW_API_KEY" 

## Developer Notes
- Weather data is fetched server-side to keep the API key secure
- UI updates are client-side with fallback states and loader
- WeatherIcon.tsx dynamically adjusts its background and icon based on weather codes
- Errors like invalid cities or too many requests trigger styled MUI toast alerts
- Code is separated clearly by responsibility and uses TypeScript types throughout

## Future Improvements
- Add more unit tests and add integration testing
- Add more types 
- Color contrast is not accesssible
- Add hourly and multi-day forecasts using additional API timelines
- Implement charts using D3 or Chart.js for visual data
- Support dark mode toggle :)
- Store recent cities
