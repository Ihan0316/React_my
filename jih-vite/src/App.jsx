import './App.css';
import NewsPage from './pages/NewsPage';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <h1 className="react">JIH test</h1>

      <Routes>
        <Route path="/" element={<NewsPage />} />
        <Route path="/:category" element={<NewsPage />} />
      </Routes>
    </div>
  );
};

export default App;
