"use client";

import React, { useState } from 'react';
import {
    Plus,
    Search,
    Filter,
    MoreVertical,
    Mail,
    Phone,
    Calendar as CalendarIcon
} from 'lucide-react';

const initialCustomers = [
    { id: 1, name: '張小美', phone: '0912-345-678', email: 'mei@example.com', lastVisit: '2025-12-20', totalSpend: '$12,400', level: 'VIP' },
    { id: 2, name: '李阿強', phone: '0922-111-222', email: 'strong@example.com', lastVisit: '2026-01-05', totalSpend: '$3,200', level: '普通' },
    { id: 3, name: '王麗莎', phone: '0933-555-777', email: 'lisa@example.com', lastVisit: '2025-11-15', totalSpend: '$25,600', level: '鑽石' },
    { id: 4, name: '陳建宏', phone: '0944-888-999', email: 'chen@example.com', lastVisit: '2026-01-15', totalSpend: '$1,500', level: '普通' },
    { id: 5, name: '林心如', phone: '0955-000-111', email: 'lin@example.com', lastVisit: '2025-10-30', totalSpend: '$8,900', level: 'VIP' },
];

export default function CustomerView() {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">客戶管理 (CRM)</h2>
                    <p className="text-foreground/60 mt-2">管理您的顧客資料、消費記錄與忠誠度獎勵。</p>
                </div>
                <button className="btn-primary flex items-center gap-2 justify-center">
                    <Plus size={24} /> 新增客戶
                </button>
            </header>

            <div className="card">
                <div className="flex flex-col md:flex-row gap-4 mb-8">
                    <div className="relative flex-1">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/40" size={24} />
                        <input
                            type="text"
                            placeholder="搜尋名稱、手機或 Email..."
                            className="w-full pl-12 pr-4 py-3 bg-secondary/50 border border-primary/20 rounded-xl focus:outline-none focus:border-primary transition-colors"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <button className="flex items-center gap-2 px-6 py-3 border border-primary/20 rounded-xl hover:bg-secondary transition-colors">
                        <Filter size={24} /> 篩選
                    </button>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b border-primary/20">
                                <th className="pb-4 font-bold">客戶名稱</th>
                                <th className="pb-4 font-bold">聯絡方式</th>
                                <th className="pb-4 font-bold">最後到店</th>
                                <th className="pb-4 font-bold">累計消費</th>
                                <th className="pb-4 font-bold">會員等級</th>
                                <th className="pb-4 font-bold"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-primary/10">
                            {initialCustomers.map((customer) => (
                                <tr key={customer.id} className="group hover:bg-primary/5 transition-colors">
                                    <td className="py-6">
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold">
                                                {customer.name[0]}
                                            </div>
                                            <span className="font-bold">{customer.name}</span>
                                        </div>
                                    </td>
                                    <td className="py-6">
                                        <div className="space-y-1">
                                            <div className="flex items-center gap-2 text-foreground/70">
                                                <Phone size={18} /> {customer.phone}
                                            </div>
                                            <div className="flex items-center gap-2 text-foreground/50">
                                                <Mail size={18} /> {customer.email}
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-6">
                                        <div className="flex items-center gap-2">
                                            <CalendarIcon size={18} className="text-primary" />
                                            {customer.lastVisit}
                                        </div>
                                    </td>
                                    <td className="py-6 font-bold text-primary">
                                        {customer.totalSpend}
                                    </td>
                                    <td className="py-6">
                                        <span className={`px-4 py-1 rounded-full font-medium ${customer.level === '鑽石' ? 'bg-purple-100 text-purple-700' :
                                                customer.level === 'VIP' ? 'bg-gold-100 text-yellow-700' : 'bg-gray-100 text-gray-700'
                                            }`}>
                                            {customer.level}
                                        </span>
                                    </td>
                                    <td className="py-6 text-right">
                                        <button className="p-2 hover:bg-primary/10 rounded-full transition-colors text-foreground/40 hover:text-primary">
                                            <MoreVertical size={24} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
