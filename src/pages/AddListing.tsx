import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { Upload } from 'lucide-react';

const cities = [
  "București", "Cluj-Napoca", "Timișoara", "Iași", "Constanța", 
  "Craiova", "Brașov", "Galați", "Ploiești", "Oradea"
];

const serviceCategories = [
  "Amenajări", "Instalații", "Construcții", "Finisaje"
];

const services = {
  "Amenajări": ["Amenajări interioare", "Montaj parchet", "Montaj gresie și faianță"],
  "Instalații": ["Instalații electrice", "Instalații sanitare", "Instalații termice"],
  "Construcții": ["Construcții case", "Fundații", "Izolații"],
  "Finisaje": ["Zugrăveli", "Tâmplărie", "Amenajare grădină"]
};

const AddListing = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [service, setService] = useState('');
  const [price, setPrice] = useState('');
  const [priceUnit, setPriceUnit] = useState('per oră');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [images, setImages] = useState<File[]>([]);
  const [availableServices, setAvailableServices] = useState<string[]>([]);
  
  const navigate = useNavigate();

  React.useEffect(() => {
    if (category) {
      setAvailableServices(services[category as keyof typeof services] || []);
      setService('');
    }
  }, [category]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!title || !description || !category || !service || !price || !city) {
      toast.error('Completează toate câmpurile obligatorii.');
      return;
    }
    
    toast.success('Anunț adăugat cu succes!', {
      description: 'Anunțul tău a fost publicat.'
    });
    
    navigate('/my-listings');
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const fileArray = Array.from(e.target.files);
      if (fileArray.length > 5) {
        toast.error('Poți încărca maxim 5 imagini.');
        return;
      }
      setImages(fileArray);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-off-white">
      <Header />
      
      <main className="flex-grow container-custom py-8">
        <h1 className="text-3xl font-bold mb-6">Adaugă un anunț nou</h1>
        
        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Informații despre serviciu</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Titlu anunț *</Label>
                  <Input 
                    id="title" 
                    placeholder="Ex: Montaj gresie profesionist" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                    required 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="description">Descriere *</Label>
                  <Textarea 
                    id="description" 
                    placeholder="Descriere detaliată a serviciilor oferite" 
                    value={description} 
                    onChange={(e) => setDescription(e.target.value)} 
                    rows={6} 
                    required 
                  />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="category">Categoria *</Label>
                    <Select value={category} onValueChange={setCategory} required>
                      <SelectTrigger id="category">
                        <SelectValue placeholder="Selectează categoria" />
                      </SelectTrigger>
                      <SelectContent>
                        {serviceCategories.map((cat) => (
                          <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="service">Serviciu specific *</Label>
                    <Select 
                      value={service} 
                      onValueChange={setService} 
                      disabled={!category || availableServices.length === 0}
                      required
                    >
                      <SelectTrigger id="service">
                        <SelectValue placeholder={!category ? "Selectează categoria întâi" : "Selectează serviciul"} />
                      </SelectTrigger>
                      <SelectContent>
                        {availableServices.map((s) => (
                          <SelectItem key={s} value={s}>{s}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="price">Preț *</Label>
                    <div className="flex gap-2">
                      <Input 
                        id="price" 
                        type="text" 
                        placeholder="Ex: 100-150" 
                        value={price} 
                        onChange={(e) => setPrice(e.target.value)} 
                        required 
                        className="flex-1"
                      />
                      <Select value={priceUnit} onValueChange={setPriceUnit}>
                        <SelectTrigger className="w-32">
                          <SelectValue placeholder="Unitate" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="per oră">lei/oră</SelectItem>
                          <SelectItem value="per mp">lei/mp</SelectItem>
                          <SelectItem value="per proiect">lei/proiect</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="city">Oraș *</Label>
                    <Select value={city} onValueChange={setCity} required>
                      <SelectTrigger id="city">
                        <SelectValue placeholder="Selectează orașul" />
                      </SelectTrigger>
                      <SelectContent>
                        {cities.map((c) => (
                          <SelectItem key={c} value={c}>{c}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Informații de contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefon *</Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      value={phone} 
                      onChange={(e) => setPhone(e.target.value)} 
                      required 
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
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Fotografii</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <Upload className="mx-auto h-8 w-8 text-gray-400" />
                    <p className="mt-2 text-sm text-gray-600">
                      Încarcă până la 5 imagini care să ilustreze serviciile tale.
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      Formate acceptate: JPG, PNG, GIF. Max 5MB per fișier.
                    </p>
                    <Input
                      id="images"
                      type="file"
                      multiple
                      accept="image/*"
                      className="hidden"
                      onChange={handleImageUpload}
                    />
                    <Button
                      type="button"
                      variant="outline"
                      className="mt-4"
                      onClick={() => document.getElementById('images')?.click()}
                    >
                      Selectează fișiere
                    </Button>
                  </div>
                  
                  {images.length > 0 && (
                    <div>
                      <p className="text-sm font-medium mb-2">{images.length} fișier(e) selectat(e):</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {images.map((file, index) => (
                          <li key={index} className="truncate">
                            {file.name}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
            
            <div className="flex justify-end">
              <Button type="submit" className="px-8">
                Publică anunțul
              </Button>
            </div>
          </div>
        </form>
      </main>
      
      <Footer />
    </div>
  );
};

export default AddListing;
