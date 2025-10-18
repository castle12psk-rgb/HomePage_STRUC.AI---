
import React from 'react';
import type { Page } from '../App';
import { HomeIcon, OverviewIcon, FeaturesIcon, ArchitectureIcon, UseCaseIcon, BenefitsIcon, ContactIcon } from './icons/Icons';

interface SidebarProps {
  activePage: Page;
  setActivePage: (page: Page) => void;
}

const NavItem: React.FC<{
  icon: React.ReactNode;
  label: string;
  page: Page;
  activePage: Page;
  onClick: (page: Page) => void;
}> = ({ icon, label, page, activePage, onClick }) => {
  const isActive = activePage === page;
  return (
    <li
      className={`flex items-center p-3 my-1 rounded-lg cursor-pointer transition-colors duration-200 ${
        isActive
          ? 'bg-blue-600 text-white shadow-lg'
          : 'text-slate-400 hover:bg-slate-700 hover:text-white'
      }`}
      onClick={() => onClick(page)}
    >
      {icon}
      <span className="ml-4 font-medium">{label}</span>
    </li>
  );
};

const Sidebar: React.FC<SidebarProps> = ({ activePage, setActivePage }) => {
  const navItems = [
    { icon: <HomeIcon />, label: '소개', page: 'Home' as Page },
    { icon: <OverviewIcon />, label: '시스템 개요', page: 'Overview' as Page },
    { icon: <FeaturesIcon />, label: '주요 기능', page: 'Features' as Page },
    { icon: <ArchitectureIcon />, label: '시스템 아키텍처', page: 'Architecture' as Page },
    { icon: <UseCaseIcon />, label: '적용 시나리오', page: 'UseCase' as Page },
    { icon: <BenefitsIcon />, label: '기대효과', page: 'Benefits' as Page },
    { icon: <ContactIcon />, label: '문의 / 데모 요청', page: 'Contact' as Page },
  ];

  return (
    <aside className="w-64 bg-slate-800 p-4 flex flex-col border-r border-slate-700">
      <div className="flex items-center mb-10">
        <div className="bg-blue-600 p-2 rounded-lg">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        </div>
        <h1 className="text-2xl font-bold ml-3">
          STRUC.<span className="text-blue-400">AI</span>
        </h1>
      </div>
      <nav>
        <ul>
          {navItems.map((item) => (
            <NavItem key={item.page} {...item} activePage={activePage} onClick={setActivePage} />
          ))}
        </ul>
      </nav>
      <div className="mt-auto text-center text-slate-500 text-xs">
        <p>Intelligent Structural Health & Safety Platform System</p>
      </div>
    </aside>
  );
};

export default Sidebar;
