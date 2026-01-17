"use client";

import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import DashboardView from '@/components/DashboardView';
import CustomerView from '@/components/CustomerView';

export default function Home() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardView />;
      case 'customers':
        return <CustomerView />;
      default:
        return (
          <div className="flex flex-col items-center justify-center h-full text-center space-y-4 py-20">
            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center text-primary">
              <span className="text-4xl">🛠️</span>
            </div>
            <h2 className="text-3xl font-bold">頁面開發中</h2>
            <p className="text-foreground/60 max-w-md">
              您選取的「{activeTab}」功能模塊正在準備中。請期待更完整的自動化美髮管理體驗！
            </p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />

      <main className="lg:ml-[280px] p-6 md:p-12 transition-all duration-300">
        <div className="max-w-7xl mx-auto">
          {renderContent()}
        </div>
      </main>
    </div>
  );
}
