import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Feed from './pages/Feed';
import SignIn from './pages/SignIn';
import Navbar from './components/Navbar';
import SignUp from './pages/SignUp';

const AppRoutes = () => {
  const location = useLocation();
  const isFeedPage = location.pathname === '/';

  return (
    <>
      {isFeedPage && <Navbar />}
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
