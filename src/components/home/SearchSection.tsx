
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Search, Calendar } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { format, addDays } from 'date-fns';
import { ro } from 'date-fns/locale';

const cities = [
  "București", "Cluj-Napoca", "Timișoara", "Iași", "Constanța", 
  "Craiova", "Brașov", "Galați", "Ploiești", "Oradea"
];

const serviceCategories = [
  "Toate categoriile", "Amenajări", "Instalații", "Construcții", "Finisaje"
];

const services = {
  "Amenajări": ["Amenajări interioare", "Montaj parchet", "Montaj gresie și faianță"],
  "Instalații": ["Instalații electrice", "Instalații sanitare", "Instalații termice"],
  "Construcții": ["Construcții case", "Fundații", "Izolații"],
  "Finisaje": ["Zugrăveli", "Tâmplărie", "Amenajare grădină"]
};

const SearchSection = () => {
  const [selectedCity, setSelectedCity] = useState("București");
  const [selectedCategory, setSelectedCategory] = useState("Toate categoriile");
  const [selectedService, setSelectedService] = useState("");
  const [startDate, setStartDate] = useState<Date | undefined>(new Date());
  const [endDate, setEndDate] = useState<Date | undefined>(addDays(new Date(), 7));
  const [availableServices, setAvailableServices] = useState<string[]>([]);
  
  const navigate = useNavigate();

  // When category changes, update available services
  React.useEffect(() => {
    if (selectedCategory === "Toate categoriile") {
      setAvailableServices(Object.values(services).flat());
    } else {
      setAvailableServices(services[selectedCategory as keyof typeof services] || []);
    }
  }, [selectedCategory]);

  const handleSearch = () => {
    navigate(
      `/listings?city=${selectedCity}&category=${selectedCategory}&service=${selectedService}&startDate=${startDate?.toISOString()}&endDate=${endDate?.toISOString()}`
    );
  };

  const formatDateRange = () => {
    if (!startDate || !endDate) return "Selectează perioada";
    return `${format(startDate, 'dd MMM', { locale: ro })} - ${format(endDate, 'dd MMM', { locale: ro })}`;
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-primary text-center mb-8">
        Construiește cu profesioniști
      </h2>
      
      <div className="grid gap-4 md:grid-cols-2">
        <div>
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
        
        <div>
          <label className="block text-sm font-medium mb-2">Categorie</label>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Selectează categoria" />
            </SelectTrigger>
            <SelectContent>
              {serviceCategories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">Serviciu</label>
          <Select value={selectedService} onValueChange={setSelectedService}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Selectează serviciul" />
            </SelectTrigger>
            <SelectContent>
              {availableServices.map((service) => (
                <SelectItem key={service} value={service}>
                  {service}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">Perioada</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-full justify-start text-left font-normal">
                <Calendar className="mr-2 h-4 w-4" />
                {formatDateRange()}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <CalendarComponent
                mode="range"
                selected={{
                  from: startDate,
                  to: endDate
                }}
                onSelect={(range) => {
                  setStartDate(range?.from);
                  setEndDate(range?.to);
                }}
                numberOfMonths={2}
                className="p-3 pointer-events-auto"
              />
            </PopoverContent>
          </Popover>
        </div>
        
        <div className="md:col-span-2">
          <Button 
            onClick={handleSearch} 
            className="bg-accent text-dark-charcoal hover:bg-accent/90 w-full h-10 mt-4"
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
