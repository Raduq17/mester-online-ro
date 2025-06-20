
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Star, Calendar } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { format, addDays } from 'date-fns';
import { ro } from 'date-fns/locale';
import ImageCarousel from '@/components/listings/ImageCarousel';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

// Mock data for handymen
const mockHandymen = [
  {
    id: 1,
    name: "Ion Popescu",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    rating: 4.8,
    reviews: 124,
    specialization: "Amenajări interioare",
    price: "100-150 lei/oră",
    portfolio: [
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1600566752229-250ed79470f8?ixlib=rb-4.0.3"
    ]
  },
  {
    id: 2,
    name: "Andrei Ionescu",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    rating: 4.6,
    reviews: 87,
    specialization: "Instalații electrice",
    price: "80-120 lei/oră",
    portfolio: [
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1558618666-fcd25c3cd684?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1544724569-5f546fd6f2b6?ixlib=rb-4.0.3"
    ]
  },
  {
    id: 3,
    name: "Maria Dumitrescu",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    rating: 4.9,
    reviews: 156,
    specialization: "Amenajări interioare",
    price: "120-180 lei/oră",
    portfolio: [
      "https://images.unsplash.com/photo-1615529182904-14819c35db37?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1618219944342-824e40a13285?ixlib=rb-4.0.3"
    ]
  },
  {
    id: 4,
    name: "Mihai Stanescu",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    rating: 4.7,
    reviews: 92,
    specialization: "Instalații sanitare",
    price: "90-140 lei/oră",
    portfolio: [
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1556909172-8c2f041fca1e?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1585704032915-c3400305e979?ixlib=rb-4.0.3"
    ]
  },
  {
    id: 5,
    name: "Elena Vasilescu",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    rating: 4.5,
    reviews: 78,
    specialization: "Montaj gresie și faianță",
    price: "100-150 lei/oră",
    portfolio: [
      "https://images.unsplash.com/photo-1609686526063-29d194f77181?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1628611225249-1ed2394a15f5?ixlib=rb-4.0.3"
    ]
  }
];

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

