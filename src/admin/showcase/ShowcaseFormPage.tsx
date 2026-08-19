import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { showcaseApi, ShowcaseInsert } from '../../lib/api/showcase';
import { ImageUploader } from '../components/ImageUploader';
import { toast } from '../components/Toast';
import { ArrowLeft, Loader2, Save, Globe } from 'lucide-react';

const EMPTY: ShowcaseInsert = {
  title: '',
  description: '',
  category: '',
  image_url: '',
  client: '',
  project_year: '',
  project_url: '',
  display_order: 0,
  status: 'draft',
};

const CATEGORIES = ['Product Design', 'Mold & Die Design', '3D CAD', 'Drawings & GD&T', 'Automotive', 'DFM/DFA', 'Other'];

export function ShowcaseFormPage() {
  const { id } = useParams<{ id: string }>();
  const isEdit = Boolean(id && id !== 'new');
  const navigate = useNavigate();
  const [form, setForm] = useState<ShowcaseInsert>(EMPTY);
  const [loading, setLoading] = useState(isEdit);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (isEdit && id) {
      showcaseApi.getById(id).then(data => {
        if (data) {
          const { id: _id, created_at, updated_at, ...rest } = data as any;
          setForm(rest);
        }
        setLoading(false);
      });
    }
  }, [id, isEdit]);

  const set = (key: keyof ShowcaseInsert, value: any) =>
    setForm(f => ({ ...f, [key]: value }));

  const handleSave = async (status: 'draft' | 'published') => {
    if (!form.title.trim()) { toast.error('Project title is required.'); return; }
    setSaving(true);
    try {
      const payload = { ...form, status };
      if (isEdit && id) {
        await showcaseApi.update(id, payload);
      } else {
        await showcaseApi.create(payload);
      }
      toast.success(status === 'published' ? 'Project published successfully.' : 'Draft saved.');
      navigate('/admin/showcase');
    } catch (e: any) {
      toast.error('Save failed: ' + e.message);
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div className="flex items-center justify-center h-64"><Loader2 className="w-6 h-6 animate-spin text-[#0057FF]" /></div>;

  return (
    <div className="space-y-6 max-w-3xl">
      <div className="flex items-center gap-4">
        <button onClick={() => navigate('/admin/showcase')} className="w-9 h-9 rounded-xl bg-white border border-slate-200 text-slate-600 flex items-center justify-center hover:bg-slate-50">
          <ArrowLeft className="w-4 h-4" />
        </button>
        <div>
          <h1 className="text-2xl font-bold text-slate-900">{isEdit ? 'Edit Project' : 'Add Showcase Project'}</h1>
          <p className="text-sm text-slate-500 mt-0.5">Project details shown on the public Showcase page.</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-sm">
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-slate-700 uppercase tracking-wide block">Project Title *</label>
          <input type="text" value={form.title} onChange={e => set('title', e.target.value)} placeholder="e.g. Aluminium Die-Cast Housing" className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm bg-slate-50 focus:outline-none focus:border-[#0057FF] focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wide block">Category</label>
            <select value={form.category} onChange={e => set('category', e.target.value)} className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm bg-slate-50 focus:outline-none focus:border-[#0057FF] focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all">
              <option value="">Select category</option>
              {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wide block">Year</label>
            <input type="text" value={form.project_year} onChange={e => set('project_year', e.target.value)} placeholder="e.g. 2025" className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm bg-slate-50 focus:outline-none focus:border-[#0057FF] focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all" />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-bold text-slate-700 uppercase tracking-wide block">Description</label>
          <textarea rows={4} value={form.description} onChange={e => set('description', e.target.value)} placeholder="Project overview and what was delivered" className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm bg-slate-50 focus:outline-none focus:border-[#0057FF] focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all resize-y" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wide block">Client / Sector</label>
            <input type="text" value={form.client} onChange={e => set('client', e.target.value)} placeholder="e.g. Automotive Tier-1" className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm bg-slate-50 focus:outline-none focus:border-[#0057FF] focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all" />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wide block">Display Order</label>
            <input type="number" min={0} value={form.display_order} onChange={e => set('display_order', Number(e.target.value))} className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm bg-slate-50 focus:outline-none focus:border-[#0057FF] focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all" />
          </div>
        </div>

        <ImageUploader currentUrl={form.image_url} onUpload={url => set('image_url', url)} label="Project Image" />
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-3">
        <button onClick={() => handleSave('draft')} disabled={saving} className="w-full sm:w-auto px-6 py-3 rounded-xl border border-slate-300 text-sm font-bold text-slate-700 bg-white hover:bg-slate-50 flex items-center justify-center gap-2 disabled:opacity-50">
          {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
          Save as Draft
        </button>
        <button onClick={() => handleSave('published')} disabled={saving} className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#0057FF] text-white text-sm font-bold hover:bg-blue-600 flex items-center justify-center gap-2 disabled:opacity-50 shadow-md shadow-blue-500/20">
          {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Globe className="w-4 h-4" />}
          Publish Now
        </button>
        <button onClick={() => navigate('/admin/showcase')} className="w-full sm:w-auto px-6 py-3 rounded-xl text-sm font-semibold text-slate-500 hover:text-slate-700">Cancel</button>
      </div>
    </div>
  );
}
