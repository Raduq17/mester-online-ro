
import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AccountSidebar from '@/components/account/AccountSidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { toast } from 'sonner';

const Settings = () => {
  // Basic information
  const [firstName, setFirstName] = useState('Ion');
  const [lastName, setLastName] = useState('Popescu');
  const [email, setEmail] = useState('ion.popescu@example.com');
  const [phone, setPhone] = useState('0712345678');
  const [bio, setBio] = useState('');
  
  // Passwords
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  // Notification settings
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [marketingEmails, setMarketingEmails] = useState(true);
  
  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Profilul a fost actualizat.');
  };
  
  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (newPassword !== confirmPassword) {
      toast.error('Parolele nu coincid.');
      return;
    }
    
    toast.success('Parola a fost schimbată cu succes.');
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
  };
  
  const handleSaveNotifications = () => {
    toast.success('Preferințele de notificare au fost actualizate.');
  };
  
  const handleDeleteAccount = () => {
    if (window.confirm('Ești sigur că vrei să ștergi contul? Această acțiune este ireversibilă.')) {
      toast.success('Contul a fost șters.');
      // In a real app, this would redirect to home page or logout
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-off-white">
      <Header />
      
      <main className="flex-grow container-custom py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <AccountSidebar />
          
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-6">Setări cont</h1>
            
            <Tabs defaultValue="profile" className="w-full">
              <TabsList className="grid grid-cols-4 mb-6">
                <TabsTrigger value="profile">Profil</TabsTrigger>
                <TabsTrigger value="security">Securitate</TabsTrigger>
                <TabsTrigger value="notifications">Notificări</TabsTrigger>
                <TabsTrigger value="privacy">Confidențialitate</TabsTrigger>
              </TabsList>
              
              <TabsContent value="profile" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Informații de bază</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSaveProfile} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">Prenume</Label>
                          <Input 
                            id="firstName" 
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Nume</Label>
                          <Input 
                            id="lastName"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input 
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="phone">Telefon</Label>
                          <Input 
                            id="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                          />
                        </div>
                        
                        <div className="space-y-2 md:col-span-2">
                          <Label htmlFor="bio">Descriere (Bio)</Label>
                          <Textarea 
                            id="bio"
                            value={bio}
                            onChange={(e) => setBio(e.target.value)}
                            placeholder="Scrie câteva cuvinte despre tine..."
                            rows={4}
                          />
                        </div>
                      </div>
                      
                      <div className="flex justify-end">
                        <Button type="submit">Salvează modificările</Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="security" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Schimbare parolă</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleChangePassword} className="space-y-6">
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="currentPassword">Parola actuală</Label>
                          <Input 
                            id="currentPassword" 
                            type="password"
                            value={currentPassword}
                            onChange={(e) => setCurrentPassword(e.target.value)}
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="newPassword">Parola nouă</Label>
                          <Input 
                            id="newPassword" 
                            type="password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="confirmPassword">Confirmă parola nouă</Label>
                          <Input 
                            id="confirmPassword" 
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                          />
                        </div>
                      </div>
                      
                      <div className="flex justify-end">
                        <Button type="submit">Schimbă parola</Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="notifications" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Preferințe notificări</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Notificări prin email</p>
                          <p className="text-sm text-gray-500">Primește informări și actualizări pe email</p>
                        </div>
                        <Switch 
                          checked={emailNotifications} 
                          onCheckedChange={setEmailNotifications} 
                        />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Notificări SMS</p>
                          <p className="text-sm text-gray-500">Primește alerte importante prin SMS</p>
                        </div>
                        <Switch 
                          checked={smsNotifications} 
                          onCheckedChange={setSmsNotifications} 
                        />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Notificări push</p>
                          <p className="text-sm text-gray-500">Primește notificări în aplicația mobilă</p>
                        </div>
                        <Switch 
                          checked={pushNotifications} 
                          onCheckedChange={setPushNotifications} 
                        />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Email-uri de marketing</p>
                          <p className="text-sm text-gray-500">Primește oferte și promoții personalizate</p>
                        </div>
                        <Switch 
                          checked={marketingEmails} 
                          onCheckedChange={setMarketingEmails} 
                        />
                      </div>
                      
                      <div className="flex justify-end">
                        <Button onClick={handleSaveNotifications}>Salvează preferințele</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="privacy" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Ștergere cont</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="bg-red-50 p-4 rounded-md">
                        <h3 className="font-semibold text-red-800">Atenție: Această acțiune este ireversibilă</h3>
                        <p className="text-sm text-red-700 mt-1">
                          Odată ce contul tău este șters, toate datele asociate cu acesta vor fi eliminate definitiv.
                        </p>
                      </div>
                      
                      <Button 
                        variant="destructive" 
                        onClick={handleDeleteAccount}
                      >
                        Șterge contul permanent
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Settings;
