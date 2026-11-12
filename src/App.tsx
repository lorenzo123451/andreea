import React, { useState } from 'react';
import { HeroLanding, type HeroLandingProps } from '@/components/ui/hero-1';
import { About } from './components/About';
import { Features } from './components/Features';
import { FactionJobExplorer } from './components/FactionJobExplorer';
import { ConnectGuide } from './components/ConnectGuide';
import { Footer } from './components/Footer';
import { ConnectModal } from './components/ConnectModal';
import { Copy, Check, Signal, Zap, ShieldCheck, Users } from 'lucide-react';

// Crisp inline SVG emblem for Elysed RPG (avoids fragile external image dependencies)
const ELYSED_LOGO = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40' fill='none'%3E%3Ccircle cx='20' cy='20' r='18' stroke='white' stroke-width='2' fill='%23121218'/%3E%3Cpath d='M14 13h12v3H17v3h7v3h-7v3h9v3H14V13z' fill='white'/%3E%3C/svg%3E";

export default function App() {
  const [connectModalOpen, setConnectModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const SERVER_IP = 'rpg.elysed.ro:7777';

  const handleCopyIp = async () => {
    try {
      await navigator.clipboard.writeText(SERVER_IP);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const heroProps: HeroLandingProps = {
    logo: {
      src: ELYSED_LOGO,
      alt: "Elysed RPG Logo",
      companyName: "Elysed RPG"
    },
    navigation: [
      { name: 'Despre Noi', href: '#despre' },
      { name: 'Sisteme & Features', href: '#features' },
      { name: 'Facțiuni & Carieră', href: '#explorare' },
      { name: 'Ghid Conectare', href: '#conectare' },
    ],
    loginText: "Conectează-te",
    loginHref: "#conectare",
    title: "Un nou standard pentru SA-MP.",
    description: "Construit pe o arhitectură modernă open.mp cu 0 desync, economie echilibrată fără pay-to-win și peste 150 de vehicule optimizate pentru roleplay autentic.",
    announcementBanner: {
      text: "⚡ Versiunea 2.0 este Live:",
      linkText: "open.mp Core & 0 Desync",
      linkHref: "#features"
    },
    callToActions: [
      {
        text: "Conectează-te la Server",
        href: "#conectare",
        variant: "primary"
      },
      {
        text: "Explorează Sistemele",
        href: "#features",
        variant: "secondary"
      }
    ],
    titleSize: "large",
    gradientColors: {
      from: "oklch(0.6 0.18 250)", // Deep electric cyan-blue
      to: "oklch(0.5 0.22 290)"   // Sophisticated deep violet
    },
    className: "min-h-screen"
  };

  return (
    <div className="min-h-screen bg-[#050507] text-[#f5f5f7] flex flex-col selection:bg-neutral-800 selection:text-white">
      {/* 1. Hero & Navbar via HeroLanding component */}
      <HeroLanding {...heroProps} />

      {/* Main Content Sections */}
      <main className="flex-1 -mt-8 relative z-10">
        {/* Quick IP Bar & Live Telemetry Strip */}
        <section className="max-w-6xl mx-auto px-6 mb-16">
          <div className="p-4 sm:p-5 rounded-2xl bg-[#0c0c11] border border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.7)]" />
              <div className="text-sm">
                <span className="text-white font-semibold">Server Online</span>
                <span className="text-neutral-500 mx-2">·</span>
                <span className="font-mono text-neutral-300 text-xs">{SERVER_IP}</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5 w-full sm:w-auto">
              <button
                onClick={handleCopyIp}
                className="w-full sm:w-auto px-4 py-2 text-xs font-medium text-neutral-200 bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.1] rounded-xl transition-all flex items-center justify-center gap-2"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-300 font-mono">IP Copiat!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-neutral-400" />
                    <span>Copiază IP Server</span>
                  </>
                )}
              </button>

              <button
                onClick={() => setConnectModalOpen(true)}
                className="w-full sm:w-auto px-4 py-2 text-xs font-semibold text-neutral-950 bg-white hover:bg-neutral-200 rounded-xl transition-colors whitespace-nowrap"
              >
                Ghid Rapid
              </button>
            </div>
          </div>

          {/* Cinematic Hero Visual Showcase Frame */}
          <div className="mt-8 relative rounded-2xl md:rounded-3xl overflow-hidden border border-white/[0.12] bg-neutral-900/60 shadow-2xl shadow-black/80">
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-950">
              <img
                src="/src/assets/images/hero_elysed_skyline_1794506159536.jpg"
                alt="Elysed RPG Los Santos Skyline and Performance Vehicle"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-transparent to-black/20 pointer-events-none" />

              <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-xl backdrop-blur-md bg-black/60 border border-white/[0.1]">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-medium text-neutral-300">
                    <Signal className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Host Dedicat în România</span>
                    <span aria-hidden="true" className="text-neutral-500">·</span>
                    <span className="font-mono text-neutral-400">Protecție Anti-DDoS Layer 7</span>
                  </div>
                  <p className="text-xs text-neutral-400 hidden sm:block">
                    Conexiune optimizată cu latență minimă pentru toți jucătorii din țară și diaspora.
                  </p>
                </div>

                <div className="flex items-center gap-4 text-xs font-mono">
                  <div className="text-left sm:text-right">
                    <span className="text-neutral-500 block text-[10px] uppercase font-sans tracking-wider">Jucători</span>
                    <span className="text-white font-semibold tabular-nums text-sm">482 / 1000</span>
                  </div>
                  <div className="h-6 w-[1px] bg-white/[0.1]" />
                  <div className="text-left sm:text-right">
                    <span className="text-neutral-500 block text-[10px] uppercase font-sans tracking-wider">Latență</span>
                    <span className="text-emerald-400 font-semibold tabular-nums text-sm">12 ms</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4-Item Proof Strip */}
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center gap-3">
              <Zap className="w-5 h-5 text-neutral-400 shrink-0" />
              <div>
                <div className="text-xs text-neutral-400">Sincronizare</div>
                <div className="text-sm font-semibold text-white">0 Desync / 60 FPS</div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-neutral-400 shrink-0" />
              <div>
                <div className="text-xs text-neutral-400">Securitate</div>
                <div className="text-sm font-semibold text-white">Hardware Anti-Cheat</div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center gap-3">
              <Users className="w-5 h-5 text-neutral-400 shrink-0" />
              <div>
                <div className="text-xs text-neutral-400">Comunitate</div>
                <div className="text-sm font-semibold text-white">100% Non Pay-to-Win</div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center gap-3">
              <Signal className="w-5 h-5 text-neutral-400 shrink-0" />
              <div>
                <div className="text-xs text-neutral-400">Infrastructură</div>
                <div className="text-sm font-semibold text-white font-mono">99.98% Uptime</div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. About Us Section */}
        <About />

        {/* 3. Features Bento Grid Section */}
        <Features />

        {/* 4. Interactive Explorer (Careers & Factions) */}
        <FactionJobExplorer />

        {/* 5. Quick Connect Guide */}
        <ConnectGuide serverIp={SERVER_IP} />
      </main>

      {/* 6. Footer */}
      <Footer onOpenConnectModal={() => setConnectModalOpen(true)} />

      {/* Interactive Modal */}
      <ConnectModal
        isOpen={connectModalOpen}
        onClose={() => setConnectModalOpen(false)}
        serverIp={SERVER_IP}
      />
    </div>
  );
}
