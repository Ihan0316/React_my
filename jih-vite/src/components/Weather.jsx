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

    .update-time {
      margin-top: 1rem;
      font-size: 0.9rem;
      color: #888;
    }
  }

  & + & {
    margin-top: 2rem;
  }
`;

const weatherDescriptionMap = {
  'thunderstorm with light rain': '가벼운 비를 동반한 천둥구름',
  'thunderstorm with rain': '비를 동반한 천둥구름',
  'thunderstorm with heavy rain': '폭우를 동반한 천둥구름',
  'light thunderstorm': '약한 천둥구름',
  thunderstorm: '천둥구름',
  'heavy thunderstorm': '강한 천둥구름',
  'ragged thunderstorm': '불규칙적 천둥구름',
  'thunderstorm with light drizzle': '약한 연무를 동반한 천둥구름',
  'thunderstorm with drizzle': '연무를 동반한 천둥구름',
  'thunderstorm with heavy drizzle': '강한 안개비를 동반한 천둥구름',
  'light intensity drizzle': '가벼운 안개비',
  drizzle: '안개비',
  'heavy intensity drizzle': '강한 안개비',
  'light intensity drizzle rain': '가벼운 적은비',
  'drizzle rain': '적은비',
  'heavy intensity drizzle rain': '강한 적은비',
  'shower rain and drizzle': '소나기와 안개비',
  'heavy shower rain and drizzle': '강한 소나기와 안개비',
  'shower drizzle': '소나기',
  'light rain': '약한 비',
  'moderate rain': '중간 비',
  'heavy intensity rain': '강한 비',
  'very heavy rain': '매우 강한 비',
  'extreme rain': '극심한 비',
  'freezing rain': '우박',
  'light intensity shower rain': '약한 소나기 비',
  'shower rain': '소나기 비',
  'heavy intensity shower rain': '강한 소나기 비',
  'ragged shower rain': '불규칙적 소나기 비',
  'light snow': '가벼운 눈',
  snow: '눈',
  'heavy snow': '강한 눈',
  sleet: '진눈깨비',
  'shower sleet': '소나기 진눈깨비',
  'light rain and snow': '약한 비와 눈',
  'rain and snow': '비와 눈',
  'light shower snow': '약한 소나기 눈',
  'shower snow': '소나기 눈',
  'heavy shower snow': '강한 소나기 눈',
  mist: '박무',
  smoke: '연기',
  haze: '연무',
  'sand, dust whirls': '모래 먼지',
  fog: '안개',
  sand: '모래',
  dust: '먼지',
  'volcanic ash': '화산재',
  squalls: '돌풍',
  tornado: '토네이도',
  'clear sky': '구름 한 점 없는 맑은 하늘',
  'few clouds': '약간의 구름이 낀 하늘',
  'scattered clouds': '드문드문 구름이 낀 하늘',
  'broken clouds': '구름이 거의 없는 하늘',
  'overcast clouds': '구름으로 뒤덮인 흐린 하늘',
  'tropical storm': '태풍',
  hurricane: '허리케인',
  cold: '한랭',
  hot: '고온',
  windy: '바람부는',
  hail: '우박',
  calm: '바람이 거의 없는',
  'light breeze': '약한 바람',
  'gentle breeze': '부드러운 바람',
  'moderate breeze': '중간 세기 바람',
  'fresh breeze': '신선한 바람',
  'strong breeze': '센 바람',
  'high wind': '돌풍에 가까운 센 바람',
  gale: '돌풍',
  'severe gale': '심각한 돌풍',
  storm: '폭풍',
  'violent storm': '강한 폭풍',
};

const WeatherItem = ({ weather }) => {
  if (!weather) return null;

  const { name, main, weather: weatherData, dt } = weather;
  const { temp, humidity } = main;
  const description = weatherData[0].description;
  const iconUrl = `https://openweathermap.org/img/wn/${weatherData[0].icon}.png`;

  // description을 한글로 변환
  const koreanDescription = weatherDescriptionMap[description] || description;

  // 온도를 소수점 1자리까지 반올림
  const formattedTemp = temp.toFixed(1);

  // Unix 타임스탬프 (dt)를 사람이 읽을 수 있는 형식으로 변환
  const updateTime = new Date(dt * 1000);
  const formattedUpdateTime = `${updateTime.getFullYear()}-${(
    updateTime.getMonth() + 1
  )
    .toString()
    .padStart(2, '0')}-${updateTime
    .getDate()
    .toString()
    .padStart(2, '0')} ${updateTime
    .getHours()
    .toString()
    .padStart(2, '0')}:${updateTime.getMinutes().toString().padStart(2, '0')}`;

  return (
    <WeatherItemBlock>
      <div className="thumbnail">
        <img src={iconUrl} alt={koreanDescription} />
      </div>
      <div className="contents">
        <h2>{name} 날씨</h2>
        <p>온도: {formattedTemp}°C</p>
        <p>습도: {humidity}%</p>
        <p>날씨: {koreanDescription}</p>
        <p className="update-time">업데이트 시간: {formattedUpdateTime}</p>
      </div>
    </WeatherItemBlock>
  );
};

const Weather = ({ busanWeather, seoulWeather, daeguWeather, laWeather }) => {
  return (
    <div>
      <WeatherItem weather={busanWeather} />
      <WeatherItem weather={seoulWeather} />
      <WeatherItem weather={daeguWeather} />
      <WeatherItem weather={laWeather} />
    </div>
  );
};

export default Weather;
