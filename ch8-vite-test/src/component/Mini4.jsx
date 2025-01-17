import { useState, useMemo, useCallback, useRef } from 'react';

const getAverage = (numbers) => {
  console.log('평균값 계산 중..');
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b, 0); // 초기값 0 추가
  return sum / numbers.length;
};

const Mini4 = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');
  const inputEl = useRef(null);

  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []);

  const onInsert = useCallback(() => {
    const parsedNumber = parseInt(number, 10);

    if (isNaN(parsedNumber)) {
      alert('유효한 숫자를 입력해주세요.');
      setNumber('');
      return;
    }

    if (parsedNumber <= 0) {
      alert('값을 0 이상 입력해주세요.');
      setNumber('');
      return;
    }

    if (parsedNumber > 100) {
      alert('100 이하로 입력해주세요.');
      setNumber('');
      return;
    }

    if (avg <= parsedNumber) {
      const nextList = list.concat(parsedNumber);
      setList(nextList);
      setNumber('');
      inputEl.current.focus();
    } else {
      alert(parsedNumber + '는 평균' + avg + '보다 작습니다');
    }
  }, [number, list]);

  const onDelete = useCallback(() => {
    setNumber('');
    setList([]);
    return;
  }, []);

  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onInsert();
      setNumber('');
    }
  };

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input
        value={number}
        onChange={onChange}
        ref={inputEl}
        placeholder="숫자를 입력하세요"
        onKeyPress={onKeyPress}
      />
      <button onClick={onInsert}>추가</button>
      <button onClick={onDelete}>삭제</button>
      <ul>
        {list.map((value, index) => (
          <li
            key={index}
            style={{
              color: index === list.length - 1 ? 'red' : 'black',
              fontWeight: index === list.length - 1 ? 'bold' : '',
            }}
          >
            {value}
          </li>
        ))}
      </ul>
      <div>
        <b>평균값:</b> {avg}
      </div>
    </div>
  );
};

export default Mini4;
