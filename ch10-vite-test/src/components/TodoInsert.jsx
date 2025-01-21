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

  const onClick = useCallback(() => {
    onInsert(value);
    setValue(''); // value 값 초기화
  }, [onInsert, value]);

  return (
    <form className="TodoInsert" onSubmit={(e) => e.preventDefault()}>
      <input
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
      />
      <button type="button" onClick={onClick}>
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
