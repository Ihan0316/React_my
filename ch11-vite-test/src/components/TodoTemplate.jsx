// 파일 최상단에 추가
/* eslint-disable react/prop-types */

import './TodoTemplate.scss';

const TodoTemplate = ({ children }) => {
  return (
    <div className="TodoTemplate">
      <div className="app-title">일정 관리</div>
      <div className="content">{children}</div>
    </div>
  );
};

export default TodoTemplate;
