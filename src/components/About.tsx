import React from 'react';
import { Cpu, Shield, Coins, Sparkles } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="despre" className="py-24 border-t border-white/[0.08] relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-medium text-neutral-400 mb-3">
            <span>Despre Proiect</span>
            <span aria-hidden="true">·</span>
            <span>Filosofia Elysed</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white text-balance">
            Reimaginăm SA-MP cu rigoare și pasiune.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400 leading-relaxed">
            Elysed RPG a fost creat cu un scop clar: să ofere jucătorilor din România un mediu de roleplay demn de 2026. Fără sisteme supraaglomerate, fără bug-uri vechi și fără pay-to-win. Totul a fost rescris cu atenție la detalii.
          </p>
        </div>

        {/* 3 Pillars - Apple Minimalist Style with Hairline Dividers */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          <div className="space-y-4">
            <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white">
              <Cpu className="w-5 h-5 text-neutral-200" />
            </div>
            <h3 className="text-lg font-semibold text-white tracking-tight">
              01. open.mp & Optimizare Extremă
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Arhitectura modernă open.mp elimină desync-ul enervant din duelurile de arme și urmăriri auto. Pachetele de rețea sunt procesate asincron pentru stabilitate chiar și în cele mai aglomerate momente.
            </p>
          </div>

          <div className="space-y-4">
            <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white">
              <Coins className="w-5 h-5 text-neutral-200" />
            </div>
            <h3 className="text-lg font-semibold text-white tracking-tight">
              02. Economie Curată & Echilibrată
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Fiecare dolar are valoare pe Elysed. Economia este modelată matematic pentru a preveni hiperinflația: de la salarii pentru meserii și taxe de proprietate, până la burse de acțiuni pentru companii.
            </p>
          </div>

          <div className="space-y-4">
            <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white">
              <Shield className="w-5 h-5 text-neutral-200" />
            </div>
            <h3 className="text-lg font-semibold text-white tracking-tight">
              03. Transparență & Staff Matur
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Fără favoritisme sau abuz de comenzi. Echipa Elysed este selectată riguros pe baza maturității și respectului față de comunitate. Toate sancțiunile sunt auditate și justificate conform regulamentului.
            </p>
          </div>
        </div>

        {/* Quantified Community Rigor Strip */}
        <div className="mt-16 pt-12 border-t border-white/[0.06] grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-white font-mono tabular-nums">2,400+</div>
            <div className="text-xs text-neutral-400 mt-1">Conturi Înregistrate</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-white font-mono tabular-nums">150+</div>
            <div className="text-xs text-neutral-400 mt-1">Vehicule În Dealership</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-white font-mono tabular-nums">18</div>
            <div className="text-xs text-neutral-400 mt-1">Facțiuni & Instituții Active</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-white font-mono tabular-nums">100%</div>
            <div className="text-xs text-neutral-400 mt-1">Cod Propriu și Curat</div>
          </div>
        </div>
      </div>
    </section>
  );
};
