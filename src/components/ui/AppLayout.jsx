// AppLayout.jsx — Layout shell wrapping sidebar + topbar + content area
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import { Toaster } from 'react-hot-toast';

export default function AppLayout({ children, title }) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true);

  return (
    <div className="flex h-screen bg-surface-50 overflow-hidden">
      {/* Toast notifications */}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            borderRadius: '12px',
            background: '#1c1917',
            color: '#fafaf9',
            fontSize: '14px',
          },
          success: {
            iconTheme: { primary: '#10b981', secondary: '#fff' },
          },
          error: {
            iconTheme: { primary: '#ef4444', secondary: '#fff' },
          },
        }}
      />

      {/* Sidebar */}
      <Sidebar collapsed={sidebarCollapsed} setCollapsed={setSidebarCollapsed} />

      {/* Main content area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <TopBar
          onMenuClick={() => setSidebarCollapsed(!sidebarCollapsed)}
          title={title}
        />
        <main className="flex-1 overflow-y-auto">
          <div className="p-4 lg:p-6 max-w-[1400px] mx-auto w-full">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
