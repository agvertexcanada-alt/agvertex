import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAdmin } from './context/AdminContext';
import { AdminLoginPage } from './auth/AdminLoginPage';
import { AdminSidebar, AdminMobileHeader } from './components/AdminSidebar';
import { ToastContainer } from './components/Toast';
import { DashboardPage } from './dashboard/DashboardPage';
import { ServicesListPage } from './services/ServicesListPage';
import { ServiceFormPage } from './services/ServiceFormPage';
import { ShowcaseListPage } from './showcase/ShowcaseListPage';
import { ShowcaseFormPage } from './showcase/ShowcaseFormPage';
import { CareersListPage } from './careers/CareersListPage';
import { CareerFormPage } from './careers/CareerFormPage';
import { MediaPage } from './media/MediaPage';
import { SettingsPage } from './settings/SettingsPage';
import { PageContentEditorPage } from './pages/PageContentEditorPage';
import { Loader2 } from 'lucide-react';

function ProtectedLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50 flex">
      <AdminSidebar />
      <AdminMobileHeader />
      <main className="flex-1 lg:ml-64 pt-16 lg:pt-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </div>
      </main>
      <ToastContainer />
    </div>
  );
}

export function AdminApp() {
  const { loading, isAdmin } = useAdmin();

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <Loader2 className="w-7 h-7 animate-spin text-[#0057FF]" />
      </div>
    );
  }

  if (!isAdmin) {
    return <AdminLoginPage />;
  }

  return (
    <ProtectedLayout>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/pages" element={<PageContentEditorPage />} />
        <Route path="/services" element={<ServicesListPage />} />
        <Route path="/services/new" element={<ServiceFormPage />} />
        <Route path="/services/:id" element={<ServiceFormPage />} />
        <Route path="/showcase" element={<ShowcaseListPage />} />
        <Route path="/showcase/new" element={<ShowcaseFormPage />} />
        <Route path="/showcase/:id" element={<ShowcaseFormPage />} />
        <Route path="/careers" element={<CareersListPage />} />
        <Route path="/careers/new" element={<CareerFormPage />} />
        <Route path="/careers/:id" element={<CareerFormPage />} />
        <Route path="/media" element={<MediaPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="*" element={<Navigate to="/admin" replace />} />
      </Routes>
    </ProtectedLayout>
  );
}
