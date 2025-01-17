import { useState } from 'react';
import Info from './component/Info'; // 파일 경로 수정
import InfoUseReducer from './component/InfoUseReducer';
import CounterUseReducer from './component/CounterUseReducer';
import Average from './component/Average';
import AverageUseCallback from './component/AverageUseCallback';
import AverageUseRef from './component/AverageUseRef';
import InfoCustomHooks from './component/InfoCustomHooks';
import Mini4 from './component/Mini4';

const App = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      {/* <div>
        <h1 className="react">ch8 hooks 함수형 컴포넌트 추가 기능 확인</h1>
        <button
          onClick={() => {
            setVisible(!visible);
          }}
        >
          {visible ? '숨기기' : '보이기'}
        </button>
        <hr />
        {visible && <Info />}
      </div>
      <h2>useReducer 버전 Counter</h2>
      <CounterUseReducer />
      <hr />
      <InfoUseReducer />
      <hr />
      <Average />
      <hr />
      <h2>useCallback 버전 Average</h2>
      <AverageUseCallback />
      <hr />
      <AverageUseRef />
      <hr />
      <h2>customHooks 사용해보기</h2>
      <InfoCustomHooks />
      <hr /> */}
      <h2>미니실습4</h2>
      <Mini4 />
    </>
  );
};

export default App;
