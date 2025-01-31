import styled from 'styled-components';
import { NavLink, useLocation } from 'react-router-dom';
import { useState } from 'react';

const categories = [
  { name: 'all', text: '전체보기' },
  { name: 'business', text: '비즈니스' },
  { name: 'entertainment', text: '엔터테인먼트' },
  { name: 'health', text: '건강' },
  { name: 'science', text: '과학' },
  { name: 'sports', text: '스포츠' },
  { name: 'technology', text: '기술' },
  { name: 'cctvWeather', text: 'cctv 날씨 샘플' },
  { name: 'busanAtt', text: '부산 명소' },
];

const CategoriesBlock = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
  width: 768px;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`;

const Category = styled(NavLink)`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;

  &:hover {
    color: #495057;
  }

  &.active {
    font-weight: 600;
    border-bottom: 2px solid #22b8cf;
    color: #22b8cf;
    transition: color 0.3s ease, border-bottom 0.3s ease;

    &:hover {
      color: #3bc9db;
    }
  }

  & + & {
    margin-left: 1rem;
    @media screen and (max-width: 768px) {
      margin-left: 2rem;
    }
  }
`;

const Categories = ({ onCategoryClick }) => {
  const location = useLocation();
  const [forceUpdate, setForceUpdate] = useState(0);

  const handleClick = (category) => {
    if (category === 'cctvWeather' || category === 'busanAtt') {
      setForceUpdate((prev) => prev + 1); // 상태 변경하여 리렌더링 유도
      if (onCategoryClick) onCategoryClick(); // API 호출 트리거
    }
  };

  return (
    <CategoriesBlock key={forceUpdate}>
      {' '}
      {/* 변경될 때마다 리렌더링 */}
      {categories.map((c) => (
        <Category
          key={c.name}
          to={c.name === 'all' ? '/' : `/${c.name}`}
          onClick={() => handleClick(c.name)}
        >
          {c.text}
        </Category>
      ))}
    </CategoriesBlock>
  );
};

export default Categories;
