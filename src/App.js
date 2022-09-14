import { Route, Routes } from 'react-router-dom';
import './App.css';
import Canvas from './components/Canvas/Canvas';
import Login from './components/Registration/Login/Login';
import Signup from './components/Registration/Signup/Signup';

function App() {


  return (
    <div className="App">

       <Routes>
          <Route path='/' element={<Login></Login>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/signup' element={<Signup></Signup>}></Route>
          <Route path='/canvas' element={<Canvas></Canvas>}></Route>
       </Routes>
    </div>
  );
}

export default App;
