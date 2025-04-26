
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Calendar } from '@/components/ui/calendar';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { toast } from 'sonner';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { ro } from 'date-fns/locale';

// Mock handyman data for this example
const mockHandyman = {
  id: 1,
  name: "Ion Popescu",
  avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  specialization: "Amenajări interioare"
};

const HandymanContact = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [address, setAddress] = useState('');
  const [date, setDate] = useState<Date | undefined>(undefined);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title || !description || !address || !date) {
      toast.error('Completează toate câmpurile obligatorii.');
      return;
    }
    
    toast.success(`${mockHandyman.name} îți va răspunde în cel mai scurt timp.`);
    setTimeout(() => {
      navigate('/');
    }, 2000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-off-white">
      <Header />
      
      <main className="flex-grow container-custom py-8">
        <Button 
          variant="outline" 
          className="mb-6"
          onClick={() => navigate(-1)}
        >
          ← Înapoi
        </Button>
        
        <Card className="overflow-hidden">
          <CardHeader className="bg-primary text-white">
            <div className="flex items-center gap-4">
              <img 
                src={mockHandyman.avatar} 
                alt={mockHandyman.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-white"
              />
              <div>
                <CardTitle>Contactează pe {mockHandyman.name}</CardTitle>
                <p className="text-sm opacity-90">{mockHandyman.specialization}</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Titlu proiect *</Label>
                <Input 
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Ex: Renovare baie"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="description">Descriere problemă *</Label>
                <Textarea 
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Descrie proiectul tău cât mai detaliat posibil..."
                  rows={6}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="address">Adresă proiect *</Label>
                <Input 
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Adresa completă unde se va desfășura lucrarea"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="date">Dată disponibilă pentru vizită *</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, 'd MMMM yyyy', { locale: ro }) : 'Selectează o dată'}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      disabled={(date) => date < new Date()}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              
              <div className="pt-4">
                <Button type="submit" className="w-full">
                  Trimite solicitarea
                </Button>
              </div>
              
              <div className="text-xs text-gray-500 text-center">
                Prin trimiterea formularului, datele tale de contact vor fi transmise meșterului pentru a putea lua legătura cu tine.
              </div>
            </form>
          </CardContent>
        </Card>
      </main>
      
      <Footer />
    </div>
  );
};

export default HandymanContact;
