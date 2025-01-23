import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import NewsList from './components/NewsList';

const App = () => {
  const [data, setData] = useState(null);

  const onClick = () => {
    axios
      .get(
        'https://newsapi.org/v2/top-headlines?country=us&apiKey=0a8c4202385d4ec1bb93b7e277b3c51f',
      )
      .then((response) => {
        setData(response.data);
      });
    // const response = await axios.get(
    //   'https://newsapi.org/v2/top-headlines?country=us&apiKey=0a8c4202385d4ec1bb93b7e277b3c51f'
    // );
  };

  return (
    <div>
      <h1 className="react">ch14 API 연동해서 뷰어 만들기</h1>
      {/* <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && (
        <textarea
          rows={7}
          value={JSON.stringify(data, null, 2)}
          readOnly={true}
        />
      )} */}
      <NewsList />
    </div>
  );
};

export default App;
