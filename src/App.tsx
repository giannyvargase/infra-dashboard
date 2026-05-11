import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import KpiGrid from './components/KpiGrid';
import NetworkChart from './components/NetworkChart';
import AlertTable from './components/AlertTable';
import NotificationsReport from './pages/NotificationsReport';
import Settings from './pages/Settings';
import Profile from './pages/Profile';
import VMwarePage from './pages/VMwarePage';
import EntraIDPage from './pages/EntraIDPage';
import SincoPage from './pages/SincoPage';

function HomePage() {
  const [activeFilter, setActiveFilter] = useState('Todos');

  return (
    <>
      <div className="mb-6 flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 dark:text-white">Resumen de Operaciones</h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Monitoreo en tiempo real de infraestructura crítica.</p>
        </div>
        
        {activeFilter !== 'Todos' && (
          <button 
            onClick={() => setActiveFilter('Todos')}
            className="text-[10px] font-bold bg-emerald-500/10 text-emerald-600 px-2 py-1 rounded border border-emerald-500/20 hover:bg-emerald-500/20 transition-all uppercase"
          >
            Limpiar Filtro: {activeFilter} ✕
          </button>
        )}
      </div>

      <KpiGrid onCardClick={(category: string) => setActiveFilter(category)} />
      <NetworkChart />
      <AlertTable filter={activeFilter} />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/vmware" element={<VMwarePage />} />
          <Route path="/entraid" element={<EntraIDPage />} />
          <Route path="/sinco" element={<SincoPage />} />
          <Route path="/reporte" element={<NotificationsReport />} />
          <Route path="/configuracion" element={<Settings />} />
          <Route path="/perfil" element={<Profile />} />
        </Routes>
      </DashboardLayout>
    </BrowserRouter>
  );
}