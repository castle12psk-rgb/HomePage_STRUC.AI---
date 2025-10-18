import React from 'react';

const SectionTitle: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
  <div className="text-center mb-12">
    <h1 className="text-4xl font-bold text-white">{title}</h1>
    <p className="text-lg text-slate-400 mt-2">{subtitle}</p>
  </div>
);

const BenefitCard: React.FC<{
  icon: string;
  title: string;
  description: string;
  stat: string;
}> = ({ icon, title, description, stat }) => (
    <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 text-center flex flex-col items-center transition-all duration-300 hover:-translate-y-2 hover:border-blue-500">
        <div className="text-5xl mb-4">{icon}</div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-slate-400 mt-2 flex-grow">{description}</p>
        <p className="text-3xl font-bold text-blue-400 mt-6">{stat}</p>
    </div>
);

const VisualizationCard: React.FC<{title: string, children: React.ReactNode}> = ({title, children}) => (
    <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
        <h4 className="text-center font-bold text-blue-400 mb-4 text-sm">{title}</h4>
        <div className="h-48 flex items-center justify-center">
            {children}
        </div>
    </div>
);

const SafetyChart = () => (
    <svg width="100%" height="100%" viewBox="0 0 200 100">
        <line x1="10" y1="90" x2="190" y2="90" stroke="#475569" strokeWidth="1"/>
        <line x1="10" y1="10" x2="10" y2="90" stroke="#475569" strokeWidth="1"/>
        <polyline points="20,70 80,60 140,25 180,20" fill="none" stroke="#3b82f6" strokeWidth="2"/>
        <polyline points="20,75 80,78 140,80 180,82" fill="none" stroke="#64748b" strokeWidth="2" strokeDasharray="3,3"/>
        <text x="15" y="15" fill="#94a3b8" fontSize="8">위험도</text>
        <text x="170" y="85" fill="#94a3b8" fontSize="8">시간</text>
         <circle cx="180" cy="20" r="2" fill="#3b82f6" />
        <text x="140" y="15" fill="#3b82f6" fontSize="8">도입 후</text>
        <circle cx="180" cy="82" r="2" fill="#64748b" />
        <text x="140" y="90" fill="#64748b" fontSize="8">기존 방식</text>
    </svg>
);

const EfficiencyChart = () => (
     <div className="w-full h-full flex items-end justify-center gap-8 px-4">
        <div className="text-center">
            <div className="h-36 bg-slate-600 w-12 rounded-t-md" />
            <p className="text-xs mt-1 text-slate-400">수작업</p>
            <p className="font-bold text-white">40시간</p>
        </div>
        <div className="text-center">
            <div className="h-8 bg-blue-500 w-12 rounded-t-md" />
            <p className="text-xs mt-1 text-slate-400">STRUC.AI</p>
            <p className="font-bold text-white">8시간</p>
        </div>
    </div>
);

const CostChart = () => (
    <div className="w-full h-full flex items-end justify-center gap-8 px-4">
        <div className="text-center">
             <div className="w-12 rounded-t-md flex flex-col">
                <div className="h-12 bg-red-500/80 flex-shrink-0" />
                <div className="h-24 bg-green-500/80 flex-shrink-0" />
            </div>
            <p className="text-xs mt-1 text-slate-400">도입 전</p>
        </div>
         <div className="text-center">
            <div className="w-12 rounded-t-md flex flex-col">
                <div className="h-20 bg-red-500/80 flex-shrink-0" />
                <div className="h-8 bg-blue-500/80 flex-shrink-0" />
            </div>
            <p className="text-xs mt-1 text-slate-400">도입 후</p>
        </div>
    </div>
);

const KnowledgeFlow = () => (
    <div className="w-full flex items-center justify-between text-center text-xs text-slate-300">
        <div className="flex flex-col items-center">
            <div className="text-3xl">🧑‍🏫</div>
            <p className="mt-1 font-bold">전문가 지식</p>
        </div>
        <div className="text-slate-500 font-bold text-2xl mx-2">→</div>
        <div className="flex flex-col items-center">
            <div className="text-3xl">🧠</div>
            <p className="mt-1 font-bold">AI 모델</p>
        </div>
        <div className="text-slate-500 font-bold text-2xl mx-2">→</div>
         <div className="flex flex-col items-center">
            <div className="text-3xl">📈</div>
            <p className="mt-1 font-bold">확장 가능 자산</p>
        </div>
    </div>
);


const Benefits: React.FC = () => {
  return (
    <div className="p-10 animate-fade-in">
      <SectionTitle title="기대효과" subtitle="STRUC.AI 도입으로 얻을 수 있는 가치" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        <BenefitCard 
            icon="🛡️"
            title="안전성 향상"
            description="육안으로 확인 힘든 미세한 구조 변화와 이상 징후를 조기에 감지하여 붕괴 등 대형 사고를 예방합니다."
            stat="사고 위험 감소"
        />
        <BenefitCard 
            icon="⏱️"
            title="효율성 증대"
            description="데이터 취합, 분석, 보고서 작성 등 반복적인 업무를 자동화하여 엔지니어가 핵심 업무에 집중할 수 있습니다."
            stat="리포트 작성 80% 단축"
        />
        <BenefitCard 
            icon="💰"
            title="비용 절감"
            description="문제 발생 후 대응하는 사후보수에서 데이터 기반의 예방보수로 전환하여 전체 유지관리 비용을 최적화합니다."
            stat="유지관리비 절감"
        />
        <BenefitCard 
            icon="📈"
            title="기술 내재화"
            description="숙련된 전문가의 노하우와 판단 기준을 AI 모델로 데이터화하여 지속적으로 발전 가능한 기술 자산을 확보합니다."
            stat="지식 자산화"
        />
      </div>

      <div className="max-w-7xl mx-auto mt-16">
        <h3 className="text-2xl font-bold text-center text-white mb-8">STRUC.AI의 정량적 효과</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <VisualizationCard title="시간에 따른 위험도 감소"><SafetyChart /></VisualizationCard>
            <VisualizationCard title="보고서 작성 시간 비교"><EfficiencyChart /></VisualizationCard>
            <VisualizationCard title="유지보수 비용 구조 변화"><CostChart /></VisualizationCard>
            <VisualizationCard title="전문 지식의 자산화"><KnowledgeFlow /></VisualizationCard>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-16">
         <h3 className="text-2xl font-bold text-center text-white mb-8">지속 가능한 성장 동력</h3>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group relative overflow-hidden rounded-lg">
                <img src="https://images.unsplash.com/photo-1573495627361-d9b87960b12d?q=80&w=2069&auto=format&fit=crop" alt="데이터 기반 의사결정 회의" className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                    <p className="text-white font-bold">데이터 기반의 투명한 의사결정 지원</p>
                </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg">
                <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2070&auto=format&fit=crop" alt="팀 협업 및 지식 공유" className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"/>
                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                    <p className="text-white font-bold">플랫폼을 통한 팀 협업 및 지식 공유</p>
                </div>
            </div>
        </div>
      </div>

    </div>
  );
};

export default Benefits;
