import React, { useState } from 'react';
import { Briefcase, Users, DollarSign, Award, ChevronRight, Shield, Car, Compass, Flame } from 'lucide-react';

interface Job {
  id: string;
  name: string;
  category: string;
  description: string;
  basePayPerHour: number;
  vehicle: string;
  location: string;
  skillLevels: { level: number; perk: string; multiplier: number }[];
}

interface Faction {
  id: string;
  name: string;
  type: 'Departament de Lege' | 'Servicii Publice' | 'Organizație Underground' | 'Media & Afaceri';
  motto: string;
  description: string;
  minLevel: number;
  hqLocation: string;
  membersCount: number;
  vehicles: string[];
}

const JOBS_DATA: Job[] = [
  {
    id: 'oil-transport',
    name: 'Transportator Combustibil',
    category: 'Logistică & Transport Greu',
    description: 'Conduci cisterne de mare tonaj de la Rafinăria Ocean Docks către benzinăriile din întreg statul San Andreas.',
    basePayPerHour: 48000,
    vehicle: 'Tanker / Roadtrain',
    location: 'Ocean Docks, Los Santos',
    skillLevels: [
      { level: 1, perk: 'Acces la autocamion Linerunner', multiplier: 1.0 },
      { level: 2, perk: '+15% bonus pe cursă finalizată', multiplier: 1.15 },
      { level: 3, perk: 'Rute interurbane San Fierro unlocked', multiplier: 1.35 },
      { level: 4, perk: 'Acces la Roadtrain V8 Twin Turbo', multiplier: 1.6 },
      { level: 5, perk: 'Statut de Maestru Logistician (+85% plată)', multiplier: 1.85 },
    ],
  },
  {
    id: 'courier-express',
    name: 'Curier Rapid Express',
    category: 'Distribuție Urbană',
    description: 'Livrează pachete prioritare și comenzi speciale la locuințele din Los Santos într-un ritm rapid și dinamic.',
    basePayPerHour: 36000,
    vehicle: 'Boxville / Pony',
    location: 'Commerce, Los Santos',
    skillLevels: [
      { level: 1, perk: 'Acces vehicul Boxville standard', multiplier: 1.0 },
      { level: 2, perk: 'Deblocare livrări VIP pe timp de noapte', multiplier: 1.2 },
      { level: 3, perk: '+25% bacșiș la livrare la timp', multiplier: 1.4 },
      { level: 4, perk: 'Acces vehicul Pony Sport', multiplier: 1.65 },
      { level: 5, perk: 'Flotă personalizată și contracte exclusive', multiplier: 1.9 },
    ],
  },
  {
    id: 'deep-sea-fisher',
    name: 'Pescar de Adâncime',
    category: 'Resurse Naturale',
    description: 'Ieși în largul oceanului cu barca, utilizează sonarul pentru bancurile de pești rari și vinde captura la piața portuară.',
    basePayPerHour: 42000,
    vehicle: 'Reefer / Tropic',
    location: 'Santa Maria Pier',
    skillLevels: [
      { level: 1, perk: 'Barcă pescuit Reefer clasic', multiplier: 1.0 },
      { level: 2, perk: 'Deblocare năvod industrial', multiplier: 1.2 },
      { level: 3, perk: 'Acces la zona de pescuit de noapte', multiplier: 1.45 },
      { level: 4, perk: 'Radar marin pentru sturioni și specii rare', multiplier: 1.7 },
      { level: 5, perk: 'Pescărie proprie la chei (+80% profit)', multiplier: 2.0 },
    ],
  },
  {
    id: 'mobile-mechanic',
    name: 'Mecanic Asistență Rutieră',
    category: 'Servicii Tehnice',
    description: 'Răspunde la apelurile de urgență ale șoferilor rămași în pană, remorcă mașini avariate și efectuează reparații rapide la fața locului.',
    basePayPerHour: 39000,
    vehicle: 'Tow Truck / Utility Van',
    location: 'Willowfield, Los Santos',
    skillLevels: [
      { level: 1, perk: 'Acces platformă de remorcare', multiplier: 1.0 },
      { level: 2, perk: 'Reducere cost componente mecanice', multiplier: 1.2 },
      { level: 3, perk: 'Deblocare kit reparație rapidă motor', multiplier: 1.4 },
      { level: 4, perk: 'Remorcare dublă și intervenții pe autostradă', multiplier: 1.65 },
      { level: 5, perk: 'Licență de garaj mobil autorizat', multiplier: 1.95 },
    ],
  },
];

