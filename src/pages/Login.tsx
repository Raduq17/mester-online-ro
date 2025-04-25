
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import LoginForm from '@/components/auth/LoginForm';

const Login = () => {
  return (
    <div className="flex flex-col min-h-screen bg-off-white">
      <Header />
      
      <main className="flex-grow container-custom py-12">
        <LoginForm />
      </main>
      
      <Footer />
    </div>
  );
};

export default Login;
