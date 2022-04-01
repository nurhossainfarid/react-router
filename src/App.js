
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './comoponents/Header/Header';
import Home from './comoponents/Home/Home';
import Friends from './comoponents/Friends/Friends';
import About from './comoponents/About/About';
import NotFound from './comoponents/NotFound/NotFound'
import FriendDetails from './comoponents/FriendDetails/FriendDetails';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}>Home</Route>
        <Route path='/friends' element={<Friends></Friends>}>Friends</Route>
        <Route path='/friend/:friendID' element={<FriendDetails></FriendDetails>}></Route>
        <Route path='/about' element={<About></About>}>About</Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>

    </div>
  );
}

export default App;
