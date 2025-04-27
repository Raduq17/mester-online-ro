
import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-off-white">
      <Header />
      
      <main className="flex-grow container-custom py-12">
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h2 className="text-2xl font-bold text-center mb-6">Resetare parolă</h2>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              
              <Button type="submit" className="w-full">
                Trimite
              </Button>
            </form>
          ) : (
            <div className="text-center space-y-4">
              <h2 className="text-2xl font-bold mb-4">Mulțumim mult!</h2>
              <p className="text-gray-600 mb-6">
                Vei primi un email cu toți pașii pentru a-ți reseta parola.
              </p>
              <Button onClick={() => navigate('/')}>
                Revino la pagina principală
              </Button>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ForgotPassword;
