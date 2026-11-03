import './Privacy.scss';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO/SEO';
import { personalInfo } from '../../utils/data';

function Privacy() {
  return (
    <div className="privacy-container">
      <SEO
        title="Politica de confidențialitate - Cosmin Web"
        description="Ce date sunt colectate prin formularul de contact de pe cosminweb.com, în ce scop sunt folosite și cum pot fi șterse."
        pathname="/privacy"
      />

      <div className="privacy-content">
        <h1>Politica de confidențialitate</h1>
        <p className="updated">Ultima actualizare: noiembrie 2026</p>

        <h2>1. Ce date colectez</h2>
        <p>
          Prin formularul de contact de pe acest site colectez doar datele pe care mi le trimiți
          voluntar: nume, subiect, adresă de email și conținutul mesajului.
        </p>

        <h2>2. În ce scop le folosesc</h2>
        <p>
          Datele sunt folosite exclusiv pentru a răspunde mesajului tău și pentru a discuta despre
          un posibil proiect. Nu trimit mesaje de marketing și nu îți vând sau transmit datele către
          terți în scopuri comerciale.
        </p>

        <h2>3. Unde ajung datele</h2>
        <p>
          Mesajele trimise prin formular sunt livrate pe adresa mea de email prin serviciul EmailJS.
          Site-ul nu stochează mesajele într-o bază de date proprie. Conținutul paginilor (proiecte,
          imagini) este administrat prin Sanity CMS, iar site-ul este găzduit de un furnizor de
          hosting.
        </p>

        <h2>4. Cookie-uri și stocare locală</h2>
        <p>
          Site-ul folosește stocarea locală din browser doar pentru a reține tema aleasă
          (deschis/închis). Nu folosesc cookie-uri de publicitate. Instrumentele de analiză sunt
          încărcate doar dacă sunt configurate explicit, iar în prezent acestea sunt dezactivate.
        </p>

        <h2>5. Cât timp păstrez datele</h2>
        <p>
          Corespondența prin email este păstrată atât timp cât este necesar pentru rezolvarea
          solicitării și pentru eventuale colaborări ulterioare. Poți cere ștergerea oricând.
        </p>

        <h2>6. Drepturile tale</h2>
        <p>
          Poți solicita oricând accesul, corectarea sau ștergerea datelor tale, scriindu-mi la{' '}
          <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>.
        </p>

        <h2>7. Contact</h2>
        <p>
          Pentru orice întrebare legată de datele tale, mă poți contacta la{' '}
          <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>.
        </p>

        <Link to="/" className="back-home">
          Înapoi la pagina principală
        </Link>
      </div>
    </div>
  );
}

export default Privacy;
