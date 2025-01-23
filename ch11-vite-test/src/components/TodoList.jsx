import React, { useCallback } from 'react';
import { List } from 'react-virtualized';
import TodoListItem from './TodoListItem';
import './TodoList.scss';
// 추가 1-1 , onRemove
// 추가 2-1 , onToggle
const TodoList = ({ todos, onRemove, onToggle }) => {
  const rowRenderer = useCallback(
    ({ index, key, style }) => {
      const todo = todos[index];
      return (
        <TodoListItem
          todo={todo}
          key={key}
          onRemove={onRemove}
          onToggle={onToggle}
          style={style}
        />
      );
    },
    [onRemove, onToggle, todos],
  );

  return (
    // <div className="TodoList">
    //   {todos.map((todo) => (
    //     <TodoListItem
    //       todo={todo}
    //       key={todo.id}
    //       // 추가 1-2 , onRemove
    //       // 추가 2-2 , onToggle
    //       onRemove={onRemove}
    //       onToggle={onToggle}
    //     />
    //   ))}
    // </div>
    <List
      className="TodoList"
      width={512} // 전체 너비
      height={513} // 전체 높이
      rowCount={todos.length} // 항목 개수
      rowHeight={57} // 각 항목의 높이
      rowRenderer={rowRenderer} // 항목을 렌더링하는 함수
      list={todos} // 렌더링할 데이터 배열
      style={{ outline: 'none' }} // 기본 outline 스타일 제거
    />
  );
};

export default React.memo(TodoList);
