
import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, we would send this data to a backend API
    if (name && email && subject && message) {
      toast.success('Mesaj trimis!', {
        description: 'Îți mulțumim pentru mesaj. Te vom contacta în curând.'
      });
      
      // Reset form
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } else {
      toast.error('Formular incomplet', {
        description: 'Te rugăm să completezi toate câmpurile obligatorii.'
      });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-off-white">
      <Header />
      
      <main className="flex-grow container-custom py-12">
        <h1 className="text-3xl font-bold mb-2">Contactează-ne</h1>
        <p className="text-gray-600 mb-8">Ai întrebări sau sugestii? Trimite-ne un mesaj și îți vom răspunde cât mai curând.</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow p-8">
            <h2 className="text-xl font-semibold mb-6">Trimite-ne un mesaj</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nume complet</Label>
                <Input 
                  id="name" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                  placeholder="Numele tău" 
                  required 
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  placeholder="email@exemplu.com" 
                  required 
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">Subiect</Label>
                <Input 
                  id="subject" 
                  value={subject} 
                  onChange={(e) => setSubject(e.target.value)} 
                  placeholder="Subiectul mesajului" 
                  required 
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Mesaj</Label>
                <Textarea 
                  id="message" 
                  value={message} 
                  onChange={(e) => setMessage(e.target.value)} 
                  placeholder="Scrie mesajul tău aici..." 
                  rows={5}
                  required 
                />
              </div>
              
              <Button type="submit" className="w-full">
                Trimite mesaj
              </Button>
            </form>
          </div>
          
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="p-8">
              <h2 className="text-xl font-semibold mb-6">Informații de contact</h2>
              
              <div className="space-y-6">
                <div>
                  <p className="font-medium">Adresă</p>
                  <p className="text-gray-600">Strada Exemplu 123, Sector 1, București 010101, România</p>
                </div>
                
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:contact@mesteronline.ro" className="text-primary hover:underline">contact@mesteronline.ro</a>
                </div>
                
                <div>
                  <p className="font-medium">Telefon</p>
                  <a href="tel:+40755123456" className="text-primary hover:underline">+40 755 123 456</a>
                </div>
                
                <div>
                  <p className="font-medium">Program</p>
                  <p className="text-gray-600">Luni - Vineri: 09:00 - 18:00</p>
                  <p className="text-gray-600">Sâmbătă - Duminică: Închis</p>
                </div>
              </div>
            </div>
            
            {/* Simple map placeholder - in a real app, this would be an actual embedded map */}
            <div className="h-64 bg-gray-200 relative">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                Hartă Google Maps
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
