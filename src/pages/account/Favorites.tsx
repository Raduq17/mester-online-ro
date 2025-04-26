
import React, { useEffect, useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AccountSidebar from '@/components/account/AccountSidebar';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';

interface HandymanData {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  reviewCount: number;
  specialization: string;
  location: string;
}

const Favorites = () => {
  const [favorites, setFavorites] = useState<HandymanData[]>([]);
  
  useEffect(() => {
    // Load favorites from localStorage
    const savedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavorites(savedFavorites);
  }, []);
  
  const removeFavorite = (id: number) => {
    const updatedFavorites = favorites.filter(fav => fav.id !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    toast.success('Item removed from favorites');
  };

  return (
    <div className="flex flex-col min-h-screen bg-off-white">
      <Header />
      
      <main className="flex-grow container-custom py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <AccountSidebar />
          
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-6">Favorite</h1>
            
            {favorites.length === 0 ? (
              <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                <Heart className="mx-auto h-16 w-16 text-gray-300 mb-4" />
                <h3 className="text-xl font-medium mb-2">Nu ai încă anunțuri favorite</h3>
                <p className="text-gray-600 mb-6">
                  Adaugă anunțuri la favorite pentru a le găsi ușor mai târziu.
                </p>
                <Button asChild>
                  <Link to="/listings">Caută servicii</Link>
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {favorites.map(handyman => (
                  <Card key={handyman.id} className="overflow-hidden hover:shadow-md transition-shadow">
                    <CardContent className="p-0">
                      <div className="flex flex-col sm:flex-row">
                        <div className="w-full sm:w-1/4 p-5 flex flex-col items-center sm:items-start">
                          <div className="w-20 h-20 rounded-full overflow-hidden mb-3">
                            <img 
                              src={handyman.avatar}
                              alt={handyman.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          
                          <h3 className="font-semibold">{handyman.name}</h3>
                          <div className="flex items-center mt-1">
                            <Star className="w-4 h-4 text-accent fill-accent" />
                            <span className="ml-1">{handyman.rating}</span>
                            <span className="text-gray-500 text-sm ml-1">({handyman.reviewCount})</span>
                          </div>
                          <p className="text-sm text-gray-600 mt-1">{handyman.specialization}</p>
                        </div>
                        
                        <div className="w-full sm:w-3/4 p-5 flex flex-col sm:flex-row justify-between">
                          <div>
                            <p className="text-gray-600 mb-2">
                              <span className="font-medium">Locație:</span> {handyman.location}
                            </p>
                          </div>
                          
                          <div className="flex flex-col gap-2 mt-4 sm:mt-0">
                            <Button asChild className="w-full">
                              <Link to={`/profile/${handyman.id}`}>Vezi profil</Link>
                            </Button>
                            <Button 
                              variant="outline" 
                              className="w-full" 
                              onClick={() => removeFavorite(handyman.id)}
                            >
                              <Heart className="mr-2 h-4 w-4 fill-current" />
                              Elimină
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

export default Favorites;
