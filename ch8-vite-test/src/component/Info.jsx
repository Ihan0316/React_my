// useEffect 추가 1-1
import { useState, useEffect } from 'react';

const Info = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');

  // useEffect 추가 1-2
  // useEffect(콜백 함수, 의존성 배열)
  useEffect(() => {
    console.log('useEffect 호출, 렌더링이 완료되었습니다!');
    console.log({
      name,
      nickname,
    });
    // 뒷정리 함수 추가
    return () => {
      console.log('useEffect 함수 후, 뒷정리 함수 호출, cleanup');
      console.log(name);
    };
    //   }, [name, nickname]); // name과 nickname이 변경될 때마다 useEffect 실행
  }, []); // 빈 배열로, 마운트시 한번만 호출

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickname} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임:</b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
