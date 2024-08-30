interface Todos {
  id: number;
  text: string;
  checked: boolean;
}

interface TodoBoardProps {
  todos: Todos[];
  setTodos: (value: Todos[]) => void;
}

const TodoBoard = ({ todos, setTodos }: TodoBoardProps) => {
  //  todos 데이터에서 삭제가 된후 반영되는 함수
  const todoDeleteHandler = (id: number): void =>
    setTodos(todos.filter((todo) => todo.id !== id));

  return (
    <>
      <section>
        할일 게시판
        {todos.map((todo) => (
          <div key={todo.id}>
            <label htmlFor="내용">
              <p>
                <span>내용:</span>
                {todo.text}
              </p>
            </label>
            <label htmlFor="유무">
              <p>
                <span>{todo.checked === true ? "다한일" : "안한일"}</span>
              </p>
            </label>
            <div>
              <button onClick={() => todoDeleteHandler(todo.id)}>삭제</button>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default TodoBoard;
