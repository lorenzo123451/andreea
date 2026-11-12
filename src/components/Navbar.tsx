import React, { useState } from 'react';
import { Copy, Check, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenConnectModal: () => void;
  serverIp: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConnectModal, serverIp }) => {
  const [copied, setCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleCopyIp = async () => {
    try {
      await navigator.clipboard.writeText(serverIp);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback if clipboard API is blocked
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.08] bg-[#050507]/80 backdrop-blur-xl transition-all">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Clean Brand Wordmark */}
        <a 
          href="#" 
          className="text-lg font-semibold tracking-tight text-white flex items-center gap-2 whitespace-nowrap shrink-0 hover:opacity-90 transition-opacity"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-white/90 shadow-[0_0_12px_rgba(255,255,255,0.7)]" />
          <span>Elysed RPG</span>
        </a>

        {/* Zone 2: Clean 5 Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-neutral-400">
          <a href="#despre" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
            Despre Noi
          </a>
          <a href="#features" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
            Sisteme
          </a>
          <a href="#explorare" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
            Facțiuni & Carieră
          </a>
          <a href="#conectare" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
            Ghid Conectare
          </a>
          <a 
            href="https://discord.gg" 
            target="_blank" 
            rel="noreferrer" 
            className="hover:text-white transition-colors flex items-center gap-1 whitespace-nowrap shrink-0"
          >
            <span>Discord</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
          </a>
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <button
            onClick={handleCopyIp}
            title="Copiază IP server SA-MP"
            className="group px-3.5 py-1.5 text-xs font-medium text-neutral-300 hover:text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] rounded-full transition-all flex items-center gap-2 whitespace-nowrap shrink-0"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-300 font-mono text-[11px]">IP Copiat!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white transition-colors" />
                <span className="font-mono text-[11px] text-neutral-300">{serverIp}</span>
              </>
            )}
          </button>

          <button
            onClick={onOpenConnectModal}
            className="px-4 py-2 text-xs font-semibold text-neutral-950 bg-white hover:bg-neutral-200 rounded-full transition-all whitespace-nowrap shrink-0 shadow-sm active:scale-95"
          >
            Joacă Acum
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-300 hover:text-white focus:outline-none"
            aria-label="Deschide meniu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-white/[0.08] bg-[#09090d]/95 backdrop-blur-2xl px-6 py-5 space-y-4">
          <div className="flex flex-col space-y-3 text-sm font-medium text-neutral-300">
            <a 
              href="#despre" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-white transition-colors"
            >
              Despre Noi
            </a>
            <a 
              href="#features" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-white transition-colors"
            >
              Sisteme & Features
            </a>
            <a 
              href="#explorare" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-white transition-colors"
            >
              Facțiuni & Carieră
            </a>
            <a 
              href="#conectare" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-white transition-colors"
            >
              Ghid Conectare
            </a>
            <a 
              href="https://discord.gg" 
              target="_blank" 
              rel="noreferrer" 
              className="py-1.5 hover:text-white flex items-center justify-between"
            >
              <span>Comunitatea Discord</span>
              <ArrowUpRight className="w-4 h-4 opacity-60" />
            </a>
          </div>

          <div className="pt-3 border-t border-white/[0.08] flex flex-col gap-2.5">
            <button
              onClick={() => {
                handleCopyIp();
              }}
              className="w-full py-2.5 text-xs font-mono text-neutral-200 bg-white/[0.06] border border-white/[0.1] rounded-xl flex items-center justify-center gap-2"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-neutral-400" />}
              <span>{copied ? 'IP copiat în clipboard!' : `Copiază IP: ${serverIp}`}</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConnectModal();
              }}
              className="w-full py-2.5 text-xs font-semibold text-neutral-950 bg-white hover:bg-neutral-200 rounded-xl transition-colors"
            >
              Joacă Acum pe Elysed
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
