import { useState, useRef, useCallback } from 'react';
import './App.css';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트의 기초 알아보기',
      checked: true,
    },
    {
      id: 2,
      text: '컴포넌트 스타일링해 보기',
      checked: true,
    },
    {
      id: 3,
      text: '일정 관리 앱 만들어 보기',
      checked: false,
    },
  ]);

  // 고유 id로 사용될 값
  // ref를 사용하여 변수 담기
  const nextId = useRef(4);
  const [currentCheck, SetCurrentCheck] = useState(
    todos.filter((todo) => todo.checked).length,
  );

  const onInsert = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    setTodos((todos) => todos.concat(todo)); // 새로운 항목 추가
    nextId.current += 1; // nextId를 1씩 증가
  }, []);

  const onRemove = useCallback((id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }, []);

  const onToggle = useCallback((id) => {
    let checkDelta = 0;

    setTodos((todos) =>
      todos.map((todo) => {
        if (todo.id === id) {
          const newChecked = !todo.checked;
          checkDelta = newChecked ? 1 : -1; // 변화량 계산
          return { ...todo, checked: newChecked };
        }
        return todo;
      }),
    );

    // currentCheck를 한 번만 업데이트
    SetCurrentCheck((currentCheck) => currentCheck + checkDelta);
  }, []);

  // 모든 항목의 checked 상태를 반전시키는 함수
  const onToggleAll = useCallback(() => {
    setTodos((todos) => {
      const newCheckedState = todos.every((todo) => todo.checked);
      // 모든 항목의 checked 상태를 반전
      return todos.map((todo) => ({
        ...todo,
        checked: !newCheckedState,
      }));
    });

    // currentCheck를 전체 항목 수에 맞게 업데이트
    SetCurrentCheck((currentCheck) =>
      currentCheck === todos.length ? 0 : todos.length,
    );
  }, [todos]);

  return (
    <>
      <h2 className="react">ch10 일정 관리 애플리케이션 예제</h2>
      <TodoTemplate>
        <TodoInsert onInsert={onInsert} />

        {/* "체크된 항목"만 필터링하여 렌더링 */}
        <h3>체크된 항목</h3>
        <TodoList
          todos={todos.filter((todo) => todo.checked)}
          onRemove={onRemove}
          onToggle={onToggle}
        />

        {/* "미체크 항목"만 필터링하여 렌더링 */}
        <h3>미체크 항목</h3>
        <TodoList
          todos={todos.filter((todo) => !todo.checked)}
          onRemove={onRemove}
          onToggle={onToggle}
        />

        <div>
          <button className="button" onClick={onToggleAll}>
            {todos.every((todo) => todo.checked) ? '모두 해제' : '모두 선택'}
          </button>
          <p>Current Count : {currentCheck}</p>
        </div>
      </TodoTemplate>
    </>
  );
}

export default App;
