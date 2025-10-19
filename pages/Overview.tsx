import React from 'react';

const SectionTitle: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
  <div className="text-center mb-12">
    <h1 className="text-4xl font-bold text-white">{title}</h1>
    <p className="text-lg text-slate-400 mt-2">{subtitle}</p>
  </div>
);

const ProblemCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
    <div className="bg-slate-900/70 border border-slate-700 rounded-lg p-6">
        <div className="flex items-center mb-3">
            <div className="text-blue-400 text-2xl mr-3">{icon}</div>
            <h4 className="font-bold text-white">{title}</h4>
        </div>
        <p className="text-sm text-slate-400 leading-relaxed">{description}</p>
    </div>
);

const SolutionStrategyCard: React.FC<{ problem: string; solution: string; technologies: string[] }> = ({ problem, solution, technologies }) => (
    <div className="bg-slate-900/80 border border-slate-700 rounded-lg transition-all duration-300 hover:border-blue-500 hover:shadow-lg">
        <div className="p-4 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            <div className="md:col-span-3">
                <p className="text-sm font-semibold text-slate-300"><span className="text-red-400/80 mr-2">■</span>{problem}</p>
            </div>
            <div className="md:col-span-5 flex items-center">
                 <span className="text-blue-400 font-bold text-xl mr-4 hidden md:inline">→</span>
                <p className="text-white">{solution}</p>
            </div>
            <div className="md:col-span-4 flex flex-wrap gap-2 justify-start md:justify-end">
                {technologies.map(tech => (
                    <span key={tech} className="bg-slate-700 text-slate-300 text-xs font-mono px-2 py-1 rounded-full">{tech}</span>
                ))}
            </div>
        </div>
    </div>
);

