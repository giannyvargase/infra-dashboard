import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, Server, Shield, 
  Bell, Search, Sun, Moon, User, Settings, Database, Layout, X 
} from 'lucide-react';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  
  // --- ESTADOS DE INTERFAZ ---
  const [isDark, setIsDark] = useState(true);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  
  // --- ESTADO DE BÚSQUEDA FUNCIONAL ---
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  // --- LÓGICA DE MODO OSCURO ---
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  // --- FUNCIÓN DE BÚSQUEDA AL PRESIONAR ENTER ---
  const handleSearch = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      
      if (query.includes('vm') || query.includes('host') || query.includes('10.')) {
        navigate('/vmware');
      } else if (query.includes('entra') || query.includes('user') || query.includes('mfa')) {
        navigate('/entraid');
      } else if (query.includes('sinco') || query.includes('adpro') || query.includes('sql')) {
        navigate('/sinco');
      }
      
      console.log(`Buscando: ${query}`);
      // Aquí podrías filtrar estados globales en el futuro
    }
  };

  return (
    <div className="flex h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 font-sans transition-colors duration-300">

      <aside className="w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col z-20">
        
        <div className="flex items-center gap-3 px-6 py-8 border-b border-slate-100 dark:border-slate-800/50">
          <div className="bg-emerald-500 p-2 rounded-lg shadow-lg shadow-emerald-500/20">
            <Layout size={20} className="text-white" />
          </div>
          <div>
            <h2 className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] leading-none">
              Gestión de Sistemas
            </h2>
            <h1 className="text-lg font-bold text-slate-800 dark:text-white tracking-tight mt-1">
              Infra <span className="text-emerald-500">Dashboard</span>
            </h1>
          </div>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          <MenuLink to="/" icon={<LayoutDashboard size={18} />} label="Inicio" />
          <MenuLink to="/vmware" icon={<Server size={18} />} label="Nodos VMware" />
          <MenuLink to="/entraid" icon={<Shield size={18} />} label="Entra ID" />
          <MenuLink to="/sinco" icon={<Database size={18} />} label="SINCO ERP" />
        </nav>

        <div className="p-4 border-t border-slate-100 dark:border-slate-800/50">
           <p className="text-[10px] text-center text-slate-400 font-mono italic tracking-widest">V2.0.26 | 7R-SISTEMAS</p>
        </div>
      </aside>

      <div className="flex-1 flex flex-col overflow-hidden">
        
        <header className="h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-6 z-50">
          
          <div className="relative group">
            <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-950 px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 w-80 focus-within:ring-2 focus-within:ring-emerald-500/20 focus-within:border-emerald-500 transition-all">
              <Search size={16} className="text-slate-400" />
              <input 
                type="text" 
                placeholder="Buscar IP, Servidor o Usuario..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleSearch}
                className="bg-transparent border-none outline-none text-sm w-full text-slate-800 dark:text-slate-200 placeholder:text-slate-500" 
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} className="text-slate-400 hover:text-slate-600">
                  <X size={14} />
                </button>
              )}
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsDark(!isDark)} 
              className="p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-500"
            >
              {isDark ? <Sun size={20} className="hover:text-amber-400" /> : <Moon size={20} className="hover:text-indigo-500" />}
            </button>

            <div className="relative">
              <button 
                onClick={() => { setIsNotificationsOpen(!isNotificationsOpen); setIsProfileOpen(false); }}
                className={`p-2 rounded-xl transition-colors relative ${isNotificationsOpen ? 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-500' : 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500'}`}
              >
                <Bell size={20} />
                <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
              </button>

              {isNotificationsOpen && (
                <div className="absolute right-0 mt-3 w-80 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2">
                  <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50/50 dark:bg-slate-900/50">
                    <h3 className="text-xs font-black uppercase tracking-widest text-slate-500">Alertas Críticas</h3>
                    <span className="text-[10px] font-bold bg-red-500 text-white px-2 py-0.5 rounded-full">3</span>
                  </div>
                  <div className="max-h-80 overflow-y-auto">
                    <NotificationItem icon={<Server size={14} className="text-red-500" />} title="Nodo VMware 04 Down" desc="Fallo de heartbeat en el clúster." time="5 min" />
                    <NotificationItem icon={<Shield size={14} className="text-amber-500" />} title="MFA: Intento fallido" desc="Usuario: jdoe@cia7r.com" time="12 min" />
                  </div>
                </div>
              )}
            </div>

            <div className="relative ml-2">
              <button 
                onClick={() => { setIsProfileOpen(!isProfileOpen); setIsNotificationsOpen(false); }}
                className={`w-9 h-9 rounded-xl bg-emerald-500 flex items-center justify-center font-bold text-white shadow-lg shadow-emerald-500/20 transition-all border-2 ${isProfileOpen ? 'border-emerald-300 ring-4 ring-emerald-500/10' : 'border-transparent'}`}
              >
                GV
              </button>

              {isProfileOpen && (
                <div className="absolute right-0 mt-3 w-64 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden z-50 animate-in fade-in zoom-in-95">
                  <div className="p-4 bg-slate-50 dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800">
                    <p className="text-sm font-bold text-slate-800 dark:text-white leading-none">Gianny Vargas</p>
                    <p className="text-[10px] text-slate-500 mt-1 uppercase font-bold tracking-tight">Ing. de Sistemas | Infra</p>
                  </div>
                  <div className="p-2">
                    <ProfileMenuLink to="/perfil" icon={<User size={14} />} label="Mi Perfil IT" />
                    <ProfileMenuLink to="/configuracion" icon={<Settings size={14} />} label="Ajustes Panel" />
                    <div className="h-px bg-slate-100 dark:bg-slate-800 my-2 mx-2"></div>
                    <button className="w-full text-left px-4 py-2 text-xs font-bold text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-lg transition-colors uppercase tracking-widest">
                      Desconectar
                    </button>
                  </div>
                </div>
              )}
            </div>

          </div>
        </header>

        <main className="flex-1 overflow-auto p-8 bg-slate-50/30 dark:bg-slate-950 transition-colors">
          {children}
        </main>
      </div>
    </div>
  );
}

