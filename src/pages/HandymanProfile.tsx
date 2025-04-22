
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Star, MapPin, Clock, Phone, Mail, Calendar, CheckCircle } from 'lucide-react';

// Mock data for a handyman
const mockHandyman = {
  id: 1,
  name: "Ion Popescu",
  avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  rating: 4.8,
  reviewCount: 124,
  specialization: "Amenajări interioare",
  price: "100-150 lei/oră",
  location: "București, Sector 3",
  experience: "10 ani",
  description: "Cu peste 10 ani de experiență în domeniul amenajărilor interioare, ofer servicii de cea mai înaltă calitate pentru locuințe și spații comerciale. Specializat în renovări complete, montaj parchet, gresie, faianță, rigips și zugrăveli decorative.",
  portfolio: [
    "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1600566752229-250ed79470f8?ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1615529182904-14819c35db37?ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1618219944342-824e40a13285?ixlib=rb-4.0.3"
  ],
  services: [
    { name: "Amenajări interioare complete", price: "200-300 lei/mp" },
    { name: "Montaj parchet", price: "30-50 lei/mp" },
    { name: "Montaj gresie și faianță", price: "60-80 lei/mp" },
    { name: "Zugrăveli", price: "15-25 lei/mp" },
    { name: "Tavane din gips carton", price: "70-100 lei/mp" }
  ],
  reviewItems: [
    { 
      id: 1, 
      author: "Maria D.", 
      rating: 5, 
      date: "15 martie 2023", 
      content: "Profesionist și punctual. A finalizat lucrarea mai repede decât era estimat, și calitatea a fost excelentă. Recomand cu încredere!" 
    },
    { 
      id: 2, 
      author: "Alexandru P.", 
      rating: 4, 
      date: "2 februarie 2023", 
      content: "Foarte mulțumit de serviciile oferite. Singurul minus a fost că a durat puțin mai mult decât era estimat inițial, dar rezultatul final a meritat așteptarea." 
    },
    { 
      id: 3, 
      author: "Elena M.", 
      rating: 5, 
      date: "10 ianuarie 2023", 
      content: "Am colaborat pentru renovarea completă a apartamentului și sunt foarte mulțumită. Prețuri corecte și calitate ireproșabilă." 
    }
  ]
};

