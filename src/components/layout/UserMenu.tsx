
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Heart, 
  Bell, 
  Plus, 
  List, 
  CreditCard, 
  FileText, 
  Settings, 
  LogOut,
  MessageSquare
} from 'lucide-react';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

const UserMenu = () => {
  const [avatarUrl] = useState(localStorage.getItem('userAvatar') || 'https://randomuser.me/api/portraits/men/1.jpg');
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear login state
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userAvatar');
    
    toast.success('Deconectare reușită!', {
      description: 'Te-ai deconectat cu succes.'
    });
    
    navigate('/');
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="rounded-full focus:outline-none focus:ring-2 focus:ring-primary">
          <Avatar className="h-10 w-10">
            <AvatarImage src={avatarUrl} alt="User Avatar" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </button>
      </DropdownMenuTrigger>
      
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuItem asChild>
          <Link to="/account/favorites" className="cursor-pointer flex items-center">
            <Heart className="mr-2 h-4 w-4" />
            <span>Favorite</span>
          </Link>
        </DropdownMenuItem>
        
        <DropdownMenuItem asChild>
          <Link to="/account/notifications" className="cursor-pointer flex items-center">
            <Bell className="mr-2 h-4 w-4" />
            <span>Notificări</span>
          </Link>
        </DropdownMenuItem>
        
        <DropdownMenuItem asChild>
          <Link to="/account/requests" className="cursor-pointer flex items-center">
            <MessageSquare className="mr-2 h-4 w-4" />
            <span>Solicitările mele</span>
          </Link>
        </DropdownMenuItem>
        
        <DropdownMenuItem asChild>
          <Link to="/add-listing" className="cursor-pointer flex items-center">
            <Plus className="mr-2 h-4 w-4" />
            <span>Adaugă anunț</span>
          </Link>
        </DropdownMenuItem>
        
        <DropdownMenuItem asChild>
          <Link to="/account/my-listings" className="cursor-pointer flex items-center">
            <List className="mr-2 h-4 w-4" />
            <span>Anunțurile mele</span>
          </Link>
        </DropdownMenuItem>
        
        <DropdownMenuSeparator />
        
        <DropdownMenuItem asChild>
          <Link to="/account/payment-methods" className="cursor-pointer flex items-center">
            <CreditCard className="mr-2 h-4 w-4" />
            <span>Metode de plată</span>
          </Link>
        </DropdownMenuItem>
        
        <DropdownMenuItem asChild>
          <Link to="/account/invoices" className="cursor-pointer flex items-center">
            <FileText className="mr-2 h-4 w-4" />
            <span>Facturi</span>
          </Link>
        </DropdownMenuItem>
        
        <DropdownMenuItem asChild>
          <Link to="/account/settings" className="cursor-pointer flex items-center">
            <Settings className="mr-2 h-4 w-4" />
            <span>Setări</span>
          </Link>
        </DropdownMenuItem>
        
        <DropdownMenuSeparator />
        
        <DropdownMenuItem 
          onClick={handleLogout}
          className="cursor-pointer text-red-500 flex items-center"
        >
          <LogOut className="mr-2 h-4 w-4" />
          <span>Deconectare</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;
