const MyComponent = (props) => {
  return (
    <>
      <div>
        <h2>새로운 컴포넌트</h2>
        <h2>데이터 전달받기 : {props.name}</h2>
      </div>
    </>
  );
};

MyComponent.defaultProps = {
  name: '기본값',
};

export default MyComponent;
