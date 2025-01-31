import styled from 'styled-components';

const WeatherItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #ddd;

  .thumbnail {
    margin-right: 1rem;
    img {
      width: 50px;
      height: 50px;
    }
  }

  .contents {
    h2 {
      margin: 0;
      font-size: 1.5rem;
    }
    p {
      margin: 0;
      line-height: 1.5;
      margin-top: 0.5rem;
      color: #555;
    }
  }

  & + & {
    margin-top: 2rem;
  }
`;

const WeatherItem = ({ weather }) => {
  if (!weather) return null;

  const { name, main, weather: weatherData } = weather;
  const { temp, humidity } = main;
  const description = weatherData[0].description;
  const iconUrl = `https://openweathermap.org/img/wn/${weatherData[0].icon}.png`;

  return (
    <WeatherItemBlock>
      <div className="thumbnail">
        <img src={iconUrl} alt={description} />
      </div>
      <div className="contents">
        <h2>{name} 날씨</h2>
        <p>온도: {temp}°C</p>
        <p>습도: {humidity}%</p>
        <p>날씨: {description}</p>
      </div>
    </WeatherItemBlock>
  );
};

const Weather = ({ busanWeather, seoulWeather, laWeather }) => {
  return (
    <div>
      <WeatherItem weather={busanWeather} />
      <WeatherItem weather={seoulWeather} />
      <WeatherItem weather={laWeather} />
    </div>
  );
};

export default Weather;
