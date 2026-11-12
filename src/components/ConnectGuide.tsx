import React, { useState } from 'react';
import { Copy, Check, Download, ExternalLink, ArrowRight, Monitor, Play } from 'lucide-react';

interface ConnectGuideProps {
  serverIp: string;
}

export const ConnectGuide: React.FC<ConnectGuideProps> = ({ serverIp }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(serverIp);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="conectare" className="py-24 border-t border-white/[0.08] relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-medium text-neutral-400 mb-3">
            <span>Conectare Rapidă</span>
            <span aria-hidden="true">·</span>
            <span>În 3 Pași Simpli</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white text-balance">
            Cum te conectezi pe serverul Elysed.
          </h2>
          <p className="mt-3 text-base text-neutral-400">
            Dacă ești nou în SA-MP sau ai deja jocul instalat, alăturarea durează mai puțin de 60 de secunde.
          </p>
        </div>

        {/* 3 Steps - Apple Minimalist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Step 1 */}
          <div className="rounded-2xl border border-white/[0.08] bg-[#0c0c10] p-7 space-y-4 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono text-neutral-500 uppercase tracking-widest">Pasul 01</div>
              <h3 className="text-lg font-semibold text-white mt-1">GTA San Andreas</h3>
              <p className="text-sm text-neutral-400 mt-2 leading-relaxed">
                Asigură-te că ai o copie curată de GTA San Andreas (versiunea v1.0 US este optimă pentru stabilitate maximă și compatibilitate moduri).
              </p>
            </div>
            <div className="pt-4 border-t border-white/[0.06] text-xs text-neutral-400">
              Recomandăm eliminarea modurilor grafice grele înainte de prima intrare.
            </div>
          </div>

          {/* Step 2 */}
          <div className="rounded-2xl border border-white/[0.08] bg-[#0c0c10] p-7 space-y-4 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono text-neutral-500 uppercase tracking-widest">Pasul 02</div>
              <h3 className="text-lg font-semibold text-white mt-1">Client SA-MP sau open.mp</h3>
              <p className="text-sm text-neutral-400 mt-2 leading-relaxed">
                Descarcă clientul oficial SA-MP 0.3.7-R1 sau noul launcher deschis open.mp și instalează-l în folderul unde se află executabilul `gta_sa.exe`.
              </p>
            </div>
            <div className="pt-4 border-t border-white/[0.06]">
              <a
                href="https://open.mp"
                target="_blank"
                rel="noreferrer"
                className="text-xs text-white hover:underline inline-flex items-center gap-1.5 font-medium"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Descarcă open.mp Launcher</span>
                <ExternalLink className="w-3 h-3 text-neutral-500" />
              </a>
            </div>
          </div>

          {/* Step 3 */}
          <div className="rounded-2xl border border-white/[0.08] bg-[#0c0c10] p-7 space-y-4 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono text-neutral-500 uppercase tracking-widest">Pasul 03</div>
              <h3 className="text-lg font-semibold text-white mt-1">Adaugă Serverul la Favorite</h3>
              <p className="text-sm text-neutral-400 mt-2 leading-relaxed">
                Deschide clientul, apasă pe iconița portocalie cu bifa de adăugare la Favorites și introdu adresa serverului nostru.
              </p>
            </div>
            <div className="pt-4 border-t border-white/[0.06] font-mono text-xs text-emerald-400">
              {serverIp}
            </div>
          </div>
        </div>

        {/* Action Callout Box */}
        <div className="mt-8 rounded-2xl md:rounded-3xl border border-white/[0.1] bg-gradient-to-r from-white/[0.04] to-white/[0.01] p-8 md:p-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-1.5">
            <h4 className="text-xl font-bold text-white tracking-tight">Ești gata să intri pe server?</h4>
            <p className="text-sm text-neutral-400 max-w-xl">
              Apasă pe butonul de lansare directă dacă ai clientul deja configurat, sau copiază adresa IP în memorie.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={handleCopy}
              className="px-4 py-2.5 text-xs font-medium text-neutral-200 bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.12] rounded-full transition-all flex items-center gap-2"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-300 font-mono">Copiat: {serverIp}</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-neutral-400" />
                  <span className="font-mono">Copiază IP Server</span>
                </>
              )}
            </button>

            <a
              href={`samp://${serverIp}`}
              className="px-5 py-2.5 text-xs font-semibold text-neutral-950 bg-white hover:bg-neutral-200 rounded-full transition-all flex items-center gap-2 shadow-sm"
            >
              <Play className="w-3.5 h-3.5 fill-neutral-950" />
              <span>Lansează Direct SA-MP</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
