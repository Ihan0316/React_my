// api.js
import axios from 'axios';

export const fetchNewsData = (category) => {
  const query = category === 'all' ? '' : `&category=${category}`;
  return axios
    .get(
      `https://newsapi.org/v2/top-headlines?country=us${query}&apiKey=${
        import.meta.env.VITE_NEWS_API_KEY
      }`,
    )
    .then((response) => response.data)
    .catch((error) => {
      console.error('News API Error:', error);
      throw error;
    });
};

export const fetchWeatherData = (lat, lon) => {
  return axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${
        import.meta.env.VITE_API_KEY_OPENWEATHER
      }`,
    )
    .then((response) => response.data)
    .catch((error) => {
      console.error('Weather API Error:', error);
      throw error;
    });
};
