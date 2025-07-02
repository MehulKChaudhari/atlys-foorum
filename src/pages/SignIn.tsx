import React from 'react';
import SignInForm from '../components/SignInForm';

const SignIn: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4">
      <div className="mb-10 text-center">
        <h1 className="brand-title">foo-rum</h1>
        <p className="brand-sub">by Atlys</p>
      </div>
      <SignInForm />
    </div>
  );
};

export default SignIn;
