
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import UserMenu from './UserMenu';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is logged in
    const loggedInStatus = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedInStatus);

    // Add event listener for storage changes (for when login/logout happens in another tab)
    const handleStorageChange = () => {
      setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true');
    };

    window.addEventListener('storage', handleStorageChange);

    // Cleanup
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return (
    <header className="bg-primary text-white py-4 shadow-md">
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold">
          MesterOnline.ro
        </Link>
        
        <div className="flex items-center space-x-4">
          <Button asChild variant="default" className="bg-accent text-dark-charcoal hover:bg-accent/90">
            <Link to="/add-listing">Adaugă un anunț</Link>
          </Button>
          
          {!isLoggedIn ? (
            <>
              <Button asChild variant="outline" className="border-white text-white bg-primary/30 hover:bg-white/10">
                <Link to="/register">Cont nou</Link>
              </Button>
              
              <Button asChild variant="outline" className="border-white text-white bg-primary/30 hover:bg-white/10">
                <Link to="/login">Intră în cont</Link>
              </Button>
            </>
          ) : (
            <UserMenu />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
