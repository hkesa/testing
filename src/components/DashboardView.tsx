"use client";

import React from 'react';
import {
    Users,
    Calendar,
    TrendingUp,
    DollarSign,
    Clock,
    ChevronRight,
    Package
} from 'lucide-react';

const stats = [
    { label: '今日預約', value: '12', icon: Calendar, color: 'text-blue-500', trend: '+15%' },
    { label: '新客戶', value: '4', icon: Users, color: 'text-green-500', trend: '+10%' },
    { label: '今日營收', value: '$8,400', icon: DollarSign, color: 'text-yellow-600', trend: '+5%' },
    { label: '平均客單價', value: '$720', icon: TrendingUp, color: 'text-purple-500', trend: '+2%' },
];

const recentAppointments = [
    { id: 1, name: '張小美', service: '染髮 + 剪髮', time: '14:30', stylist: 'David', status: '已確認' },
    { id: 2, name: '李阿強', service: '洗剪吹', time: '15:15', stylist: 'Sarah', status: '待處理' },
    { id: 3, name: '王麗莎', service: '燙髮', time: '16:00', stylist: 'Emily', status: '進行中' },
    { id: 4, name: '陳建宏', service: '男士剪髮', time: '17:00', stylist: 'David', status: '已確認' },
];

export default function DashboardView() {
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <header>
                <h2 className="text-3xl font-bold tracking-tight">下午好，設計師 David</h2>
                <p className="text-foreground/60 mt-2">今天你有 12 個預約，目前進度良好。</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, i) => (
                    <div key={i} className="card flex items-start justify-between">
                        <div>
                            <p className="text-foreground/60 mb-1">{stat.label}</p>
                            <h3 className="text-3xl font-bold">{stat.value}</h3>
                            <p className="text-sm mt-2 font-medium text-green-500">{stat.trend} 較昨天</p>
                        </div>
                        <div className={`p-4 rounded-xl bg-primary/10 ${stat.color}`}>
                            <stat.icon size={28} />
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 card">
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="text-2xl font-bold">今日預約清單</h3>
                        <button className="text-primary hover:underline flex items-center gap-1">
                            查看全部 <ChevronRight size={20} />
                        </button>
                    </div>
                    <div className="space-y-4">
                        {recentAppointments.map((apt) => (
                            <div key={apt.id} className="flex items-center justify-between p-4 bg-secondary/50 rounded-xl hover:bg-secondary transition-colors cursor-pointer border border-transparent hover:border-primary/20">
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold">
                                        {apt.name[0]}
                                    </div>
                                    <div>
                                        <p className="font-bold">{apt.name}</p>
                                        <p className="text-foreground/60">{apt.service}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="flex items-center justify-end gap-2 text-primary">
                                        <Clock size={18} />
                                        <span className="font-bold">{apt.time}</span>
                                    </div>
                                    <p className="text-foreground/60">設計師: {apt.stylist}</p>
                                </div>
                                <div className={`px-4 py-1 rounded-full font-medium ${apt.status === '已確認' ? 'bg-green-100 text-green-700' :
                                    apt.status === '進行中' ? 'bg-blue-100 text-blue-700' : 'bg-yellow-100 text-yellow-700'
                                    }`}>
                                    {apt.status}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="card h-full">
                    <h3 className="text-2xl font-bold mb-8">快速操作</h3>
                    <div className="grid gap-4">
                        <button className="btn-primary w-full py-6 flex items-center justify-center gap-3">
                            <Calendar size={24} /> 新增預約
                        </button>
                        <button className="w-full py-6 border-2 border-primary text-primary rounded-xl font-bold hover:bg-primary/5 transition-colors flex items-center justify-center gap-3">
                            <Users size={24} /> 新增客戶
                        </button>
                        <button className="w-full py-6 border-2 border-primary text-primary rounded-xl font-bold hover:bg-primary/5 transition-colors flex items-center justify-center gap-3">
                            <Package size={24} /> 盤點庫存
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
