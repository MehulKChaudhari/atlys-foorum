import { useNavigate } from 'react-router-dom';
import { useAuth } from '../features/auth/authContext';
import { LogIn, LogOut, MessageCircle } from 'lucide-react';

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <header className="flex w-full items-center justify-between border-b border-gray-200 bg-white px-6 py-4">
      <div
        onClick={() => navigate('/')}
        className="flex cursor-pointer items-center gap-2"
      >
        <MessageCircle size={22} strokeWidth={2.2} />
        <span className="text-lg font-semibold text-gray-900">foo-rum</span>
      </div>

      {isAuthenticated ? (
        <button
          onClick={logout}
          className="flex cursor-pointer items-center gap-1 text-sm font-semibold text-gray-900 hover:underline"
        >
          Logout <LogOut size={18} />
        </button>
      ) : (
        <button
          onClick={() => navigate('/signin')}
          className="flex cursor-pointer items-center gap-1 text-sm font-semibold text-gray-900 hover:underline"
        >
          Login
          <LogIn size={18} strokeWidth={2.2} />
        </button>
      )}
    </header>
  );
};

export default Navbar;
