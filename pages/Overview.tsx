import React from 'react';

const SectionTitle: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
  <div className="text-center mb-12">
    <h1 className="text-4xl font-bold text-white">{title}</h1>
    <p className="text-lg text-slate-400 mt-2">{subtitle}</p>
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