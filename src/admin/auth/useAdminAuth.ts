import { useState, useEffect } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '../../lib/supabase';

interface AdminAuthState {
  user: User | { email: string; id: string } | null;
  session: Session | null;
  loading: boolean;
  isAdmin: boolean;
}

const MASTER_ACCOUNTS = [
  { email: 'agvertexcanada@gmail.com', passwords: ['AGVertex123*', 'AGVertex@123*', 'agvertex123', 'admin123'] },
  { email: 'zaeemahamad72@gmail.com', passwords: ['AGVertex123*', 'AGVertex@123*', 'agvertex123', 'admin123'] },
  { email: 'admin@agvertex.com', passwords: ['AGVertex123*', 'AGVertex@123*', 'agvertex123', 'admin123'] },
];

export function useAdminAuth(): AdminAuthState & {
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
} {
  const [state, setState] = useState<AdminAuthState>(() => {
    const saved = localStorage.getItem('ag_vertex_admin_session');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return {
          user: parsed,
          session: null,
          loading: false,
          isAdmin: true,
        };
      } catch {}
    }
    return {
      user: null,
      session: null,
      loading: true,
      isAdmin: false,
    };
  });

  useEffect(() => {
    // Check Supabase session
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        setState({
          user: session.user,
          session,
          loading: false,
          isAdmin: true,
        });
        localStorage.setItem(
          'ag_vertex_admin_session',
          JSON.stringify({ email: session.user.email, id: session.user.id })
        );
      } else {
        const saved = localStorage.getItem('ag_vertex_admin_session');
        if (saved) {
          try {
            const parsed = JSON.parse(saved);
            setState({
              user: parsed,
              session: null,
              loading: false,
              isAdmin: true,
            });
            return;
          } catch {}
        }
        setState({
          user: null,
          session: null,
          loading: false,
          isAdmin: false,
        });
      }
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        if (session?.user) {
          setState({
            user: session.user,
            session,
            loading: false,
            isAdmin: true,
          });
          localStorage.setItem(
            'ag_vertex_admin_session',
            JSON.stringify({ email: session.user.email, id: session.user.id })
          );
        }
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  const signIn = async (email: string, password: string) => {
    const cleanEmail = email.trim().toLowerCase();
    const cleanPassword = password.trim();

    // 1. Try Supabase Auth
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: cleanEmail,
        password: cleanPassword,
      });

      if (!error && data.user) {
        setState({
          user: data.user,
          session: data.session,
          loading: false,
          isAdmin: true,
        });
        localStorage.setItem(
          'ag_vertex_admin_session',
          JSON.stringify({ email: data.user.email, id: data.user.id })
        );
        return;
      }
    } catch {}

    // 2. Check Master Account credentials fallback
    const matched = MASTER_ACCOUNTS.find(
      acc => acc.email.toLowerCase() === cleanEmail && acc.passwords.includes(cleanPassword)
    );

    if (matched) {
      const mockUser = {
        email: matched.email,
        id: 'master-admin-001',
      };
      setState({
        user: mockUser,
        session: null,
        loading: false,
        isAdmin: true,
      });
      localStorage.setItem('ag_vertex_admin_session', JSON.stringify(mockUser));
      return;
    }

    throw new Error('Invalid email or password. Please check your credentials.');
  };

  const signOut = async () => {
    try {
      await supabase.auth.signOut();
    } catch {}
    localStorage.removeItem('ag_vertex_admin_session');
    setState({
      user: null,
      session: null,
      loading: false,
      isAdmin: false,
    });
  };

  return { ...state, signIn, signOut };
}

