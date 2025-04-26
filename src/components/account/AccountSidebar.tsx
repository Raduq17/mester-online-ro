
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart, Bell, Plus, List, CreditCard, FileText, Settings } from 'lucide-react';

const sidebarLinks = [
  { 
    title: 'Favorite', 
    path: '/account/favorites',
    icon: Heart
  },
  { 
    title: 'Notificări', 
    path: '/account/notifications',
    icon: Bell
  },
  { 
    title: 'Anunțurile Mele', 
    path: '/account/my-listings',
    icon: List
  },
  { 
    title: 'Metode de Plată', 
    path: '/account/payment-methods',
    icon: CreditCard
  },
  { 
    title: 'Facturi', 
    path: '/account/invoices',
    icon: FileText
  },
  { 
    title: 'Setări', 
    path: '/account/settings',
    icon: Settings
  }
];

const AccountSidebar = () => {
  const location = useLocation();
  
  return (
    <div className="w-full md:w-64 shrink-0">
      <div className="bg-white rounded-lg shadow-sm p-5">
        <h3 className="font-medium text-lg mb-4">Contul Meu</h3>
        
        <nav className="space-y-1">
          {sidebarLinks.map((link) => {
            const isActive = location.pathname === link.path;
            const Icon = link.icon;
            
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center px-3 py-2 rounded-md text-sm ${
                  isActive 
                    ? 'bg-primary text-white' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Icon className={`mr-3 h-4 w-4 ${isActive ? 'text-white' : 'text-gray-500'}`} />
                <span>{link.title}</span>
              </Link>
            );
          })}
        </nav>
        
        <div className="mt-6 pt-6 border-t border-gray-200">
          <Link 
            to="/add-listing"
            className="flex items-center px-3 py-2 text-sm text-primary hover:bg-gray-100 rounded-md"
          >
            <Plus className="mr-3 h-4 w-4" />
            <span>Adaugă anunț nou</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AccountSidebar;
