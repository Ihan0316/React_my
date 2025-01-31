import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';
import usePromise from '../lib/usePromise';
import Weather from './Weather';
import React, { useState, useEffect } from 'react';

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

  useEffect(() => {
    const fetchWeatherData = async () => {
      if (category === 'weather') {
        try {
          const busanResponse = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=35.1796&lon=129.0756&units=metric&appid=${
              import.meta.env.VITE_API_KEY_OPENWEATHERMAP
            }`,
          );
          setBusanWeather(busanResponse.data);

          const seoulResponse = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=37.5665&lon=126.9780&units=metric&appid=${
              import.meta.env.VITE_API_KEY_OPENWEATHERMAP
            }`,
          );
          setSeoulWeather(seoulResponse.data);

          const laResponse = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=34.0522&lon=-118.2437&units=metric&appid=${
              import.meta.env.VITE_API_KEY_OPENWEATHERMAP
            }`,
          );
          setLaWeather(laResponse.data);
        } catch (error) {
          console.error('Weather API Error:', error);
        }
      }
    };

    fetchWeatherData();
  }, [category]);

  const sendData = () => {
    const query = category === 'all' ? '' : `&category=${category}`;

    if (category === 'weather') {
      return null; // 날씨 데이터는 useEffect에서 처리
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
