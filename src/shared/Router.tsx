import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoHome from "../pages/TodoHome";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TodoHome />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
