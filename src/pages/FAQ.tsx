
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqItems = [
    {
      question: "Cum pot găsi un profesionist de încredere pentru proiectul meu?",
      answer: "Folosește bara de căutare de pe pagina principală și filtrele avansate pentru a alege orașul, categoria de servicii și perioada dorită. Rezultatele pot fi sortate după rating, preț sau recomandări."
    },
    {
      question: "Este gratuit să postez un anunț ca furnizor de servicii?",
      answer: "Da, este complet gratuit. Trebuie doar să îți creezi un cont și să completezi detaliile serviciului tău."
    },
    {
      question: "Cum știu dacă un profesionist este de încredere?",
      answer: "Fiecare profil include evaluări, recenzii și un portofoliu foto. Citește feedback-ul clienților pentru a lua o decizie în cunoștință de cauză."
    },
    {
      question: "Pot negocia prețul cu furnizorul de servicii?",
      answer: "Da. După ce selectezi un furnizor, poți să îi trimiți mesaje direct pentru a discuta despre scopul proiectului și prețuri."
    },
    {
      question: "Ce se întâmplă dacă profesionistul nu îndeplinește așteptările?",
      answer: "Poți să îl raportezi din profilul său. Echipa noastră de suport va investiga și poate media sau lua măsuri dacă este necesar."
    },
    {
      question: "Pot edita sau șterge anunțurile mele postate?",
      answer: "Da. Ai control deplin asupra anunțurilor tale în tabloul de bord al contului."
    },
    {
      question: "Pot salva anunțuri pentru mai târziu?",
      answer: "Da! Utilizatorii conectați pot salva anunțuri într-o listă de \"Favorite\" pentru acces facil mai târziu."
    },
    {
      question: "Platforma oferă garanții pentru lucrările finalizate?",
      answer: "Nu oferim garanții directe, dar recomandăm întotdeauna să solicitați un contract și o factură de la furnizorul de servicii."
    },
    {
      question: "Cum pot descărca aplicația mobilă?",
      answer: "Link-urile pentru iOS și Android se află în subsolul site-ului web—doar dă click și instalează."
    },
    {
      question: "Ce metode de plată sunt acceptate?",
      answer: "Toate plățile se fac direct între tine și furnizor. Platforma nu procesează tranzacții în acest moment."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-off-white">
      <Header />
      
      <main className="flex-grow container-custom py-12">
        <h1 className="text-3xl font-bold mb-2">Întrebări Frecvente (FAQ)</h1>
        <p className="text-gray-600 mb-8">Găsește răspunsuri la cele mai comune întrebări despre platforma noastră.</p>
        
        <div className="bg-white rounded-lg shadow p-6 md:p-8">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-medium">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FAQ;
