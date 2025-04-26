
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const TermsAndConditions = () => {
  return (
    <div className="flex flex-col min-h-screen bg-off-white">
      <Header />
      
      <main className="flex-grow container-custom py-12">
        <h1 className="text-3xl font-bold mb-8">Termenii și Condițiile</h1>
        
        <div className="bg-white rounded-lg shadow p-8 prose max-w-none">
          <p className="text-gray-600 mb-6">Data ultimei actualizări: 26 Aprilie 2025</p>

          <h2 className="text-xl font-semibold mt-6 mb-4">1. Informații generale</h2>
          <p>
            Prezentele Termeni și Condiții reglementează accesul și utilizarea platformei digitale MesterOnline, operată de S.C. MesterOnline S.R.L., societate cu răspundere limitată, cu sediul social în Str. Crișan nr. 11, municipiul Sighișoara, județul Mureș, România, înregistrată la Registrul Comerțului sub un CUI aleatoriu (ex: RO12345678).
          </p>
          <p>
            Pentru orice întrebări sau solicitări privind funcționarea platformei, utilizatorii ne pot contacta prin e-mail la: suport@mesteronline.ro.
          </p>
          <p>
            Prin accesarea sau utilizarea platformei, sunteți de acord să respectați acești termeni și condiții. În caz contrar, vă rugăm să nu utilizați serviciile noastre.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-4">2. Definirea utilizatorilor</h2>
          <p>
            Platforma MesterOnline este destinată următoarelor categorii de utilizatori:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Clienți (persoane fizice sau juridice): care caută, selectează și contractează prestatori de servicii.</li>
            <li>Prestatori (persoane fizice sau juridice): care își listează și promovează serviciile în diverse domenii (meșteșuguri, reparații, întreținere etc.).</li>
          </ul>
          <p>
            Accesul este permis tuturor persoanelor care au împlinit vârsta de 18 ani. Înregistrarea pe platformă implică acceptarea expresă a acestor termeni.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-4">3. Descrierea serviciilor oferite</h2>
          <p>
            MesterOnline funcționează ca o platformă online care facilitează interacțiunea dintre clienți și prestatori, oferind următoarele funcționalități:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Căutare, filtrare și vizualizare profiluri de prestatori;</li>
            <li>Publicarea anunțurilor de servicii de către prestatori;</li>
            <li>Sistem de recenzii și evaluări bazat pe experiențele anterioare ale clienților;</li>
            <li>Rezervare online a serviciilor disponibile;</li>
            <li>Chat intern pentru comunicarea directă între părți;</li>
            <li>Aplicație mobilă dedicată, disponibilă în magazinele de aplicații (Android/iOS).</li>
          </ul>
          <p>
            Platforma este gratuită pentru utilizatori, însă este posibil ca unele funcționalități suplimentare (ex: promovare anunțuri) să fie disponibile contra cost în viitor.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-4">4. Model de monetizare și plăți</h2>
          <p>
            Utilizarea platformei de către clienți și prestatori este gratuită, fără taxe de înregistrare sau utilizare de bază.
          </p>
          <p>
            MesterOnline percepe un comision din valoarea tranzacțiilor intermediate între clienți și prestatori, în condiții transparente afișate pe site.
          </p>
          <p>
            Plățile sunt procesate în siguranță prin platforma Netopia, partener autorizat în servicii de plată online.
          </p>
          <p>
            MesterOnline nu oferă direct servicii de prestare, ci doar facilitează contactul și interacțiunea între utilizatori. Nu ne asumăm responsabilitatea pentru calitatea, realizarea sau livrarea efectivă a serviciilor contractate.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-4">5. Protecția datelor cu caracter personal</h2>
          <p>
            Platforma respectă legislația națională și europeană privind protecția datelor (Regulamentul (UE) 2016/679 - GDPR).
          </p>
          <p>
            Colectăm și prelucrăm atât date personale ale utilizatorilor persoane fizice, cât și datele de identificare ale firmelor (prestatori sau clienți).
          </p>
          <p>
            Datele sunt utilizate exclusiv pentru desfășurarea activităților platformei și nu sunt divulgate terților fără consimțământ, cu excepția cazurilor prevăzute de lege.
          </p>
          <p>
            Pentru procesarea plăților, datele sunt partajate cu Netopia, care operează ca procesator de plăți în condiții conforme cu GDPR.
          </p>
          <p>
            Utilizatorii au dreptul de acces, rectificare, ștergere sau restricționare a datelor, conform politicii noastre de confidențialitate, disponibilă pe platformă.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-4">6. Newsletter și cookies</h2>
          <p>
            Utilizatorii pot opta pentru abonarea la newsletter în scopuri de informare privind oferte, noutăți sau servicii relevante.
          </p>
          <p>
            Pot oricând renunța la primirea newsletterului prin linkul dedicat din e-mailurile transmise.
          </p>
          <p>
            Platforma folosește cookies pentru:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>îmbunătățirea experienței de utilizare;</li>
            <li>personalizarea conținutului;</li>
            <li>colectarea de date statistice anonime.</li>
          </ul>
          <p>
            Folosirea site-ului implică acceptul utilizării cookie-urilor, în conformitate cu politica de cookies publicată pe platformă.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-4">7. Limitarea răspunderii</h2>
          <p>
            MesterOnline nu garantează calitatea, legalitatea sau disponibilitatea serviciilor oferite de prestatori.
          </p>
          <p>
            Utilizatorii își asumă întreaga responsabilitate pentru alegerea prestatorilor și desfășurarea colaborărilor.
          </p>
          <p>
            Nu ne asumăm răspunderea pentru pierderi, daune sau neînțelegeri rezultate în urma interacțiunii dintre utilizatori.
          </p>
          <p>
            În cazul raportării unor abateri (ex: fraudă, nerespectare angajamente), echipa MesterOnline își rezervă dreptul de a investiga și, dacă este cazul, de a suspenda conturile implicate.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-4">8. Drepturi de proprietate intelectuală</h2>
          <p>
            Întreg conținutul platformei (texte, logo, elemente grafice, cod sursă, bază de date, interfață) este proprietatea exclusivă a S.C. MesterOnline S.R.L. sau a partenerilor săi autorizați.
          </p>
          <p>
            Reproducerea, distribuirea, modificarea sau republicarea oricărui element fără acord scris este strict interzisă.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-4">9. Modificări ale termenilor</h2>
          <p>
            MesterOnline își rezervă dreptul de a modifica oricând acești termeni și condiții, în funcție de modificări legislative sau operaționale.
          </p>
          <p>
            Orice actualizare va fi publicată pe platformă cu indicarea datei de intrare în vigoare.
          </p>
          <p>
            Continuarea utilizării platformei după publicarea modificărilor implică acceptarea automată a acestora.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-4">10. Legea aplicabilă și jurisdicție</h2>
          <p>
            Acești termeni sunt guvernați de legislația română în vigoare. Orice dispută sau neînțelegere va fi soluționată pe cale amiabilă, iar în caz de eșec, de către instanțele competente din România, de la sediul operatorului.
          </p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
