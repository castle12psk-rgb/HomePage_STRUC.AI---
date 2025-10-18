import React from 'react';

const SectionTitle: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
  <div className="text-center mb-12">
    <h1 className="text-4xl font-bold text-white">{title}</h1>
    <p className="text-lg text-slate-400 mt-2">{subtitle}</p>
  </div>
);

const UseCaseCard: React.FC<{
  caseNumber: string;
  title: string;
  description: string;
  imageUrl: string;
  steps: { title: string; icon: string }[];
}> = ({ caseNumber, title, description, imageUrl, steps }) => (
  <div className="bg-slate-800/50 border border-slate-700 rounded-lg overflow-hidden flex flex-col md:flex-row mb-12">
    <div className="md:w-1/3">
      <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
    </div>
    <div className="md:w-2/3 p-8">
      <h3 className="text-sm font-bold text-blue-400">{caseNumber}</h3>
      <h2 className="text-2xl font-bold text-white mt-1">{title}</h2>
      <p className="text-slate-400 mt-3 mb-6">{description}</p>
      <div className="flex items-center space-x-2">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col items-center text-center w-24">
              <div className="w-16 h-16 rounded-full bg-slate-700 flex items-center justify-center text-2xl">
                {step.icon}
              </div>
              <p className="text-xs mt-2 text-slate-300">{step.title}</p>
            </div>
            {index < steps.length - 1 && (
              <div className="flex-1 h-0.5 bg-slate-600"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  </div>
);

const UseCase: React.FC = () => {
  return (
    <div className="p-10 animate-fade-in">
      <SectionTitle title="적용 시나리오" subtitle="실제 산업 현장에서 STRUC.AI가 만들어내는 변화" />
      
      <UseCaseCard 
        caseNumber="CASE 1"
        title="서울 한강교량 정밀안전진단"
        description="드론으로 촬영한 교량 균열 이미지와 변위 계측 데이터를 입력받아, KBC(콘크리트구조기준)와 비교 분석 후 보고서를 자동으로 생성하여 진단 시간을 획기적으로 단축합니다."
        imageUrl="https://news.kbs.co.kr/data/news/2017/06/23/3503273_DgW.png"
        steps={[
          { title: "균열 데이터 입력", icon: "📸" },
          { title: "AI 기준 비교 분석", icon: "🤖" },
          { title: "보고서 자동 생성", icon: "📋" },
          { title: "보수계획 수립", icon: "🛠️" },
        ]}
      />
      
      <UseCaseCard 
        caseNumber="CASE 2"
        title="석유화학 플랜트 설비 예지보전"
        description="주요 회전 설비(펌프, 컴프레서)의 온도 및 진동 센서 데이터를 실시간으로 모니터링합니다. AI가 이상 패턴을 감지하면 즉시 관리자에게 경고하고, 고장 발생 전 선제적인 유지보수를 가능하게 합니다."
        imageUrl="https://cdn.aitimes.com/news/photo/202112/142163_145838_143.jpg"
        steps={[
          { title: "문제 징후 감지", icon: "📈" },
          { title: "AI 원인 분석", icon: "🧠" },
          { title: "관리자 알림", icon: "🔔" },
          { title: "예지보수 수행", icon: "🔧" },
        ]}
      />
    </div>
  );
};

export default UseCase;