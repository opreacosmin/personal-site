import './EcommerceWebsite.scss';
import { useEffect } from 'react';
import AnimatedAsset from '../../components/AnimatedAsset/AnimatedAsset';
import SEO from '../../components/SEO/SEO';

function EcommerceWebsite() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="ecommerce-website">
      <SEO
        title="Magazin Online - Cosmin Web"
        description="Magazine online rapide și sigure, cu integrare de plăți și administrare simplă. Pagina este încă în construcție."
        pathname="/ecommerce-website"
        noindex
      />
      <AnimatedAsset name="404" alt="Page under construction" width={150} height={150} />
      <h2>Return home, page is still in construction.</h2>
    </div>
  );
}

export default EcommerceWebsite;
