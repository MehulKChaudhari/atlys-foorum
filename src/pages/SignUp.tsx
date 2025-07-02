import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { DUMMY_USERS } from '../features/auth/dummyUsers';
import { useAuth } from '../features/auth/authContext';
import './SignIn.css';

const SignUp: React.FC = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();
  const { login } = useAuth();

  const isValidEmail = (value: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    setError('');

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      setError('Please fill in all fields');
      return;
    }

    if (!isValidEmail(email)) {
      setError('Enter a valid email address');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    const existingUser = DUMMY_USERS.find((u) => u.email === email);
    if (existingUser) {
      setError('User already exists');
      return;
    }

    const newUser = { email, password, firstName, lastName };
    DUMMY_USERS.push(newUser);
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
          Sign up for an account
        </h2>

        <div className="mb-5 flex gap-3">
          <div className="w-1/2">
            <label className="mb-1 block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 focus:ring-2 focus:ring-blue-600 focus:outline-none"
            />
          </div>
          <div className="w-1/2">
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 focus:ring-2 focus:ring-blue-600 focus:outline-none"
            />
          </div>
        </div>

        <div className="mb-5">
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Email address
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 focus:ring-2 focus:ring-blue-600 focus:outline-none"
          />
        </div>

        <div className="mb-5">
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 focus:ring-2 focus:ring-blue-600 focus:outline-none"
          />
        </div>

        <div className="mb-5">
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Confirm Password
          </label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 focus:ring-2 focus:ring-blue-600 focus:outline-none"
          />
        </div>

        {error && <p className="input-error">{error}</p>}

        <button
          type="submit"
          className="w-full rounded-lg bg-blue-600 py-2.5 font-medium text-white hover:bg-blue-700"
        >
          Sign Up
        </button>

        <div className="mt-6 text-center text-sm text-gray-500">
          <span>Already have an account? </span>
          <Link to="/signin" className="text-blue-600 hover:underline">
            Sign in
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
