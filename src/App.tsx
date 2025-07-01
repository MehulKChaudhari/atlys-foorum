import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Feed from './pages/Feed';
import SignIn from './pages/SignIn';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
