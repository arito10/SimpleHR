import React, { useState } from 'react';
import { 
  LayoutDashboard, Users, Bell, Settings, 
  TrendingUp, TrendingDown, AlertCircle, 
  BarChart3, Heart, Zap, Search 
} from 'lucide-react';
import Button from '../components/Button';
import Logo from '../components/Logo';

// Mock Data for the simulation
const EMPLOYEES = [
  { id: 1, name: "Sarah Jenkins", role: "Product Manager", risk: 85, trend: "up", status: "Critical" },
  { id: 2, name: "Mike Ross", role: "Senior Developer", risk: 62, trend: "up", status: "Warning" },
  { id: 3, name: "Jessica Pearson", role: "Legal Counsel", risk: 12, trend: "stable", status: "Healthy" },
  { id: 4, name: "Donna Paulsen", role: "Exec Assistant", risk: 45, trend: "down", status: "Healthy" },
  { id: 5, name: "Louis Litt", role: "Finance Director", risk: 78, trend: "up", status: "Warning" },
  { id: 6, name: "Rachel Zane", role: "Paralegal", risk: 25, trend: "stable", status: "Healthy" },
];

const SIGNALS = [
  { id: 1, type: "Workload", message: "Engineering team logged 15% more hours this week.", time: "2h ago", severity: "high" },
  { id: 2, type: "Sentiment", message: "Negative sentiment detected in #general-announcements.", time: "4h ago", severity: "medium" },
  { id: 3, type: "Attendance", message: "Late starts increased by 10% in Sales Dept.", time: "1d ago", severity: "low" },
];

const MoodPulseDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="flex h-screen bg-slate-50 font-sans text-slate-900 overflow-hidden">
      
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col flex-shrink-0">
        <div className="p-6 border-b border-slate-800">
           <Logo variant="light" className="scale-90 origin-left" />
           <div className="mt-2 inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-primary-500 text-slate-900 uppercase tracking-wide">
             MoodPulse v1.0
           </div>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          <SidebarItem icon={<LayoutDashboard size={20}/>} label="Overview" active={activeTab === 'overview'} onClick={() => setActiveTab('overview')} />
          <SidebarItem icon={<Users size={20}/>} label="Team Health" active={activeTab === 'team'} onClick={() => setActiveTab('team')} />
          <SidebarItem icon={<Zap size={20}/>} label="Signals & Alerts" active={activeTab === 'signals'} onClick={() => setActiveTab('signals')} />
          <SidebarItem icon={<BarChart3 size={20}/>} label="Reports" active={activeTab === 'reports'} onClick={() => setActiveTab('reports')} />
        </nav>

        <div className="p-4 border-t border-slate-800">
          <SidebarItem icon={<Settings size={20}/>} label="Settings" />
          <div className="mt-4 flex items-center gap-3 px-3">
             <div className="w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center text-slate-900 font-bold text-xs">
               JD
             </div>
             <div>
               <p className="text-sm font-medium">John Doe</p>
               <p className="text-xs text-slate-400">Admin</p>
             </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 flex-shrink-0">
          <h1 className="text-xl font-bold text-slate-900">
            {activeTab === 'overview' && 'Organization Overview'}
            {activeTab === 'team' && 'Team Health Roster'}
            {activeTab === 'signals' && 'Real-time Signals'}
          </h1>
          <div className="flex items-center gap-4">
             <div className="relative">
               <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
               <input type="text" placeholder="Search employee..." className="bg-slate-100 rounded-full pl-9 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 w-64 transition-all" />
             </div>
             <button className="relative p-2 text-slate-500 hover:bg-slate-100 rounded-full">
               <Bell size={20} />
               <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
             </button>
             <Button size="sm" className="rounded-full">Export Report</Button>
          </div>
        </header>

        {/* Scrollable Dashboard Area */}
        <div className="flex-1 overflow-y-auto p-8">
           
           {/* KPI Cards */}
           <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
             <KPICard 
               title="Overall Team Mood" 
               value="7.2/10" 
               trend="+0.4" 
               trendUp={true} 
               icon={<Heart className="text-pink-500" />} 
             />
             <KPICard 
               title="Burnout Risk" 
               value="High" 
               trend="+12%" 
               trendUp={false} 
               icon={<AlertCircle className="text-red-500" />} 
               alert 
             />
             <KPICard 
               title="Workload Balance" 
               value="92%" 
               trend="-2%" 
               trendUp={true} 
               icon={<BarChart3 className="text-blue-500" />} 
             />
             <KPICard 
               title="Active Signals" 
               value="14" 
               subtext="last 24 hours"
               icon={<Zap className="text-yellow-500" />} 
             />
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
             
             {/* Main Chart Area (Left 2 cols) */}
             <div className="lg:col-span-2 space-y-8">
                {/* Team Roster */}
                <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                  <div className="px-6 py-5 border-b border-slate-100 flex justify-between items-center">
                    <h3 className="font-bold text-slate-900">At-Risk Employees</h3>
                    <button className="text-sm text-primary-600 font-medium hover:underline">View All</button>
                  </div>
                  <table className="w-full">
                    <thead className="bg-slate-50 text-xs text-slate-500 font-semibold uppercase tracking-wider text-left">
                      <tr>
                        <th className="px-6 py-3">Employee</th>
                        <th className="px-6 py-3">Burnout Score</th>
                        <th className="px-6 py-3">Trend</th>
                        <th className="px-6 py-3">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {EMPLOYEES.map(emp => (
                        <tr key={emp.id} className="hover:bg-slate-50 transition-colors">
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                               <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-600">
                                 {emp.name.split(' ').map(n=>n[0]).join('')}
                               </div>
                               <div>
                                 <div className="text-sm font-bold text-slate-900">{emp.name}</div>
                                 <div className="text-xs text-slate-500">{emp.role}</div>
                               </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="w-full max-w-[140px]">
                              <div className="flex justify-between text-xs mb-1">
                                <span className={emp.risk > 70 ? 'text-red-600 font-bold' : 'text-slate-600'}>{emp.risk}%</span>
                              </div>
                              <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                                <div 
                                  className={`h-full rounded-full ${emp.risk > 75 ? 'bg-red-500' : emp.risk > 50 ? 'bg-yellow-500' : 'bg-green-500'}`} 
                                  style={{ width: `${emp.risk}%` }}
                                ></div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            {emp.trend === 'up' && <TrendingUp size={16} className="text-red-500" />}
                            {emp.trend === 'down' && <TrendingDown size={16} className="text-green-500" />}
                            {emp.trend === 'stable' && <span className="text-slate-400">-</span>}
                          </td>
                          <td className="px-6 py-4">
                            <button className="text-xs font-medium text-slate-600 border border-slate-200 px-3 py-1.5 rounded-lg hover:bg-slate-50 hover:text-slate-900 transition-colors">
                              View Details
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
             </div>

             {/* Right Column: Signals */}
             <div className="lg:col-span-1 space-y-6">
                <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
                   <h3 className="font-bold text-slate-900 mb-4">Latest Signals</h3>
                   <div className="space-y-4">
                      {SIGNALS.map(signal => (
                        <div key={signal.id} className="flex gap-4 items-start p-3 rounded-xl bg-slate-50 border border-slate-100">
                          <div className={`mt-1 w-2 h-2 rounded-full flex-shrink-0 ${
                            signal.severity === 'high' ? 'bg-red-500' : 
                            signal.severity === 'medium' ? 'bg-yellow-500' : 'bg-blue-500'
                          }`}></div>
                          <div>
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-xs font-bold text-slate-900 uppercase tracking-wide">{signal.type}</span>
                              <span className="text-[10px] text-slate-400">{signal.time}</span>
                            </div>
                            <p className="text-sm text-slate-600 leading-snug">{signal.message}</p>
                          </div>
                        </div>
                      ))}
                   </div>
                   <button className="w-full mt-4 py-2 text-sm text-center text-primary-600 font-medium hover:bg-primary-50 rounded-lg transition-colors">
                     View All Signals
                   </button>
                </div>

                <div className="bg-slate-900 rounded-2xl p-6 text-white relative overflow-hidden">
                   <div className="relative z-10">
                     <h3 className="font-bold mb-2">Weekly Summary</h3>
                     <p className="text-sm text-slate-300 mb-4">Your team's burnout risk has increased by 12% this week. Consider scheduling a "No Meeting Friday".</p>
                     <Button size="sm" variant="pastel" className="w-full">
                       Schedule Intervention
                     </Button>
                   </div>
                   <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                </div>
             </div>

           </div>
        </div>

      </main>
    </div>
  );
};

const SidebarItem = ({ icon, label, active = false, onClick }: any) => (
  <button 
    onClick={onClick}
    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
      active 
        ? 'bg-primary-500 text-slate-900 shadow-lg shadow-primary-500/20' 
        : 'text-slate-400 hover:text-white hover:bg-white/5'
    }`}
  >
    {icon}
    <span>{label}</span>
  </button>
);

const KPICard = ({ title, value, trend, trendUp, icon, subtext, alert }: any) => (
  <div className={`bg-white rounded-2xl p-5 border shadow-sm flex flex-col justify-between ${alert ? 'border-red-200 bg-red-50/30' : 'border-slate-100'}`}>
     <div className="flex justify-between items-start mb-4">
        <div className="p-2 bg-slate-50 rounded-lg">{icon}</div>
        {trend && (
          <div className={`text-xs font-bold px-2 py-1 rounded-full ${
            (alert && !trendUp) || (!alert && trendUp) ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
          }`}>
            {trend}
          </div>
        )}
     </div>
     <div>
       <div className="text-slate-500 text-sm font-medium mb-1">{title}</div>
       <div className="text-2xl font-bold text-slate-900">{value}</div>
       {subtext && <div className="text-xs text-slate-400 mt-1">{subtext}</div>}
     </div>
  </div>
);

export default MoodPulseDashboard;