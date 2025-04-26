
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AccountSidebar from '@/components/account/AccountSidebar';
import { Card, CardContent } from '@/components/ui/card';
import { Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Mock notifications data
const mockNotifications = [
  {
    id: 1,
    title: "Solicitare nouă",
    message: "Aveți o solicitare nouă pentru serviciul de Montaj Parchet.",
    date: "26 Apr 2025, 14:30",
    isRead: false
  },
  {
    id: 2,
    title: "Recenzie nouă",
    message: "Un client v-a lăsat o recenzie de 5 stele pentru Amenajări Interioare.",
    date: "24 Apr 2025, 09:15",
    isRead: true
  },
  {
    id: 3,
    title: "Factură emisă",
    message: "O nouă factură a fost emisă pentru abonamentul premium.",
    date: "20 Apr 2025, 11:42",
    isRead: true
  },
  {
    id: 4,
    title: "Ofertă acceptată",
    message: "Clientul Maria D. a acceptat oferta dumneavoastră pentru renovarea băii.",
    date: "18 Apr 2025, 18:23",
    isRead: true
  }
];

const Notifications = () => {
  return (
    <div className="flex flex-col min-h-screen bg-off-white">
      <Header />
      
      <main className="flex-grow container-custom py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <AccountSidebar />
          
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-3xl font-bold">Notificări</h1>
              <Button variant="outline" size="sm">Marchează toate ca citite</Button>
            </div>
            
            {mockNotifications.length === 0 ? (
              <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                <Bell className="mx-auto h-16 w-16 text-gray-300 mb-4" />
                <h3 className="text-xl font-medium mb-2">Nu aveți notificări</h3>
                <p className="text-gray-600">
                  Veți primi notificări despre oferte, mesaje și actualizări aici.
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {mockNotifications.map(notification => (
                  <Card key={notification.id} className={`overflow-hidden ${notification.isRead ? 'bg-white' : 'bg-blue-50'}`}>
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-3">
                          <div className="mt-1">
                            <Bell className={`h-5 w-5 ${notification.isRead ? 'text-gray-400' : 'text-primary'}`} />
                          </div>
                          <div>
                            <h3 className={`font-medium ${notification.isRead ? '' : 'text-primary'}`}>
                              {notification.title}
                            </h3>
                            <p className="text-gray-600 text-sm mt-1">{notification.message}</p>
                            <span className="text-xs text-gray-500 block mt-2">{notification.date}</span>
                          </div>
                        </div>
                        {!notification.isRead && (
                          <div className="w-2 h-2 rounded-full bg-primary shrink-0"></div>
                        )}
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

export default Notifications;
