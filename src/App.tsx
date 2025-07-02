import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Feed from './pages/Feed';
import SignIn from './pages/SignIn';
import Navbar from './components/Navbar';

const AppRoutes = () => {
  const location = useLocation();
  const isSignInPage = location.pathname === '/signin';

  return (
    <>
      {!isSignInPage && <Navbar />}
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/signin" element={<SignIn />} />
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
