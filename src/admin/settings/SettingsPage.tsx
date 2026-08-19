import React, { useEffect, useState } from 'react';
import { settingsApi, ContactSettings, SocialSettings, BusinessSettings } from '../../lib/api/settings';
import { toast } from '../components/Toast';
import { Save, Loader2, Phone, Mail, MapPin, Linkedin, Youtube, Instagram, Facebook, Building2 } from 'lucide-react';

export function SettingsPage() {
  const [contact, setContact] = useState<ContactSettings>({ phone: '', email: '', address: '', whatsapp: '', contact_form_email: '' });
  const [social, setSocial] = useState<SocialSettings>({ linkedin: '', instagram: '', facebook: '', youtube: '' });
  const [business, setBusiness] = useState<BusinessSettings>({ company_name: '', tagline: '', short_description: '', business_hours: '' });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState<string | null>(null);

  useEffect(() => {
    settingsApi.getAllSettings().then(all => {
      setContact(all.contact);
      setSocial(all.social);
      setBusiness(all.business);
      setLoading(false);
    });
  }, []);

  const saveContact = async () => {
    setSaving('contact');
    try {
      await settingsApi.updateSetting('contact', contact);
      toast.success('Contact settings saved.');
    } catch (e: any) {
      toast.error('Save failed: ' + e.message);
    } finally {
      setSaving(null);
    }
  };

  const saveSocial = async () => {
    setSaving('social');
    try {
      await settingsApi.updateSetting('social', social);
      toast.success('Social links saved.');
    } catch (e: any) {
      toast.error('Save failed: ' + e.message);
    } finally {
      setSaving(null);
    }
  };

  const saveBusiness = async () => {
    setSaving('business');
    try {
      await settingsApi.updateSetting('business', business);
      toast.success('Business info saved.');
    } catch (e: any) {
      toast.error('Save failed: ' + e.message);
    } finally {
      setSaving(null);
    }
  };

  if (loading) {
    return <div className="flex items-center justify-center h-64"><Loader2 className="w-6 h-6 animate-spin text-[#0057FF]" /></div>;
  }

  return (
    <div className="space-y-8 max-w-3xl">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Contact & Settings</h1>
        <p className="text-sm text-slate-500 mt-1">Manage your business contact info, social links, and company details.</p>
      </div>

      {/* Contact Information */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
          <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#0057FF] flex items-center justify-center">
            <Phone className="w-4.5 h-4.5" />
          </div>
          <div>
            <h2 className="text-base font-bold text-slate-900">Contact Information</h2>
            <p className="text-xs text-slate-500">Displayed on the Contact page and footer.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {[
            { key: 'phone', label: 'Phone Number', placeholder: '+1 (289) 683-1234' },
            { key: 'email', label: 'Business Email', placeholder: 'info@agvertex.com' },
            { key: 'contact_form_email', label: 'Contact Form Email', placeholder: 'Where form submissions go' },
            { key: 'whatsapp', label: 'WhatsApp Number (Optional)', placeholder: '+1 (289) ...' },
          ].map(field => (
            <div key={field.key} className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wide block">{field.label}</label>
              <input
                type="text"
                value={(contact as any)[field.key]}
                onChange={e => setContact(c => ({ ...c, [field.key]: e.target.value }))}
                placeholder={field.placeholder}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm bg-slate-50 focus:outline-none focus:border-[#0057FF] focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all"
              />
            </div>
          ))}
          <div className="sm:col-span-2 space-y-1.5">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wide block">Address</label>
            <input
              type="text"
              value={contact.address}
              onChange={e => setContact(c => ({ ...c, address: e.target.value }))}
              placeholder="Windsor, Ontario, Canada"
              className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm bg-slate-50 focus:outline-none focus:border-[#0057FF] focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all"
            />
          </div>
        </div>

        <div className="flex justify-end pt-2">
          <button onClick={saveContact} disabled={saving === 'contact'} className="px-5 py-2.5 rounded-xl bg-[#0057FF] text-white text-sm font-bold hover:bg-blue-600 flex items-center gap-2 disabled:opacity-60 shadow-sm shadow-blue-500/20">
            {saving === 'contact' ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
            Save Contact Info
          </button>
        </div>
      </section>

      {/* Social Links */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
          <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#0057FF] flex items-center justify-center">
            <Linkedin className="w-4.5 h-4.5" />
          </div>
          <div>
            <h2 className="text-base font-bold text-slate-900">Social Media Links</h2>
            <p className="text-xs text-slate-500">Displayed in the footer. Leave blank to hide.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {[
            { key: 'linkedin', label: 'LinkedIn URL', placeholder: 'https://linkedin.com/company/...' },
            { key: 'instagram', label: 'Instagram URL', placeholder: 'https://instagram.com/...' },
            { key: 'facebook', label: 'Facebook URL', placeholder: 'https://facebook.com/...' },
            { key: 'youtube', label: 'YouTube URL', placeholder: 'https://youtube.com/@...' },
          ].map(field => (
            <div key={field.key} className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wide block">{field.label}</label>
              <input
                type="url"
                value={(social as any)[field.key]}
                onChange={e => setSocial(s => ({ ...s, [field.key]: e.target.value }))}
                placeholder={field.placeholder}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm bg-slate-50 focus:outline-none focus:border-[#0057FF] focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all"
              />
            </div>
          ))}
        </div>

        <div className="flex justify-end pt-2">
          <button onClick={saveSocial} disabled={saving === 'social'} className="px-5 py-2.5 rounded-xl bg-[#0057FF] text-white text-sm font-bold hover:bg-blue-600 flex items-center gap-2 disabled:opacity-60">
            {saving === 'social' ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
            Save Social Links
          </button>
        </div>
      </section>

      {/* Business Info */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
          <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#0057FF] flex items-center justify-center">
            <Building2 className="w-4.5 h-4.5" />
          </div>
          <div>
            <h2 className="text-base font-bold text-slate-900">Business Information</h2>
            <p className="text-xs text-slate-500">Company tagline and description used in SEO and footers.</p>
          </div>
        </div>

        <div className="space-y-5">
          {[
            { key: 'company_name', label: 'Company Name', placeholder: 'AG Vertex' },
            { key: 'tagline', label: 'Tagline / Headline', placeholder: 'Precision Mechanical Design & Engineering Partner' },
            { key: 'business_hours', label: 'Business Hours', placeholder: 'Monday – Friday, 9 AM – 5 PM EST' },
          ].map(field => (
            <div key={field.key} className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wide block">{field.label}</label>
              <input
                type="text"
                value={(business as any)[field.key]}
                onChange={e => setBusiness(b => ({ ...b, [field.key]: e.target.value }))}
                placeholder={field.placeholder}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm bg-slate-50 focus:outline-none focus:border-[#0057FF] focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all"
              />
            </div>
          ))}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wide block">Short Description</label>
            <textarea rows={3} value={business.short_description} onChange={e => setBusiness(b => ({ ...b, short_description: e.target.value }))} placeholder="Brief company description for SEO and meta tags" className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm bg-slate-50 focus:outline-none focus:border-[#0057FF] focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all resize-y" />
          </div>
        </div>

        <div className="flex justify-end pt-2">
          <button onClick={saveBusiness} disabled={saving === 'business'} className="px-5 py-2.5 rounded-xl bg-[#0057FF] text-white text-sm font-bold hover:bg-blue-600 flex items-center gap-2 disabled:opacity-60">
            {saving === 'business' ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
            Save Business Info
          </button>
        </div>
      </section>
    </div>
  );
}
