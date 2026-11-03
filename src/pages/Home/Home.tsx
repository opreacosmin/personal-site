import { useEffect } from 'react';
import { Services, Header, About, Contact, Work, Testimonials } from '../../containers';
import SEO from '../../components/SEO/SEO';
import './Home.scss';

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home">
      <SEO
        title="Cosmin Web - Portfolio & Projects"
        description="Portfolio of Cosmin showcasing web development projects, including React applications, e-commerce solutions, and creative web designs."
        pathname="/"
      />
      <Header />
      <Services />
      <Work />
      {/* <Blog /> */}
      <About />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default Home;
