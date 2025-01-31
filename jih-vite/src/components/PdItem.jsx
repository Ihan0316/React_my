import styled from 'styled-components';

const NewsItemBlock = styled.div`
  display: flex;
  .thumbnail {
    margin-right: 1rem;
    img {
      display: block;
      width: 160px;
      height: 170px;
      object-fit: cover;
    }
  }
  .contents {
    h2 {
      margin: 0;
      a {
        color: black;
        text-decoration: none;
      }
    }
    p {
      margin: 0;
      line-height: 1.5;
      margin-top: 0.5rem;
      white-space: normal;
    }
  }
  & + & {
    margin-top: 3rem;
  }
`;

const PdItem = ({ article }) => {
  const { baseDate, baseTime, weatherNm } = article;

  return (
    <NewsItemBlock>
      <div className="contents">
        <p>날짜 : {baseDate}</p>
        <p>시간 : {baseTime}</p>
        <p>날씨 : {weatherNm}</p>
      </div>
    </NewsItemBlock>
  );
};

export default PdItem;
