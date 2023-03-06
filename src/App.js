import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './page/Home';
import Error from './page/Error';
import Login from './page/Login';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/' element={<Login />} />
        <Route path='/error' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;