const FACTIONS_DATA: Faction[] = [
  {
    id: 'lspd',
    name: 'Los Santos Police Department',
    type: 'Departament de Lege',
    motto: 'To Protect and to Serve',
    description: 'Menține ordinea publică, patrulează străzile orașului și combate infracționalitatea organizată cu echipamente de ultimă generație.',
    minLevel: 5,
    hqLocation: 'Pershing Square, Downtown LS',
    membersCount: 42,
    vehicles: ['Police Cruiser (V8)', 'Buffalo Interceptor', 'Ranger SUV', 'Police Maverick'],
  },
  {
    id: 'fbi',
    name: 'Federal Bureau of Investigation',
    type: 'Departament de Lege',
    motto: 'Fidelity, Bravery, Integrity',
    description: 'Agenție de investigații federale axată pe cazuri de corupție la nivel înalt, contrabanzi de arme și monitorizare sub acoperire.',
    minLevel: 8,
    hqLocation: 'Queens, San Fierro',
    membersCount: 24,
    vehicles: ['FBI Rancher', 'Unmarked Sultan', 'Cheetah Interceptor', 'Helicopter'],
  },
  {
    id: 'medics',
    name: 'San Andreas Medical Services',
    type: 'Servicii Publice',
    motto: 'Grijă, Vitează, Salvare',
    description: 'Intervenții rapide la apelurile 112, acordarea primului ajutor și gestionarea centrelor medicale din toate marile spitale.',
    minLevel: 3,
    hqLocation: 'All Saints Hospital, Los Santos',
    membersCount: 30,
    vehicles: ['Ambulance Super Duty', 'Paramedic SUV', 'Raindance Medical Air'],
  },
  {
    id: 'syndicate',
    name: 'The Leone Crime Family',
    type: 'Organizație Underground',
    motto: 'Onoare, Loialitate și Respect',
    description: 'Sindicat de crimă organizată ce controlează afaceri subterane, depozite logistice și războaie strategice de turf.',
    minLevel: 6,
    hqLocation: 'Caligula District, Las Venturas',
    membersCount: 38,
    vehicles: ['Sentinel Black Edition', 'Huntley Executive', 'Admiral Armored'],
  },
];

