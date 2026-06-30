import { ThumbsUp, Play } from "lucide-react";
import { useState } from "react";

export default function App() {
  const [activeRateTab, setActiveRateTab] = useState("main");
  const [activeGameTab, setActiveGameTab] = useState("main");

  const downloadUrl = "https://24x7game.xyz/Play%2024x7.apk";

  const rates = {
    main: [
      { id: 1, name: "Single Digit", rate: "10 KA 100" },
      { id: 2, name: "Jodi Digit", rate: "10 KA 1000" },
      { id: 3, name: "Single Pana", rate: "10 KA 1500" },
      { id: 4, name: "Double Pana", rate: "10 KA 3200" },
      { id: 5, name: "Triple Pana", rate: "10 KA 9000" },
    ],
    gali: [
      { id: 1, name: "Single Digit", rate: "10 KA 100" },
      { id: 2, name: "Jodi Digit", rate: "10 KA 1000" },
    ]
  };

  const games = [
    { name: "SRIDEVI MORNING", status: "*** - ** - ***" },
    { name: "KARNATAKA DAY", status: "*** - ** - ***" },
    { name: "MILAN MORNING", status: "*** - ** - ***" },
    { name: "KALYAN MORNING", status: "*** - ** - ***" },
    { name: "MADHUR MORNING", status: "*** - ** - ***" },
    { name: "SRIDEVI", status: "*** - ** - ***" },
    { name: "TIME BAZAR", status: "*** - ** - ***" },
    { name: "MADHUR DAY", status: "457 - 6* - ***" },
    { name: "MILAN DAY", status: "*** - ** - ***" },
    { name: "RAJDHANI DAY", status: "*** - ** - ***" },
    { name: "KALYAN", status: "*** - ** - ***" },
    { name: "KALYAN NIGHT", status: "*** - ** - ***" },
    { name: "MAIN BAZAR", status: "*** - ** - ***" },
  ];

  return (
    <div className="min-h-screen bg-[#f1f5f9] font-sans text-gray-900 overflow-x-hidden selection:bg-emerald-100 italic-none">
      {/* Header */}
      <header className="bg-white px-4 py-4 flex items-center justify-between sticky top-0 z-[100] shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-[#00695c] flex flex-col items-center justify-center text-white text-[10px] font-black leading-none shrink-0 shadow-md">
            <span>PLAY</span>
            <span className="mt-0.5">24x7</span>
          </div>
          <span className="text-2xl font-black text-[#064e3b] tracking-tight">Play24x7</span>
        </div>
        
        <nav className="flex gap-2">
          {["Home", "Rates", "Games"].map((tab) => (
            <a 
              key={tab}
              href={`#${tab.toLowerCase() === 'home' ? 'hero' : tab.toLowerCase() === 'rates' ? 'pricing' : 'availableGames'}`}
              className="bg-emerald-50 text-emerald-900 px-4 py-2 rounded-full text-xs font-[1000] shadow-sm whitespace-nowrap active:scale-95 transition-transform"
            >
              {tab}
            </a>
          ))}
        </nav>
      </header>

      {/* Hero Section */}
      <section id="hero" className="bg-white pt-12 pb-14 px-4 relative">
        <div className="max-w-md mx-auto text-center">
          <h1 className="text-[2.75rem] font-[1000] text-[#064e3b] leading-tight mb-2 tracking-tight uppercase">
            Welcome to <span className="block">Play24x7</span>
          </h1>
          <p className="text-2xl font-[1000] text-gray-900 mb-10 tracking-wide">Play With The Best</p>
          
          <div className="mb-12">
            <h2 className="text-5xl font-[1000] text-[#064e3b] leading-[1] uppercase tracking-tighter italic mb-6">
              PLAY BIG <br />
              <span className="text-emerald-600 block mt-2 text-6xl">WIN BIG</span>
            </h2>
            <div className="bg-yellow-400 text-emerald-950 font-[1000] py-4 rounded-2xl shadow-xl mb-4 inline-block px-8 border-2 border-emerald-900">
              <span className="text-xl">DOWNLOAD NOW FOR</span> <br />
              <span className="text-3xl text-red-600">ULTIMATE BONUS</span>
            </div>
          </div>

          <div className="px-2">
            <a 
              href={downloadUrl}
              className="flex items-center justify-center gap-3 w-full bg-[#064e3b] text-white py-5 rounded-full font-black text-xl shadow-2xl hover:brightness-110 active:scale-95 transition-all outline outline-offset-2 outline-emerald-100"
            >
              <ThumbsUp className="w-6 h-6 fill-current" /> Download Now
            </a>
          </div>
        </div>
      </section>

      {/* Game Rates Section */}
      <section id="pricing" className="py-16 bg-[#f1f5f9] px-4">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-7xl font-[1000] text-[#064e3b] mb-4 tracking-tighter uppercase italic">Game Rates</h2>
            <p className="text-gray-600 font-bold text-sm tracking-wide">We have Best Game Rates for you</p>
          </div>

          <div className="bg-slate-200 p-1 rounded-xl flex mb-10">
            <button 
              onClick={() => setActiveRateTab("main")}
              className={`flex-1 py-4 rounded-lg font-black text-sm transition-all ${activeRateTab === 'main' ? 'bg-[#064e3b] text-white shadow-lg' : 'text-slate-600'}`}
            >
              Main Market
            </button>
            <button 
              onClick={() => setActiveRateTab("gali")}
              className={`flex-1 py-4 rounded-lg font-black text-sm transition-all ${activeRateTab === 'gali' ? 'bg-[#064e3b] text-white shadow-lg' : 'text-slate-600'}`}
            >
              Galidesawar
            </button>
          </div>

          <div className="space-y-3">
            {rates[activeRateTab as keyof typeof rates].map((item) => (
              <div key={item.id} className="bg-white border-l-[10px] border-[#064e3b] flex items-center p-5 rounded-xl shadow-sm">
                <div className="w-12 h-12 flex items-center justify-center bg-slate-50 rounded-full shrink-0">
                  <ThumbsUp className="w-6 h-6 text-[#064e3b]" />
                </div>
                <div className="flex-1 font-black text-xl ml-4 text-slate-800">{item.name}</div>
                <div className="font-black text-xl text-[#064e3b]">{item.rate}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Available Games Section */}
      <section id="availableGames" className="py-20 bg-white px-4">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-[5rem] font-[1000] text-[#064e3b] leading-[0.8] tracking-tighter mb-4">
              Available <span className="text-gray-400 font-black text-4xl block mt-2">Games</span>
            </h2>
            <p className="text-gray-500 font-bold text-sm tracking-wide mt-6">We have multiple types of games for you</p>
          </div>

          <div className="bg-slate-200 p-1 rounded-xl flex mb-12">
            <button 
              onClick={() => setActiveGameTab("main")}
              className={`flex-1 py-4 rounded-lg font-black text-sm transition-all ${activeGameTab === 'main' ? 'bg-[#064e3b] text-white shadow-lg' : 'text-slate-600'}`}
            >
              Main Market
            </button>
            <button 
              onClick={() => setActiveGameTab("gali")}
              className={`flex-1 py-4 rounded-lg font-black text-sm transition-all ${activeGameTab === 'gali' ? 'bg-[#064e3b] text-white shadow-lg' : 'text-slate-600'}`}
            >
              Galidesawar
            </button>
          </div>

          <div className="space-y-4">
            {games.map((game, index) => (
              <div key={index} className="bg-white border-l-[10px] border-[#064e3b] rounded-3xl flex items-center py-8 px-6 shadow-md relative border border-gray-100 group">
                <div className="flex-1 text-center pr-2">
                  <h4 className="text-2xl font-[1000] text-[#064e3b] mb-2 uppercase tracking-tighter italic">
                    {game.name}
                  </h4>
                  <div className="text-red-500 font-black text-2xl tracking-[0.2em]">
                    {game.status}
                  </div>
                </div>
                
                <div className="flex flex-col items-center shrink-0">
                  <div className="flex flex-col items-center group/btn">
                    <button className="w-16 h-16 bg-[#064e3b] rounded-full flex items-center justify-center shadow-lg transition-transform group-hover/btn:scale-110">
                      <Play className="w-8 h-8 text-white fill-current ml-1" />
                    </button>
                    <span className="text-[10px] font-black text-slate-900 uppercase mt-2">Play Now</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#064e3b] text-white pt-20 pb-16 px-6 flex flex-col items-center text-center">
        <div className="w-20 h-20 rounded-full bg-[#00695c] flex flex-col items-center justify-center text-white text-[11px] font-[1000] leading-none mb-8 shadow-2xl">
          <span>PLAY</span>
          <span className="mt-1">24x7</span>
        </div>
        <h3 className="text-[2.5rem] font-black mb-10 tracking-tighter uppercase italic">Play 24x7</h3>
        
        <div className="w-full max-w-xs h-px bg-white/10 mb-10"></div>

        <p className="text-emerald-100 text-xs font-black uppercase tracking-[0.2em] leading-relaxed opacity-60">
          Copyright © {new Date().getFullYear()} Play24x7 | All rights reserved
        </p>
      </footer>
    </div>
  );
}
