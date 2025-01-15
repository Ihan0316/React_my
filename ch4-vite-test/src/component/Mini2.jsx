import React, { useState } from 'react';

const Mini2 = () => {
  const [form, setForm] = useState({
    username: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const { username, message } = form;

  const onChange = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };

  const onClick = () => {
    if (!username || !message) {
      alert('값을 모두 입력하세요');
    } else {
      setSubmitted(true);
    }
  };

  const onReset = () => {
    setForm({
      username: '',
      message: '',
    });
    setSubmitted(false);
  };

  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onClick();
    }
  };

  return (
    <div>
      <h1>미니 실습 2</h1>
      {submitted && (
        <>
          <h2>username : {username}</h2>
          <h2>message : {message}</h2>
        </>
      )}

      <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={username}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />

      <input
        type="text"
        name="message"
        placeholder="아무거나 입력해 보세요"
        value={message}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />

      <button onClick={onClick}>확인</button>
      <button onClick={onReset}>초기화</button>
    </div>
  );
};

export default Mini2;
