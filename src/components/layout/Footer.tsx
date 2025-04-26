
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, TiktokIcon } from 'lucide-react';

// Adding TiktokIcon since it's not directly available in lucide-react
const TiktokLogo = () => (
  <svg 
    className="h-6 w-6" 
    fill="currentColor" 
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"></path>
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">MesterOnline.ro</h3>
            <p className="text-sm opacity-80 mb-4">
              Descoperă profesioniștii care îți vor clădi viitoarea locuință
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent">
                <TiktokLogo />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Informații</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-sm opacity-80 hover:opacity-100">
                  Termeni și Condiții
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm opacity-80 hover:opacity-100">
                  Politica de Confidențialitate
                </Link>
              </li>
              <li>
                <a href="https://anpc.ro/" target="_blank" rel="noopener noreferrer" className="text-sm opacity-80 hover:opacity-100">
                  ANPC
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Ajutor</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-sm opacity-80 hover:opacity-100">
                  Întrebări Frecvente
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-sm opacity-80 hover:opacity-100">
                  Suport Clienți
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm opacity-80 hover:opacity-100">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Aplicația Mobilă</h4>
            <div className="flex flex-col space-y-3">
              <a href="#" className="inline-block">
                <img 
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
                  alt="Download on the App Store" 
                  className="h-10"
                />
              </a>
              <a href="#" className="inline-block">
                <img 
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" 
                  alt="Get it on Google Play" 
                  className="h-10"
                />
              </a>
              <a href="#" className="inline-block">
                <img 
                  src="https://consumer.huawei.com/content/dam/huawei-cbg-site/common/campaign/emui10/img/badge-black.png" 
                  alt="Get it on App Gallery" 
                  className="h-10"
                />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-6 text-sm opacity-60 text-center">
          <p>&copy; {new Date().getFullYear()} MesterOnline.ro. Toate drepturile rezervate.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
