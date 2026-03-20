import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { db } from '../firebase';
import { doc, updateDoc } from 'firebase/firestore';
import { useAuth } from './AuthContext';

const ThemeContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

// ─── 10 Production-Grade Theme Definitions ───────────────────────────────────
export const THEMES = {
  'light-professional': {
    name: 'Light Professional',
    emoji: '☀️',
    vars: {
      '--bg': '#fafaf9', '--bg-card': '#ffffff', '--bg-secondary': '#f5f5f4',
      '--text': '#1c1917', '--text-muted': '#78716c', '--text-inverted': '#ffffff',
      '--border': '#e7e5e4', '--border-hover': '#d6d3d1',
      '--primary': '#4f46e5', '--primary-hover': '#4338ca', '--primary-light': '#eef2ff',
      '--accent': '#10b981',
      '--sidebar-bg': '#ffffff', '--topbar-bg': 'rgba(255,255,255,0.8)',
      '--shadow': '0 1px 3px rgba(0,0,0,0.04)',
      '--input-bg': '#ffffff',
    }
  },
  'dark-mode': {
    name: 'Dark Mode',
    emoji: '🌙',
    vars: {
      '--bg': '#0f0f0f', '--bg-card': '#1a1a1a', '--bg-secondary': '#262626',
      '--text': '#fafaf9', '--text-muted': '#a8a29e', '--text-inverted': '#1c1917',
      '--border': '#333333', '--border-hover': '#444444',
      '--primary': '#818cf8', '--primary-hover': '#6366f1', '--primary-light': '#1e1b4b',
      '--accent': '#34d399',
      '--sidebar-bg': '#141414', '--topbar-bg': 'rgba(15,15,15,0.85)',
      '--shadow': '0 1px 3px rgba(0,0,0,0.3)',
      '--input-bg': '#262626',
    }
  },
  'midnight-blue': {
    name: 'Midnight Blue',
    emoji: '🌊',
    vars: {
      '--bg': '#0b1120', '--bg-card': '#111827', '--bg-secondary': '#1e293b',
      '--text': '#e2e8f0', '--text-muted': '#94a3b8', '--text-inverted': '#0f172a',
      '--border': '#1e3a5f', '--border-hover': '#2563eb',
      '--primary': '#3b82f6', '--primary-hover': '#2563eb', '--primary-light': '#172554',
      '--accent': '#38bdf8',
      '--sidebar-bg': '#0f172a', '--topbar-bg': 'rgba(11,17,32,0.9)',
      '--shadow': '0 1px 3px rgba(0,0,0,0.4)',
      '--input-bg': '#1e293b',
    }
  },
  'emerald-green': {
    name: 'Emerald Green',
    emoji: '🌿',
    vars: {
      '--bg': '#f0fdf4', '--bg-card': '#ffffff', '--bg-secondary': '#dcfce7',
      '--text': '#14532d', '--text-muted': '#4ade80', '--text-inverted': '#ffffff',
      '--border': '#bbf7d0', '--border-hover': '#86efac',
      '--primary': '#059669', '--primary-hover': '#047857', '--primary-light': '#d1fae5',
      '--accent': '#10b981',
      '--sidebar-bg': '#f0fdf4', '--topbar-bg': 'rgba(240,253,244,0.85)',
      '--shadow': '0 1px 3px rgba(0,80,40,0.06)',
      '--input-bg': '#ffffff',
    }
  },
  'royal-purple': {
    name: 'Royal Purple',
    emoji: '👑',
    vars: {
      '--bg': '#0d0520', '--bg-card': '#1a0a33', '--bg-secondary': '#2d1b54',
      '--text': '#e9d5ff', '--text-muted': '#c084fc', '--text-inverted': '#1a0a33',
      '--border': '#3b1f6e', '--border-hover': '#7c3aed',
      '--primary': '#8b5cf6', '--primary-hover': '#7c3aed', '--primary-light': '#2e1065',
      '--accent': '#a78bfa',
      '--sidebar-bg': '#110830', '--topbar-bg': 'rgba(13,5,32,0.9)',
      '--shadow': '0 1px 3px rgba(80,0,120,0.3)',
      '--input-bg': '#2d1b54',
    }
  },
  'sunset-orange': {
    name: 'Sunset Orange',
    emoji: '🌅',
    vars: {
      '--bg': '#fffbeb', '--bg-card': '#ffffff', '--bg-secondary': '#fef3c7',
      '--text': '#78350f', '--text-muted': '#b45309', '--text-inverted': '#ffffff',
      '--border': '#fde68a', '--border-hover': '#fbbf24',
      '--primary': '#ea580c', '--primary-hover': '#c2410c', '--primary-light': '#ffedd5',
      '--accent': '#f59e0b',
      '--sidebar-bg': '#fffbeb', '--topbar-bg': 'rgba(255,251,235,0.85)',
      '--shadow': '0 1px 3px rgba(120,50,0,0.06)',
      '--input-bg': '#ffffff',
    }
  },
  'minimal-beige': {
    name: 'Minimal Beige',
    emoji: '🏛️',
    vars: {
      '--bg': '#faf8f5', '--bg-card': '#ffffff', '--bg-secondary': '#f5f0ea',
      '--text': '#3d3529', '--text-muted': '#8a7e6e', '--text-inverted': '#ffffff',
      '--border': '#e6dfd4', '--border-hover': '#d4c8b8',
      '--primary': '#8b6f47', '--primary-hover': '#725a38', '--primary-light': '#f5f0ea',
      '--accent': '#a78a5c',
      '--sidebar-bg': '#faf8f5', '--topbar-bg': 'rgba(250,248,245,0.85)',
      '--shadow': '0 1px 3px rgba(60,50,30,0.05)',
      '--input-bg': '#ffffff',
    }
  },
  'high-contrast': {
    name: 'High Contrast',
    emoji: '♿',
    vars: {
      '--bg': '#000000', '--bg-card': '#111111', '--bg-secondary': '#1a1a1a',
      '--text': '#ffffff', '--text-muted': '#cccccc', '--text-inverted': '#000000',
      '--border': '#555555', '--border-hover': '#ffffff',
      '--primary': '#ffff00', '--primary-hover': '#ffcc00', '--primary-light': '#333300',
      '--accent': '#00ff88',
      '--sidebar-bg': '#0a0a0a', '--topbar-bg': 'rgba(0,0,0,0.95)',
      '--shadow': '0 1px 3px rgba(255,255,255,0.1)',
      '--input-bg': '#1a1a1a',
    }
  },
  'corporate-gray': {
    name: 'Corporate Gray',
    emoji: '🏢',
    vars: {
      '--bg': '#f8f9fa', '--bg-card': '#ffffff', '--bg-secondary': '#e9ecef',
      '--text': '#212529', '--text-muted': '#6c757d', '--text-inverted': '#ffffff',
      '--border': '#dee2e6', '--border-hover': '#adb5bd',
      '--primary': '#495057', '--primary-hover': '#343a40', '--primary-light': '#e9ecef',
      '--accent': '#0d6efd',
      '--sidebar-bg': '#f8f9fa', '--topbar-bg': 'rgba(248,249,250,0.85)',
      '--shadow': '0 1px 3px rgba(0,0,0,0.04)',
      '--input-bg': '#ffffff',
    }
  },
  'neon-tech': {
    name: 'Neon Tech',
    emoji: '💜',
    vars: {
      '--bg': '#0a0a0f', '--bg-card': '#12121a', '--bg-secondary': '#1a1a2e',
      '--text': '#e0e0ff', '--text-muted': '#7b7bff', '--text-inverted': '#0a0a0f',
      '--border': '#2a2a4a', '--border-hover': '#00f0ff',
      '--primary': '#00f0ff', '--primary-hover': '#00c4cc', '--primary-light': '#0a2a2e',
      '--accent': '#ff00ff',
      '--sidebar-bg': '#0d0d14', '--topbar-bg': 'rgba(10,10,15,0.9)',
      '--shadow': '0 0 12px rgba(0,240,255,0.08)',
      '--input-bg': '#1a1a2e',
    }
  }
};

