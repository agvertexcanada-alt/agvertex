import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { careersApi, Career } from '../../lib/api/careers';
import { StatusBadge } from '../components/StatusBadge';
import { ConfirmModal } from '../components/AdminModal';
import { toast } from '../components/Toast';
import { Plus, Pencil, Trash2, Globe, EyeOff, Loader2, Briefcase } from 'lucide-react';

export function CareersListPage() {
  const navigate = useNavigate();
  const [careers, setCareers] = useState<Career[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleteTarget, setDeleteTarget] = useState<Career | null>(null);
  const [deleting, setDeleting] = useState(false);
  const [toggling, setToggling] = useState<string | null>(null);

  const load = async () => {
    try {
      setLoading(true);
      setCareers(await careersApi.getAll());
    } catch (e: any) {
      toast.error('Failed to load careers: ' + e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, []);

  const handleDelete = async () => {
    if (!deleteTarget) return;
    setDeleting(true);
    try {
      await careersApi.delete(deleteTarget.id);
      toast.success(`"${deleteTarget.title}" deleted.`);
      setDeleteTarget(null);
      load();
    } catch (e: any) {
      toast.error('Delete failed: ' + e.message);
    } finally {
      setDeleting(false);
    }
  };

  const handleToggle = async (career: Career) => {
    setToggling(career.id);
    try {
      if (career.status === 'published') {
        await careersApi.unpublish(career.id);
        toast.success(`"${career.title}" moved to draft.`);
      } else {
        await careersApi.publish(career.id);
        toast.success(`"${career.title}" published.`);
      }
      load();
    } catch (e: any) {
      toast.error('Failed: ' + e.message);
    } finally {
      setToggling(null);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Career Listings</h1>
          <p className="text-sm text-slate-500 mt-1">Manage job openings displayed on the website.</p>
        </div>
        <Link to="/admin/careers/new" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0057FF] text-white text-sm font-bold hover:bg-blue-600 shadow-md shadow-blue-500/20">
          <Plus className="w-4 h-4" />
          Add Listing
        </Link>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
        {loading ? (
          <div className="flex items-center justify-center h-48"><Loader2 className="w-6 h-6 animate-spin text-[#0057FF]" /></div>
        ) : careers.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-56 text-center p-6">
            <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center mb-4">
              <Briefcase className="w-7 h-7 text-slate-400" />
            </div>
            <h3 className="text-base font-bold text-slate-800">No Career Listings</h3>
            <p className="text-sm text-slate-500 mt-1 max-w-xs">
              The website currently shows "No current openings." Add a listing when you're ready to hire.
            </p>
            <Link to="/admin/careers/new" className="mt-4 px-4 py-2 rounded-xl bg-[#0057FF] text-white text-sm font-bold hover:bg-blue-600">+ Add Listing</Link>
          </div>
        ) : (
          <>
            <div className="hidden sm:block overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-100">
                    <th className="text-left text-xs font-bold text-slate-500 uppercase tracking-wide px-6 py-3.5">Position</th>
                    <th className="text-left text-xs font-bold text-slate-500 uppercase tracking-wide px-4 py-3.5">Type</th>
                    <th className="text-left text-xs font-bold text-slate-500 uppercase tracking-wide px-4 py-3.5">Location</th>
                    <th className="text-left text-xs font-bold text-slate-500 uppercase tracking-wide px-4 py-3.5">Status</th>
                    <th className="px-4 py-3.5" />
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {careers.map(career => (
                    <tr key={career.id} className="hover:bg-slate-50/50">
                      <td className="px-6 py-4">
                        <p className="font-semibold text-slate-900">{career.title}</p>
                        <p className="text-xs text-slate-400">{career.department}</p>
                      </td>
                      <td className="px-4 py-4 text-sm text-slate-600">{career.employment_type}</td>
                      <td className="px-4 py-4 text-sm text-slate-600">{career.location}</td>
                      <td className="px-4 py-4"><StatusBadge status={career.status} /></td>
                      <td className="px-4 py-4">
                        <div className="flex items-center justify-end gap-2">
                          <button onClick={() => handleToggle(career)} disabled={toggling === career.id} className={`p-2 rounded-lg ${career.status === 'published' ? 'bg-amber-50 text-amber-700 hover:bg-amber-100' : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'}`}>
                            {toggling === career.id ? <Loader2 className="w-4 h-4 animate-spin" /> : career.status === 'published' ? <EyeOff className="w-4 h-4" /> : <Globe className="w-4 h-4" />}
                          </button>
                          <button onClick={() => navigate(`/admin/careers/${career.id}`)} className="p-2 rounded-lg bg-slate-100 text-slate-600 hover:bg-blue-50 hover:text-blue-600">
                            <Pencil className="w-4 h-4" />
                          </button>
                          <button onClick={() => setDeleteTarget(career)} className="p-2 rounded-lg bg-slate-100 text-slate-600 hover:bg-red-50 hover:text-red-600">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="sm:hidden divide-y divide-slate-100">
              {careers.map(career => (
                <div key={career.id} className="p-4 space-y-3">
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">{career.title}</p>
                    <p className="text-xs text-slate-500">{career.department} · {career.employment_type} · {career.location}</p>
                    <div className="mt-1.5"><StatusBadge status={career.status} size="sm" /></div>
                  </div>
                  <div className="flex gap-2">
                    <button onClick={() => handleToggle(career)} className={`flex-1 py-2 rounded-lg text-xs font-bold ${career.status === 'published' ? 'bg-amber-50 text-amber-700' : 'bg-emerald-50 text-emerald-700'}`}>
                      {career.status === 'published' ? 'Unpublish' : 'Publish'}
                    </button>
                    <button onClick={() => navigate(`/admin/careers/${career.id}`)} className="flex-1 py-2 rounded-lg bg-slate-100 text-xs font-bold text-slate-700">Edit</button>
                    <button onClick={() => setDeleteTarget(career)} className="px-3 py-2 rounded-lg bg-red-50 text-red-600"><Trash2 className="w-4 h-4" /></button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      <ConfirmModal
        isOpen={!!deleteTarget}
        title="Delete Career Listing"
        message={`Delete "${deleteTarget?.title}"? This cannot be undone.`}
        confirmLabel="Delete"
        danger
        loading={deleting}
        onConfirm={handleDelete}
        onCancel={() => setDeleteTarget(null)}
      />
    </div>
  );
}
