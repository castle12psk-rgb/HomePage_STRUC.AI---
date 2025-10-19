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
  <div className="bg-slate-800/50 border border-slate-700 rounded-lg overflow-hidden flex flex-col md:flex-row mb-12 transition-shadow duration-300 hover:shadow-xl hover:shadow-blue-500/10">
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
              <div className="w-16 h-16 rounded-full bg-slate-700 flex items-center justify-center text-2xl group-hover:animate-bounce">
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

      <UseCaseCard 
        caseNumber="CASE 3"
        title="초고층 빌딩 실시간 거동 모니터링"
        description="풍하중, 지진 등 외부 요인에 의한 건물의 미세 변위와 진동을 실시간으로 분석합니다. AI가 구조물의 동적 응답을 평가하여 안전성을 확보하고, 장기 건전성 변화를 추적하여 유지보수 계획의 정확도를 높입니다."
        imageUrl="https://image.fnnews.com/resource/media/image/2015/05/26/201505261143556885_l.jpg"
        steps={[
          { title: "실시간 거동 계측", icon: "📊" },
          { title: "AI 동적 응답 분석", icon: "🧠" },
          { title: "안전성 평가", icon: "🛡️" },
          { title: "선제적 유지보수", icon: "🛠️" },
        ]}
      />

      <UseCaseCard 
        caseNumber="CASE 4"
        title="지하철 터널 구조 변형 및 위험 감지"
        description="터널 내부에 설치된 광섬유 센서(FBG)와 레이저 변위계를 통해 라이닝의 변형률, 균열, 누수 징후를 24시간 감지합니다. AI가 지반 압력 변화와 연계하여 붕괴 위험 구간을 예측하고, 선제적 보강 조치를 지원합니다."
        imageUrl="https://i0.wp.com/www.ecmag.com/images/default-source/articles/xml_uploads/unzipped/619cde28-6fd1-436c-b3b9-b13d6d2caa55.jpeg?w=640&ssl=1"
        steps={[
          { title: "광섬유 센서 모니터링", icon: "🌐" },
          { title: "AI 변형 패턴 분석", icon: "📉" },
          { title: "위험 구간 예측", icon: "🗺️" },
          { title: "선제적 보강", icon: "🔩" },
        ]}
      />

      <UseCaseCard 
        caseNumber="CASE 5"
        title="해상풍력발전기 타워 및 블레이드 건전성 관리"
        description="풍력발전기 타워의 기초 안정성과 블레이드의 피로 누적도를 AI가 실시간으로 분석합니다. 진동 데이터와 환경 조건을 종합하여 부품의 잔여 수명을 예측하고, 발전 효율을 극대화하는 최적의 유지보수 시점을 제안합니다."
        imageUrl="https://img.hankyung.com/photo/202206/01.30519870.1.jpg"
        steps={[
          { title: "진동/피로 데이터 수집", icon: "💨" },
          { title: "AI 잔여 수명 예측", icon: "⏳" },
          { title: "최적 유지보수 제안", icon: "📅" },
          { title: "운영 효율 극대화", icon: "⚡" },
        ]}
      />
    </div>
  );
};

export default UseCase;