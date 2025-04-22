
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Header = () => {
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
          
          <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
            <Link to="/register">Cont nou</Link>
          </Button>
          
          <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
            <Link to="/login">Intră în cont</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
