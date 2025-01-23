import { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState(null);

  const onClick = () => {
    axios
      .get(
        'https://newsapi.org/v2/top-headlines?country=us&apiKey=a7387d99fe71491db9a957fc416280e9',
      )
      .then((response) => {
        setData(response.data);
      });
  };

  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && (
        <textarea
          rows={7}
          value={JSON.stringify(data, null, 2)}
          readOnly={true}
        />
      )}
    </div>
  );
};

export default App;
