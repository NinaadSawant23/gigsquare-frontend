import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserAuth from './UserAuth/userAuth';
import Home from './components/Home/Home';

const App = () => {
  localStorage.clear();
  return (
    <>
      <BrowserRouter>
        <Routes>
           <Route path="/" element={<UserAuth />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;