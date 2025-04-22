
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

const cities = [
  "București", "Cluj-Napoca", "Timișoara", "Iași", "Constanța", 
  "Craiova", "Brașov", "Galați", "Ploiești", "Oradea"
];

const services = [
  "Amenajări interioare", "Instalații electrice", "Instalații sanitare", 
  "Construcții", "Tâmplărie", "Zugrăveli", "Montaj gresie și faianță",
  "Montaj parchet", "Amenajare grădină"
];

const SearchSection = () => {
  const [selectedCity, setSelectedCity] = useState("București");
  const [selectedService, setSelectedService] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/listings?city=${selectedCity}&service=${selectedService}`);
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-primary text-center mb-8">
        Construiește cu profesioniști
      </h2>
      
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <label className="block text-sm font-medium mb-2">Oraș</label>
          <Select defaultValue={selectedCity} onValueChange={setSelectedCity}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Selectează orașul" />
            </SelectTrigger>
            <SelectContent>
              {cities.map((city) => (
                <SelectItem key={city} value={city}>
                  {city}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="flex-1">
          <label className="block text-sm font-medium mb-2">Serviciu</label>
          <Select value={selectedService} onValueChange={setSelectedService}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Selectează serviciul" />
            </SelectTrigger>
            <SelectContent>
              {services.map((service) => (
                <SelectItem key={service} value={service}>
                  {service}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="flex items-end">
          <Button 
            onClick={handleSearch} 
            className="bg-accent text-dark-charcoal hover:bg-accent/90 w-full md:w-auto h-10"
          >
            <Search className="h-4 w-4 mr-2" />
            Caută
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
