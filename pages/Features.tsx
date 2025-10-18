
import React, { useState } from 'react';

const SectionTitle: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
  <div className="text-center mb-12">
    <h1 className="text-4xl font-bold text-white">{title}</h1>
    <p className="text-lg text-slate-400 mt-2">{subtitle}</p>
  </div>
);

const FeatureCard: React.FC<{ title: string; description: string; children: React.ReactNode }> = ({ title, description, children }) => (
  <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 flex flex-col transition-all duration-300 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/10">
    <div className="flex-grow">
        {children}
    </div>
    <div className="mt-4 pt-4 border-t border-slate-700">
        <h3 className="text-xl font-bold text-blue-400">{title}</h3>
        <p className="text-slate-400 mt-2 text-sm">{description}</p>
    </div>
  </div>
);

const SHIGauge: React.FC = () => {
    const score = 88;
    const circumference = 2 * Math.PI * 52;
    const strokeDashoffset = circumference - (score / 100) * circumference;

    return (
        <div className="relative w-40 h-40 mx-auto">
            <svg className="w-full h-full" viewBox="0 0 120 120">
                <circle className="text-slate-700" strokeWidth="10" stroke="currentColor" fill="transparent" r="52" cx="60" cy="60" />
                <circle 
                    className="text-blue-500" 
                    strokeWidth="10" 
                    strokeDasharray={circumference} 
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round" 
                    stroke="currentColor" 
                    fill="transparent" 
                    r="52" 
                    cx="60" 
                    cy="60" 
                    style={{ transform: 'rotate(-90deg)', transformOrigin: '50% 50%', transition: 'stroke-dashoffset 1s ease-out' }}
                />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-bold text-white">{score}</span>
                <span className="text-sm text-slate-400">안전</span>
            </div>
        </div>
    );
};

const GeminiReport: React.FC = () => (
    <div className="bg-slate-900 p-4 rounded-md h-full border border-slate-600">
        <h4 className="font-bold text-white text-center mb-2">한강대교 3번 교각 일일 보고서</h4>
        <img src="https://picsum.photos/seed/bridge/400/200" alt="Bridge Inspection" className="rounded-md mb-2"/>
        <p className="text-xs text-slate-300 leading-snug">
            <span className="font-semibold text-blue-400">[AI 분석 요약]</span> 24시간 진동 및 변위 데이터 분석 결과, 모든 지표가 허용 범위 내에 있습니다. 미세 균열(C-03)의 진행도는 0.01mm 미만으로, 구조적 안정성에 영향 없음...
        </p>
    </div>
);

const QAChat: React.FC = () => (
    <div className="bg-slate-900 p-3 rounded-md h-full flex flex-col border border-slate-600">
        <div className="flex-grow space-y-2">
            <div className="text-xs p-2 rounded-lg bg-blue-600 text-white self-end max-w-[80%] ml-auto">KBC2016 기준 허용 균열폭은?</div>
            <div className="text-xs p-2 rounded-lg bg-slate-700 text-slate-200 self-start max-w-[80%]">
                <p className="font-bold mb-1">STRUC.AI Assistant:</p>
                KBC2016 0508.3.2에 따라, 철근콘크리트 구조물의 허용 균열폭은 노출 환경에 따라 다릅니다. 건조환경에서는 0.4mm, 습윤환경에서는 0.3mm를 적용해야 합니다. 관련 조항을 보내드릴까요?
            </div>
        </div>
        <input type="text" placeholder="기술 질문 입력..." className="mt-2 w-full text-xs bg-slate-800 border border-slate-600 rounded p-1 text-white placeholder-slate-500" />
    </div>
);

const RealtimeAlert: React.FC = () => (
    <div className="bg-slate-900 p-4 rounded-md h-full border border-slate-600 flex flex-col justify-center items-center">
        <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center animate-pulse mb-3">
            <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
            </div>
        </div>
        <p className="font-bold text-red-400 text-center">진동 임계값 초과!</p>
        <p className="text-xs text-slate-400 text-center mt-1">P-101 펌프 / 3번 센서</p>
        <p className="text-xs text-slate-500 text-center mt-2">SMS & Email 알림 발송됨</p>
    </div>
);

