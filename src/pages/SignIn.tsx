import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { DUMMY_USERS } from '../features/auth/dummyUsers';
import { useAuth } from '../features/auth/authContext';
import './SignIn.css';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [emailTouched, setEmailTouched] = useState<boolean>(false);

  const navigate = useNavigate();
  const { login } = useAuth();

  const isValidEmail = (value: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(value);

    return isValidEmail;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
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
    navigate('/');
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4">
      <div className="mb-10 text-center">
        <h1 className="brand-title">foo-rum</h1>
        <p className="brand-sub">by Atlys</p>
      </div>
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
            onBlur={() => setEmailTouched(true)}
            className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 focus:ring-2 focus:ring-blue-600 focus:outline-none"
          />
          {emailTouched && !isValidEmail(email) && (
            <p className="input-error">Enter a valid email address</p>
          )}
        </div>
        <div className="mb-3">
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 focus:ring-2 focus:ring-blue-600 focus:outline-none"
          />
        </div>
        {error && <p className="input-error">{error}</p>}
        <button
          type="submit"
          className="w-full rounded-lg bg-blue-600 py-2.5 font-medium text-white transition-colors hover:cursor-pointer hover:bg-blue-700"
        >
          Sign In
        </button>

        <div className="mt-6 text-center text-xs leading-tight text-neutral-400">
          <p className="mb-1 font-medium">Test accounts:</p>
          <p>demo@example.com / password123</p>
          <p>test@user.com / testpass</p>
        </div>

        <div className="mt-6 text-center text-sm text-gray-500">
          <span>Don't have an account?</span>
          <Link to="/signup" className="text-blue-600 hover:underline">
            Sign up
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
