import './App.css';
import Login from './Comp/Login';
import Profile from './Comp/Profile';
import UserContextProvider from './Context/UserContextProvider';

function App() {
  return (
    <UserContextProvider>
      toogle card project start
      <Login/>
      <Profile/>
    </UserContextProvider>
  );
}

export default App;