const ServiceListing = () => {
  const [searchParams] = useSearchParams();
  const [city, setCity] = useState(searchParams.get('city') || "București");
  const [category, setCategory] = useState(searchParams.get('category') || "Toate categoriile");
  const [service, setService] = useState(searchParams.get('service') || "");
  const [sortOption, setSortOption] = useState("Recomandate");
  const [availableServices, setAvailableServices] = useState<string[]>([]);
  const [startDate, setStartDate] = useState<Date | undefined>(() => {
    const dateParam = searchParams.get('startDate');
    return dateParam ? new Date(dateParam) : new Date();
  });
  const [endDate, setEndDate] = useState<Date | undefined>(() => {
    const dateParam = searchParams.get('endDate');
    return dateParam ? new Date(dateParam) : addDays(new Date(), 7);
  });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  
  // Calculate number of pages
  const totalPages = Math.ceil(mockHandymen.length / itemsPerPage);
  
  // Get current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = mockHandymen.slice(indexOfFirstItem, indexOfLastItem);
  
  useEffect(() => {
    if (category === "Toate categoriile") {
      setAvailableServices(Object.values(services).flat());
    } else {
      setAvailableServices(services[category as keyof typeof services] || []);
    }
  }, [category]);
  
  const formatDateRange = () => {
    if (!startDate || !endDate) return "Selectează perioada";
    return `${format(startDate, 'dd MMM', { locale: ro })} - ${format(endDate, 'dd MMM', { locale: ro })}`;
  };

  return (
    <div className="flex flex-col min-h-screen bg-off-white">
      <Header />
      
      <main className="flex-grow">
        {/* Filter bar */}
        <div className="bg-white shadow-sm">
          <div className="container-custom py-4">
            <div className="flex flex-wrap gap-4">
              <div className="w-full sm:w-auto">
                <label className="block text-sm font-medium mb-1">Oraș</label>
                <Select value={city} onValueChange={setCity}>
                  <SelectTrigger className="w-full sm:w-44">
                    <SelectValue placeholder="Selectează orașul" />
                  </SelectTrigger>
                  <SelectContent>
                    {cities.map((c) => (
                      <SelectItem key={c} value={c}>{c}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="w-full sm:w-auto">
                <label className="block text-sm font-medium mb-1">Categorie</label>
                <Select value={category} onValueChange={setCategory}>
                  <SelectTrigger className="w-full sm:w-44">
                    <SelectValue placeholder="Selectează categoria" />
                  </SelectTrigger>
                  <SelectContent>
                    {serviceCategories.map((cat) => (
                      <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="w-full sm:w-auto">
                <label className="block text-sm font-medium mb-1">Serviciu</label>
                <Select value={service} onValueChange={setService}>
                  <SelectTrigger className="w-full sm:w-52">
                    <SelectValue placeholder="Selectează serviciul" />
                  </SelectTrigger>
                  <SelectContent>
                    {availableServices.map((s) => (
                      <SelectItem key={s} value={s}>{s}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="w-full sm:w-auto">
                <label className="block text-sm font-medium mb-1">Perioada</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full sm:w-52 justify-start text-left">
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
              
              <div className="w-full sm:w-auto mt-auto ml-auto">
                <Button className="bg-accent text-dark-charcoal hover:bg-accent/90 w-full">
                  Aplică filtre
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container-custom py-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar */}
            <div className="w-full md:w-64 shrink-0">
              <div className="bg-white rounded-lg shadow-sm p-5">
                <h3 className="font-medium mb-4">Sortează după</h3>
                
                <div className="space-y-2">
                  {["Recomandate", "Rating", "Reduceri", "Preț crescător", "Preț descrescător"].map((option) => (
                    <label key={option} className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="sort"
                        value={option}
                        checked={sortOption === option}
                        onChange={() => setSortOption(option)}
                        className="mr-2 text-primary"
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Main content */}
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-6">
                {service ? `${service} în ${city}` : `Mesteri în ${city}`}
              </h2>
              
              <div className="space-y-6">
                {currentItems.map((handyman) => (
                  <Card key={handyman.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      <Link to={`/profile/${handyman.id}`} className="flex flex-col sm:flex-row">
                        <div className="w-full sm:w-1/3 lg:w-1/4 p-5">
                          <div className="aspect-square overflow-hidden rounded-full mb-3 mx-auto sm:mx-0" style={{ maxWidth: "120px" }}>
                            <img 
                              src={handyman.avatar}
                              alt={handyman.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          
                          <div className="text-center sm:text-left">
                            <h3 className="font-semibold text-lg">{handyman.name}</h3>
                            <div className="flex items-center justify-center sm:justify-start mt-1">
                              <Star className="w-4 h-4 text-accent fill-accent" />
                              <span className="ml-1">{handyman.rating}</span>
                              <span className="text-gray-500 text-sm ml-1">({handyman.reviews} recenzii)</span>
                            </div>
                            <p className="mt-2 text-sm text-gray-600">{handyman.specialization}</p>
                            <p className="font-medium mt-1">{handyman.price}</p>
                          </div>
                        </div>
                        
                        <Separator className="sm:hidden my-3" />
                        
                        <div className="w-full sm:w-2/3 lg:w-3/4 p-5 bg-gray-50">
                          <div className="h-full">
                            <ImageCarousel images={handyman.portfolio} className="h-48 md:h-56" />
                          </div>
                        </div>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {/* Pagination */}
              <div className="mt-8">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious 
                        href="#" 
                        onClick={(e) => {
                          e.preventDefault();
                          setCurrentPage(prev => Math.max(prev - 1, 1));
                        }}
                        aria-disabled={currentPage === 1}
                        className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                      />
                    </PaginationItem>
                    
                    {Array.from({ length: totalPages }).map((_, i) => (
                      <PaginationItem key={i}>
                        <PaginationLink 
                          href="#" 
                          onClick={(e) => {
                            e.preventDefault();
                            setCurrentPage(i + 1);
                          }}
                          isActive={currentPage === i + 1}
                        >
                          {i + 1}
                        </PaginationLink>
                      </PaginationItem>
                    ))}
                    
                    <PaginationItem>
                      <PaginationNext 
                        href="#" 
                        onClick={(e) => {
                          e.preventDefault();
                          setCurrentPage(prev => Math.min(prev + 1, totalPages));
                        }}
                        aria-disabled={currentPage === totalPages}
                        className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ServiceListing;
