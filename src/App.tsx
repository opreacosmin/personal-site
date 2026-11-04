import './App.css';
import React, { Suspense } from 'react';
import NavBar from './components/NavBar/NavBar.tsx';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Loader from './components/Loader/Loader.tsx';
import Analytics from './components/Analytics/Analytics.tsx';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

// Lazy load page components for code splitting
const Home = React.lazy(() => import('./pages/Home/Home'));
const Allprojects = React.lazy(() => import('./pages/All_projects/Allprojects'));
const ProjectPage = React.lazy(() => import('./pages/ProjectPage/[slug]'));
const PresentationWebsite = React.lazy(
  () => import('./pages/PresentationWebsite/PresentationWebsite.tsx')
);
const EcommerceWebsite = React.lazy(() => import('./pages/EcommerceWebsite/EcommerceWebsite.tsx'));
const BlogList = React.lazy(() => import('./pages/BlogList/BlogList.tsx'));
const BlogPost = React.lazy(() => import('./pages/BlogPost/BlogPost.tsx'));
const CaseStudy = React.lazy(() => import('./pages/CaseStudy/CaseStudy.tsx'));
const NotFound = React.lazy(() => import('./pages/NotFound/NotFound.tsx'));
const Privacy = React.lazy(() => import('./pages/Privacy/Privacy.tsx'));

// Reset the error boundary whenever the route changes, so a broken page
// doesn't keep the whole app stuck on the fallback UI.
function RouteErrorBoundary({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  return <ErrorBoundary key={location.pathname}>{children}</ErrorBoundary>;
}

function App() {
  return (
    <div className={'app'}>
      <Router basename="/personal-site">
        <Analytics />
        <NavBar />
        <RouteErrorBoundary>
          <Suspense fallback={<Loader message="Loading..." />}>
            <Routes>
              <Route path={'/'} element={<Home />} />
              <Route path={'/projects'} element={<Allprojects />} />
              <Route path={'/:slug'} element={<ProjectPage />} />
              <Route path={'/presentation-website'} element={<PresentationWebsite />} />
              <Route path={'/ecommerce-website'} element={<EcommerceWebsite />} />
              <Route path={'/blog'} element={<BlogList />} />
              <Route path={'/blog/:slug'} element={<BlogPost />} />
              <Route path={'/case-study/:slug'} element={<CaseStudy />} />
              <Route path={'/privacy'} element={<Privacy />} />
              <Route path={'*'} element={<NotFound />} />
            </Routes>
          </Suspense>
        </RouteErrorBoundary>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
