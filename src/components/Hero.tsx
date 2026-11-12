import React, { useState } from 'react';
import { Copy, Check, Play, ShieldCheck, Zap, Users, Signal } from 'lucide-react';

interface HeroProps {
  onOpenConnectModal: () => void;
  serverIp: string;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConnectModal, serverIp }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(serverIp);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      {/* Subtle Apple-style background radial gradient */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-b from-blue-500/[0.08] via-purple-500/[0.04] to-transparent blur-3xl -z-10" 
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* Editorial Eyebrow without pill enclosure */}
        <div className="flex items-center justify-center gap-2.5 text-xs text-neutral-400 font-medium tracking-wide mb-6">
          <span>Elysed Roleplay</span>
          <span aria-hidden="true" className="text-neutral-600">·</span>
          <span>open.mp Core Architecture</span>
          <span aria-hidden="true" className="text-neutral-600">·</span>
          <span>România</span>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto space-y-5">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-bold tracking-tight text-white leading-[1.08] text-balance">
            Un nou standard pentru SA-MP.
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-neutral-400 font-normal leading-relaxed max-w-2xl mx-auto text-balance">
            Construit de la zero pentru stabilitate extremă. Economie realistă, sincronizare fluidă fără desync și o comunitate de roleplay autentică.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
          <button
            onClick={onOpenConnectModal}
            className="px-6 py-3 text-sm font-semibold text-neutral-950 bg-white hover:bg-neutral-200 rounded-full transition-all duration-200 shadow-[0_4px_24px_rgba(255,255,255,0.18)] hover:shadow-[0_6px_28px_rgba(255,255,255,0.25)] flex items-center gap-2 active:scale-98 whitespace-nowrap"
          >
            <Play className="w-4 h-4 fill-neutral-950" />
            <span>Conectează-te la Server</span>
          </button>

          <button
            onClick={handleCopy}
            className="group px-5 py-3 text-sm font-medium text-neutral-300 hover:text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.12] hover:border-white/[0.2] rounded-full transition-all duration-200 flex items-center gap-2.5 active:scale-98 whitespace-nowrap"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-300 font-mono text-xs">IP Copiat: {serverIp}</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" />
                <span className="font-mono text-xs text-neutral-300">Copiază IP: {serverIp}</span>
              </>
            )}
          </button>
        </div>

        {/* Cinematic Hero Visual Frame */}
        <div className="mt-14 relative mx-auto max-w-5xl">
          <div className="relative rounded-2xl md:rounded-3xl overflow-hidden border border-white/[0.12] bg-neutral-900/60 shadow-2xl shadow-black/80">
            {/* Aspect Ratio 16:9 Image */}
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-950">
              <img
                src="/src/assets/images/hero_elysed_skyline_1794506159536.jpg"
                alt="Elysed RPG Los Santos Skyline and Performance Vehicle"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                referrerPolicy="no-referrer"
              />
              
              {/* Refined subtle gradient scrim for legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-transparent to-black/20 pointer-events-none" />

              {/* In-Frame Live Overlay Badge */}
              <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-xl backdrop-blur-md bg-black/60 border border-white/[0.1]">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-medium text-neutral-300">
                    <Signal className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Server Status: Online & Stabil</span>
                    <span aria-hidden="true" className="text-neutral-500">·</span>
                    <span className="font-mono text-neutral-400">rpg.elysed.ro:7777</span>
                  </div>
                  <p className="text-xs text-neutral-400 hidden sm:block">
                    Host dedicat în România cu protecție Anti-DDoS Layer 7 activă.
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
        </div>

        {/* 4-Item Telemetry Proof Strip Below Hero */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-5xl mx-auto">
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

      </div>
    </section>
  );
};