const PolicyManager: React.FC = () => {
    const [mode, setMode] = useState<'user' | 'admin'>('user');
    
    return (
        <div className="bg-slate-900 p-4 rounded-md h-full border border-slate-600">
            <div className="flex border-b border-slate-700 mb-2">
                <button onClick={() => setMode('user')} className={`text-xs py-1 px-3 ${mode === 'user' ? 'text-blue-400 border-b-2 border-blue-400 font-bold' : 'text-slate-400'}`}>사용자 모드</button>
                <button onClick={() => setMode('admin')} className={`text-xs py-1 px-3 ${mode === 'admin' ? 'text-blue-400 border-b-2 border-blue-400 font-bold' : 'text-slate-400'}`}>관리자 모드</button>
            </div>
            {mode === 'user' ? (
                <div className="text-center text-slate-400 text-sm p-4">
                    <p>현재 적용된 임계값 정책을 조회할 수 있습니다.</p>
                    <p className="mt-2 text-xs">(정책 변경은 관리자에게 문의)</p>
                </div>
            ) : (
                <div>
                    <label className="text-xs text-slate-400">진동 임계값 (gal)</label>
                    <div className="flex items-center mt-1">
                        <input type="range" min="0" max="100" defaultValue="80" className="w-full" />
                        <span className="ml-2 text-sm font-bold text-white">80</span>
                    </div>
                    <button className="w-full mt-3 bg-blue-600 text-white text-xs py-1 rounded hover:bg-blue-700">재정의 (Override)</button>
                </div>
            )}
        </div>
    );
};

const Features: React.FC = () => {
  return (
    <div className="p-10 animate-fade-in">
      <SectionTitle title="주요 기능" subtitle="STRUC.AI가 제공하는 혁신적인 기능들" />
      
      <div className="max-w-7xl mx-auto mb-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="group relative overflow-hidden rounded-lg shadow-lg">
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" 
            alt="실시간 모니터링 대시보드" 
            className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
            <p className="text-white font-bold">실시간 통합 대시보드</p>
          </div>
        </div>
        <div className="group relative overflow-hidden rounded-lg shadow-lg">
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
            alt="AI 자동 생성 보고서" 
            className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
            <p className="text-white font-bold">상세 분석 리포트 자동화</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <FeatureCard title="AI 기반 건전성 지수 (SHI)" description="복합 센서 데이터를 종합 평가하여 구조물의 현재 상태를 직관적인 점수로 제공합니다.">
            <SHIGauge />
        </FeatureCard>
        <FeatureCard title="Gemini 리포트 자동 생성" description="현장 사진과 계측 데이터를 결합하여 Gemini LLM이 분석 보고서 초안을 수 분 내에 작성합니다.">
            <GeminiReport />
        </FeatureCard>
        <FeatureCard title="RAG 기반 기술 QA 어시스턴트" description="설계 기준, 시방서 등 내부 기술 자료를 학습한 AI가 전문가 수준의 기술 질문에 즉시 답변합니다.">
            <QAChat />
        </FeatureCard>
        <FeatureCard title="이상 징후 실시간 감지 및 알림" description="AI가 데이터 패턴을 학습하여 미세한 이상 징후도 놓치지 않고 즉시 관리자에게 알립니다.">
            <RealtimeAlert />
        </FeatureCard>
        <FeatureCard title="임계값 정책관리 및 재정의" description="프로젝트 특성과 구조물 상태에 맞춰 모니터링 규칙과 알림 임계값을 유연하게 설정합니다.">
            <PolicyManager />
        </FeatureCard>
        <div className="bg-slate-800/50 border border-dashed border-slate-700 rounded-lg p-6 flex items-center justify-center text-slate-500 hover:border-blue-500 hover:text-blue-400 transition-colors">
            <div className="text-center">
                <p className="text-2xl">+</p>
                <p className="mt-2 font-bold">더 많은 기능이<br/>준비 중입니다</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
