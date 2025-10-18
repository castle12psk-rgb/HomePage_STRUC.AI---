
import React from 'react';

const SectionTitle: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
  <div className="text-center mb-12">
    <h1 className="text-4xl font-bold text-white">{title}</h1>
    <p className="text-lg text-slate-400 mt-2">{subtitle}</p>
  </div>
);

const InputField: React.FC<{ label: string; type: string; placeholder: string; name: string; }> = ({ label, type, placeholder, name }) => (
    <div>
        <label htmlFor={name} className="block text-sm font-medium text-slate-300 mb-1">{label}</label>
        <input 
            type={type} 
            name={name} 
            id={name} 
            className="w-full bg-slate-900 border border-slate-700 rounded-md py-2 px-3 text-white placeholder-slate-500 focus:ring-blue-500 focus:border-blue-500 transition"
            placeholder={placeholder}
        />
    </div>
);


const Contact: React.FC = () => {
  return (
    <div className="p-10 animate-fade-in">
      <SectionTitle title="문의 및 데모 요청" subtitle="STRUC.AI에 대해 궁금한 점이 있으신가요? 지금 바로 문의하세요." />

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-6">데모 요청하기</h3>
            <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <InputField label="성함" type="text" placeholder="홍길동" name="name" />
                    <InputField label="기관명" type="text" placeholder="(주)한국건설" name="company" />
                </div>
                 <InputField label="이메일" type="email" placeholder="email@example.com" name="email" />
                 <InputField label="연락처" type="tel" placeholder="010-1234-5678" name="phone" />
                 <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1">요청사항</label>
                    <textarea 
                        name="message" 
                        id="message" 
                        rows={4}
                        className="w-full bg-slate-900 border border-slate-700 rounded-md py-2 px-3 text-white placeholder-slate-500 focus:ring-blue-500 focus:border-blue-500 transition"
                        placeholder="데모 요청, 기술 문의, 파트너십 제안 등"
                    ></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-transform transform hover:scale-105 shadow-lg">
                    무료 데모 요청
                </button>
            </form>
        </div>
        <div className="text-slate-300">
            <h3 className="text-2xl font-bold text-white mb-6">회사 정보</h3>
            <div className="space-y-4">
                <div>
                    <h4 className="font-bold text-blue-400">Company</h4>
                    <p>(주)오상테크놀로지</p>
                </div>
                <div>
                    <h4 className="font-bold text-blue-400">Address</h4>
                    <p>서울 금천구 가산디지털2로 143</p>
                </div>
                <div>
                    <h4 className="font-bold text-blue-400">Email</h4>
                    <p>contact@osang.tech</p>
                </div>
                 <div>
                    <h4 className="font-bold text-blue-400">Phone</h4>
                    <p>02-1234-5678</p>
                </div>
            </div>
            <div className="mt-8 h-48 bg-slate-800 rounded-lg border border-slate-700">
                {/* Placeholder for a map */}
                <div className="w-full h-full flex items-center justify-center text-slate-500">
                    Map Area
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
