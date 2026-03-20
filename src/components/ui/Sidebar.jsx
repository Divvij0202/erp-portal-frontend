// Sidebar.jsx — Collapsible sidebar navigation with RBAC filtering
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import { signOut } from 'firebase/auth';
import { useAuth } from '../../contexts/AuthContext';
import {
  LayoutDashboard,
  GraduationCap,
  DollarSign,
  Users,
  BarChart3,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  UserCheck,
  ClipboardList,
  Bell,
  User,
  CalendarCheck,
  Network,
  History,
  FileText,
  CalendarClock
} from 'lucide-react';

// Navigation items with role-based access
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
  const { userRole } = useAuth();
  
  // Default to student if role is undefined
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

  return (
    <>
      <div className={`fixed inset-0 bg-black/30 z-40 lg:hidden ${collapsed ? 'hidden' : 'block'}`} onClick={() => setCollapsed(true)} />
      <aside
        className={`fixed top-0 left-0 z-50 h-screen bg-white border-r border-surface-200 flex flex-col transition-all duration-300 ease-out ${collapsed ? 'w-[72px]' : 'w-64'} lg:relative lg:z-auto ${collapsed ? '-translate-x-full lg:translate-x-0' : 'translate-x-0'}`}
      >
        <div className="flex items-center gap-3 px-5 h-16 border-b border-surface-100 shrink-0">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary-600 to-primary-400 flex items-center justify-center shrink-0">
            <BookOpen className="w-4 h-4 text-white" />
          </div>
          {!collapsed && <span className="font-bold text-lg text-surface-900 whitespace-nowrap animate-fade-in">ERP Portal</span>}
        </div>

        <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
          {allowedNavItems.map(({ label, icon: Icon, path }) => (
            <NavLink
              key={path}
              to={path}
              end={path === '/'}
              onClick={() => { if (window.innerWidth < 1024) setCollapsed(true); }}
              className={({ isActive }) => `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${isActive ? 'bg-primary-50 text-primary-700 shadow-soft' : 'text-surface-600 hover:bg-surface-50 hover:text-surface-900'} ${collapsed ? 'justify-center' : ''}`}
            >
              <Icon className="w-5 h-5 shrink-0" />
              {!collapsed && <span className="animate-fade-in">{label}</span>}
            </NavLink>
          ))}
        </nav>

        <div className="border-t border-surface-100 p-3 space-y-1 shrink-0">
          <button onClick={handleLogout} className={`flex items-center gap-3 px-3 py-2.5 rounded-xl w-full text-sm font-medium text-red-600 hover:bg-red-50 transition-all duration-200 ${collapsed ? 'justify-center' : ''}`}>
            <LogOut className="w-5 h-5 shrink-0" />
            {!collapsed && <span>Logout</span>}
          </button>
          <button onClick={() => setCollapsed(!collapsed)} className="hidden lg:flex items-center justify-center w-full py-2 rounded-xl text-surface-400 hover:bg-surface-100 hover:text-surface-600 transition-colors">
            {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          </button>
        </div>
      </aside>
    </>
  );
}
