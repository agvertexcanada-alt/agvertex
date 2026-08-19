import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { servicesApi, Service } from '../../lib/api/services';
import { StatusBadge } from '../components/StatusBadge';
import { ConfirmModal } from '../components/AdminModal';
import { toast } from '../components/Toast';
import { Plus, Pencil, Trash2, Globe, EyeOff, Loader2, Wrench } from 'lucide-react';

export function ServicesListPage() {
  const navigate = useNavigate();
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleteTarget, setDeleteTarget] = useState<Service | null>(null);
  const [deleting, setDeleting] = useState(false);
  const [toggling, setToggling] = useState<string | null>(null);

  const load = async () => {
    try {
      setLoading(true);
      const data = await servicesApi.getAll();
      setServices(data);
    } catch (e: any) {
      toast.error('Failed to load services: ' + e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, []);

  const handleDelete = async () => {
    if (!deleteTarget) return;
    setDeleting(true);
    try {
      await servicesApi.delete(deleteTarget.id);
      toast.success(`"${deleteTarget.title}" deleted.`);
      setDeleteTarget(null);
      load();
    } catch (e: any) {
      toast.error('Delete failed: ' + e.message);
    } finally {
      setDeleting(false);
    }
  };

  const handleToggleStatus = async (service: Service) => {
    setToggling(service.id);
    try {
      if (service.status === 'published') {
        await servicesApi.unpublish(service.id);
        toast.success(`"${service.title}" moved to draft.`);
      } else {
        await servicesApi.publish(service.id);
        toast.success(`"${service.title}" published successfully.`);
      }
      load();
    } catch (e: any) {
      toast.error('Status update failed: ' + e.message);
    } finally {
      setToggling(null);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Services</h1>
          <p className="text-sm text-slate-500 mt-1">Manage the engineering services displayed on your website.</p>
        </div>
        <Link
          to="/admin/services/new"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0057FF] text-white text-sm font-bold hover:bg-blue-600 transition-colors shadow-md shadow-blue-500/20"
        >
          <Plus className="w-4 h-4" />
          Add Service
        </Link>
      </div>

      {/* Table / Cards */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
        {loading ? (
          <div className="flex items-center justify-center h-48">
            <Loader2 className="w-6 h-6 animate-spin text-[#0057FF]" />
          </div>
        ) : services.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-56 text-center p-6">
            <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center mb-4">
              <Wrench className="w-7 h-7 text-slate-400" />
            </div>
            <h3 className="text-base font-bold text-slate-800">No Services Yet</h3>
            <p className="text-sm text-slate-500 mt-1 max-w-xs">
              Add your first engineering service to display it on the website.
            </p>
            <Link
              to="/admin/services/new"
              className="mt-4 px-4 py-2 rounded-xl bg-[#0057FF] text-white text-sm font-bold hover:bg-blue-600 transition-colors"
            >
              + Add Service
            </Link>
          </div>
        ) : (
          <>
            {/* Desktop Table */}
            <div className="hidden sm:block overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-100">
                    <th className="text-left text-xs font-bold text-slate-500 uppercase tracking-wide px-6 py-3.5">Service</th>
                    <th className="text-left text-xs font-bold text-slate-500 uppercase tracking-wide px-4 py-3.5">Order</th>
                    <th className="text-left text-xs font-bold text-slate-500 uppercase tracking-wide px-4 py-3.5">Status</th>
                    <th className="text-left text-xs font-bold text-slate-500 uppercase tracking-wide px-4 py-3.5">Updated</th>
                    <th className="px-4 py-3.5" />
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {services.map(svc => (
                    <tr key={svc.id} className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          {svc.image_url ? (
                            <img src={svc.image_url} alt="" className="w-10 h-10 rounded-lg object-cover border border-slate-200" />
                          ) : (
                            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                              <Wrench className="w-5 h-5 text-blue-400" />
                            </div>
                          )}
                          <div>
                            <p className="font-semibold text-slate-900">{svc.title}</p>
                            <p className="text-xs text-slate-400 line-clamp-1">{svc.short_desc}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-slate-600 text-sm">{svc.display_order}</td>
                      <td className="px-4 py-4">
                        <StatusBadge status={svc.status} />
                      </td>
                      <td className="px-4 py-4 text-xs text-slate-400">
                        {new Date(svc.updated_at).toLocaleDateString()}
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => handleToggleStatus(svc)}
                            disabled={toggling === svc.id}
                            className={`p-2 rounded-lg text-xs font-semibold transition-colors ${
                              svc.status === 'published'
                                ? 'bg-amber-50 text-amber-700 hover:bg-amber-100'
                                : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'
                            }`}
                            title={svc.status === 'published' ? 'Unpublish' : 'Publish'}
                          >
                            {toggling === svc.id ? (
                              <Loader2 className="w-4 h-4 animate-spin" />
                            ) : svc.status === 'published' ? (
                              <EyeOff className="w-4 h-4" />
                            ) : (
                              <Globe className="w-4 h-4" />
                            )}
                          </button>
                          <button
                            onClick={() => navigate(`/admin/services/${svc.id}`)}
                            className="p-2 rounded-lg bg-slate-100 text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                          >
                            <Pencil className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => setDeleteTarget(svc)}
                            className="p-2 rounded-lg bg-slate-100 text-slate-600 hover:bg-red-50 hover:text-red-600 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="sm:hidden divide-y divide-slate-100">
              {services.map(svc => (
                <div key={svc.id} className="p-4 space-y-3">
                  <div className="flex items-start gap-3">
                    {svc.image_url ? (
                      <img src={svc.image_url} alt="" className="w-12 h-12 rounded-xl object-cover border border-slate-200 shrink-0" />
                    ) : (
                      <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                        <Wrench className="w-6 h-6 text-blue-400" />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-slate-900 text-sm">{svc.title}</p>
                      <p className="text-xs text-slate-500 line-clamp-2 mt-0.5">{svc.short_desc}</p>
                      <div className="flex items-center gap-2 mt-1.5">
                        <StatusBadge status={svc.status} size="sm" />
                        <span className="text-[10px] text-slate-400">
                          {new Date(svc.updated_at).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleToggleStatus(svc)}
                      disabled={toggling === svc.id}
                      className={`flex-1 py-2 rounded-lg text-xs font-bold transition-colors ${
                        svc.status === 'published'
                          ? 'bg-amber-50 text-amber-700'
                          : 'bg-emerald-50 text-emerald-700'
                      }`}
                    >
                      {svc.status === 'published' ? 'Unpublish' : 'Publish'}
                    </button>
                    <button
                      onClick={() => navigate(`/admin/services/${svc.id}`)}
                      className="flex-1 py-2 rounded-lg bg-slate-100 text-xs font-bold text-slate-700"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => setDeleteTarget(svc)}
                      className="px-3 py-2 rounded-lg bg-red-50 text-red-600"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      <ConfirmModal
        isOpen={!!deleteTarget}
        title="Delete Service"
        message={`Are you sure you want to delete "${deleteTarget?.title}"? This action cannot be undone.`}
        confirmLabel="Delete"
        danger
        loading={deleting}
        onConfirm={handleDelete}
        onCancel={() => setDeleteTarget(null)}
      />
    </div>
  );
}
