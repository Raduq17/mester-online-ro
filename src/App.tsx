import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Index from "./pages/Index";
import ServiceListing from "./pages/ServiceListing";
import HandymanProfile from "./pages/HandymanProfile";
import HandymanContact from "./pages/HandymanContact";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ANPC from "./pages/ANPC";
import FAQ from "./pages/FAQ";
import Support from "./pages/Support";
import Contact from "./pages/Contact";
import AddListing from "./pages/AddListing";
import RequestDetails from "./pages/RequestDetails";

// Account Pages
import Favorites from "./pages/account/Favorites";
import Notifications from "./pages/account/Notifications";
import MyListings from "./pages/account/MyListings";
import PaymentMethods from "./pages/account/PaymentMethods";
import AddPaymentMethod from "./pages/account/AddPaymentMethod";
import Invoices from "./pages/account/Invoices";
import Settings from "./pages/account/Settings";
import RequestsList from "./pages/account/RequestsList";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/listings" element={<ServiceListing />} />
          <Route path="/profile/:id" element={<HandymanProfile />} />
          <Route path="/contact/:id" element={<HandymanContact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/anpc" element={<ANPC />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/support" element={<Support />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/add-listing" element={<AddListing />} />
          <Route path="/edit-listing/:id" element={<AddListing />} />
          <Route path="/request/:id" element={<RequestDetails />} />
          
          {/* Account pages */}
          <Route path="/account/favorites" element={<Favorites />} />
          <Route path="/account/notifications" element={<Notifications />} />
          <Route path="/account/my-listings" element={<MyListings />} />
          <Route path="/account/payment-methods" element={<PaymentMethods />} />
          <Route path="/account/add-payment-method" element={<AddPaymentMethod />} />
          <Route path="/account/invoices" element={<Invoices />} />
          <Route path="/account/settings" element={<Settings />} />
          <Route path="/account/requests" element={<RequestsList />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
