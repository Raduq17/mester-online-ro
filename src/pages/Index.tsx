
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SearchSection from '@/components/home/SearchSection';
import ServiceGrid from '@/components/home/ServiceGrid';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-off-white">
      <Header />
      
      <main className="flex-grow">
        <div className="relative">
          <div 
            className="absolute inset-0 bg-cover bg-center z-0" 
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3')", 
              filter: "brightness(0.4)"
            }}
          ></div>
          
          <div className="relative z-10 py-16 md:py-24">
            <div className="container-custom">
              <SearchSection />
            </div>
          </div>
        </div>
        
        <div className="container-custom py-12">
          <ServiceGrid city="București" />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
