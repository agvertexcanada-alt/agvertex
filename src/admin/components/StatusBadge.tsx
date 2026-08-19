import React from 'react';

interface StatusBadgeProps {
  status: 'draft' | 'published';
  size?: 'sm' | 'md';
}

export function StatusBadge({ status, size = 'md' }: StatusBadgeProps) {
  const sizeClass = size === 'sm' ? 'text-[10px] px-2 py-0.5' : 'text-xs px-2.5 py-1';

  if (status === 'published') {
    return (
      <span className={`inline-flex items-center gap-1.5 rounded-full font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 ${sizeClass}`}>
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
        Published
      </span>
    );
  }

  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full font-bold bg-amber-50 text-amber-700 border border-amber-200 ${sizeClass}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
      Draft
    </span>
  );
}
