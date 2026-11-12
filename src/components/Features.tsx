import React, { useState } from 'react';
import { Home, Shield, Briefcase, Sliders, Smartphone, CheckCircle2 } from 'lucide-react';

export const Features: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'legal' | 'economy' | 'ui'>('all');

  return (
    <section id="features" className="py-24 border-t border-white/[0.08] relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-medium text-neutral-400 mb-3">
              <span>Caracteristici & Sisteme</span>
              <span aria-hidden="true">·</span>
              <span>Construit pentru Excelență</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white text-balance">
              Fiecare sistem a fost desenat cu precizie.
            </h2>
            <p className="mt-3 text-base text-neutral-400">
              O fuziune între gameplay-ul clasic SA-MP și standardele moderne de design și stabilitate.
            </p>
          </div>

          {/* Interactive filter control (Clean segmented button, not pill badges) */}
          <div className="flex items-center gap-1 p-1 bg-white/[0.04] border border-white/[0.08] rounded-xl shrink-0 self-start md:self-auto">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
                activeTab === 'all'
                  ? 'bg-white text-neutral-950 shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Toate Sistemele
            </button>
            <button
              onClick={() => setActiveTab('economy')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
                activeTab === 'economy'
                  ? 'bg-white text-neutral-950 shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Economie & Casă
            </button>
            <button
              onClick={() => setActiveTab('legal')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
                activeTab === 'legal'
                  ? 'bg-white text-neutral-950 shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Facțiuni & Vehicule
            </button>
            <button
              onClick={() => setActiveTab('ui')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
                activeTab === 'ui'
                  ? 'bg-white text-neutral-950 shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Interfață & HUD
            </button>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Bento Card 1: Real Estate (Span 7) */}
          {(activeTab === 'all' || activeTab === 'economy') && (
            <div className="md:col-span-7 rounded-2xl md:rounded-3xl border border-white/[0.08] bg-[#0c0c10] overflow-hidden flex flex-col justify-between group">
              <div className="p-7 sm:p-9 space-y-3">
                <div className="w-9 h-9 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-white">
                  <Home className="w-4 h-4 text-neutral-200" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                  Proprietăți & Penthouse-uri de Lux
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed max-w-lg">
                  Peste 350 de locuințe cu interioare complet customizabile. Sistem securizat de seif pentru bani și bunuri, garaj privat pentru flota ta personală și sistem de închiriere automată.
                </p>
                <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-neutral-300">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Mobilier ajustabil in-game
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Parcare privată cu poartă
                  </span>
                </div>
              </div>

              <div className="relative aspect-[16/10] w-full overflow-hidden border-t border-white/[0.08]">
                <img
                  src="/src/assets/images/feature_luxury_lifestyle_1794506160267.jpg"
                  alt="Modern Luxury Interior in Elysed RPG"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c10] via-transparent to-transparent opacity-80" />
              </div>
            </div>
          )}

          {/* Bento Card 2: Tactical Factions & Fleets (Span 5) */}
          {(activeTab === 'all' || activeTab === 'legal') && (
            <div className="md:col-span-5 rounded-2xl md:rounded-3xl border border-white/[0.08] bg-[#0c0c10] overflow-hidden flex flex-col justify-between group">
              <div className="p-7 sm:p-9 space-y-3">
                <div className="w-9 h-9 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-white">
                  <Shield className="w-4 h-4 text-neutral-200" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                  Flotă Tactice & Departamente
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Poliția Metropolitană, FBI și Departamentul Medical dispun de computere mobile (MDC), radare sincronizate în timp real și sirene adaptive.
                </p>
              </div>

              <div className="relative aspect-[4/3] w-full overflow-hidden border-t border-white/[0.08]">
                <img
                  src="/src/assets/images/feature_fleet_vehicles_1794506160462.jpg"
                  alt="Emergency and Executive Vehicles on Elysed RPG"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c10] via-transparent to-transparent opacity-70" />
              </div>
            </div>
          )}

          {/* Bento Card 3: Progressive Careers (Span 4) */}
          {(activeTab === 'all' || activeTab === 'economy') && (
            <div className="md:col-span-4 rounded-2xl md:rounded-3xl border border-white/[0.08] bg-[#0c0c10] p-7 sm:p-8 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-9 h-9 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-white">
                  <Briefcase className="w-4 h-4 text-neutral-200" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white">
                  8 Joburi Interactive cu Nivel
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Progresează de la Curier sau Muncitor Portuar până la Transportator de Combustibil sau Pilot Comercial. Cu fiecare nivel crește coeficientul de plată.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.06] space-y-2 font-mono text-xs text-neutral-300">
                <div className="flex justify-between">
                  <span className="text-neutral-500 font-sans">Nivel Carieră</span>
                  <span className="text-white font-medium">Nivel 1 - 5</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500 font-sans">Bonusuri de Echilibru</span>
                  <span className="text-emerald-400 font-medium">+15% per Skill</span>
                </div>
              </div>
            </div>
          )}

          {/* Bento Card 4: Tuning & Handling (Span 4) */}
          {(activeTab === 'all' || activeTab === 'legal') && (
            <div className="md:col-span-4 rounded-2xl md:rounded-3xl border border-white/[0.08] bg-[#0c0c10] p-7 sm:p-8 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-9 h-9 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-white">
                  <Sliders className="w-4 h-4 text-neutral-200" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white">
                  Tuning Mecanic & Manevrabilitate
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Fiecare mașină are fizică refăcută pentru un condus satisfăcător. Schimbă jantele, suspensiile pe aer, kiturile de performanță Stage 1/2 și sunetele motorului.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.06] space-y-2 font-mono text-xs text-neutral-300">
                <div className="flex justify-between">
                  <span className="text-neutral-500 font-sans">Vehicule Unice</span>
                  <span className="text-white font-medium">150+ Modele</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500 font-sans">Test Drive Gratuit</span>
                  <span className="text-white font-medium">Disponibil la Dealer</span>
                </div>
              </div>
            </div>
          )}

          {/* Bento Card 5: Minimalist HUD & Smartphone (Span 4) */}
          {(activeTab === 'all' || activeTab === 'ui') && (
            <div className="md:col-span-4 rounded-2xl md:rounded-3xl border border-white/[0.08] bg-[#0c0c10] p-7 sm:p-8 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-9 h-9 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-white">
                  <Smartphone className="w-4 h-4 text-neutral-200" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white">
                  HUD Minimalist & Smartphone
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Interfață inspirată din design-ul iOS. Telefon in-game cu apeluri vocale, SMS, transfer bancar instant și aplicație de GPS cu trasee inteligente.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.06] space-y-2 font-mono text-xs text-neutral-300">
                <div className="flex justify-between">
                  <span className="text-neutral-500 font-sans">Rezoluție Suportată</span>
                  <span className="text-white font-medium">Full HD / 4K Ultrawide</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500 font-sans">Impact FPS</span>
                  <span className="text-emerald-400 font-medium">0% Pierdere Performanță</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
