
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AccountSidebar from '@/components/account/AccountSidebar';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { PlusCircle, Edit, Eye, Trash2, Star } from 'lucide-react';

// Mock listings data
const mockListings = [
  {
    id: 1,
    title: "Amenajări interioare profesionale",
    category: "Amenajări",
    service: "Amenajări interioare",
    price: "80-120 lei/oră",
    city: "București",
    dateCreated: "20 Apr 2025",
    views: 124,
    status: "active", // active, pending, suspended
  }
];

const MyListings = () => {
  return (
    <div className="flex flex-col min-h-screen bg-off-white">
      <Header />
      
      <main className="flex-grow container-custom py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <AccountSidebar />
          
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-3xl font-bold">Anunțurile mele</h1>
              <Button asChild className="bg-accent text-dark-charcoal hover:bg-accent/90">
                <Link to="/add-listing">
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Adaugă anunț nou
                </Link>
              </Button>
            </div>
            
            <div className="flex justify-between mb-4">
              <div className="text-sm text-gray-500">Afișare 1-{mockListings.length} din {mockListings.length} anunțuri</div>
              
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Sortare:</span>
                <select className="text-sm border rounded px-2 py-1">
                  <option value="newest">Cele mai noi</option>
                  <option value="oldest">Cele mai vechi</option>
                  <option value="most-viewed">Cele mai vizualizate</option>
                </select>
              </div>
            </div>
            
            {mockListings.length === 0 ? (
              <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                <div className="mx-auto h-16 w-16 text-gray-300 mb-4">📋</div>
                <h3 className="text-xl font-medium mb-2">Nu ai niciun anunț</h3>
                <p className="text-gray-600 mb-6">
                  Adaugă primul tău anunț pentru a-ți promova serviciile.
                </p>
                <Button asChild>
                  <Link to="/add-listing">Adaugă anunț</Link>
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {mockListings.map(listing => (
                  <Card key={listing.id}>
                    <CardContent className="p-0">
                      <div className="p-5">
                        <div className="flex flex-col sm:flex-row justify-between">
                          <div>
                            <div className="flex items-center mb-2">
                              <h3 className="font-semibold text-lg">{listing.title}</h3>
                              <span className={`ml-3 text-xs px-2 py-0.5 rounded ${
                                listing.status === 'active' ? 'bg-green-100 text-green-800' :
                                listing.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                                'bg-red-100 text-red-800'
                              }`}>
                                {listing.status === 'active' ? 'Activ' : 
                                 listing.status === 'pending' ? 'În așteptare' : 'Suspendat'}
                              </span>
                            </div>
                            <p className="text-sm text-gray-600">
                              {listing.category} &gt; {listing.service}
                            </p>
                          </div>
                          
                          <div className="mt-3 sm:mt-0 text-right">
                            <p className="font-medium text-primary">{listing.price}</p>
                            <p className="text-sm text-gray-500">{listing.city}</p>
                          </div>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row justify-between mt-4 pt-4 border-t">
                          <div className="flex items-center text-sm text-gray-500">
                            <span>Publicat: {listing.dateCreated}</span>
                            <span className="mx-2">•</span>
                            <div className="flex items-center">
                              <Eye className="h-4 w-4 mr-1" />
                              <span>{listing.views} vizualizări</span>
                            </div>
                          </div>
                          
                          <div className="flex gap-2 mt-3 sm:mt-0">
                            <Button 
                              variant="outline" 
                              size="sm" 
                              className="text-xs"
                              asChild
                            >
                              <Link to={`/edit-listing/${listing.id}`}>
                                <Edit className="h-3.5 w-3.5 mr-1" />
                                Editează
                              </Link>
                            </Button>
                            
                            <Button 
                              variant="outline" 
                              size="sm" 
                              className="text-xs"
                              asChild
                            >
                              <Link to={`/listing/${listing.id}/requests`}>
                                <MessageSquare className="h-3.5 w-3.5 mr-1" />
                                Solicitări
                              </Link>
                            </Button>
                            
                            <Button 
                              variant="outline" 
                              size="sm" 
                              className="text-xs"
                              asChild
                            >
                              <Link to={`/profile/${listing.id}`}>
                                <Eye className="h-3.5 w-3.5 mr-1" />
                                Previzualizare
                              </Link>
                            </Button>
                            
                            <Button 
                              variant="destructive" 
                              size="sm" 
                              className="text-xs"
                            >
                              <Trash2 className="h-3.5 w-3.5 mr-1" />
                              Șterge
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MyListings;
