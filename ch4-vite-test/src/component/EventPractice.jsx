import React, { Component } from 'react';

class EventPractice extends Component {
  //추가1
  state = {
    message: '',
  };

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({
      message: e.target.value,
    });
  }

  handleClick() {
    alert(this.state.message);
    this.setState({
      message: '',
    });
  }

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <h2>message : {this.state.message}</h2>
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해 보세요"
          //추가2,
          value={this.state.message}
          //추가3
          //   방법1
          //   onChange={(e) => {
          //     //추가3-2, 이부분 가장 중요함.
          //     this.setState({
          //       message: e.target.value,
          //     });
          //   }}
          //   방법2
          onChange={this.handleChange}
        />

        {/* 방법1 */}
        {/* <button
          onClick={() => {
            alert(this.state.message);
            this.setState({ message: '' });
          }}
        >
          초기화
        </button> */}
        {/* 방법2, 함수를 따로 분리해서 작업 */}
        <button onClick={this.handleClick}>초기화</button>
      </div>
    );
  }
}

export default EventPractice;
