import { Mail, MapPin, Briefcase, Code2, Database, ShieldCheck, Phone, Layout } from 'lucide-react';

export default function Profile() {
  // Datos técnicos actualizados según tu perfil profesional real
  const skills = [
    { name: 'M365 (Entra ID, Intune, Defender)', level: '95%', icon: <ShieldCheck size={16} /> },
    { name: 'SINCO ERP (ADPRO)', level: '90%', icon: <Database size={16} /> },
    { name: 'PowerShell Automation', level: '85%', icon: <Code2 size={16} /> },
    { name: 'Frontend (React / Tailwind)', level: '70%', icon: <Layout size={16} /> }
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* HEADER CON EFECTO GLASSMORPISM - Optimizado para legibilidad */}
      <div className="relative">
        <div className="h-44 w-full bg-linear-to-r from-slate-900 via-emerald-900 to-slate-900 rounded-xl shadow-lg"></div>
        
        <div className="absolute -bottom-16 left-8 right-8 flex flex-col md:flex-row items-center md:items-end gap-6">
          <div className="w-32 h-32 rounded-2xl bg-emerald-500 border-4 border-white dark:border-slate-900 flex items-center justify-center text-4xl font-bold text-white shadow-2xl shrink-0">
            GV
          </div>

          <div className="mb-2 bg-white/70 dark:bg-slate-900/40 backdrop-blur-md p-4 rounded-xl border border-white/20 dark:border-slate-700/30 shadow-xl w-full md:w-auto">
            <h1 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight leading-none">
              Gianny Helena Vargas Escobar
            </h1>
            <div className="flex items-center gap-2 mt-2">
              <span className="h-px w-8 bg-emerald-500"></span>
              <p className="text-emerald-700 dark:text-emerald-400 text-[10px] md:text-xs font-bold uppercase tracking-wider">
                Ingeniera de Sistemas <span className="text-slate-400 mx-1">|</span> Infraestructura M365 & Ciberseguridad
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-16">
        
        {/* COLUMNA IZQUIERDA: CONTACTO Y STACK */}
        <div className="space-y-6">
          <section className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <h2 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4 font-mono">Contacto</h2>
            <div className="space-y-4 text-sm">
              <ContactItem icon={<Mail size={16} />} text="giannyescobar22@hotmail.com" />
              <ContactItem icon={<Phone size={16} />} text="+57 302 215 5453" />
              <ContactItem icon={<MapPin size={16} />} text="Barranquilla, Colombia" />
              <ContactItem icon={<Briefcase size={16} />} text="Sectores: Minería y Construcción" />
            </div>
          </section>

          <section className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <h2 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4 font-mono">Habilidades Técnicas</h2>
            <div className="space-y-5">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between text-[11px] font-bold mb-1.5 dark:text-slate-300">
                    <span className="flex items-center gap-2 uppercase tracking-tighter">
                      {skill.icon} {skill.name}
                    </span>
                    <span className="text-emerald-500">{skill.level}</span>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-slate-700 h-1 rounded-full overflow-hidden">
                    <div 
                      className="bg-emerald-500 h-full transition-all duration-1000" 
                      style={{ width: skill.level }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* COLUMNA DERECHA: PERFIL, EXPERIENCIA Y PROYECTOS */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* RESUMEN PROFESIONAL */}
          <section className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm border-l-4 border-l-emerald-500">
            <h2 className="text-md font-bold text-slate-800 dark:text-white mb-3 uppercase tracking-wider text-sm">
               Perfil Profesional
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed italic">
              Ingeniera de Sistemas especializada en infraestructura Cloud y Ciberseguridad. Experta en administración de 
              Microsoft 365 (Entra ID, Intune, Defender, Purview) y automatización mediante PowerShell. Dominio operativo 
              de SINCO ERP (ADPRO) y desarrollo de soluciones frontend personalizadas para el monitoreo de operaciones IT.
            </p>
          </section>

          {/* EXPERIENCIA LABORAL */}
          <section className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <h2 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6 font-mono">Experiencia Laboral Reciente</h2>
            <ExperienceItem 
              role="Ingeniera de Soporte y Gestión"
              company="Compañía 7R S.A.S"
              period="Octubre 2025 – Actualidad"
              tasks={[
                "Gestión de proveedores estratégicos y contratos TIC (Milenio PC, Colombia Telecomunicaciones).",
                "Administración de Microsoft Entra ID e implementación de políticas MDM con Intune.",
                "Automatización de backups y políticas de auditoría mediante Microsoft Purview.",
                "Soporte integral y optimización de procesos en SINCO ERP (ADPRO)."
              ]}
            />
          </section>

          {/* PROYECTOS PERSONALES & FRONTEND */}
          <section className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <h2 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6 font-mono">Proyectos Personales & Desarrollo</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-700">
                <h3 className="font-bold text-slate-800 dark:text-white text-sm mb-1 uppercase">Infra Dashboard</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
                  Interfaz reactiva para el monitoreo de nodos VMware y licencias M365 desarrollada de forma independiente.
                </p>
                <div className="flex gap-2">
                  <span className="text-[9px] bg-emerald-100 text-emerald-600 px-2 py-0.5 rounded-full font-bold uppercase">React</span>
                  <span className="text-[9px] bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full font-bold uppercase">Tailwind</span>
                </div>
              </div>
              <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-700">
                <h3 className="font-bold text-slate-800 dark:text-white text-sm mb-1 uppercase">Automación Purview</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
                  Scripts de PowerShell para automatizar custodias legales y reportes de eDiscovery.
                </p>
                <div className="flex gap-2">
                  <span className="text-[9px] bg-slate-200 text-slate-700 px-2 py-0.5 rounded-full font-bold uppercase">PowerShell</span>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}

// --- SUB-COMPONENTES AUXILIARES ---

function ContactItem({ icon, text }: { icon: React.ReactNode, text: string }) {
  return (
    <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
      <div className="text-emerald-500">{icon}</div>
      <span className="font-medium tracking-tight">{text}</span>
    </div>
  );
}

function ExperienceItem({ role, company, period, tasks }: { role: string, company: string, period: string, tasks: string[] }) {
  return (
    <div className="relative pl-8 border-l-2 border-emerald-500/20">
      <div className="absolute -left-2.25 top-0 w-4 h-4 bg-emerald-500 rounded-full border-4 border-white dark:border-slate-800"></div>
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="font-bold text-slate-800 dark:text-white text-sm">{role}</h3>
          <p className="text-xs font-bold text-emerald-500 uppercase tracking-tighter">{company}</p>
        </div>
        <span className="text-[10px] font-bold text-slate-400 bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded">{period}</span>
      </div>
      <ul className="space-y-2 mt-4 text-xs text-slate-500 dark:text-slate-400">
        {tasks.map((task, i) => (
          <li key={i} className="flex gap-2">
            <span className="text-emerald-500 font-bold">•</span> {task}
          </li>
        ))}
      </ul>
    </div>
  );
}