import React, { useEffect, useState, useRef } from 'react';
import { mediaApi, MediaItem } from '../../lib/api/media';
import { toast } from '../components/Toast';
import { ConfirmModal } from '../components/AdminModal';
import { Upload, Trash2, Copy, Loader2, Image, CheckCircle2 } from 'lucide-react';

export function MediaPage() {
  const [media, setMedia] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState<MediaItem | null>(null);
  const [deleting, setDeleting] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const load = async () => {
    try {
      setLoading(true);
      setMedia(await mediaApi.getAll());
    } catch (e: any) {
      toast.error('Failed to load media: ' + e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, []);

  const handleFiles = async (files: FileList | null) => {
    if (!files || files.length === 0) return;
    setUploading(true);
    let uploaded = 0;
    for (const file of Array.from(files)) {
      try {
        await mediaApi.upload(file);
        uploaded++;
      } catch (e: any) {
        toast.error(`Failed to upload ${file.name}: ${e.message}`);
      }
    }
    setUploading(false);
    if (uploaded > 0) {
      toast.success(`${uploaded} image${uploaded > 1 ? 's' : ''} uploaded successfully.`);
      load();
    }
  };

  const handleDelete = async () => {
    if (!deleteTarget) return;
    setDeleting(true);
    try {
      await mediaApi.delete(deleteTarget);
      toast.success('Image deleted.');
      setDeleteTarget(null);
      load();
    } catch (e: any) {
      toast.error('Delete failed: ' + e.message);
    } finally {
      setDeleting(false);
    }
  };

  const copyUrl = (url: string, id: string) => {
    navigator.clipboard.writeText(url);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
    toast.success('URL copied to clipboard.');
  };

  const formatSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Media Library</h1>
          <p className="text-sm text-slate-500 mt-1">Upload and manage images used across the website.</p>
        </div>
        <button
          onClick={() => inputRef.current?.click()}
          disabled={uploading}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0057FF] text-white text-sm font-bold hover:bg-blue-600 shadow-md shadow-blue-500/20 disabled:opacity-60"
        >
          {uploading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Upload className="w-4 h-4" />}
          Upload Images
        </button>
        <input ref={inputRef} type="file" multiple accept="image/*" className="hidden" onChange={e => handleFiles(e.target.files)} />
      </div>

      {/* Drag-drop zone */}
      <div
        onDrop={e => { e.preventDefault(); handleFiles(e.dataTransfer.files); }}
        onDragOver={e => e.preventDefault()}
        className="border-2 border-dashed border-slate-300 rounded-2xl p-8 flex flex-col items-center justify-center gap-2 text-center hover:border-[#0057FF] hover:bg-blue-50/20 transition-all cursor-pointer"
        onClick={() => inputRef.current?.click()}
      >
        {uploading ? (
          <>
            <Loader2 className="w-8 h-8 text-[#0057FF] animate-spin" />
            <p className="text-sm font-semibold text-slate-700">Uploading…</p>
          </>
        ) : (
          <>
            <Upload className="w-8 h-8 text-slate-400" />
            <p className="text-sm font-semibold text-slate-700">
              Drop images here or <span className="text-[#0057FF]">browse</span>
            </p>
            <p className="text-xs text-slate-400">JPG, PNG, WebP, SVG · Max 10MB each · Multiple files supported</p>
          </>
        )}
      </div>

      {/* Grid */}
      {loading ? (
        <div className="flex items-center justify-center h-48">
          <Loader2 className="w-6 h-6 animate-spin text-[#0057FF]" />
        </div>
      ) : media.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-48 text-center bg-white rounded-2xl border border-slate-200">
          <Image className="w-10 h-10 text-slate-300 mb-3" />
          <p className="text-sm font-semibold text-slate-600">No images yet</p>
          <p className="text-xs text-slate-400 mt-1">Upload images to use them in services, showcase, and more.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {media.map(item => (
            <div key={item.id} className="group relative bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-md transition-all">
              <div className="aspect-square bg-slate-100 overflow-hidden">
                <img
                  src={item.public_url}
                  alt={item.alt_text || item.filename}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                <button
                  onClick={() => copyUrl(item.public_url, item.id)}
                  className="w-9 h-9 rounded-xl bg-white text-slate-800 flex items-center justify-center hover:bg-slate-100 transition-colors"
                  title="Copy URL"
                >
                  {copied === item.id ? <CheckCircle2 className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
                <button
                  onClick={() => setDeleteTarget(item)}
                  className="w-9 h-9 rounded-xl bg-red-600 text-white flex items-center justify-center hover:bg-red-700 transition-colors"
                  title="Delete"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
              {/* Caption */}
              <div className="px-2.5 py-2">
                <p className="text-xs font-medium text-slate-700 truncate">{item.filename}</p>
                <p className="text-[10px] text-slate-400 mt-0.5">{formatSize(item.file_size)}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {media.length > 0 && (
        <p className="text-xs text-slate-400 text-center">{media.length} image{media.length !== 1 ? 's' : ''} in library</p>
      )}

      <ConfirmModal
        isOpen={!!deleteTarget}
        title="Delete Image"
        message={`Delete "${deleteTarget?.filename}"? It will be removed from storage and cannot be recovered.`}
        confirmLabel="Delete"
        danger
        loading={deleting}
        onConfirm={handleDelete}
        onCancel={() => setDeleteTarget(null)}
      />
    </div>
  );
}
