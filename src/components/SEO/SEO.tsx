import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  pathname?: string;
  structuredData?: object;
  noindex?: boolean;
}

const defaultSEO = {
  title: 'Cosmin Web - Portfolio & Projects',
  description:
    'Portfolio of Cosmin showcasing web development projects, including React applications, e-commerce solutions, and creative web designs.',
  keywords: 'web developer, portfolio, React, TypeScript, frontend, fullstack, web design',
  ogImage: 'https://cosminweb.com/og-image.png',
  siteUrl: 'https://cosminweb.com',
};

export function SEO({
  title = defaultSEO.title,
  description = defaultSEO.description,
  keywords = defaultSEO.keywords,
  ogImage = defaultSEO.ogImage,
  ogType = 'website',
  pathname = '',
  structuredData,
  noindex = false,
}: SEOProps) {
  const canonicalUrl = `${defaultSEO.siteUrl}${pathname}`;

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Cosmin',
    url: defaultSEO.siteUrl,
    jobTitle: 'Web Developer',
    worksFor: {
      '@type': 'Organization',
      name: 'Freelance',
    },
    sameAs: [],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Cosmin Web',
    url: defaultSEO.siteUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${defaultSEO.siteUrl}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };

  const defaultStructuredData = [personSchema, websiteSchema];

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />
      {noindex && <meta name="robots" content="noindex, follow" />}

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Cosmin Web" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured Data / JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData || defaultStructuredData)}
      </script>
    </Helmet>
  );
}

export default SEO;
