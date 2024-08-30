import { useState } from "react";
import TodoBoard from "../components/TodoBoard";

interface Todos {
  id: number;
  text: string;
  checked: boolean;
}

const TodoHome = () => {
  // todos 데이터
  const [todos, setTodos] = useState<Todos[]>([
    {
      id: 1,
      text: "고양이 놀아주기",
      checked: true,
    },
    {
      id: 2,
      text: "운동하러 가기",
      checked: false,
    },
    {
      id: 3,
      text: "할머니댁 놀러가기",
      checked: true,
    },
  ]);

  return (
    <>
      <header>
        <h1>할일목록</h1>
      </header>
      <TodoBoard todos={todos} setTodos={setTodos} />
    </>
  );
};

export default TodoHome;
