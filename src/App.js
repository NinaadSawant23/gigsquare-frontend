import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserAuth from './UserAuth/userAuth';

const App = () => {
  localStorage.clear();
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<UserAuth />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;