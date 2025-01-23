import { useState, useEffect } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import usePromise from '../lib/usePromise';
import axios from 'axios';

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
  // 한파일 내에 로직이 포함된 경우 방법1
  // const [articles, setArticles] = useState(null);
  // const [loading, setLoading] = useState(false);

  // // 환경 변수에서 API 키를 가져옴
  // const apiKey = import.meta.env.VITE_API_KEY;

  // useEffect(() => {
  //   // async를 사용하는 함수 선언
  //   const fetchData = async () => {
  //     setLoading(true);
  //     try {
  //       const query = category === 'all' ? '' : `&category=${category}`;
  //       const response = await axios.get(
  //         `https://newsapi.org/v2/top-headlines?country=us${query}&apiKey=${apiKey}`,
  //       );
  //       setArticles(response.data.articles);
  //     } catch (error) {
  //       console.error('뉴스 데이터를 가져오는 중 에러 발생:', error);
  //     }
  //     setLoading(false);
  //   };

  //   fetchData();
  //   // category 변경시 useEffect 변경하기
  // }, [apiKey, category]);

  // // 대기 중일 때
  // if (loading) {
  //   return <NewsListBlock>대기 중...</NewsListBlock>;
  // }

  // // 아직 articles 값이 설정되지 않았을 때
  // if (!articles) {
  //   return null;
  // }

  // articles 값이 유효할 때

  // 방법2, 파일 분리해서 작업, 커스텀 훅스 이용

  //추가

  const sendData = () => {
    const query = category === 'all' ? '' : `&category=${category}`;
    return axios.get(
      `https://newsapi.org/v2/top-headlines?country=us${query}&apiKey=0a8c4202385d4ec1bb93b7e277b3c51f`,
    );
  };

  const [loading, resolved, error] = usePromise(sendData, [category]);

  // 대기 중일 때
  if (loading) {
    return <NewsListBlock>대기 중...</NewsListBlock>;
  }

  // 아직 resolved 값이 설정되지 않았을 때
  if (!resolved) {
    return null;
  }

  //추가
  // 에러가 발생했을 때
  if (error) {
    return <NewsListBlock>에러 발생!</NewsListBlock>;
  }

  // 추가
  const { articles } = resolved.data;

  return (
    <NewsListBlock>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;
