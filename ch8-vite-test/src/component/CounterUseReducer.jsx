import React, { useReducer } from 'react';

// 준비물1, 리듀서 함수는,
// 파라미터, state, a
// action(나중에 type키로, 실행할 내용을 값으로 사용)
// type: "JOIN"
// type: "JOIN/SUCCESS"
// 새로운 상태를 반환
function reducer(state, action) {
  // action.type에 따라 다른 작업 수행
  switch (action.type) {
    case 'INCREMENT':
      return { value: state.value + 1 };
    case 'DECREMENT':
      return { value: state.value - 1 };
    default:
      // 아무것도 해당되지 않을 때 기존 상태 반환
      return state;
  }
}

const CounterUseReducer = () => {
  // 정의
  // useReducer(리듀서함수, 상태 초기값)
  // dispatch -> 호출하면, 위의 리듀서 함수를 호출
  // dispatch(액션), 액션, 객체, 상태를 가지고있음
  // 상태의 얘시) { type: 'INCREMENT' }
  // 예시) dispatch({ type: 'INCREMENT' })}
  const [state, dispatch] = useReducer(reducer, {
    value: 0, // 초기 상태
  });

  return (
    <div>
      <p>
        현재 카운터 값은 <b>{state.value}</b>입니다.
      </p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+1</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-1</button>
    </div>
  );
};

export default CounterUseReducer;