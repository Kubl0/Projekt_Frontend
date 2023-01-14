import LoginForm from './components/login/loginForm';
import { createContext, useState } from 'react';
import DrinkList from './components/drinks/drinkList';
import CommentForm from './components/comments/commentForm';
import CommentList from './components/comments/commentList';

export const loggedContext = createContext();

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState({});

  return (
    <loggedContext.Provider value={isLogged}>
      <LoginForm isLogged={isLogged} setIsLogged={setIsLogged} user={user} setUser={setUser}/>
      <DrinkList/>
      <CommentForm user={user}/>
      <CommentList />
    </loggedContext.Provider>
  );
}

export default App;
