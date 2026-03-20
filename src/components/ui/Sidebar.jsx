// Sidebar.jsx — Theme-aware sidebar with profile avatar
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import { signOut } from 'firebase/auth';
import { useAuth } from '../../contexts/AuthContext';
import {
  LayoutDashboard, GraduationCap, DollarSign, Users, BarChart3, Settings, LogOut,
  ChevronLeft, ChevronRight, BookOpen, UserCheck, ClipboardList, Bell, User,
  CalendarCheck, Network, History, FileText, CalendarClock
} from 'lucide-react';

const navConfig = [
  { label: 'Dashboard', icon: LayoutDashboard, path: '/', roles: ['admin', 'staff', 'student'] },
  { label: 'Academic Structure', icon: Network, path: '/academic-structure', roles: ['admin'] },
  { label: 'User Management', icon: UserCheck, path: '/users', roles: ['admin'] },
  { label: 'Audit Logs', icon: History, path: '/audit-logs', roles: ['admin'] },
  { label: 'Timetable', icon: CalendarClock, path: '/timetable', roles: ['admin', 'staff', 'student'] },
  { label: 'Student Records', icon: GraduationCap, path: '/students', roles: ['admin', 'staff'] },
  { label: 'My Academic Profile', icon: User, path: '/my-profile', roles: ['student'] },
  { label: 'Attendance', icon: CalendarCheck, path: '/attendance', roles: ['admin', 'staff', 'student'] },
  { label: 'Assignments', icon: ClipboardList, path: '/assignments', roles: ['admin', 'staff', 'student'] },
  { label: 'Requests', icon: FileText, path: '/requests', roles: ['admin', 'staff', 'student'] },
  { label: 'Announcements', icon: Bell, path: '/announcements', roles: ['admin', 'staff', 'student'] },
  { label: 'Finance', icon: DollarSign, path: '/finance', roles: ['admin', 'staff'] },
  { label: 'Staff Directory', icon: Users, path: '/staff', roles: ['admin', 'staff', 'student'] },
  { label: 'Reports', icon: BarChart3, path: '/reports', roles: ['admin', 'staff'] },
  { label: 'Settings', icon: Settings, path: '/settings', roles: ['admin', 'staff', 'student'] },
];

export default function Sidebar({ collapsed, setCollapsed }) {
  const navigate = useNavigate();
  const { userRole, userData } = useAuth();
  const currentRole = userRole || 'student';
  const allowedNavItems = navConfig.filter((item) => item.roles.includes(currentRole));

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const initials = userData?.name?.charAt(0)?.toUpperCase() || 'U';

  return (
    <>
      <div className={`fixed inset-0 z-40 lg:hidden ${collapsed ? 'hidden' : 'block'}`} style={{ backgroundColor: 'rgba(0,0,0,0.3)' }} onClick={() => setCollapsed(true)} />
      <aside
        className={`fixed top-0 left-0 z-50 h-screen flex flex-col transition-all duration-300 ease-out ${collapsed ? 'w-[72px]' : 'w-64'} lg:relative lg:z-auto ${collapsed ? '-translate-x-full lg:translate-x-0' : 'translate-x-0'}`}
        style={{ backgroundColor: 'var(--sidebar-bg)', borderRight: '1px solid var(--border)', transition: 'background-color 0.3s ease, border-color 0.3s ease' }}
      >
        {/* Brand */}
        <div className="flex items-center gap-3 px-5 h-16 shrink-0" style={{ borderBottom: '1px solid var(--border)' }}>
          <div className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg, var(--primary), var(--accent))' }}>
            <BookOpen className="w-4 h-4" style={{ color: 'var(--text-inverted)' }} />
          </div>
          {!collapsed && <span className="font-bold text-lg whitespace-nowrap animate-fade-in" style={{ color: 'var(--text)' }}>ERP Portal</span>}
        </div>

        {/* Nav Items */}
        <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
          {allowedNavItems.map(({ label, icon: Icon, path }) => (
            <NavLink
              key={path}
              to={path}
              end={path === '/'}
              onClick={() => { if (window.innerWidth < 1024) setCollapsed(true); }}
              className={({ isActive }) => `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${collapsed ? 'justify-center' : ''}`}
              style={({ isActive }) => ({
                backgroundColor: isActive ? 'var(--primary-light)' : 'transparent',
                color: isActive ? 'var(--primary)' : 'var(--text-muted)',
              })}
            >
              <Icon className="w-5 h-5 shrink-0" />
              {!collapsed && <span className="animate-fade-in">{label}</span>}
            </NavLink>
          ))}
        </nav>

        {/* Bottom: User Card + Logout */}
        <div className="p-3 space-y-2 shrink-0" style={{ borderTop: '1px solid var(--border)' }}>
          {/* Mini Profile */}
          {!collapsed && (
            <div className="flex items-center gap-3 px-3 py-2 rounded-xl mb-1" style={{ backgroundColor: 'var(--bg-secondary)' }}>
              {userData?.photoURL ? (
                <img src={userData.photoURL} alt="Avatar" className="w-8 h-8 rounded-lg object-cover shrink-0" />
              ) : (
                <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 text-xs font-bold" style={{ backgroundColor: 'var(--primary)', color: 'var(--text-inverted)' }}>
                  {initials}
                </div>
              )}
              <div className="min-w-0">
                <p className="text-sm font-bold truncate" style={{ color: 'var(--text)' }}>{userData?.name || 'User'}</p>
                <p className="text-xs truncate capitalize" style={{ color: 'var(--text-muted)' }}>{currentRole}</p>
              </div>
            </div>
          )}

          <button onClick={handleLogout} className={`flex items-center gap-3 px-3 py-2.5 rounded-xl w-full text-sm font-medium text-red-500 hover:bg-red-500/10 transition-all duration-200 ${collapsed ? 'justify-center' : ''}`}>
            <LogOut className="w-5 h-5 shrink-0" />
            {!collapsed && <span>Logout</span>}
          </button>
          <button onClick={() => setCollapsed(!collapsed)} className="hidden lg:flex items-center justify-center w-full py-2 rounded-xl transition-colors" style={{ color: 'var(--text-muted)' }}>
            {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          </button>
        </div>
      </aside>
    </>
  );
}
