
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin, User, Calendar as CalendarIcon } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { toast } from 'sonner';
import { format } from 'date-fns';
import { ro } from 'date-fns/locale';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

// Mock data
const mockRequests = [
  {
    id: '1',
    title: "Renovare baie",
    serviceType: "Amenajări interioare",
    address: "Str. Independenței 15, București",
    description: "Renovare completă baie, inclusiv înlocuire gresie, faianță și obiecte sanitare. Doresc să se păstreze poziționarea obiectelor sanitare și să se folosească materiale de calitate.",
    clientName: "Maria Ionescu",
    preferredDates: ["2025-05-10", "2025-05-11", "2025-05-12"],
    status: "pending" // pending, accepted, completed, rejected
  },
  {
    id: '2',
    title: "Montaj parchet dormitor",
    serviceType: "Montaj parchet",
    address: "Bd. Timișoara 35, București",
    description: "Montaj parchet laminat în dormitor, aproximativ 20mp. Am deja materialele necesare, am nevoie doar de manoperă.",
    clientName: "George Popescu",
    preferredDates: ["2025-05-15", "2025-05-16"],
    status: "pending"
  }
];

const timeSlots = [
  "08:00 - 10:00", 
  "10:00 - 12:00", 
  "12:00 - 14:00", 
  "14:00 - 16:00", 
  "16:00 - 18:00",
  "18:00 - 20:00"
];

const RequestDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const request = mockRequests.find(req => req.id === id);
  
  const [isAcceptDialogOpen, setIsAcceptDialogOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  if (!request) {
    return (
      <div className="flex flex-col min-h-screen bg-off-white">
        <Header />
        <main className="flex-grow container-custom py-8">
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <h2 className="text-xl font-medium mb-4">Solicitarea nu a fost găsită</h2>
            <Button onClick={() => navigate(-1)}>Înapoi</Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleAcceptRequest = () => {
    if (!selectedDate || !selectedTimeSlot) {
      toast.error("Vă rugăm să selectați o dată și un interval orar");
      return;
    }

    // Here you would update the request status in a real app
    setIsAcceptDialogOpen(false);
    toast.success("Solicitarea a fost acceptată!", {
      description: `Programare confirmată pentru ${format(selectedDate, 'dd MMMM yyyy', { locale: ro })}, ${selectedTimeSlot}`
    });
    navigate(-1);
  };

  const handleProposeNewDate = () => {
    // Here you would send a message to the client in a real app
    toast.success("Propunere trimisă!", {
      description: "Clientul va fi notificat despre propunerea dumneavoastră."
    });
    navigate(-1);
  };

  const handleDeclineRequest = () => {
    // Here you would delete the request in a real app
    toast.success("Solicitare refuzată", {
      description: "Solicitarea a fost ștearsă din lista dumneavoastră."
    });
    navigate(-1);
  };

  return (
    <div className="flex flex-col min-h-screen bg-off-white">
      <Header />
      
      <main className="flex-grow container-custom py-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-primary text-white p-6">
            <h1 className="text-2xl font-bold mb-2">{request.title}</h1>
            <p className="opacity-90">{request.serviceType}</p>
          </div>
          
          <div className="p-6">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <h2 className="text-xl font-semibold mb-4">Detalii solicitare</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium text-gray-700 mb-2">Descriere:</h3>
                    <p className="text-gray-800">{request.description}</p>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 mr-3 text-primary mt-1" />
                    <div>
                      <h3 className="font-medium text-gray-700">Adresă:</h3>
                      <p className="text-gray-800">{request.address}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <User className="w-5 h-5 mr-3 text-primary mt-1" />
                    <div>
                      <h3 className="font-medium text-gray-700">Client:</h3>
                      <p className="text-gray-800">{request.clientName}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Calendar className="w-5 h-5 mr-3 text-primary mt-1" />
                    <div>
                      <h3 className="font-medium text-gray-700">Date preferate pentru vizionare:</h3>
                      <ul className="list-disc list-inside text-gray-800">
                        {request.preferredDates.map((date, index) => (
                          <li key={index}>
                            {format(new Date(date), 'dd MMMM yyyy', { locale: ro })}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t flex flex-wrap gap-3">
                  <Button 
                    onClick={() => setIsAcceptDialogOpen(true)}
                    className="bg-primary hover:bg-primary/90"
                  >
                    Acceptă lucrarea
                  </Button>
                  
                  <Button 
                    variant="outline"
                    onClick={() => navigate(`/chat/${request.id}`)}
                  >
                    Răspunde
                  </Button>
                  
                  <Button 
                    variant="outline"
                    onClick={handleProposeNewDate}
                  >
                    Propune altă dată de vizionare
                  </Button>
                  
                  <Button 
                    variant="destructive"
                    onClick={handleDeclineRequest}
                  >
                    Refuză lucrarea
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Dialog open={isAcceptDialogOpen} onOpenChange={setIsAcceptDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Programează vizualizare</DialogTitle>
          </DialogHeader>
          
          <div className="grid gap-4 py-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Selectează data</label>
              <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left font-normal"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {selectedDate ? format(selectedDate, 'PPP', { locale: ro }) : <span>Selectează o dată</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <CalendarComponent
                    mode="single"
                    selected={selectedDate}
                    onSelect={(date) => {
                      setSelectedDate(date);
                      setIsPopoverOpen(false);
                    }}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            
            <div>
              <label className="text-sm font-medium mb-2 block">Selectează intervalul orar</label>
              <Select value={selectedTimeSlot} onValueChange={setSelectedTimeSlot}>
                <SelectTrigger>
                  <SelectValue placeholder="Selectează intervalul orar" />
                </SelectTrigger>
                <SelectContent>
                  {timeSlots.map((slot) => (
                    <SelectItem key={slot} value={slot}>
                      {slot}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAcceptDialogOpen(false)}>
              Anulează
            </Button>
            <Button onClick={handleAcceptRequest}>
              Confirmă
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      <Footer />
    </div>
  );
};

export default RequestDetails;
