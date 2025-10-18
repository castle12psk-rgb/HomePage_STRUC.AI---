import React from 'react';
import type { Page } from '../App';

interface HomeProps {
  setActivePage: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ setActivePage }) => {
  return (
    <div className="relative h-full flex items-center justify-center text-center p-8 overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1686859464871-d3680f3ab091?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070')" }}>
        <div className="absolute inset-0 bg-slate-900 bg-opacity-80 backdrop-blur-sm"></div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-blue-500/20 rounded-full"
            style={{
              width: `${Math.random() * 80 + 20}px`,
              height: `${Math.random() * 80 + 20}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `move 10s linear infinite`,
              animationDelay: `${Math.random() * -10}s`,
            }}
          ></div>
        ))}
      </div>

      <style>{`
        @keyframes move {
          0% { transform: translate(0, 0); }
          50% { transform: translate(40px, 80px); }
          100% { transform: translate(0, 0); }
        }
      `}</style>

      <div className="relative z-20 animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 leading-tight">
          AI와 LLM으로<br />
          <span className="text-blue-400">구조 안전의 패러다임</span>을 바꾸다.
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-300 mb-10">
          STRUC.AI는 교량, 빌딩, 플랜트의 설계-시공-유지관리 전주기에 AI 기반 구조 건전성 모니터링과 리포트 자동화를 제공합니다.
        </p>
        <div className="flex justify-center space-x-4">
          <button 
            onClick={() => window.open('https://super-tapioca-9bda76.netlify.app', '_blank', 'noopener,noreferrer')}
            className="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition-transform transform hover:scale-105 shadow-lg">
            시연 요청하기
          </button>
          <button className="bg-slate-700 text-white font-bold py-3 px-8 rounded-lg hover:bg-slate-600 transition-transform transform hover:scale-105 shadow-lg">
            기술 백서 다운로드
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;