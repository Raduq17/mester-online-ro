
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const ANPC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-off-white">
      <Header />
      
      <main className="flex-grow container-custom py-12">
        <h1 className="text-3xl font-bold mb-8">ANPC</h1>
        
        <div className="bg-white rounded-lg shadow p-8">
          {/* Empty content area as per requirements */}
          <div className="h-96 flex items-center justify-center text-gray-400">
            Conținut în curs de actualizare...
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ANPC;
