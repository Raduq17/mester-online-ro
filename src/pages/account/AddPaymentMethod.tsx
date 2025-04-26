
import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AccountSidebar from '@/components/account/AccountSidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { CreditCard } from 'lucide-react';

const AddPaymentMethod = () => {
  const navigate = useNavigate();
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [isDefault, setIsDefault] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!cardNumber || !cardHolder || !expiryDate || !cvv) {
      toast.error('Completează toate câmpurile obligatorii.');
      return;
    }
    
    toast.success('Card adăugat cu succes!');
    navigate('/account/payment-methods');
  };
  
  // Format card number with spaces
  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\s/g, '');
    let formattedValue = '';
    
    for (let i = 0; i < value.length; i++) {
      if (i > 0 && i % 4 === 0) {
        formattedValue += ' ';
      }
      formattedValue += value[i];
    }
    
    setCardNumber(formattedValue);
  };
  
  // Format expiry date (MM/YY)
  const handleExpiryDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    if (value.length <= 2) {
      setExpiryDate(value);
    } else {
      setExpiryDate(`${value.slice(0, 2)}/${value.slice(2, 4)}`);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-off-white">
      <Header />
      
      <main className="flex-grow container-custom py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <AccountSidebar />
          
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-6">Adaugă card nou</h1>
            
            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CreditCard className="mr-2 h-5 w-5" />
                  Informații card
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="cardNumber">Număr card *</Label>
                      <Input 
                        id="cardNumber" 
                        value={cardNumber}
                        onChange={handleCardNumberChange}
                        placeholder="XXXX XXXX XXXX XXXX"
                        maxLength={19}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="cardHolder">Nume titular *</Label>
                      <Input 
                        id="cardHolder"
                        value={cardHolder}
                        onChange={(e) => setCardHolder(e.target.value)}
                        placeholder="Ex: Ion Popescu"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="expiryDate">Data expirare (MM/YY) *</Label>
                      <Input 
                        id="expiryDate"
                        value={expiryDate}
                        onChange={handleExpiryDateChange}
                        placeholder="MM/YY"
                        maxLength={5}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="cvv">Cod securitate (CVV) *</Label>
                      <Input 
                        id="cvv"
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value.replace(/\D/g, ''))}
                        placeholder="XXX"
                        type="password"
                        maxLength={3}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="isDefault" 
                      checked={isDefault}
                      onCheckedChange={(checked) => {
                        if (typeof checked === 'boolean') {
                          setIsDefault(checked);
                        }
                      }}
                    />
                    <label
                      htmlFor="isDefault"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Setează ca metodă de plată principală
                    </label>
                  </div>
                  
                  <div className="flex justify-end gap-3">
                    <Button 
                      type="button" 
                      variant="outline"
                      onClick={() => navigate('/account/payment-methods')}
                    >
                      Renunță
                    </Button>
                    <Button type="submit">
                      Salvează card
                    </Button>
                  </div>
                  
                  <div className="border-t pt-4 mt-4 text-xs text-gray-500">
                    <p>Datele cardului tău sunt transmise securizat și nu sunt stocate pe serverele noastre.</p>
                    <p className="mt-1">Plățile sunt procesate prin partenerul nostru autorizat Netopia.</p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AddPaymentMethod;
