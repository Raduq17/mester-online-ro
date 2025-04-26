
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AccountSidebar from '@/components/account/AccountSidebar';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

// Mock data
const allRequests = [
  {
    id: '1',
    listingId: '1',
    listingTitle: "Amenajări interioare profesionale",
    title: "Renovare baie",
    serviceType: "Amenajări interioare",
    address: "Str. Independenței 15, București",
    description: "Renovare completă baie, inclusiv înlocuire gresie, faianță și obiecte sanitare.",
    clientName: "Maria Ionescu",
    preferredDates: ["2025-05-10", "2025-05-11", "2025-05-12"],
    status: "pending"
  },
  {
    id: '2',
    listingId: '2',
    listingTitle: "Montaj parchet profesional",
    title: "Montaj parchet dormitor",
    serviceType: "Montaj parchet",
    address: "Bd. Timișoara 35, București",
    description: "Montaj parchet laminat în dormitor, aproximativ 20mp.",
    clientName: "George Popescu",
    preferredDates: ["2025-05-15", "2025-05-16"],
    status: "pending"
  }
];

const RequestsList = () => {
  return (
    <div className="flex flex-col min-h-screen bg-off-white">
      <Header />
      
      <main className="flex-grow container-custom py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <AccountSidebar />
          
          <div className="flex-1">
            <h1 className="text-2xl font-bold mb-6">Solicitările mele</h1>
            
            {allRequests.length === 0 ? (
              <div className="bg-white p-8 rounded-lg text-center">
                <p className="text-gray-600">Nu aveți nicio solicitare momentan.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {allRequests.map((request) => (
                  <Card key={request.id}>
                    <CardContent className="p-5">
                      <div className="flex flex-col md:flex-row justify-between gap-4">
                        <div>
                          <p className="text-sm text-primary mb-2">Anunț: {request.listingTitle}</p>
                          <h3 className="font-semibold text-lg mb-1">{request.title}</h3>
                          <p className="text-sm text-gray-600 mb-2">
                            <span className="font-medium">Tip serviciu:</span> {request.serviceType}
                          </p>
                          <p className="text-sm text-gray-600">
                            <span className="font-medium">Adresă:</span> {request.address}
                          </p>
                          <p className="text-sm text-gray-600 mt-2">
                            <span className="font-medium">Client:</span> {request.clientName}
                          </p>
                        </div>
                        
                        <div className="flex gap-2">
                          <Button 
                            size="sm"
                            asChild
                          >
                            <Link to={`/request/${request.id}`}>
                              Vezi detalii
                            </Link>
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

export default RequestsList;
