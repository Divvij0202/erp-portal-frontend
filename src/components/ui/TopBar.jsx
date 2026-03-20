// TopBar.jsx — Sticky top bar with hamburger menu, search, and user avatar
import React from 'react';
import { Menu, Search, Bell } from 'lucide-react';
import { auth } from '../../firebase';

export default function TopBar({ onMenuClick, title }) {
  const user = auth.currentUser;
  const initials = user?.email?.charAt(0)?.toUpperCase() || 'U';

  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-lg border-b border-surface-100">
      <div className="flex items-center justify-between h-16 px-4 lg:px-6">
        {/* Left: hamburger + title */}
        <div className="flex items-center gap-3">
          <button
            onClick={onMenuClick}
            className="lg:hidden w-9 h-9 rounded-xl flex items-center justify-center text-surface-500 hover:bg-surface-100 transition-colors"
            aria-label="Toggle menu"
          >
            <Menu className="w-5 h-5" />
          </button>
          {title && (
            <h1 className="text-lg font-semibold text-surface-900">{title}</h1>
          )}
        </div>

        {/* Right: search + notifications + avatar */}
        <div className="flex items-center gap-2">
          {/* Search (desktop) */}
          <div className="hidden md:flex items-center bg-surface-50 rounded-xl px-3 py-2 gap-2 border border-surface-200 focus-within:border-primary-400 focus-within:ring-2 focus-within:ring-primary-100 transition-all w-64">
            <Search className="w-4 h-4 text-surface-400 shrink-0" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent text-sm text-surface-800 placeholder:text-surface-400 outline-none w-full"
            />
          </div>

          {/* Notifications */}
          <button className="relative w-9 h-9 rounded-xl flex items-center justify-center text-surface-500 hover:bg-surface-100 transition-colors">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
          </button>

          {/* User avatar */}
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center cursor-pointer hover:shadow-card transition-all">
            <span className="text-sm font-semibold text-white">{initials}</span>
          </div>
        </div>
      </div>
    </header>
  );
}