function MenuLink({ to, icon, label }: { to: string, icon: React.ReactNode, label: string }) {
  return (
    <Link 
      to={to} 
      className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-500 dark:text-slate-400 hover:bg-emerald-50 dark:hover:bg-emerald-500/10 hover:text-emerald-600 dark:hover:text-emerald-400 rounded-xl transition-all group"
    >
      <span className="transition-transform group-hover:scale-110">{icon}</span>
      <span>{label}</span>
    </Link>
  );
}

function ProfileMenuLink({ to, icon, label }: { to: string, icon: React.ReactNode, label: string }) {
  return (
    <Link to={to} className="flex items-center gap-3 px-4 py-2.5 text-xs font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors uppercase tracking-tighter">
      {icon} {label}
    </Link>
  );
}

function NotificationItem({ icon, title, desc, time }: { icon: React.ReactNode, title: string, desc: string, time: string }) {
  return (
    <div className="p-4 border-b border-slate-50 dark:border-slate-800/50 hover:bg-slate-50/50 dark:hover:bg-slate-800/30 cursor-pointer transition-colors">
      <div className="flex gap-3">
        <div className="w-8 h-8 rounded-lg bg-white dark:bg-slate-950 flex items-center justify-center shrink-0 border border-slate-100 dark:border-slate-800">
          {icon}
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <p className="text-[11px] font-bold text-slate-800 dark:text-slate-200">{title}</p>
            <span className="text-[9px] text-slate-400 font-medium">{time}</span>
          </div>
          <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1">{desc}</p>
        </div>
      </div>
    </div>
  );
}