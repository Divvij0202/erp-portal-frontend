// TopBar.jsx — Theme-aware top bar with profile picture avatar
import React from 'react';
import { Menu, Search, Bell } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

export default function TopBar({ onMenuClick, title }) {
  const { userData } = useAuth();
  const initials = userData?.name?.charAt(0)?.toUpperCase() || userData?.email?.charAt(0)?.toUpperCase() || 'U';

  return (
    <header className="sticky top-0 z-30 backdrop-blur-lg border-b" style={{ backgroundColor: 'var(--topbar-bg)', borderColor: 'var(--border)', transition: 'background-color 0.3s ease' }}>
      <div className="flex items-center justify-between h-16 px-4 lg:px-6">
        {/* Left: hamburger + title */}
        <div className="flex items-center gap-3">
          <button
            onClick={onMenuClick}
            className="lg:hidden w-9 h-9 rounded-xl flex items-center justify-center transition-colors"
            style={{ color: 'var(--text-muted)' }}
            aria-label="Toggle menu"
          >
            <Menu className="w-5 h-5" />
          </button>
          {title && (
            <h1 className="text-lg font-semibold" style={{ color: 'var(--text)' }}>{title}</h1>
          )}
        </div>

        {/* Right: search + notifications + avatar */}
        <div className="flex items-center gap-2">
          {/* Search (desktop) */}
          <div className="hidden md:flex items-center rounded-xl px-3 py-2 gap-2 border transition-all w-64" style={{ backgroundColor: 'var(--input-bg)', borderColor: 'var(--border)' }}>
            <Search className="w-4 h-4 shrink-0" style={{ color: 'var(--text-muted)' }} />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent text-sm placeholder:opacity-50 outline-none w-full"
              style={{ color: 'var(--text)' }}
            />
          </div>

          {/* Notifications */}
          <button className="relative w-9 h-9 rounded-xl flex items-center justify-center transition-colors" style={{ color: 'var(--text-muted)' }}>
            <Bell className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
          </button>

          {/* User avatar — real photo or initials fallback */}
          {userData?.photoURL ? (
            <img
              src={userData.photoURL}
              alt="Profile"
              className="w-9 h-9 rounded-xl object-cover cursor-pointer hover:shadow-card transition-all border"
              style={{ borderColor: 'var(--border)' }}
            />
          ) : (
            <div className="w-9 h-9 rounded-xl flex items-center justify-center cursor-pointer hover:shadow-card transition-all" style={{ backgroundColor: 'var(--primary)', color: 'var(--text-inverted)' }}>
              <span className="text-sm font-semibold">{initials}</span>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
