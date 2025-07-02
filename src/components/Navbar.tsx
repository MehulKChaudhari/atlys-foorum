import { useNavigate } from 'react-router-dom';
import { useAuth } from '../features/auth/authContext';
import { LogIn, LogOut } from 'lucide-react';

const Navbar = () => {
  const { isAuthenticated, currentUser, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <header className="flex w-full items-center justify-between border-b border-gray-200 bg-white px-6 py-4">
      <div
        onClick={() => navigate('/')}
        className="flex cursor-pointer items-center gap-2"
      >
        <img
          src="/foorum.png"
          alt="User avatar"
          className="h-8 w-8 object-cover"
        />
        <span className="text-lg font-semibold text-gray-900">foo-rum</span>
      </div>

      {isAuthenticated && currentUser ? (
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <img
              src="https://i.pravatar.cc/150?img=67"
              alt="User avatar"
              className="h-8 w-8 rounded-full object-cover"
            />
            <span className="text-sm font-medium text-gray-800">
              {currentUser.firstName}
            </span>
          </div>
          <button
            onClick={logout}
            className="flex items-center gap-1 text-sm font-semibold text-gray-900 hover:underline"
          >
            Logout <LogOut size={18} />
          </button>
        </div>
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
