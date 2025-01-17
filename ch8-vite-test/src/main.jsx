import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  // 생명주기 콘솔 확인시 2번 출력 방지
  <App />,
  // </StrictMode>,
);
