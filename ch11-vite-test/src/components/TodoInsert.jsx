// 파일 최상단에 추가
/* eslint-disable react/prop-types */

import { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault(); // 기본 동작 방지

      if (value.trim() === '') {
        alert('할 일을 입력하세요.');
        return;
      }

      onInsert(value.trim()); // onInsert 호출
      setValue(''); // 입력 값 초기화
    },
    [onInsert, value],
  );

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
