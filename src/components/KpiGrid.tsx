import StatCard from './StatCard';
import { kpiData } from '../data/mockInfrastructure';

interface KpiGridProps {
  onCardClick: (category: string) => void;
}

export default function KpiGrid({ onCardClick }: KpiGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
      {kpiData.map((kpi) => (
        <div 
          key={kpi.id} 
          onClick={() => onCardClick(kpi.title.includes('Purview') ? 'Purview' : kpi.title.split(' ')[0])} 
          className="cursor-pointer group transition-all duration-300 active:scale-95"
        >
          <StatCard 
            title={kpi.title}
            value={kpi.value}
            status={kpi.status}
            color={kpi.color}
          />
        </div>
      ))}
    </div>
  );
}