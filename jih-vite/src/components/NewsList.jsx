import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';
import usePromise from '../lib/usePromise';
import Weather from './Weather';
import React, { useState, useEffect } from 'react';

// 공통적인 날씨 API 요청 함수
const fetchWeatherData = async (lat, lon) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${
        import.meta.env.VITE_API_KEY_OPENWEATHER
      }`,
    );
    return response.data;
  } catch (error) {
    console.error('Weather API Error:', error);
    throw error;
  }
};

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NewsList = ({ category }) => {
  const [busanWeather, setBusanWeather] = useState(null);
  const [seoulWeather, setSeoulWeather] = useState(null);
  const [laWeather, setLaWeather] = useState(null);
  const [daeguWeather, setDaeguWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      if (category === 'weather') {
        try {
          const busanData = await fetchWeatherData(35.1796, 129.0756);
          setBusanWeather(busanData);

          const seoulData = await fetchWeatherData(37.5665, 126.978);
          setSeoulWeather(seoulData);

          const daeguData = await fetchWeatherData(35.8714, 128.6014);
          setDaeguWeather(daeguData);

          const laData = await fetchWeatherData(34.0522, -118.2437);
          setLaWeather(laData);
        } catch (error) {
          console.error('Weather API Error:', error);
        }
      }
    };

    fetchWeather();
  }, [category]);

  const sendData = () => {
    const query = category === 'all' ? '' : `&category=${category}`;

    if (category === 'weather') {
      return null;
    } else {
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
    }
  };

  const [loading, resolved, error] = usePromise(sendData, [category]);

  if (loading) {
    return <NewsListBlock>대기 중...</NewsListBlock>;
  }

  if (error) {
    return (
      <NewsListBlock>에러 발생! 데이터를 불러오지 못했습니다.</NewsListBlock>
    );
  }

  if (!resolved && category !== 'weather') {
    return null;
  }

  const data =
    category === 'weather'
      ? null
      : category === 'busanAtt'
      ? resolved.getAttractionKr?.item || []
      : resolved.articles || [];

  return (
    <NewsListBlock>
      {category === 'weather' ? (
        <Weather
          busanWeather={busanWeather}
          seoulWeather={seoulWeather}
          daeguWeather={daeguWeather}
          laWeather={laWeather}
        />
      ) : category === 'busanAtt' ? (
        data.map((item, index) => <Weather key={index} article={item} />)
      ) : (
        data.map((item) => <NewsItem key={item.url} article={item} />)
      )}
    </NewsListBlock>
  );
};

export default NewsList;
