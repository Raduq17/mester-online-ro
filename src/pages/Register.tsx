
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import RegisterForm from '@/components/auth/RegisterForm';

const Register = () => {
  return (
    <div className="flex flex-col min-h-screen bg-off-white">
      <Header />
      
      <main className="flex-grow container-custom py-12">
        <RegisterForm />
      </main>
      
      <Footer />
    </div>
  );
};

export default Register;
