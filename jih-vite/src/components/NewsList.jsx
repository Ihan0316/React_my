import styled from 'styled-components';
import NewsItem from './NewsItem';
import WeatherItem from './WeatherItem';
import usePromise from '../lib/usePromise';
import { fetchNewsData, fetchWeatherData } from '../lib/api';

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
  const fetchWeather = async () => {
    const cities = [
      { name: '부산', lat: 35.1796, lon: 129.0756 },
      { name: '서울', lat: 37.5665, lon: 126.978 },
      { name: '대구', lat: 35.8714, lon: 128.6014 },
      { name: 'LA', lat: 34.0522, lon: -118.2437 },
    ];
    return Promise.all(
      cities.map(({ name, lat, lon }) =>
        fetchWeatherData(lat, lon).then((data) => ({ name, weather: data })),
      ),
    );
  };

  const sendData =
    category === 'weather' ? fetchWeather : () => fetchNewsData(category);

  const [loading, resolved, error] = usePromise(sendData, [category]);

  if (loading) {
    return <NewsListBlock>대기 중...</NewsListBlock>;
  }

  if (error) {
    return (
      <NewsListBlock>에러 발생! 데이터를 불러오지 못했습니다.</NewsListBlock>
    );
  }

  if (!resolved) {
    return null;
  }

  const data =
    category === 'weather'
      ? Array.isArray(resolved)
        ? resolved
        : []
      : category === 'busanAtt'
      ? resolved.getAttractionKr?.item || []
      : Array.isArray(resolved.articles)
      ? resolved.articles
      : [];

  return (
    <NewsListBlock>
      {category === 'weather'
        ? data.map(({ name, weather }) => (
            <WeatherItem key={name} city={name} weather={weather} />
          ))
        : data.map((item) => <NewsItem key={item.url} article={item} />)}
    </NewsListBlock>
  );
};

export default NewsList;
