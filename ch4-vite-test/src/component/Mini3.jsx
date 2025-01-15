import React, { useState } from 'react';

const Mini3 = () => {
  const [form, setForm] = useState({
    username: '',
    password: '',
    email: '',
    passwordConfirm: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const { username, password, passwordConfirm, email } = form;

  const onChange = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };

  const onClick = () => {
    if (!username || !password || !email || !passwordConfirm) {
      alert('값을 모두 입력하세요');
    } else {
      if (password !== passwordConfirm) {
        alert('비밀번호가 일치하지 않습니다');
      } else {
        alert('회원가입 성공');
        setSubmitted(true);
      }
    }
  };

  const onReset = () => {
    setForm({
      username: '',
      password: '',
      email: '',
      passwordConfirm: '',
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
      <h1>미니 실습 3 - 회원가입</h1>
      {submitted && (
        <>
          <h2>username : {username}</h2>
          <h2>email : {email}</h2>
          <h2>password : {password}</h2>
        </>
      )}
      <div>
        <input
          type="text"
          name="username"
          placeholder="사용자명"
          value={username}
          onChange={onChange}
          onKeyPress={onKeyPress}
        />
      </div>

      <div>
        <input
          type="text"
          name="email"
          placeholder="이메일"
          value={email}
          onChange={onChange}
          onKeyPress={onKeyPress}
        />
      </div>
      <div>
        <input
          type="text"
          name="password"
          placeholder="비밀번호"
          value={password}
          onChange={onChange}
          onKeyPress={onKeyPress}
        />
      </div>
      <div>
        <input
          type="text"
          name="passwordConfirm"
          placeholder="비밀번호 확인"
          value={passwordConfirm}
          onChange={onChange}
          onKeyPress={onKeyPress}
        />
      </div>

      <button onClick={onClick}>확인</button>
      <button onClick={onReset}>초기화</button>
    </div>
  );
};

export default Mini3;
