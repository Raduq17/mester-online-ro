
import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  "Amenajări interioare", 
  "Instalații electrice", 
  "Instalații sanitare", 
  "Construcții", 
  "Tâmplărie", 
  "Zugrăveli", 
  "Montaj gresie și faianță",
  "Montaj parchet", 
  "Amenajare grădină"
];

interface ServiceGridProps {
  city: string;
}

const ServiceGrid: React.FC<ServiceGridProps> = ({ city }) => {
  return (
    <div className="mt-12">
      <h3 className="text-2xl font-semibold text-center mb-8">
        Servicii populare în {city}
      </h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {services.map((service, index) => (
          <Link 
            key={index}
            to={`/listings?city=${city}&service=${encodeURIComponent(service)}`}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow flex items-center justify-center text-center"
          >
            <span className="text-primary font-medium">{service} {city}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ServiceGrid;
