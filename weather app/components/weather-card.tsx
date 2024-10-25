'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Cloud, Sun, CloudRain, Wind } from 'lucide-react';

const API_KEY = 'f8df5f8e73652605892aad39fe9f48a1';

const WeatherCard = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchWeather = async () => {
    if (!API_KEY) {
      setError('API key is missing. Please check your environment variables.');
      return;
    }
    setLoading(true);
    setError('');
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      if (!response.ok) {
        throw new Error('City not found');
      }
      const data = await response.json();
      setWeather(data);
    } catch (err) {
      setError('Failed to fetch weather data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const getWeatherIcon = (weatherMain) => {
    switch (weatherMain) {
      case 'Clear':
        return <Sun className="h-12 w-12 text-yellow-400" />;
      case 'Clouds':
        return <Cloud className="h-12 w-12 text-gray-400" />;
      case 'Rain':
        return <CloudRain className="h-12 w-12 text-blue-400" />;
      default:
        return <Wind className="h-12 w-12 text-gray-600" />;
    }
  };

  return (
    <Card className="w-full max-w-md">
      <CardContent className="pt-6">
        <div className="flex mb-4">
          <Input
            type="text"
            placeholder="Enter city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="mr-2"
          />
          <Button onClick={fetchWeather} disabled={loading}>
            {loading ? 'Loading...' : 'Get Weather'}
          </Button>
        </div>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {weather && (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">{weather.name}</h2>
            <div className="flex justify-center items-center mb-4">
              {getWeatherIcon(weather.weather[0].main)}
              <span className="text-4xl ml-4">{Math.round(weather.main.temp)}°C</span>
            </div>
            <p className="text-xl mb-2">{weather.weather[0].description}</p>
            <p>Humidity: {weather.main.humidity}%</p>
            <p>Wind Speed: {weather.wind.speed} m/s</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default WeatherCard;