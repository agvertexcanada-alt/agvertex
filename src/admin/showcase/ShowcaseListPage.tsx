import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { showcaseApi, ShowcaseProject } from '../../lib/api/showcase';
import { StatusBadge } from '../components/StatusBadge';
import { ConfirmModal } from '../components/AdminModal';
import { toast } from '../components/Toast';
import { Plus, Pencil, Trash2, Globe, EyeOff, Loader2, Eye, ToggleLeft, ToggleRight, AlertTriangle } from 'lucide-react';

export function ShowcaseListPage() {
  const navigate = useNavigate();
  const [projects, setProjects] = useState<ShowcaseProject[]>([]);
  const [loading, setLoading] = useState(true);
  const [showcaseEnabled, setShowcaseEnabled] = useState(true);
  const [togglingVisibility, setTogglingVisibility] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState<ShowcaseProject | null>(null);
  const [deleting, setDeleting] = useState(false);
  const [toggling, setToggling] = useState<string | null>(null);

  const load = async () => {
    try {
      setLoading(true);
      const [data, enabled] = await Promise.all([
        showcaseApi.getAll(),
        showcaseApi.getVisibility(),
      ]);
      setProjects(data);
      setShowcaseEnabled(enabled);
    } catch (e: any) {
      toast.error('Failed to load showcase: ' + e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, []);

  const handleToggleVisibility = async () => {
    setTogglingVisibility(true);
    const newState = !showcaseEnabled;
    try {
      await showcaseApi.setVisibility(newState);
      setShowcaseEnabled(newState);
      toast.success(
        newState
          ? 'Showcase is now LIVE. Visitors can see it.'
          : 'Showcase is now HIDDEN. Visitors cannot access it.'
      );
    } catch (e: any) {
      toast.error('Failed to update visibility: ' + e.message);
    } finally {
      setTogglingVisibility(false);
    }
  };

  const handleDelete = async () => {
    if (!deleteTarget) return;
    setDeleting(true);
    try {
      await showcaseApi.delete(deleteTarget.id);
      toast.success(`"${deleteTarget.title}" deleted.`);
      setDeleteTarget(null);
      load();
    } catch (e: any) {
      toast.error('Delete failed: ' + e.message);
    } finally {
      setDeleting(false);
    }
  };

  const handleToggleStatus = async (project: ShowcaseProject) => {
    setToggling(project.id);
    try {
      if (project.status === 'published') {
        await showcaseApi.unpublish(project.id);
        toast.success(`"${project.title}" moved to draft.`);
      } else {
        await showcaseApi.publish(project.id);
        toast.success(`"${project.title}" published.`);
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
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Capability Showcase</h1>
          <p className="text-sm text-slate-500 mt-1">Manage showcase projects and public visibility.</p>
        </div>
        <Link
          to="/admin/showcase/new"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0057FF] text-white text-sm font-bold hover:bg-blue-600 transition-colors shadow-md shadow-blue-500/20"
        >
          <Plus className="w-4 h-4" />
          Add Project
        </Link>
      </div>

      {/* Global Visibility Toggle — Most Important Control */}
      <div className={`rounded-2xl border p-5 ${showcaseEnabled ? 'bg-emerald-50 border-emerald-200' : 'bg-amber-50 border-amber-200'}`}>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${showcaseEnabled ? 'bg-emerald-100 text-emerald-600' : 'bg-amber-100 text-amber-600'}`}>
              {showcaseEnabled ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
            </div>
            <div>
              <p className={`font-bold text-base ${showcaseEnabled ? 'text-emerald-800' : 'text-amber-800'}`}>
                Showcase is currently {showcaseEnabled ? 'LIVE (Publicly Visible)' : 'HIDDEN (Not Accessible)'}
              </p>
              <p className={`text-xs mt-1 leading-relaxed ${showcaseEnabled ? 'text-emerald-700' : 'text-amber-700'}`}>
                {showcaseEnabled
                  ? 'Visitors can access the Showcase page and see all published projects. The nav link is visible.'
                  : 'The Showcase page is completely inaccessible to visitors. The nav link is hidden. Direct URL access is blocked.'}
              </p>
              {!showcaseEnabled && (
                <div className="flex items-center gap-1.5 mt-2">
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                  <span className="text-xs font-semibold text-amber-700">
                    All showcase content is safely stored — nothing is deleted when hidden.
                  </span>
                </div>
              )}
            </div>
          </div>
          <button
            onClick={handleToggleVisibility}
            disabled={togglingVisibility}
            className={`shrink-0 flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
              showcaseEnabled
                ? 'bg-amber-100 text-amber-800 hover:bg-amber-200 border border-amber-300'
                : 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200 border border-emerald-300'
            }`}
          >
            {togglingVisibility ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : showcaseEnabled ? (
              <ToggleRight className="w-5 h-5" />
            ) : (
              <ToggleLeft className="w-5 h-5" />
            )}
            {showcaseEnabled ? 'Hide Showcase' : 'Make Showcase Live'}
          </button>
        </div>
      </div>

      {/* Projects Table */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
        {loading ? (
          <div className="flex items-center justify-center h-48">
            <Loader2 className="w-6 h-6 animate-spin text-[#0057FF]" />
          </div>
        ) : projects.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-56 text-center p-6">
            <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center mb-4">
              <Eye className="w-7 h-7 text-slate-400" />
            </div>
            <h3 className="text-base font-bold text-slate-800">No Showcase Projects Yet</h3>
            <p className="text-sm text-slate-500 mt-1 max-w-xs">
              Add your first project when you're ready to launch the Showcase.
            </p>
            <Link
              to="/admin/showcase/new"
              className="mt-4 px-4 py-2 rounded-xl bg-[#0057FF] text-white text-sm font-bold hover:bg-blue-600 transition-colors"
            >
              + Add Project
            </Link>
          </div>
        ) : (
          <>
            {/* Desktop Table */}
            <div className="hidden sm:block overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-100">
                    <th className="text-left text-xs font-bold text-slate-500 uppercase tracking-wide px-6 py-3.5">Project</th>
                    <th className="text-left text-xs font-bold text-slate-500 uppercase tracking-wide px-4 py-3.5">Category</th>
                    <th className="text-left text-xs font-bold text-slate-500 uppercase tracking-wide px-4 py-3.5">Status</th>
                    <th className="text-left text-xs font-bold text-slate-500 uppercase tracking-wide px-4 py-3.5">Updated</th>
                    <th className="px-4 py-3.5" />
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {projects.map(proj => (
                    <tr key={proj.id} className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          {proj.image_url ? (
                            <img src={proj.image_url} alt="" className="w-10 h-10 rounded-lg object-cover border border-slate-200" />
                          ) : (
                            <div className="w-10 h-10 rounded-lg bg-violet-50 flex items-center justify-center">
                              <Eye className="w-5 h-5 text-violet-400" />
                            </div>
                          )}
                          <div>
                            <p className="font-semibold text-slate-900">{proj.title}</p>
                            <p className="text-xs text-slate-400">{proj.project_year}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm text-slate-600">{proj.category || '—'}</td>
                      <td className="px-4 py-4"><StatusBadge status={proj.status} /></td>
                      <td className="px-4 py-4 text-xs text-slate-400">
                        {new Date(proj.updated_at).toLocaleDateString()}
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => handleToggleStatus(proj)}
                            disabled={toggling === proj.id}
                            className={`p-2 rounded-lg transition-colors ${proj.status === 'published' ? 'bg-amber-50 text-amber-700 hover:bg-amber-100' : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'}`}
                          >
                            {toggling === proj.id ? <Loader2 className="w-4 h-4 animate-spin" /> : proj.status === 'published' ? <EyeOff className="w-4 h-4" /> : <Globe className="w-4 h-4" />}
                          </button>
                          <button onClick={() => navigate(`/admin/showcase/${proj.id}`)} className="p-2 rounded-lg bg-slate-100 text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                            <Pencil className="w-4 h-4" />
                          </button>
                          <button onClick={() => setDeleteTarget(proj)} className="p-2 rounded-lg bg-slate-100 text-slate-600 hover:bg-red-50 hover:text-red-600 transition-colors">
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
              {projects.map(proj => (
                <div key={proj.id} className="p-4 space-y-3">
                  <div className="flex items-start gap-3">
                    {proj.image_url ? (
                      <img src={proj.image_url} alt="" className="w-12 h-12 rounded-xl object-cover border border-slate-200 shrink-0" />
                    ) : (
                      <div className="w-12 h-12 rounded-xl bg-violet-50 flex items-center justify-center shrink-0">
                        <Eye className="w-6 h-6 text-violet-400" />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-slate-900 text-sm">{proj.title}</p>
                      <p className="text-xs text-slate-400">{proj.category} · {proj.project_year}</p>
                      <div className="mt-1"><StatusBadge status={proj.status} size="sm" /></div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button onClick={() => handleToggleStatus(proj)} disabled={toggling === proj.id} className={`flex-1 py-2 rounded-lg text-xs font-bold ${proj.status === 'published' ? 'bg-amber-50 text-amber-700' : 'bg-emerald-50 text-emerald-700'}`}>
                      {proj.status === 'published' ? 'Unpublish' : 'Publish'}
                    </button>
                    <button onClick={() => navigate(`/admin/showcase/${proj.id}`)} className="flex-1 py-2 rounded-lg bg-slate-100 text-xs font-bold text-slate-700">Edit</button>
                    <button onClick={() => setDeleteTarget(proj)} className="px-3 py-2 rounded-lg bg-red-50 text-red-600"><Trash2 className="w-4 h-4" /></button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      <ConfirmModal
        isOpen={!!deleteTarget}
        title="Delete Project"
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