export const FactionJobExplorer: React.FC = () => {
  const [activeMode, setActiveMode] = useState<'jobs' | 'factions'>('jobs');
  const [selectedJobId, setSelectedJobId] = useState<string>(JOBS_DATA[0].id);
  const [selectedSkillLevel, setSelectedSkillLevel] = useState<number>(3);
  const [selectedFactionId, setSelectedFactionId] = useState<string>(FACTIONS_DATA[0].id);

  const currentJob = JOBS_DATA.find((j) => j.id === selectedJobId) || JOBS_DATA[0];
  const currentFaction = FACTIONS_DATA.find((f) => f.id === selectedFactionId) || FACTIONS_DATA[0];

  const currentMultiplier =
    currentJob.skillLevels.find((s) => s.level === selectedSkillLevel)?.multiplier || 1.0;
  const calculatedPay = Math.round(currentJob.basePayPerHour * currentMultiplier);

  return (
    <section id="explorare" className="py-24 border-t border-white/[0.08] relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 text-xs font-medium text-neutral-400 mb-3">
            <span>Interactiv</span>
            <span aria-hidden="true">·</span>
            <span>Descoperă Jocul</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white text-balance">
            Explorează carierele și facțiunile.
          </h2>
          <p className="mt-3 text-base text-neutral-400">
            Alege-ți drumul pe server. Testează calculatorul de venituri sau consultă cerințele facțiunilor oficiale.
          </p>

          {/* Mode Switcher */}
          <div className="mt-8 inline-flex items-center gap-1 p-1 bg-white/[0.04] border border-white/[0.08] rounded-xl">
            <button
              onClick={() => setActiveMode('jobs')}
              className={`px-5 py-2 text-xs font-medium rounded-lg transition-all flex items-center gap-2 ${
                activeMode === 'jobs'
                  ? 'bg-white text-neutral-950 shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>Calculator Carieră</span>
            </button>
            <button
              onClick={() => setActiveMode('factions')}
              className={`px-5 py-2 text-xs font-medium rounded-lg transition-all flex items-center gap-2 ${
                activeMode === 'factions'
                  ? 'bg-white text-neutral-950 shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Users className="w-3.5 h-3.5" />
              <span>Catalog Facțiuni</span>
            </button>
          </div>
        </div>

        {/* Content Mode 1: Job Simulator & Earnings */}
        {activeMode === 'jobs' ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Job List Selection */}
            <div className="lg:col-span-5 space-y-2.5">
              <div className="text-xs font-medium text-neutral-400 uppercase tracking-wider mb-2 px-1">
                Meserii Disponibile
              </div>
              {JOBS_DATA.map((job) => {
                const isSelected = job.id === selectedJobId;
                return (
                  <button
                    key={job.id}
                    onClick={() => setSelectedJobId(job.id)}
                    className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between gap-4 ${
                      isSelected
                        ? 'bg-white/[0.08] border-white/20 text-white shadow-sm'
                        : 'bg-[#0c0c10] border-white/[0.06] text-neutral-400 hover:text-neutral-200 hover:border-white/[0.12]'
                    }`}
                  >
                    <div>
                      <div className="text-sm font-semibold text-white">{job.name}</div>
                      <div className="text-xs text-neutral-400 mt-0.5">{job.category}</div>
                    </div>
                    <ChevronRight
                      className={`w-4 h-4 transition-transform ${
                        isSelected ? 'text-white translate-x-0.5' : 'text-neutral-500'
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Dynamic Job Details Card */}
            <div className="lg:col-span-7 rounded-2xl md:rounded-3xl border border-white/[0.08] bg-[#0c0c10] p-7 sm:p-9 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-white/[0.06]">
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight text-white">{currentJob.name}</h3>
                    <div className="flex items-center gap-2 text-xs text-neutral-400 mt-1">
                      <Compass className="w-3.5 h-3.5 text-neutral-400" />
                      <span>Locație: {currentJob.location}</span>
                      <span aria-hidden="true">·</span>
                      <span>Vehicul: {currentJob.vehicle}</span>
                    </div>
                  </div>
                </div>

                <p className="mt-5 text-sm text-neutral-300 leading-relaxed">
                  {currentJob.description}
                </p>

                {/* Skill Level Selector (1-5) */}
                <div className="mt-7">
                  <div className="flex items-center justify-between text-xs text-neutral-400 mb-2.5">
                    <span className="font-medium text-neutral-300">Nivel Abilitate (Skill Level)</span>
                    <span className="font-mono text-white">Nivelul {selectedSkillLevel} / 5</span>
                  </div>

                  <div className="grid grid-cols-5 gap-2">
                    {[1, 2, 3, 4, 5].map((level) => (
                      <button
                        key={level}
                        onClick={() => setSelectedSkillLevel(level)}
                        className={`py-2 rounded-lg font-mono text-xs transition-all ${
                          selectedSkillLevel === level
                            ? 'bg-white text-neutral-950 font-bold shadow-sm'
                            : 'bg-white/[0.04] text-neutral-400 hover:text-white border border-white/[0.06]'
                        }`}
                      >
                        Lv.{level}
                      </button>
                    ))}
                  </div>

                  {/* Active Perk info */}
                  <div className="mt-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs text-neutral-300 flex items-center gap-2">
                    <Award className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>
                      {currentJob.skillLevels.find((s) => s.level === selectedSkillLevel)?.perk}
                    </span>
                  </div>
                </div>
              </div>

              {/* Earnings Outcome Banner */}
              <div className="mt-8 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="text-xs text-neutral-400">Venit Estimat / Oră de Activitate</div>
                  <div className="text-2xl sm:text-3xl font-bold font-mono text-emerald-400 tabular-nums">
                    ${calculatedPay.toLocaleString('en-US')}
                    <span className="text-xs font-sans text-neutral-400 ml-1.5 font-normal">/ oră</span>
                  </div>
                </div>

                <div className="text-xs text-neutral-500 max-w-[200px] text-right hidden sm:block">
                  Veniturile pot fi sporite prin bonusuri de clan și weekend festiv.
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Content Mode 2: Faction Directory */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Faction List Selection */}
            <div className="lg:col-span-5 space-y-2.5">
              <div className="text-xs font-medium text-neutral-400 uppercase tracking-wider mb-2 px-1">
                Departamente & Organizații
              </div>
              {FACTIONS_DATA.map((fac) => {
                const isSelected = fac.id === selectedFactionId;
                return (
                  <button
                    key={fac.id}
                    onClick={() => setSelectedFactionId(fac.id)}
                    className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between gap-4 ${
                      isSelected
                        ? 'bg-white/[0.08] border-white/20 text-white shadow-sm'
                        : 'bg-[#0c0c10] border-white/[0.06] text-neutral-400 hover:text-neutral-200 hover:border-white/[0.12]'
                    }`}
                  >
                    <div>
                      <div className="text-sm font-semibold text-white">{fac.name}</div>
                      <div className="text-xs text-neutral-400 mt-0.5">{fac.type}</div>
                    </div>
                    <ChevronRight
                      className={`w-4 h-4 transition-transform ${
                        isSelected ? 'text-white translate-x-0.5' : 'text-neutral-500'
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Dynamic Faction Details Card */}
            <div className="lg:col-span-7 rounded-2xl md:rounded-3xl border border-white/[0.08] bg-[#0c0c10] p-7 sm:p-9 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-white/[0.06]">
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight text-white">{currentFaction.name}</h3>
                    <p className="text-xs italic text-neutral-400 mt-1 font-serif">
                      "{currentFaction.motto}"
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-neutral-500 uppercase tracking-wider block">Membri Activi</span>
                    <span className="font-mono text-sm text-white font-semibold tabular-nums">
                      {currentFaction.membersCount} ofițeri / agenți
                    </span>
                  </div>
                </div>

                <p className="mt-5 text-sm text-neutral-300 leading-relaxed">
                  {currentFaction.description}
                </p>

                {/* HQ & Minimum Level */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <div className="text-xs text-neutral-400">Sediu Central (HQ)</div>
                    <div className="text-sm font-semibold text-white mt-1">{currentFaction.hqLocation}</div>
                  </div>
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <div className="text-xs text-neutral-400">Nivel Minim de Acces</div>
                    <div className="text-sm font-semibold text-white mt-1 font-mono">Nivelul {currentFaction.minLevel} În Joc</div>
                  </div>
                </div>

                {/* Vehicle Fleet */}
                <div className="mt-6">
                  <div className="text-xs font-medium text-neutral-400 mb-2.5 flex items-center gap-1.5">
                    <Car className="w-3.5 h-3.5 text-neutral-400" />
                    <span>Flotă de Vehicule de Serviciu</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {currentFaction.vehicles.map((veh, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 text-xs text-neutral-300 bg-white/[0.04] border border-white/[0.08] rounded-lg"
                      >
                        {veh}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Application Callout */}
              <div className="mt-8 pt-6 border-t border-white/[0.06] flex items-center justify-between">
                <span className="text-xs text-neutral-400">
                  Recrutările se desfășoară pe baza unui test teoretic și probă practică.
                </span>
                <a
                  href="https://discord.gg"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 text-xs font-medium text-white bg-white/[0.08] hover:bg-white/[0.14] rounded-lg transition-colors whitespace-nowrap"
                >
                  Vezi Aplicațiile Active
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
