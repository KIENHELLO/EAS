'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import {
  LayoutDashboard,
  Building2,
  Coins,
  Users2,
  FileText,
  Settings,
  LogOut,
  User,
} from 'lucide-react';

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [newLeadsCount, setNewLeadsCount] = useState(0);

  // Fetch new leads count
  useEffect(() => {
    async function fetchLeads() {
      try {
        const res = await fetch('/api/leads?status=new');
        if (res.ok) {
          const data = await res.json();
          setNewLeadsCount(data.length);
        }
      } catch (err) {
        console.error('Failed to fetch new leads count', err);
      }
    }
    fetchLeads();
    // Poll every 30s
    const interval = setInterval(fetchLeads, 30000);
    return () => clearInterval(interval);
  }, [pathname]); // Refresh when route changes

  const handleLogout = () => {
    // Clear cookie and redirect
    document.cookie = 'admin_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
    router.push('/admin/login');
    router.refresh();
  };

  const navItems = [
    { label: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    { label: 'Trường học', href: '/admin/truong', icon: Building2 },
    { label: 'Học phí', href: '/admin/hoc-phi', icon: Coins },
    {
      label: 'Leads',
      href: '/admin/leads',
      icon: Users2,
      badge: newLeadsCount > 0 ? newLeadsCount : null,
    },
    { label: 'Blog', href: '/admin/blog', icon: FileText, disabled: true },
    { label: 'Cài đặt', href: '/admin/cai-dat', icon: Settings, disabled: true },
  ];

  return (
    <aside className="w-[220px] bg-[#1e293b] text-white flex flex-col h-screen sticky top-0 z-20 border-r border-[#334155] font-sans shrink-0">
      {/* Brand Logo */}
      <div className="h-16 px-6 flex items-center gap-2 border-b border-[#334155]">
        <img 
          src="/logo.png" 
          alt="EAS Logo" 
          className="w-7 h-7 object-contain rounded-md"
        />
        <span className="font-bold tracking-tight text-white text-lg">
          KoreaEdu Admin
        </span>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 py-6 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href || (item.href !== '/admin' && pathname.startsWith(item.href));
          const Icon = item.icon;

          if (item.disabled) {
            return (
              <div
                key={item.label}
                className="flex items-center gap-3 px-6 py-3 text-[#64748b] cursor-not-allowed text-sm font-medium"
              >
                <Icon size={18} />
                <span>{item.label}</span>
                <span className="text-[10px] bg-[#334155] px-1.5 py-0.5 rounded text-[#94a3b8] ml-auto">
                  Soon
                </span>
              </div>
            );
          }

          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center gap-3 px-6 py-3 text-sm font-medium transition-all ${
                isActive
                  ? 'bg-white/10 border-l-[3px] border-white text-white'
                  : 'text-[#94a3b8] hover:text-white hover:bg-white/5 border-l-[3px] border-transparent'
              }`}
            >
              <Icon size={18} />
              <span>{item.label}</span>
              {item.badge !== null && item.badge !== undefined && (
                <span className="ml-auto bg-[#e60023] text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center animate-pulse">
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Admin Profile Details */}
      <div className="p-4 border-t border-[#334155] bg-[#0f172a]/40 flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#e60023] flex items-center justify-center font-bold text-sm text-white">
            AD
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-bold truncate text-white">Administrator</p>
            <p className="text-[10px] text-[#94a3b8] truncate">
              admin@koreaedu.vn
            </p>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 justify-center w-full py-2 px-3 rounded-[12px] bg-[#334155]/60 hover:bg-[#ef4444]/20 hover:text-red-400 text-xs font-semibold text-[#94a3b8] transition-all cursor-pointer"
        >
          <LogOut size={14} />
          <span>Đăng xuất</span>
        </button>
      </div>
    </aside>
  );
}