const Overview: React.FC = () => {
    const FlowStep: React.FC<{ icon: string; title: string; description: string; isLast?: boolean }> = ({ icon, title, description, isLast }) => (
        <div className="flex items-center">
        <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full bg-slate-800 border-2 border-blue-500 flex items-center justify-center text-blue-400 text-4xl shadow-lg">
            {icon}
            </div>
            <h3 className="mt-4 font-bold text-white">{title}</h3>
            <p className="text-slate-400 text-sm w-40">{description}</p>
        </div>
        {!isLast && <div className="flex-1 h-1 bg-slate-700 mx-8"></div>}
        </div>
    );

    const problemSolutions = [
        { problem: "데이터 단절", solution: "센서, 도면, 점검 기록 등 모든 데이터를 표준 포맷으로 통합 ETL 처리 및 시각화", technologies: ["ETL Pipeline", "Time-Series DB", "S3"] },
        { problem: "리포팅 비효율", solution: "AI가 센서데이터, 사진, 의견을 결합하여 안전점검 리포트 초안을 자동 생성", technologies: ["Gemini", "Report Generation"] },
        { problem: "전문가 의존도", solution: "LLM이 설계기준, 시방서 기반 자동 판단 근거를 제시하여 결과 객관화", technologies: ["RAG", "QA"] },
        { problem: "사후대응 중심", solution: "실시간 이상 탐지 및 AI 예측모델로 조기 경고를 제공하여 예방적 유지관리 지원", technologies: ["AI SHI", "Anomaly Detection"] },
        { problem: "모니터링 부재", solution: "실시간 라이브 스트림 모니터링 및 임계값 초과 시 자동 알림 전송", technologies: ["IoT", "Real-time Alert"] },
        { problem: "기술자료 접근성", solution: "RAG 기술로 방대한 기술문서에 대한 질의응답을 자동화하고 최신 기준 즉시 반영", technologies: ["Vector DB", "LLM Retrieval"] },
    ];


    return (
        <div className="p-10 animate-fade-in">
        <SectionTitle title="시스템 개요" subtitle="STRUC.AI의 핵심 개념과 기술적 배경" />

        <div className="bg-slate-800/50 rounded-lg p-8 mb-12 border border-slate-700">
            <h2 className="text-2xl font-bold text-blue-400 mb-4">왜 STRUC.AI가 필요한가?</h2>
            <p className="text-slate-300 leading-relaxed">
            기존의 구조물 안전 관리는 정기적인 인력 기반 점검에 의존하여 실시간 대응이 어렵고, 데이터 분석 및 보고서 작성에 많은 시간과 비용이 소요되었습니다. 노후화되는 사회 기반 시설이 증가함에 따라, 보다 효율적이고 예측 가능한 유지관리 시스템의 필요성이 대두되었습니다. STRUC.AI는 최신 AI 기술을 접목하여 이러한 산업적 난제를 해결하고, 디지털 전환을 통해 구조물 안전 관리의 새로운 표준을 제시합니다.
            </p>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group relative overflow-hidden rounded-lg">
                    <img src="https://picsum.photos/seed/manual/800/400" alt="전통적인 방식의 현장 점검" className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"/>
                    <div className="absolute inset-0 bg-black/50 flex items-end p-4">
                        <p className="text-white font-bold">Before: 수작업 기반의 비효율적인 점검</p>
                    </div>
                </div>
                <div className="group relative overflow-hidden rounded-lg">
                    <img src="https://picsum.photos/seed/ai_scan/800/400" alt="AI 기반 데이터 분석" className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"/>
                    <div className="absolute inset-0 bg-black/50 flex items-end p-4">
                        <p className="text-white font-bold">After: AI 기반 실시간 데이터 분석</p>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="bg-slate-800/50 rounded-lg p-8 mb-12 border border-slate-700">
            <h2 className="text-2xl font-bold text-blue-400 mb-6 text-center">산업의 공통된 문제점 및 한계</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ProblemCard 
                    icon={<span>🔗</span>}
                    title="데이터 단절 및 비표준화"
                    description="센서, 도면, 점검 결과가 개별 시스템에 파편화되어 있어, 종합적인 데이터 기반 분석이 불가능합니다."
                />
                <ProblemCard 
                    icon={<span>⏳</span>}
                    title="수동 리포팅의 비효율"
                    description="엔지니어가 직접 데이터를 취합하고 보고서를 작성하는 데 과도한 시간이 소요되어 신속한 의사결정을 저해합니다."
                />
                <ProblemCard 
                    icon={<span>🧑‍🔬</span>}
                    title="과도한 전문가 의존도"
                    description="소수 전문가의 경험에 의존하는 주관적 판단은 일관성 저하와 잠재적 오류의 원인이 됩니다."
                />
                <ProblemCard 
                    icon={<span>🩹</span>}
                    title="사후 대응 중심의 유지관리"
                    description="문제가 발생한 후에야 조치하는 방식은 더 큰 규모의 보수 비용과 공사 기간을 초래합니다."
                />
                <ProblemCard 
                    icon={<span>🚫</span>}
                    title="실시간 모니터링 부재"
                    description="구조물의 미세한 이상 징후를 실시간으로 포착하지 못해 돌발적인 사고 위험에 노출됩니다."
                />
                <ProblemCard 
                    icon={<span>📚</span>}
                    title="기술 자료 접근성 부족"
                    description="방대한 설계 기준과 매뉴얼을 현장에서 즉시 찾아 적용하기 어려워, 최신 규정 반영이 늦어집니다."
                />
            </div>
        </div>

        <div className="bg-slate-800/50 rounded-lg p-8 mb-12 border border-slate-700">
            <h2 className="text-2xl font-bold text-blue-400 mb-6 text-center">STRUC.AI의 문제 해결 전략</h2>
            <div className="space-y-4">
                {problemSolutions.map((item, index) => (
                    <SolutionStrategyCard key={index} {...item} />
                ))}
            </div>
        </div>

        <div className="bg-slate-800/50 rounded-lg p-8 border border-slate-700">
            <h2 className="text-2xl font-bold text-blue-400 mb-8 text-center">핵심 워크플로우</h2>
            <div className="flex justify-center items-center">
            <FlowStep icon="📡" title="SHM 센서 데이터" description="교량, 터널, 건물에 부착된 센서에서 실시간 데이터 수집" />
            <FlowStep icon="🧠" title="AI 분석 엔진" description="수집된 데이터를 AI가 분석하여 이상 징후 및 건전성 평가" />
            <FlowStep icon="📄" title="Gemini 리포트" description="분석 결과를 바탕으로 Gemini LLM이 보고서 초안 자동 생성" />
            <FlowStep icon="💻" title="관리자 대시보드" description="시각화된 데이터와 리포트를 통해 직관적인 의사결정 지원" isLast />
            </div>
            <div className="mt-12 text-center bg-slate-900 p-6 rounded-lg border border-slate-700">
            <p className="text-xl text-slate-300 italic">
                "실시간 SHM 데이터 분석, 이상 징후 감지, RAG 기반 기술 질의응답까지 — <br />
                <span className="font-bold text-blue-400">구조물 안전 관리의 모든 과정을 자동화합니다.</span>"
            </p>
            </div>
        </div>
        </div>
    );
};

export default Overview;
