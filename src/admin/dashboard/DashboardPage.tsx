import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAdmin } from '../context/AdminContext';
import { servicesApi } from '../../lib/api/services';
import { showcaseApi } from '../../lib/api/showcase';
import { careersApi } from '../../lib/api/careers';
import { Wrench, Eye, Briefcase, Image, Plus, ArrowRight, ExternalLink, TrendingUp, Globe } from 'lucide-react';

interface Stats {
  services: number;
  showcase: number;
  careers: number;
  showcaseEnabled: boolean;
}

export function DashboardPage() {
  const { user } = useAdmin();
  const [stats, setStats] = useState<Stats>({ services: 0, showcase: 0, careers: 0, showcaseEnabled: true });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const [svcs, show, cars, showVis] = await Promise.all([
          servicesApi.getAll(),
          showcaseApi.getAll(),
          careersApi.getAll(),
          showcaseApi.getVisibility(),
        ]);
        setStats({
          services: svcs.length,
          showcase: show.length,
          careers: cars.length,
          showcaseEnabled: showVis,
        });
      } catch {}
      setLoading(false);
    };
    load();
  }, []);

  const STAT_CARDS = [
    { label: 'Services', value: stats.services, icon: Wrench, path: '/admin/services', color: 'bg-blue-50 text-blue-600' },
    { label: 'Showcase Projects', value: stats.showcase, icon: Eye, path: '/admin/showcase', color: 'bg-violet-50 text-violet-600' },
    { label: 'Career Listings', value: stats.careers, icon: Briefcase, path: '/admin/careers', color: 'bg-emerald-50 text-emerald-600' },
  ];

  const QUICK_ACTIONS = [
    { label: 'Add Service', path: '/admin/services/new', icon: Wrench },
    { label: 'Add Showcase Project', path: '/admin/showcase/new', icon: Eye },
    { label: 'Add Career Listing', path: '/admin/careers/new', icon: Briefcase },
    { label: 'Upload Image', path: '/admin/media', icon: Image },
  ];

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
          <p className="text-sm text-slate-500 mt-1">
            Welcome back, {user?.email?.split('@')[0]}. Here's your website overview.
          </p>
        </div>
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors shadow-sm"
        >
          <Globe className="w-4 h-4 text-[#0057FF]" />
          View Website
          <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
        </a>
      </div>

      {/* Showcase Visibility Banner */}
      {!loading && (
        <div className={`rounded-2xl border p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
          stats.showcaseEnabled
            ? 'bg-emerald-50 border-emerald-200'
            : 'bg-amber-50 border-amber-200'
        }`}>
          <div className="flex items-center gap-3">
            <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${stats.showcaseEnabled ? 'bg-emerald-100 text-emerald-600' : 'bg-amber-100 text-amber-600'}`}>
              <Eye className="w-5 h-5" />
            </div>
            <div>
              <p className={`text-sm font-bold ${stats.showcaseEnabled ? 'text-emerald-800' : 'text-amber-800'}`}>
                Capability Showcase is {stats.showcaseEnabled ? 'LIVE' : 'HIDDEN'}
              </p>
              <p className={`text-xs mt-0.5 ${stats.showcaseEnabled ? 'text-emerald-700' : 'text-amber-700'}`}>
                {stats.showcaseEnabled
                  ? 'The Showcase page is publicly visible and linked in navigation.'
                  : 'The Showcase page is hidden from public visitors and not linked in navigation.'}
              </p>
            </div>
          </div>
          <Link
            to="/admin/showcase"
            className={`shrink-0 px-4 py-2 rounded-xl text-xs font-bold transition-colors ${
              stats.showcaseEnabled
                ? 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200'
                : 'bg-amber-100 text-amber-700 hover:bg-amber-200'
            }`}
          >
            Manage Showcase →
          </Link>
        </div>
      )}

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {STAT_CARDS.map(card => {
          const Icon = card.icon;
          return (
            <Link
              key={card.label}
              to={card.path}
              className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-md hover:border-blue-200 transition-all group"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">{card.label}</p>
                  <p className="text-3xl font-bold text-slate-900 mt-2">
                    {loading ? '—' : card.value}
                  </p>
                </div>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${card.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
              </div>
              <div className="flex items-center gap-1 mt-4 text-xs font-semibold text-[#0057FF] group-hover:gap-2 transition-all">
                <span>Manage</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6">
        <h2 className="text-sm font-bold text-slate-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {QUICK_ACTIONS.map(action => {
            const Icon = action.icon;
            return (
              <Link
                key={action.label}
                to={action.path}
                className="flex flex-col items-center gap-3 p-4 rounded-xl border border-slate-200 hover:border-[#0057FF] hover:bg-blue-50/40 transition-all text-center group"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-100 group-hover:bg-[#0057FF] text-slate-500 group-hover:text-white flex items-center justify-center transition-all">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-xs font-semibold text-slate-700 leading-tight">{action.label}</span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Getting Started Card */}
      <div className="bg-gradient-to-br from-[#0057FF] to-[#2D8CFF] rounded-2xl p-6 sm:p-8 text-white">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
            <TrendingUp className="w-5 h-5" />
          </div>
          <div className="space-y-2">
            <h3 className="font-bold text-lg">Getting Started</h3>
            <p className="text-blue-100 text-sm leading-relaxed">
              Use the sidebar to manage all website content. Add services, manage the showcase, post career listings, and update contact information — all without touching any code.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              <Link to="/admin/services/new" className="px-3 py-1.5 rounded-lg bg-white/20 hover:bg-white/30 text-xs font-semibold transition-colors">
                + Add Service
              </Link>
              <Link to="/admin/showcase" className="px-3 py-1.5 rounded-lg bg-white/20 hover:bg-white/30 text-xs font-semibold transition-colors">
                Manage Showcase
              </Link>
              <Link to="/admin/settings" className="px-3 py-1.5 rounded-lg bg-white/20 hover:bg-white/30 text-xs font-semibold transition-colors">
                Update Contact Info
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
