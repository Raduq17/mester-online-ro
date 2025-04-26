
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AccountSidebar from '@/components/account/AccountSidebar';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CreditCard, PlusCircle } from 'lucide-react';

// Mock payment methods data
const mockPaymentMethods = [
  {
    id: 1,
    cardType: "Visa",
    cardNumber: "**** **** **** 4242",
    cardHolder: "Ion Popescu",
    expiryDate: "12/26",
    isDefault: true
  }
];

const PaymentMethods = () => {
  return (
    <div className="flex flex-col min-h-screen bg-off-white">
      <Header />
      
      <main className="flex-grow container-custom py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <AccountSidebar />
          
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-3xl font-bold">Metode de plată</h1>
              <Button asChild>
                <Link to="/account/add-payment-method">
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Adaugă card
                </Link>
              </Button>
            </div>
            
            <h2 className="text-xl font-semibold mb-4">Cardurile mele</h2>
            
            {mockPaymentMethods.length === 0 ? (
              <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                <CreditCard className="mx-auto h-16 w-16 text-gray-300 mb-4" />
                <h3 className="text-xl font-medium mb-2">Nu ai carduri salvate</h3>
                <p className="text-gray-600 mb-6">
                  Adaugă un card pentru a efectua plăți rapid și în siguranță.
                </p>
                <Button asChild>
                  <Link to="/account/add-payment-method">Adaugă card</Link>
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {mockPaymentMethods.map(card => (
                  <Card key={card.id} className="overflow-hidden">
                    <CardContent className="p-5">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="w-12 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded flex items-center justify-center text-white font-bold text-xs mr-4">
                            {card.cardType}
                          </div>
                          <div>
                            <div className="flex items-center">
                              <p className="font-medium">{card.cardNumber}</p>
                              {card.isDefault && (
                                <span className="ml-3 text-xs bg-gray-100 text-gray-800 px-2 py-0.5 rounded">
                                  Card principal
                                </span>
                              )}
                            </div>
                            <div className="flex text-sm text-gray-600 mt-1">
                              <p>{card.cardHolder}</p>
                              <span className="mx-2">•</span>
                              <p>Exp: {card.expiryDate}</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex gap-2">
                          {!card.isDefault && (
                            <Button variant="outline" size="sm">
                              Setează ca principal
                            </Button>
                          )}
                          <Button variant="destructive" size="sm">
                            Șterge
                          </Button>
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

export default PaymentMethods;
