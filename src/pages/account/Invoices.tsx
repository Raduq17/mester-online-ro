
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AccountSidebar from '@/components/account/AccountSidebar';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Download, Eye } from 'lucide-react';

// Mock invoices data
const mockInvoices = [
  {
    id: "INV-2025-001",
    date: "15 Apr 2025",
    amount: "59.00",
    status: "Plătită", // "Plătită", "În așteptare", "Anulată"
    description: "Abonament Premium - Apr 2025"
  },
  {
    id: "INV-2025-002",
    date: "15 Mar 2025",
    amount: "59.00",
    status: "Plătită",
    description: "Abonament Premium - Mar 2025"
  }
];

const Invoices = () => {
  return (
    <div className="flex flex-col min-h-screen bg-off-white">
      <Header />
      
      <main className="flex-grow container-custom py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <AccountSidebar />
          
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-6">Facturi</h1>
            
            {mockInvoices.length === 0 ? (
              <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                <FileText className="mx-auto h-16 w-16 text-gray-300 mb-4" />
                <h3 className="text-xl font-medium mb-2">Nu ai nicio factură</h3>
                <p className="text-gray-600">
                  Facturile emise pentru serviciile noastre vor apărea aici.
                </p>
              </div>
            ) : (
              <Card>
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-gray-50 text-left">
                          <th className="px-6 py-4 text-sm font-medium text-gray-600">Număr factură</th>
                          <th className="px-6 py-4 text-sm font-medium text-gray-600">Data</th>
                          <th className="px-6 py-4 text-sm font-medium text-gray-600">Descriere</th>
                          <th className="px-6 py-4 text-sm font-medium text-gray-600 text-right">Suma</th>
                          <th className="px-6 py-4 text-sm font-medium text-gray-600">Status</th>
                          <th className="px-6 py-4 text-sm font-medium text-gray-600">Acțiuni</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        {mockInvoices.map(invoice => (
                          <tr key={invoice.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 text-sm font-medium">
                              {invoice.id}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-600">
                              {invoice.date}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-600">
                              {invoice.description}
                            </td>
                            <td className="px-6 py-4 text-sm font-medium text-right">
                              {invoice.amount} Lei
                            </td>
                            <td className="px-6 py-4">
                              <span className={`px-2 py-1 text-xs rounded-full ${
                                invoice.status === 'Plătită' ? 'bg-green-100 text-green-800' :
                                invoice.status === 'În așteptare' ? 'bg-yellow-100 text-yellow-800' :
                                'bg-red-100 text-red-800'
                              }`}>
                                {invoice.status}
                              </span>
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex space-x-2">
                                <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                                  <Eye className="h-4 w-4" />
                                </Button>
                                <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                                  <Download className="h-4 w-4" />
                                </Button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Invoices;
