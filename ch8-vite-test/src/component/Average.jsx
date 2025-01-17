import React, { useState, useMemo } from 'react';

const getAverage = (numbers) => {
  console.log('평균값 계산 중..');
  if (numbers.length === 0) return 0;
  // reduce, 내장함수 -> 이전 값을 받아서, 행위를 한 후, 새로운 값을 누적해서 반환
  // reduce(콜백함수, 초기값)
  const sum = numbers.reduce((a, b) => a + b, 0); // 초기값 0 추가, 재귀함수
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');

  const onChange = (e) => {
    setNumber(e.target.value);
  };

  const onInsert = () => {
    const nextList = list.concat(parseInt(number, 10)); // 10진수 int형으로 변환
    setList(nextList);
    setNumber('');
  };

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input
        value={number}
        onChange={onChange}
        placeholder="숫자를 입력하세요"
      />
      <button onClick={onInsert}>추가</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값:</b> {avg}
      </div>
    </div>
  );
};

export default Average;
