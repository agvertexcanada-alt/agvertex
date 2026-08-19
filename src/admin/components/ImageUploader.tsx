import React, { useRef, useState } from 'react';
import { Upload, X, Image, Loader2 } from 'lucide-react';
import { mediaApi } from '../../lib/api/media';
import { toast } from './Toast';

interface ImageUploaderProps {
  currentUrl?: string;
  onUpload: (url: string) => void;
  label?: string;
}

export function ImageUploader({ currentUrl, onUpload, label = 'Image' }: ImageUploaderProps) {
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState<string>(currentUrl || '');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = async (file: File) => {
    if (!file) return;

    // Validate type
    const allowed = ['image/jpeg', 'image/png', 'image/webp', 'image/svg+xml', 'image/gif'];
    if (!allowed.includes(file.type)) {
      toast.error('Only JPG, PNG, WebP, SVG and GIF images are allowed.');
      return;
    }

    // Validate size (10MB)
    if (file.size > 10 * 1024 * 1024) {
      toast.error('Image must be smaller than 10MB.');
      return;
    }

    setUploading(true);
    try {
      const media = await mediaApi.upload(file);
      setPreview(media.public_url);
      onUpload(media.public_url);
      toast.success('Image uploaded successfully.');
    } catch (err: any) {
      toast.error(`Upload failed: ${err.message}`);
    } finally {
      setUploading(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  const clearImage = () => {
    setPreview('');
    onUpload('');
    if (inputRef.current) inputRef.current.value = '';
  };

  if (preview) {
    return (
      <div className="space-y-2">
        <label className="text-xs font-bold text-slate-700 uppercase tracking-wide block">{label}</label>
        <div className="relative rounded-xl overflow-hidden border border-slate-200 bg-slate-50 group">
          <img src={preview} alt="" className="w-full h-40 object-cover" />
          <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              className="px-3 py-1.5 rounded-lg bg-white text-xs font-semibold text-slate-800 hover:bg-slate-100 transition-colors"
            >
              Replace
            </button>
            <button
              type="button"
              onClick={clearImage}
              className="px-3 py-1.5 rounded-lg bg-red-600 text-xs font-semibold text-white hover:bg-red-700 transition-colors"
            >
              Remove
            </button>
          </div>
        </div>
        <input ref={inputRef} type="file" accept="image/*" className="hidden" onChange={handleChange} />
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <label className="text-xs font-bold text-slate-700 uppercase tracking-wide block">{label}</label>
      <div
        onDrop={handleDrop}
        onDragOver={e => e.preventDefault()}
        onClick={() => !uploading && inputRef.current?.click()}
        className="border-2 border-dashed border-slate-300 rounded-xl p-8 flex flex-col items-center justify-center gap-3 cursor-pointer hover:border-[#0057FF] hover:bg-blue-50/30 transition-all"
      >
        {uploading ? (
          <>
            <Loader2 className="w-8 h-8 text-[#0057FF] animate-spin" />
            <p className="text-sm text-slate-600 font-medium">Uploading…</p>
          </>
        ) : (
          <>
            <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center">
              <Image className="w-6 h-6 text-slate-400" />
            </div>
            <div className="text-center">
              <p className="text-sm font-semibold text-slate-700">
                Drop image here or <span className="text-[#0057FF]">browse</span>
              </p>
              <p className="text-xs text-slate-400 mt-1">JPG, PNG, WebP, SVG up to 10MB</p>
            </div>
          </>
        )}
      </div>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleChange}
      />
    </div>
  );
}
