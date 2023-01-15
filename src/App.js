import LoginForm from "./components/login/loginForm";
import { createContext, useState } from "react";
import DrinkList from "./components/drinks/drinkList";
import DrinkDetails from "./components/drinks/drinkDetails";
import CommentForm from "./components/comments/commentForm";
import CommentList from "./components/comments/commentList";
import "./style.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/nav/navBar";
import Err404 from "./components/nav/err404";
import CoctailTable from "./components/statistics/coctailTable";
export const loggedContext = createContext();
function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState({});

  return (
    <loggedContext.Provider value={{ isLogged: isLogged, user: user }}>
      <LoginForm
        isLogged={isLogged}
        setIsLogged={setIsLogged}
        user={user}
        setUser={setUser}
      />
      <NavBar />
      <Routes>
        <Route path="/" element={<DrinkList />} />
        <Route path=":id" element={<DrinkDetails />} />
        <Route path="statistics" element={<CoctailTable />} />
        <Route path="*" element={<Err404 />} />
      </Routes>
      <CommentForm user={user.username} />
      <CommentList />
    </loggedContext.Provider>
  );
}

export default App;
