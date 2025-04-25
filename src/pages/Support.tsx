
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { MessageSquare, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Support = () => {
  return (
    <div className="flex flex-col min-h-screen bg-off-white">
      <Header />
      
      <main className="flex-grow container-custom py-12">
        <h1 className="text-3xl font-bold mb-2">Suport Clienți</h1>
        <p className="text-gray-600 mb-8">Suntem aici pentru a te ajuta. Alege metoda preferată de contact.</p>
        
        <div className="bg-white rounded-lg shadow p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-semibold mb-4">Cum putem să te ajutăm?</h2>
              <p className="text-gray-600 mb-6">
                Echipa noastră de suport este disponibilă pentru a răspunde la întrebările tale și a rezolva orice problemă pe care ai putea să o întâmpini.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Telefon</h3>
                    <p className="text-gray-600">Luni - Vineri: 09:00 - 18:00</p>
                    <a href="tel:+40755123456" className="text-primary hover:underline">+40 755 123 456</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-gray-600">Răspundem în 24 de ore</p>
                    <a href="mailto:suport@mesteronline.ro" className="text-primary hover:underline">suport@mesteronline.ro</a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border p-6 rounded-lg bg-gray-50">
              <div className="flex items-center mb-5">
                <MessageSquare className="h-6 w-6 text-primary mr-3" />
                <h3 className="text-lg font-semibold">Chat Live</h3>
              </div>
              
              <p className="text-gray-600 mb-6">
                Discută în timp real cu un reprezentant de suport. Suntem online și gata să te ajutăm.
              </p>
              
              <Button className="w-full">
                Începe Chat
              </Button>
              
              {/* This would be replaced by an actual chat widget in a real implementation */}
              <p className="text-xs text-gray-500 mt-4 text-center">
                Timp mediu de așteptare: 2 minute
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Support;
