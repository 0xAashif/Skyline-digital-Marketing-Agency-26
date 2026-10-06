import React, { Suspense, lazy } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { Skeleton } from '../components/ui/Skeleton';

// Router choice isolated here: change HashRouter to BrowserRouter in this single line when deploying to custom domain
export const AppRouter = HashRouter;

// Route-level code splitting
const HomePage = lazy(() =>
  import('../pages/HomePage').then((m) => ({ default: m.HomePage }))
);
const ServicesPage = lazy(() =>
  import('../pages/ServicesPage').then((m) => ({ default: m.ServicesPage }))
);
const WorkPage = lazy(() =>
  import('../pages/WorkPage').then((m) => ({ default: m.WorkPage }))
);
const WorkDetailPage = lazy(() =>
  import('../pages/WorkDetailPage').then((m) => ({ default: m.WorkDetailPage }))
);
const AboutPage = lazy(() =>
  import('../pages/AboutPage').then((m) => ({ default: m.AboutPage }))
);
const ContactPage = lazy(() =>
  import('../pages/ContactPage').then((m) => ({ default: m.ContactPage }))
);
const NotFoundPage = lazy(() =>
  import('../pages/NotFoundPage').then((m) => ({ default: m.NotFoundPage }))
);

const PageLoadingFallback: React.FC = () => (
  <div className="max-w-[1200px] mx-auto px-5 md:px-8 pt-40 pb-32 space-y-8 animate-in fade-in duration-200">
    <Skeleton className="w-40 h-8 rounded-full" />
    <Skeleton className="w-2/3 h-14" />
    <Skeleton className="w-full h-72 rounded-2xl" />
  </div>
);

export const AppRoutes: React.FC = () => {
  return (
    <AppRouter>
      <Suspense fallback={<PageLoadingFallback />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="work" element={<WorkPage />} />
            <Route path="work/:slug" element={<WorkDetailPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </AppRouter>
  );
};
