import React, { Component } from 'react';

class Counter extends Component {
  //방법1
  // constructor(props) {
  //     super(props);
  //     // state의 초깃값 설정하기
  //     this.state = {
  //         number: 0,
  //         fixedNumber: 0,
  //     };
  // }

  //방법2, 생성자 없이 초깃값 설정.
  // state의 초깃값 설정
  state = {
    number: 0,
    fixedNumber: 0,
  };

  render() {
    const { number, fixedNumber } = this.state; // state를 조회할 때는 this.state로 조회합니다.
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값: {fixedNumber}</h2>
        <button
          // onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정합니다.
          // onClick={() => {
          //     // this.setState를 사용하여 state에 새로운 값을 넣을 수 있습니다.
          //     this.setState({ number: number + 1 });
          //     // 추가 작업1, 두번 호출해보기.
          //     // this.setState({ number: this.state.number + 1 });
          //     // 추가 작업2, 두번 호출 해결책.
          //     // 함수 형태로 작업 하기.
          //     this.setState(
          //         (prevState) => {
          //             return {
          //                 number: prevState.number + 1,
          //             }
          //         }
          //     ) // 추가 작업 2,
          // }}

          // 방법2,
          //setState 작업 후, 추가 작업 더 진행해보기.
          onClick={() => {
            this.setState({ number: this.state.number + 1 }, () => {
              console.log('방금 setState가 호출되었습니다.');
              console.log(this.state);
            });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
