import React, { useEffect, useState } from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export type ToastType = 'success' | 'error' | 'info';

interface ToastMessage {
  id: string;
  message: string;
  type: ToastType;
}

// Global toast state
let listeners: ((toasts: ToastMessage[]) => void)[] = [];
let toasts: ToastMessage[] = [];

function notify(toastsUpdated: ToastMessage[]) {
  listeners.forEach(l => l(toastsUpdated));
}

export const toast = {
  success(message: string) {
    const id = Math.random().toString(36).slice(2);
    toasts = [...toasts, { id, message, type: 'success' }];
    notify(toasts);
    setTimeout(() => {
      toasts = toasts.filter(t => t.id !== id);
      notify(toasts);
    }, 4000);
  },
  error(message: string) {
    const id = Math.random().toString(36).slice(2);
    toasts = [...toasts, { id, message, type: 'error' }];
    notify(toasts);
    setTimeout(() => {
      toasts = toasts.filter(t => t.id !== id);
      notify(toasts);
    }, 5000);
  },
  info(message: string) {
    const id = Math.random().toString(36).slice(2);
    toasts = [...toasts, { id, message, type: 'info' }];
    notify(toasts);
    setTimeout(() => {
      toasts = toasts.filter(t => t.id !== id);
      notify(toasts);
    }, 4000);
  },
};

function ToastItem({ toast: t, onDismiss }: { toast: ToastMessage; onDismiss: () => void }) {
  const icons = {
    success: <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />,
    error: <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />,
    info: <Info className="w-4 h-4 text-blue-500 shrink-0" />,
  };

  const colors = {
    success: 'border-emerald-200 bg-white',
    error: 'border-red-200 bg-white',
    info: 'border-blue-200 bg-white',
  };

  return (
    <div
      className={`flex items-center gap-3 px-4 py-3.5 rounded-2xl border shadow-lg shadow-slate-200/60 text-sm text-slate-800 font-medium max-w-sm w-full animate-in slide-in-from-right-4 fade-in ${colors[t.type]}`}
    >
      {icons[t.type]}
      <span className="flex-1">{t.message}</span>
      <button
        onClick={onDismiss}
        className="text-slate-400 hover:text-slate-600 ml-1 shrink-0"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}

export function ToastContainer() {
  const [currentToasts, setCurrentToasts] = useState<ToastMessage[]>([]);

  useEffect(() => {
    listeners.push(setCurrentToasts);
    return () => {
      listeners = listeners.filter(l => l !== setCurrentToasts);
    };
  }, []);

  const dismiss = (id: string) => {
    toasts = toasts.filter(t => t.id !== id);
    notify(toasts);
  };

  if (currentToasts.length === 0) return null;

  return (
    <div className="fixed bottom-5 right-5 z-[100] space-y-2.5 flex flex-col items-end">
      {currentToasts.map(t => (
        <ToastItem key={t.id} toast={t} onDismiss={() => dismiss(t.id)} />
      ))}
    </div>
  );
}
