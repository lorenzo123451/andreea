import React from 'react';
import { ArrowUp, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onOpenConnectModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConnectModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#050507] text-neutral-400 text-xs">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Top Footer Strip: Brand and Quick Jump */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-12 border-b border-white/[0.06]">
          <div className="space-y-1.5">
            <div className="text-base font-semibold text-white tracking-tight flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-white/90" />
              <span>Elysed RPG</span>
            </div>
            <p className="text-xs text-neutral-500 max-w-md">
              Un nou standard pentru comunitatea de SA-MP din România. Construit pe open.mp pentru stabilitate, transparență și roleplay autentic.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenConnectModal}
              className="px-4 py-2 text-xs font-semibold text-neutral-950 bg-white hover:bg-neutral-200 rounded-full transition-colors whitespace-nowrap"
            >
              Conectează-te
            </button>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-white/[0.04] hover:bg-white/[0.1] text-neutral-400 hover:text-white border border-white/[0.08] transition-colors"
              title="Înapoi sus"
              aria-label="Înapoi sus"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 4 Multi-Column Site Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12">
          {/* Col 1: Server */}
          <div className="space-y-3">
            <div className="text-white font-medium text-xs tracking-wider uppercase">Server</div>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              <li>
                <a href="#despre" className="hover:text-white transition-colors">Despre Noi</a>
              </li>
              <li>
                <a href="#features" className="hover:text-white transition-colors">Sisteme & Features</a>
              </li>
              <li>
                <a href="#explorare" className="hover:text-white transition-colors">Facțiuni & Carieră</a>
              </li>
              <li>
                <a href="#conectare" className="hover:text-white transition-colors">Ghid Conectare</a>
              </li>
            </ul>
          </div>

          {/* Col 2: Comunitate */}
          <div className="space-y-3">
            <div className="text-white font-medium text-xs tracking-wider uppercase">Comunitate</div>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              <li>
                <a 
                  href="https://discord.gg" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <span>Discord Oficial</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Forum Comunitar</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">User Control Panel (UCP)</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Regulament General Roleplay</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Descărcări & Unelte */}
          <div className="space-y-3">
            <div className="text-white font-medium text-xs tracking-wider uppercase">Resurse</div>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              <li>
                <a 
                  href="https://open.mp" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <span>Client open.mp</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Pachet Moduri Opțional</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">CrashFix & ASI Loader</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Hartă cu Zone & Radare</a>
              </li>
            </ul>
          </div>

          {/* Col 4: Suport & Juridic */}
          <div className="space-y-3">
            <div className="text-white font-medium text-xs tracking-wider uppercase">Informații</div>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">Termeni și Condiții</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Politica de Confidențialitate</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Politica Anti-Cheat</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Contact Administrație</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[11px] text-neutral-500 leading-normal">
          <p>
            © {new Date().getFullYear()} Elysed RPG. Toate drepturile rezervate. Server creat și găzduit în România.
          </p>
          <p className="max-w-xl text-left md:text-right">
            Grand Theft Auto, GTA: San Andreas și logo-urile aferente sunt mărci înregistrate ale Rockstar Games și Take-Two Interactive. Elysed este un proiect comunitar independent non-afiliat.
          </p>
        </div>
      </div>
    </footer>
  );
};
