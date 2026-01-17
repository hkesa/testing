"use client";

import React, { useState } from 'react';
import { 
  BarChart3, 
  Calendar, 
  Users, 
  Scissors, 
  Settings, 
  Menu, 
  X, 
  LayoutDashboard, 
  Package, 
  LogOut 
} from 'lucide-react';
import { cn } from '@/lib/utils';

const sidebarItems = [
  { id: 'dashboard', label: '概覽', icon: LayoutDashboard },
  { id: 'appointments', label: '預約管理', icon: Calendar },
  { id: 'customers', label: '客戶管理 (CRM)', icon: Users },
  { id: 'stylists', label: '設計師管理', icon: Scissors },
  { id: 'services', label: '服務項目', icon: Scissors },
  { id: 'inventory', label: '庫存管理', icon: Package },
  { id: 'analytics', label: '數據分析', icon: BarChart3 },
  { id: 'settings', label: '系統設置', icon: Settings },
];

export default function Sidebar({ activeTab, onTabChange }: { activeTab: string, onTabChange: (id: string) => void }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-primary text-white rounded-md shadow-lg"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar Backdrop (Mobile) */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Content */}
      <aside className={cn(
        "fixed inset-y-0 left-0 z-40 w-[280px] bg-secondary border-right border-primary/20 transform transition-transform duration-300 ease-in-out lg:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex flex-col h-full p-6">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
              CS
            </div>
            <h1 className="text-primary font-bold tracking-wider">CloudSalon</h1>
          </div>

          <nav className="flex-1 space-y-2 overflow-y-auto">
            {sidebarItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onTabChange(item.id);
                  setIsOpen(false);
                }}
                className={cn(
                  "w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 text-left",
                  activeTab === item.id 
                    ? "bg-primary text-white shadow-md shadow-primary/20" 
                    : "text-foreground/70 hover:bg-primary/10 hover:text-primary"
                )}
              >
                <item.icon size={22} className={cn(activeTab === item.id ? "text-white" : "text-primary")} />
                <span className="font-medium whitespace-nowrap">{item.label}</span>
              </button>
            ))}
          </nav>

          <footer className="mt-auto pt-6 border-t border-primary/20">
            <button className="flex items-center gap-4 px-4 py-3 w-full text-foreground/70 hover:text-red-500 transition-colors">
              <LogOut size={22} />
              <span className="font-medium">登出系統</span>
            </button>
          </footer>
        </div>
      </aside>
    </>
  );
}