const HandymanProfile = () => {
  const { id } = useParams();
  const [activeImage, setActiveImage] = useState(mockHandyman.portfolio[0]);

  return (
    <div className="flex flex-col min-h-screen bg-off-white">
      <Header />
      
      <main className="flex-grow">
        <div className="container-custom py-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {/* Hero section */}
            <div className="bg-primary text-white p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white">
                  <img 
                    src={mockHandyman.avatar}
                    alt={mockHandyman.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex-1 text-center sm:text-left">
                  <h1 className="text-2xl sm:text-3xl font-bold mb-2">{mockHandyman.name}</h1>
                  <p className="text-lg opacity-90 mb-2">{mockHandyman.specialization}</p>
                  
                  <div className="flex flex-wrap justify-center sm:justify-start gap-4 mt-3">
                    <div className="flex items-center">
                      <Star className="w-5 h-5 text-accent fill-accent mr-1" />
                      <span>{mockHandyman.rating}</span>
                      <span className="text-sm opacity-80 ml-1">({mockHandyman.reviewCount} recenzii)</span>
                    </div>
                    
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 mr-1" />
                      <span>{mockHandyman.location}</span>
                    </div>
                    
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 mr-1" />
                      <span>Experiență: {mockHandyman.experience}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col gap-3 min-w-[180px]">
                  <Button className="bg-accent text-dark-charcoal hover:bg-accent/90">
                    Contactează
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white/10">
                    Cere ofertă
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Tabs section */}
            <Tabs defaultValue="despre">
              <div className="px-6 sm:px-8 border-b">
                <TabsList className="bg-transparent border-b-0 justify-start -mb-px">
                  <TabsTrigger 
                    value="despre"
                    className="data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary rounded-none px-4 py-3"
                  >
                    Despre
                  </TabsTrigger>
                  <TabsTrigger 
                    value="portofoliu"
                    className="data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary rounded-none px-4 py-3"
                  >
                    Portofoliu
                  </TabsTrigger>
                  <TabsTrigger 
                    value="servicii"
                    className="data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary rounded-none px-4 py-3"
                  >
                    Servicii și Prețuri
                  </TabsTrigger>
                  <TabsTrigger 
                    value="recenzii"
                    className="data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary rounded-none px-4 py-3"
                  >
                    Recenzii
                  </TabsTrigger>
                </TabsList>
              </div>
              
              <div className="p-6 sm:p-8">
                <TabsContent value="despre">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-1">
                      <h2 className="text-xl font-semibold mb-4">Despre mine</h2>
                      <p className="text-gray-700 whitespace-pre-line">{mockHandyman.description}</p>
                      
                      <h3 className="text-lg font-semibold mt-8 mb-3">Informații de contact</h3>
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <Phone className="w-5 h-5 mr-3 text-primary" />
                          <span>0712 345 678</span>
                        </div>
                        <div className="flex items-center">
                          <Mail className="w-5 h-5 mr-3 text-primary" />
                          <span>ion.popescu@example.com</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="w-full md:w-1/3 bg-gray-50 p-5 rounded-lg">
                      <h3 className="text-lg font-semibold mb-4">Disponibilitate</h3>
                      <div className="flex items-center mb-3">
                        <Calendar className="w-5 h-5 mr-2 text-primary" />
                        <span>Disponibil din 28 aprilie</span>
                      </div>
                      
                      <h3 className="text-lg font-semibold mt-6 mb-3">Certificări</h3>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
                          <span>Certificare amenajări interioare</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
                          <span>Electrician autorizat ANRE</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="portofoliu">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-full md:w-2/3">
                      <div className="aspect-video rounded-lg overflow-hidden">
                        <img 
                          src={activeImage}
                          alt="Portofoliu"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    
                    <div className="w-full md:w-1/3">
                      <h2 className="text-xl font-semibold mb-4">Proiecte recente</h2>
                      <div className="grid grid-cols-3 gap-3">
                        {mockHandyman.portfolio.map((image, index) => (
                          <div 
                            key={index}
                            className={`aspect-square rounded-md overflow-hidden cursor-pointer ${activeImage === image ? 'ring-2 ring-primary' : ''}`}
                            onClick={() => setActiveImage(image)}
                          >
                            <img 
                              src={image}
                              alt={`Proiect ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="servicii">
                  <h2 className="text-xl font-semibold mb-6">Servicii oferite și prețuri</h2>
                  <div className="grid gap-4">
                    {mockHandyman.services.map((service, index) => (
                      <Card key={index}>
                        <CardContent className="flex justify-between items-center p-5">
                          <div>
                            <h3 className="font-medium">{service.name}</h3>
                          </div>
                          <div className="text-right">
                            <span className="font-semibold text-primary">{service.price}</span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  
                  <div className="mt-8 p-5 bg-gray-50 rounded-lg">
                    <h3 className="font-semibold mb-2">Notă:</h3>
                    <p className="text-gray-700">Prețurile sunt orientative și pot varia în funcție de complexitatea proiectului. Pentru o ofertă exactă, vă rugăm să solicitați o evaluare la fața locului.</p>
                  </div>
                </TabsContent>
                
                <TabsContent value="recenzii">
                  <div className="flex items-center mb-6">
                    <div className="flex items-center">
                      <Star className="w-8 h-8 text-accent fill-accent" />
                      <span className="text-3xl font-bold ml-2">{mockHandyman.rating}</span>
                    </div>
                    <span className="text-gray-600 ml-3">din {mockHandyman.reviewCount} recenzii</span>
                  </div>
                  
                  <div className="space-y-6">
                    {mockHandyman.reviewItems.map((review) => (
                      <div key={review.id} className="border-b pb-6">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <span className="font-medium">{review.author}</span>
                            <div className="flex mt-1">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <Star 
                                  key={i}
                                  className={`w-4 h-4 ${i < review.rating ? 'text-accent fill-accent' : 'text-gray-300'}`}
                                />
                              ))}
                            </div>
                          </div>
                          <span className="text-gray-500 text-sm">{review.date}</span>
                        </div>
                        <p className="mt-2 text-gray-700">{review.content}</p>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default HandymanProfile;
