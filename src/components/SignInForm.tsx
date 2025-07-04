import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../features/auth/authContext';
import { DUMMY_USERS } from '../features/auth/dummyUsers';
import { Eye, EyeOff } from 'lucide-react';

type Props = {
  onSuccess?: () => void;
};

const SignInForm: React.FC<Props> = ({ onSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const isValidEmail = (value: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(value);

    return isValidEmail;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!isValidEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    const user = DUMMY_USERS.find((u) => u.email === email);

    if (!user) {
      setError('Email not found');
      return;
    }

    if (user.password !== password) {
      setError('Incorrect password');
      return;
    }

    const { firstName, lastName } = user;
    login({ email, firstName, lastName });
    if (onSuccess) {
      onSuccess();
    } else {
      navigate('/');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="form-shadow w-full max-w-sm rounded-2xl border border-gray-200 bg-white p-8"
    >
      <h2 className="mb-6 text-center text-xl font-semibold text-gray-900">
        Sign in to your account
      </h2>

      <div className="mb-3">
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Email address
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 focus:ring-2 focus:ring-blue-600 focus:outline-none ${error && !isValidEmail(email) ? 'input-error' : ''}`}
        />
      </div>

      <div className="mb-3">
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Password
        </label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 focus:ring-2 focus:ring-blue-600 focus:outline-none ${error && error.includes('password') ? 'input-error' : ''}`}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 text-gray-500 hover:text-gray-700 showpassword-toggle"
          >
            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {error && <p className="input-error">{error}</p>}

      <button
        type="submit"
        className="w-full rounded-lg bg-blue-600 py-2.5 font-medium text-white hover:bg-blue-700"
      >
        Sign In
      </button>

      <div className="mt-6 text-center text-xs leading-tight text-neutral-400">
        <p className="mb-1 font-medium">Test accounts:</p>
        <p>demo@example.com / password123</p>
        <p>test@user.com / testpass</p>
      </div>

      <div className="mt-6 text-center text-sm text-gray-500">
        <span>Don't have an account? </span>
        <Link to="/signup" className="text-blue-600 hover:underline">
          Sign up
        </Link>
      </div>
    </form>
  );
};

export default SignInForm;
