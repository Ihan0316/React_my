import React, { useState } from 'react';

const Mini1 = () => {
  const [message, setMessage] = useState('기본값 입니다.');
  const [color, setColor] = useState('black');
  const [user, setUser] = useState('');

  const onClickEnter = () => setMessage('안녕하세요!');
  const onClickLeave = () => setMessage('안녕히 가세요!');
  const onClickWelcome = () => setMessage('환영합니다!');
  const onClickUser = () => setMessage(user);
  const onClickDelete = () => {
    setUser(''), setMessage(''), setColor('black');
  };

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <button onClick={onClickWelcome}>환영</button>
      <div>
        <input
          type="text"
          placeholder="메세지를 입력해주세요"
          value={user}
          //   주의사항, 이벤트 핸들러에서 값을 함수 형식으로 작성
          onChange={(e) => setUser(e.target.value)}
        />
        <button onClick={onClickUser}>사용자</button>
        <button onClick={onClickDelete}>삭제</button>
      </div>
      <h1 style={{ color }}>{message}</h1>
      <button style={{ color: 'red' }} onClick={() => setColor('red')}>
        빨간색
      </button>
      <button style={{ color: 'green' }} onClick={() => setColor('green')}>
        초록색
      </button>
      <button style={{ color: 'blue' }} onClick={() => setColor('blue')}>
        파란색
      </button>
      <button style={{ color: 'black' }} onClick={() => setColor('black')}>
        색상 초기화
      </button>
    </div>
  );
};

export default Mini1;
