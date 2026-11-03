/**
 * Post-build step: generates per-route static HTML files in `dist/`
 * containing the correct <title>, meta description, canonical, Open Graph
 * and Twitter Card tags, so social media crawlers (which do not run JS)
 * get a proper preview card per page.
 *
 * Run automatically after `vite build` via the `build` npm script.
 */
import fs from 'node:fs';
import path from 'node:path';

const DIST = path.resolve('dist');
const SRC = path.resolve('src');
const SITE_URL = 'https://cosminweb.com';
const OG_IMAGE = `${SITE_URL}/og-image.png`;
const BASE_TITLE = 'Cosmin Web - Portfolio & Projects';
const BASE_DESCRIPTION =
  'Portfolio of Cosmin showcasing web development projects, including React applications, e-commerce solutions, and creative web designs.';
const BASE_KEYWORDS = 'web developer, portfolio, React, TypeScript, frontend, fullstack, web design';

function readSource(relPath) {
  return fs.readFileSync(path.resolve('src', relPath.replace(/^src\//, '')), 'utf8');
}

function replaceMetaTag(html, attrKey, contentKey, value) {
  const pattern = new RegExp(`(<meta[^>]*${attrKey}[^>]*${contentKey}=")[^"]*(")`);
  const replacement = `$1${value}$2`;
  if (!pattern.test(html)) return html;
  return html.replace(pattern, replacement);
}

function replaceCanonical(html, value) {
  const pattern = /(<link[^>]*rel="canonical"[^>]*href=")[^"]*(")/;
  if (!pattern.test(html)) return html;
  return html.replace(pattern, `$1${value}$2`);
}

function replaceTitle(html, value) {
  const pattern = /<title>[^<]*<\/title>/;
  if (!pattern.test(html)) return html;
  return html.replace(pattern, `<title>${value}</title>`);
}

function replaceRobots(html, content) {
  const pattern = /(<meta[^>]*name="robots"[^>]*content=")[^"]*(")/;
  if (!pattern.test(html)) return html;
  return html.replace(pattern, `$1${content}$2`);
}

function renderRoute(route, meta) {
  let html = fs.readFileSync(path.join(DIST, 'index.html'), 'utf8');

  const title = meta.title;
  const description = meta.description;
  const canonicalUrl = `${SITE_URL}${route === '/' ? '/' : route}`;

  html = replaceTitle(html, title);
  html = replaceMetaTag(html, 'name="description"', 'content', description);
  html = replaceMetaTag(html, 'name="keywords"', 'content', meta.keywords ?? BASE_KEYWORDS);
  html = replaceCanonical(html, canonicalUrl);
  html = replaceMetaTag(html, 'property="og:title"', 'content', title);
  html = replaceMetaTag(html, 'property="og:description"', 'content', description);
  html = replaceMetaTag(html, 'property="og:type"', 'content', meta.ogType ?? 'website');
  html = replaceMetaTag(html, 'property="og:url"', 'content', canonicalUrl);
  html = replaceMetaTag(html, 'property="og:image"', 'content', OG_IMAGE);
  html = replaceMetaTag(html, 'name="twitter:title"', 'content', title);
  html = replaceMetaTag(html, 'name="twitter:description"', 'content', description);
  html = replaceMetaTag(html, 'name="twitter:url"', 'content', canonicalUrl);
  html = replaceMetaTag(html, 'name="twitter:image"', 'content', OG_IMAGE);

  if (meta.noindex) {
    const robotsTag = '<meta name="robots" content="noindex, follow" />';
    if (!/name="robots"/.test(html)) {
      html = html.replace('</head>', `    ${robotsTag}\n  </head>`);
    } else {
      html = replaceRobots(html, 'noindex, follow');
    }
  }

  return html;
}

function parseObjectLiterals(block) {
  const entries = [];
  const startRe = /\n  \{\n/g;
  let m;
  while ((m = startRe.exec(block)) !== null) {
    const start = m.index + m[0].length;
    const end = block.indexOf('\n  },', start);
    if (end === -1) break;
    const body = block.slice(start, end);
    const slugMatch = body.match(/slug:\s*'([^']+)'/);
    if (slugMatch) {
      entries.push({
        slug: slugMatch[1],
        title: body.match(/title:\s*'([^']*)'/)?.[1] ?? '',
        description:
          body.match(/excerpt:\s*'([^']*)'/)?.[1] ??
          body.match(/description:\s*'([^']*)'/)?.[1] ??
          '',
      });
    }
  }
  return entries;
}

function extractSection(source, marker) {
  const start = source.indexOf(marker);
  const end = source.indexOf('\nexport ', start + 10);
  return end === -1 ? source.slice(start) : source.slice(start, end);
}

async function getBlogRoutes() {
  const source = readSource('src/utils/data.ts');
  const block = extractSection(source, 'export const blogPosts');
  const posts = parseObjectLiterals(block).filter((p) => p.slug);
  return posts.map((p) => ({
    path: `/blog/${p.slug}`,
    title: `${p.title} - Cosmin Web`,
    description: p.description,
    ogType: 'article',
    noindex: false,
  }));
}

async function getCaseStudyRoutes() {
  const source = readSource('src/utils/data.ts');
  const block = extractSection(source, 'export const caseStudies');
  const studies = parseObjectLiterals(block).filter((s) => s.slug);
  return studies.map((s) => ({
    path: `/case-study/${s.slug}`,
    title: `${s.title} - Case Study | Cosmin Web`,
    description: s.description,
    ogType: 'article',
    noindex: false,
  }));
}

async function getProjectRoutes() {
  const fallbackSlugs = [
    'rebalancyu-website',
    'mribs-website',
    'glowup-club-website',
    'inovateteam-website',
    'papi-s-bistro-website',
    'infraredslim',
    'walkorie-calories-counter',
    'hangman',
  ];
  const projectId = process.env.VITE_APP_SANITY_PROJECT_ID;
  const slugs = [];
  if (projectId) {
    try {
      const query = encodeURIComponent('*[_type == "project"] | order(name) {name, "slug": slug.current}');
      const res = await fetch(
        `https://${projectId}.api.sanity.io/v2023-03-19/data/query/production?query=${query}`,
        { headers: { accept: 'application/json' } }
      );
      if (res.ok) {
        const data = await res.json();
        for (const p of data?.result ?? []) {
          if (p?.slug) slugs.push(p.slug);
        }
      }
    } catch {
      // Network/CORS blocked during build: fall back to the known slugs.
    }
  }
  const list = slugs.length > 0 ? slugs : fallbackSlugs;
  return list.map((slug) => ({
    path: `/${slug}`,
    title: `${slug.replace(/-/g, ' ')} - Cosmin Web`,
    description: 'Case study of a recent web development project by Cosmin Alexandru.',
    ogType: 'article',
    noindex: false,
  }));
}

async function buildRoutes() {
  const staticRoutes = [
    { path: '/', title: BASE_TITLE, description: BASE_DESCRIPTION, keywords: BASE_KEYWORDS, ogType: 'website', noindex: false },
    { path: '/projects', title: 'All Projects - Cosmin Web Portfolio', description: BASE_DESCRIPTION, ogType: 'website', noindex: false },
    { path: '/blog', title: 'Blog - Cosmin Web', description: 'Technical insights, tutorials and thoughts on web development: React, TypeScript, CSS, APIs and WordPress.', ogType: 'website', noindex: false },
    { path: '/presentation-website', title: 'Site de Prezentare - Cosmin Web', description: 'Site-uri de prezentare moderne, rapide și optimizate SEO, cu panou de administrare intuitiv. Transformă vizitatorii în clienți.', ogType: 'website', noindex: false },
    { path: '/ecommerce-website', title: 'Magazin Online - Cosmin Web', description: 'Magazine online rapide și sigure, cu integrare de plăți și administrare simplă. Pagina este încă în construcție.', ogType: 'website', noindex: true },
    { path: '/privacy', title: 'Politica de confidențialitate - Cosmin Web', description: 'Ce date sunt colectate prin formularul de contact de pe cosminweb.com, în ce scop sunt folosite și cum pot fi șterse.', ogType: 'website', noindex: false },
  ];

  const routes = [...staticRoutes];
  for (const blog of await getBlogRoutes()) routes.push(blog);
  for (const study of await getCaseStudyRoutes()) routes.push(study);
  for (const project of await getProjectRoutes()) {
    routes.push({
      path: project.path,
      title: `${project.title} - Cosmin Web`,
      description: project.description,
      ogType: project.ogType,
      noindex: false,
    });
  }

  const seen = new Set();
  const unique = [];
  for (const r of routes) {
    if (seen.has(r.path)) continue;
    seen.add(r.path);
    unique.push(r);
  }
  return unique;
}

async function main() {
  const routes = await buildRoutes();
  for (const route of routes) {
    const html = renderRoute(route.path, route);
    const outPath = path.join(DIST, route.path, 'index.html');
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, html);
    console.log(`prerendered ${route.path} -> ${outPath}`);
  }
}

main();
