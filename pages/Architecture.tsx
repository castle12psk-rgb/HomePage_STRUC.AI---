import React from 'react';

const SectionTitle: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
  <div className="text-center mb-12">
    <h1 className="text-4xl font-bold text-white">{title}</h1>
    <p className="text-lg text-slate-400 mt-2">{subtitle}</p>
  </div>
);

const Layer: React.FC<{ title: string; technologies: string; description: string; className?: string }> = ({ title, technologies, description, className }) => (
    <div className={`bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-lg p-6 w-full text-center shadow-lg ${className}`}>
        <h3 className="text-xl font-bold text-blue-400">{title}</h3>
        <p className="text-sm font-semibold text-white mt-2">{technologies}</p>
        <p className="text-xs text-slate-400 mt-2">{description}</p>
    </div>
);

const Architecture: React.FC = () => {
    const FlowArrow: React.FC = () => (
        <div className="h-16 flex justify-center items-center">
            <svg className="w-6 h-6 text-slate-500 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
        </div>
    );
    
  return (
    <div className="p-10 animate-fade-in">
      <SectionTitle title="시스템 아키텍처" subtitle="확장성과 안정성을 고려한 다계층 아키텍처" />
      
      <div className="max-w-7xl mx-auto mb-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="group relative overflow-hidden rounded-lg shadow-lg">
          <img 
            src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2072&auto=format&fit=crop" 
            alt="클라우드 네이티브 인프라" 
            className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
            <p className="text-white font-bold">유연한 클라우드 네이티브 인프라</p>
          </div>
        </div>
        <div className="group relative overflow-hidden rounded-lg shadow-lg">
          <img 
            src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop" 
            alt="안전한 데이터 파이프라인" 
            className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
            <p className="text-white font-bold">실시간 데이터 처리 파이프라인</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <Layer 
            title="Presentation Layer"
            technologies="React SPA (TypeScript) + Tailwind CSS"
            description="사용자에게 직관적인 UI와 실시간 데이터 시각화 대시보드를 제공합니다."
        />
        <FlowArrow />
        <Layer 
            title="Application Layer"
            technologies="API Server (Node.js) + Authentication"
            description="안전한 인증과 비즈니스 로직을 처리하며 각 계층 간의 통신을 중계합니다."
        />
        <FlowArrow />
        <Layer 
            title="AI Service Layer"
            technologies="Gemini AI + RAG Pipeline"
            description="데이터 분석, 리포트 생성, 기술 QA 등 핵심 AI 기능을 수행합니다."
            className="border-blue-500 shadow-blue-500/20"
        />
        <FlowArrow />
        <Layer 
            title="Data Layer"
            technologies="PostgreSQL, InfluxDB, ChromaDB, S3"
            description="정형, 시계열, 벡터, 비정형 데이터를 목적에 맞게 저장하고 관리합니다."
        />
        <FlowArrow />
        <Layer 
            title="Data Ingestion Layer"
            technologies="ETL Pipeline (IoT, CSV, API)"
            description="다양한 소스로부터 발생하는 데이터를 수집, 정제하여 시스템으로 전송합니다."
        />
      </div>
    </div>
  );
};

export default Architecture;