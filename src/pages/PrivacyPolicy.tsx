
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col min-h-screen bg-off-white">
      <Header />
      
      <main className="flex-grow container-custom py-12">
        <h1 className="text-3xl font-bold mb-8">Politica de Confidențialitate</h1>
        
        <div className="bg-white rounded-lg shadow p-8 prose max-w-none">
          <p className="text-gray-600 mb-6">Data ultimei actualizări: 26 Aprilie 2025</p>

          <p>
            Această Politică de Confidențialitate explică modul în care S.C. MesterOnline S.R.L. colectează, utilizează, stochează și protejează datele cu caracter personal ale utilizatorilor platformei digitale MesterOnline, în conformitate cu Regulamentul (UE) 2016/679 privind protecția datelor (GDPR).
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-4">1. Operatorul de date</h2>
          <p>
            Platforma MesterOnline este operată de:
          </p>
          <p>
            S.C. MesterOnline S.R.L.<br />
            Sediul social: Str. Crișan nr. 11, Sighișoara, România<br />
            CUI: RO12345678<br />
            Email de contact: suport@mesteronline.ro
          </p>
          <p>
            Această politică se aplică tuturor utilizatorilor platformei – persoane fizice sau juridice – care utilizează serviciile oferite prin intermediul website-ului sau aplicației mobile MesterOnline.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-4">2. Tipuri de date colectate</h2>
          <p>
            <strong>a. Date furnizate direct de utilizatori:</strong>
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Nume și prenume</li>
            <li>Adresă de e-mail</li>
            <li>Număr de telefon</li>
            <li>Adresă completă (dacă este cazul)</li>
            <li>Date de identificare fiscală (CUI, denumire firmă etc.)</li>
            <li>Detalii cont bancar (pentru prestatori)</li>
            <li>Conținutul comunicării în cadrul platformei (chat intern, recenzii)</li>
          </ul>

          <p>
            <strong>b. Date colectate automat:</strong>
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Adresă IP</li>
            <li>Locație geografică aproximativă</li>
            <li>Informații despre dispozitivul utilizat, browser, sistem de operare</li>
            <li>Informații de trafic și navigare (cookies, loguri, identificatori unici)</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-4">3. Temeiul legal al prelucrării</h2>
          <p>
            Prelucrarea datelor cu caracter personal se realizează în temeiul:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Executării unui contract (ex. contul de utilizator, gestionarea rezervărilor)</li>
            <li>Obligațiilor legale (ex. emiterea facturilor, raportări către autorități)</li>
            <li>Consimțământului explicit (ex. abonare newsletter, utilizare cookies)</li>
            <li>Interesului legitim al operatorului (ex. îmbunătățirea serviciilor, prevenirea fraudelor)</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-4">4. Scopurile prelucrării</h2>
          <p>
            Datele colectate sunt utilizate strict în scopurile pentru care au fost furnizate sau colectate, inclusiv, dar fără a se limita la:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Crearea și gestionarea contului de utilizator</li>
            <li>Facilitarea comunicării între utilizatori (chat intern, rezervări)</li>
            <li>Procesarea plăților prin intermediul procesatorului autorizat Netopia</li>
            <li>Emiterea documentelor fiscale aferente tranzacțiilor</li>
            <li>Transmiterea de comunicări comerciale (newslettere, oferte speciale – doar cu acordul explicit)</li>
            <li>Îmbunătățirea experienței utilizatorilor și a performanței platformei</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-4">5. Stocarea și durata de păstrare a datelor</h2>
          <p>
            Datele sunt păstrate doar atât cât este necesar pentru îndeplinirea scopurilor pentru care au fost colectate, respectând termenele legale aplicabile.
          </p>

          <table className="min-w-full my-4 border-collapse">
            <thead>
              <tr>
                <th className="border p-2 text-left">Tipul datelor</th>
                <th className="border p-2 text-left">Durată de păstrare</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">Date cont utilizator</td>
                <td className="border p-2">Pe durata contului + 3 ani de la închidere</td>
              </tr>
              <tr>
                <td className="border p-2">Date tranzacții & facturare</td>
                <td className="border p-2">Minimum 10 ani (conform legislației fiscale)</td>
              </tr>
              <tr>
                <td className="border p-2">Comunicare în chat intern</td>
                <td className="border p-2">12 luni de la încheierea discuției</td>
              </tr>
              <tr>
                <td className="border p-2">Date marketing (newsletter etc.)</td>
                <td className="border p-2">Până la retragerea consimțământului</td>
              </tr>
              <tr>
                <td className="border p-2">Cookies & identificatori</td>
                <td className="border p-2">1 zi – 12 luni (în funcție de tipul lor)</td>
              </tr>
            </tbody>
          </table>

          <h2 className="text-xl font-semibold mt-6 mb-4">6. Partajarea datelor cu terți</h2>
          <p>
            MesterOnline nu vinde, nu închiriază și nu divulgă datele tale personale către terți fără temei legal sau consimțământul tău.
          </p>
          <p>
            Totuși, în vederea furnizării serviciilor, datele pot fi transmise următoarelor categorii de destinatari:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Procesatori de plăți autorizați (ex: Netopia)</li>
            <li>Furnizori de servicii IT și hosting</li>
            <li>Furnizori de marketing și e-mailing (ex: pentru trimiterea de newslettere)</li>
            <li>Autorități publice, în măsura în care suntem obligați legal</li>
          </ul>
          <p>
            Toți partenerii noștri respectă standardele GDPR și sunt supuși unor obligații contractuale stricte de confidențialitate.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-4">7. Măsuri de securitate</h2>
          <p>
            Pentru a asigura confidențialitatea și integritatea datelor, implementăm măsuri tehnice și organizatorice avansate, inclusiv:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Transmiterea criptată a datelor prin HTTPS</li>
            <li>Servere securizate și monitorizate constant</li>
            <li>Acces restricționat bazat pe autentificare</li>
            <li>Back-up regulat și criptare a datelor sensibile</li>
            <li>Audituri periodice de securitate</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-4">8. Drepturile tale în calitate de persoană vizată</h2>
          <p>
            Conform Regulamentului GDPR, ai următoarele drepturi:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Dreptul de acces la datele tale</li>
            <li>Dreptul la rectificare a datelor incorecte sau incomplete</li>
            <li>Dreptul la ștergerea datelor („dreptul de a fi uitat")</li>
            <li>Dreptul la restricționarea prelucrării</li>
            <li>Dreptul la opoziție față de anumite prelucrări (ex. marketing)</li>
            <li>Dreptul la portabilitatea datelor</li>
            <li>Dreptul de a-ți retrage consimțământul în orice moment (acolo unde prelucrarea se bazează pe consimțământ)</li>
            <li>Dreptul de a depune o plângere la Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP) – www.dataprotection.ro</li>
          </ul>
          <p>
            Pentru exercitarea acestor drepturi, ne poți contacta oricând la adresa: suport@mesteronline.ro.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-4">9. Utilizarea modulelor cookie</h2>
          <p>
            Platforma MesterOnline utilizează cookies și tehnologii similare pentru:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Funcționalitatea esențială a site-ului</li>
            <li>Analiza comportamentului utilizatorilor</li>
            <li>Personalizarea conținutului</li>
            <li>Remarketing (doar cu acordul tău)</li>
          </ul>
          <p>
            Pentru mai multe informații, consultă [Politica de Cookie-uri].
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-4">10. Modificarea politicii de confidențialitate</h2>
          <p>
            Ne rezervăm dreptul de a actualiza periodic această Politică. Orice modificări vor fi publicate pe platformă, iar data ultimei actualizări va fi menționată în partea superioară a documentului. Utilizarea în continuare a platformei reprezintă acceptarea politicii actualizate.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-4">11. Informații de contact</h2>
          <p>
            Pentru întrebări, clarificări sau solicitări privind datele tale cu caracter personal, te rugăm să ne contactezi:
          </p>
          <p>
            📧 Email: suport@mesteronline.ro<br />
            📬 Adresă poștală: S.C. MesterOnline S.R.L., Str. Crișan nr. 11, Sighișoara, România
          </p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
