const MyComponent = (props) => {
  // 비구조화 할당 , 구조분해,
  // name = props.name, children = props.children
  const { name, children } = props;
  return (
    <div>
      샘플 나의 첫 컴포넌트 만들기.
      <h2>순서1, 부모 컴포넌트에서 전달 받은 props 데이터를 사용하기.</h2>
      {/* <h3>데이터 전달 받기 props.name : {props.name}</h3> */}
      <h3>데이터 전달 받기 props.name : {name}</h3>
      <h2>순서2, 부모 컴포넌트에서 전달 받은 children 데이터를 사용하기.</h2>
      {/* <h3>데이터 전달 확인 props.children : {props.children}</h3> */}
      <h3>데이터 전달 확인 props.children : {children}</h3>
    </div>
  );
};

MyComponent.defaultProps = {
  name: '기본 이름',
};

export default MyComponent;
