import './App.css';
import NewsPage from './pages/NewsPage';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <h1 className="react">ch14 API 연동해서 뷰어 만들기</h1>

      <Routes>
        <Route path="/" element={<NewsPage />} />
        <Route path="/:category" element={<NewsPage />} />
      </Routes>
    </div>
  );
};

export default App;
