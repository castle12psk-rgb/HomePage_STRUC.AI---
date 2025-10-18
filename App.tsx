
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Overview from './pages/Overview';
import Features from './pages/Features';
import Architecture from './pages/Architecture';
import UseCase from './pages/UseCase';
import Benefits from './pages/Benefits';
import Contact from './pages/Contact';

export type Page = 'Home' | 'Overview' | 'Features' | 'Architecture' | 'UseCase' | 'Benefits' | 'Contact';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<Page>('Home');

  const renderPage = () => {
    switch (activePage) {
      case 'Home':
        return <Home setActivePage={setActivePage} />;
      case 'Overview':
        return <Overview />;
      case 'Features':
        return <Features />;
      case 'Architecture':
        return <Architecture />;
      case 'UseCase':
        return <UseCase />;
      case 'Benefits':
        return <Benefits />;
      case 'Contact':
        return <Contact />;
      default:
        return <Home setActivePage={setActivePage} />;
    }
  };

  return (
    <div className="flex h-screen bg-slate-900 text-white font-sans">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-[#0A101F]">
          {renderPage()}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
