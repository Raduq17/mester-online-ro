
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';
import PhoneInput from './PhoneInput';

const RegisterForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [newsletter, setNewsletter] = useState(false);
  
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, we would call an API endpoint here
    // For now, just simulate a registration process
    if (firstName && lastName && email && phone && password && acceptTerms) {
      // Mock successful registration
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userAvatar', 'https://randomuser.me/api/portraits/men/1.jpg');
      
      toast.success('Înregistrare reușită!', {
        description: 'Contul tău a fost creat cu succes.'
      });
      
      navigate('/');
    } else {
      if (!acceptTerms) {
        toast.error('Trebuie să accepți termenii și condițiile.');
      } else {
        toast.error('Te rugăm să completezi toate câmpurile obligatorii.');
      }
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">Creează un cont nou</h2>
      
      <form onSubmit={handleRegister} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">Prenume</Label>
            <Input 
              id="firstName" 
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="lastName">Nume</Label>
            <Input 
              id="lastName" 
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
        </div>
        
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
        
        <div className="space-y-2">
          <Label htmlFor="phone">Telefon</Label>
          <PhoneInput
            value={phone}
            onChange={setPhone}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="password">Parolă</Label>
          <Input 
            id="password" 
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        
        <div className="space-y-3 pt-2">
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="terms" 
              checked={acceptTerms}
              onCheckedChange={(checked) => setAcceptTerms(checked === true)}
              required
            />
            <Label htmlFor="terms" className="text-sm font-normal">
              Accept <a href="/terms" className="text-primary hover:underline">Termenii și Condițiile</a>
            </Label>
          </div>
          
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="newsletter" 
              checked={newsletter}
              onCheckedChange={(checked) => setNewsletter(checked === true)}
            />
            <Label htmlFor="newsletter" className="text-sm font-normal">
              Abonează-te la newsletter
            </Label>
          </div>
        </div>
        
        <Button type="submit" className="w-full">
          Înregistrează-te
        </Button>
      </form>
      
      <div className="mt-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <Separator />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white px-2 text-muted-foreground">
              Sau înregistrează-te cu
            </span>
          </div>
        </div>
        
        <div className="mt-6 grid grid-cols-3 gap-3">
          <Button variant="outline" className="w-full">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
            </svg>
            Facebook
          </Button>
          <Button variant="outline" className="w-full">
            <svg className="w-5 h-5 mr-2" aria-hidden="true" fill="currentColor" viewBox="0 0 488 512">
              <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
            </svg>
            Google
          </Button>
          <Button variant="outline" className="w-full">
            <svg className="w-5 h-5 mr-2" aria-hidden="true" fill="currentColor" viewBox="0 0 384 512">
              <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path>
            </svg>
            Apple
          </Button>
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-sm">
            Ai deja un cont?{' '}
            <a href="/login" className="text-primary font-medium hover:underline">
              Conectează-te
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
