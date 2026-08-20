import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAdmin } from '../context/AdminContext';
import {
  LayoutDashboard,
  Settings,
  Wrench,
  Briefcase,
  Image,
  LogOut,
  X,
  Menu,
  ChevronRight,
  Eye,
  Globe,
  LayoutText,
} from 'lucide-react';

interface NavItem {
  label: string;
  path: string;
  icon: React.FC<{ className?: string }>;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Dashboard', path: '/admin', icon: LayoutDashboard },
  { label: 'Page Content & Images', path: '/admin/pages', icon: LayoutText },
  { label: 'Services', path: '/admin/services', icon: Wrench },
  { label: 'Capability Showcase', path: '/admin/showcase', icon: Eye },
  { label: 'Careers', path: '/admin/careers', icon: Briefcase },
  { label: 'Media Library', path: '/admin/media', icon: Image },
  { label: 'Contact & Settings', path: '/admin/settings', icon: Settings },
];

function NavLink({ item, onClick }: { item: NavItem; onClick?: () => void }) {
  const location = useLocation();
  const isActive =
    item.path === '/admin'
      ? location.pathname === '/admin'
      : location.pathname.startsWith(item.path);
  const Icon = item.icon;

  return (
    <Link
      to={item.path}
      onClick={onClick}
      className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 group ${
        isActive
          ? 'bg-[#0057FF] text-white shadow-md shadow-blue-500/20'
          : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
      }`}
    >
      <Icon className={`w-4.5 h-4.5 shrink-0 ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-slate-600'}`} />
      <span>{item.label}</span>
      {isActive && <ChevronRight className="w-3.5 h-3.5 ml-auto opacity-70" />}
    </Link>
  );
}

// Desktop Sidebar (always visible on lg+)
export function AdminSidebar() {
  const { user, signOut } = useAdmin();

  return (
    <aside className="hidden lg:flex flex-col w-64 bg-white border-r border-slate-200 h-screen fixed left-0 top-0 z-30">
      {/* Logo */}
      <div className="px-5 py-5 border-b border-slate-100">
        <Link to="/" target="_blank" className="flex items-center gap-3 group">
          <img src="/ag_vertex_logo.png" alt="AG Vertex" className="h-10 w-auto object-contain" />
          <div className="flex flex-col min-w-0">
            <span className="text-xs font-bold text-slate-900 leading-tight">Admin CMS</span>
            <span className="text-[10px] text-slate-400 flex items-center gap-1">
              <Globe className="w-2.5 h-2.5" />
              agvertex.com
            </span>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-3.5 mb-2">
          Content
        </p>
        {NAV_ITEMS.map(item => (
          <NavLink key={item.path} item={item} />
        ))}
      </nav>

      {/* User + Logout */}
      <div className="px-3 py-4 border-t border-slate-100 space-y-2">
        <div className="px-3.5 py-2.5 rounded-xl bg-slate-50">
          <p className="text-xs font-semibold text-slate-800 truncate">{user?.email}</p>
          <p className="text-[10px] text-slate-400 mt-0.5">Administrator</p>
        </div>
        <button
          onClick={signOut}
          className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium text-slate-500 hover:bg-red-50 hover:text-red-600 transition-all"
        >
          <LogOut className="w-4 h-4" />
          Sign Out
        </button>
      </div>
    </aside>
  );
}

// Mobile Header Bar with Drawer Trigger
export function AdminMobileHeader() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { user, signOut } = useAdmin();

  return (
    <>
      {/* Mobile topbar */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-white border-b border-slate-200 px-4 py-3 flex items-center justify-between">
        <Link to="/" target="_blank" className="flex items-center gap-2">
          <img src="/ag_vertex_logo.png" alt="AG Vertex" className="h-8 w-auto object-contain" />
          <span className="text-sm font-bold text-slate-800">CMS</span>
        </Link>
        <button
          onClick={() => setDrawerOpen(true)}
          className="w-9 h-9 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center"
        >
          <Menu className="w-5 h-5" />
        </button>
      </header>

      {/* Drawer overlay */}
      {drawerOpen && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm lg:hidden"
          onClick={() => setDrawerOpen(false)}
        />
      )}

      {/* Drawer */}
      <aside
        className={`fixed top-0 left-0 z-50 h-screen w-72 bg-white shadow-2xl flex flex-col lg:hidden transition-transform duration-300 ${
          drawerOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
          <img src="/ag_vertex_logo.png" alt="AG Vertex" className="h-9 w-auto object-contain" />
          <button
            onClick={() => setDrawerOpen(false)}
            className="w-8 h-8 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-3.5 mb-2">
            Content
          </p>
          {NAV_ITEMS.map(item => (
            <NavLink key={item.path} item={item} onClick={() => setDrawerOpen(false)} />
          ))}
        </nav>

        <div className="px-3 py-4 border-t border-slate-100 space-y-2">
          <div className="px-3.5 py-2.5 rounded-xl bg-slate-50">
            <p className="text-xs font-semibold text-slate-800 truncate">{user?.email}</p>
            <p className="text-[10px] text-slate-400">Administrator</p>
          </div>
          <button
            onClick={signOut}
            className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium text-slate-500 hover:bg-red-50 hover:text-red-600 transition-all"
          >
            <LogOut className="w-4 h-4" />
            Sign Out
          </button>
        </div>
      </aside>
    </>
  );
}