const DEFAULT_THEME = 'light-professional';

function applyThemeVars(themeKey) {
  const theme = THEMES[themeKey];
  if (!theme) return;
  const root = document.documentElement;
  Object.entries(theme.vars).forEach(([prop, val]) => {
    root.style.setProperty(prop, val);
  });
}

export function ThemeProvider({ children }) {
  const { currentUser, userData } = useAuth();
  const [theme, setThemeState] = useState(() => {
    return localStorage.getItem('erp-theme') || DEFAULT_THEME;
  });

  // On mount / userData change, read persisted theme
  useEffect(() => {
    if (userData?.theme && THEMES[userData.theme]) {
      setThemeState(userData.theme);
      applyThemeVars(userData.theme);
      localStorage.setItem('erp-theme', userData.theme);
    } else {
      applyThemeVars(theme);
    }
    // eslint-disable-next-line
  }, [userData]);

  // Apply CSS vars whenever theme changes
  useEffect(() => {
    applyThemeVars(theme);
  }, [theme]);

  const setTheme = useCallback(async (themeKey) => {
    if (!THEMES[themeKey]) return;
    setThemeState(themeKey);
    applyThemeVars(themeKey);
    localStorage.setItem('erp-theme', themeKey);

    // Persist to Firestore
    if (currentUser) {
      try {
        await updateDoc(doc(db, 'users', currentUser.uid), { theme: themeKey });
      } catch (err) {
        console.error('Failed to persist theme:', err);
      }
    }
  }, [currentUser]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes: THEMES }}>
      {children}
    </ThemeContext.Provider>
  );
}
