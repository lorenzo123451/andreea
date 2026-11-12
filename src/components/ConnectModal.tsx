import React, { useState, useEffect } from 'react';
import { X, Copy, Check, Play, Download, ExternalLink, HelpCircle } from 'lucide-react';

interface ConnectModalProps {
  isOpen: boolean;
  onClose: () => void;
  serverIp: string;
}

export const ConnectModal: React.FC<ConnectModalProps> = ({ isOpen, onClose, serverIp }) => {
  const [copied, setCopied] = useState(false);
  const [testNickname, setTestNickname] = useState('');

  // Close modal on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

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

  // Simple nickname validation test for roleplay (Format Nume_Prenume)
  const isNicknameValid = /^[A-Z][a-z]{2,14}_[A-Z][a-z]{2,14}$/.test(testNickname);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        onClick={onClose} 
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity" 
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-lg rounded-2xl md:rounded-3xl border border-white/[0.12] bg-[#0c0c11] p-6 sm:p-8 text-white shadow-2xl shadow-black z-10 space-y-6 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h3 className="text-xl font-bold tracking-tight text-white">Conectare pe Elysed RPG</h3>
            <p className="text-xs text-neutral-400">Adaugă serverul în clientul tău sau intră direct.</p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-neutral-400 hover:text-white bg-white/[0.04] hover:bg-white/[0.1] transition-colors"
            aria-label="Închide fereastra"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* IP Box */}
        <div className="p-4 rounded-xl bg-white/[0.04] border border-white/[0.08] space-y-2">
          <span className="text-[11px] uppercase tracking-wider text-neutral-400 font-medium block">
            Adresă Server (IP & Port)
          </span>
          <div className="flex items-center justify-between gap-3">
            <span className="font-mono text-base sm:text-lg text-emerald-400 font-semibold select-all">
              {serverIp}
            </span>
            <button
              onClick={handleCopy}
              className="px-3 py-1.5 text-xs font-medium text-white bg-white/[0.1] hover:bg-white/[0.18] rounded-lg transition-colors flex items-center gap-1.5 shrink-0"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-300">Copiat</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copiază</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Roleplay Nickname Checker Widget */}
        <div className="space-y-2">
          <label className="text-xs text-neutral-300 font-medium flex items-center justify-between">
            <span>Verifică Numele de Utilizator (Format RP)</span>
            <span className="text-[11px] text-neutral-500 font-mono">Nume_Prenume</span>
          </label>
          <input
            type="text"
            value={testNickname}
            onChange={(e) => setTestNickname(e.target.value)}
            placeholder="ex: Mihai_Popescu"
            className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.1] text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-white/30 transition-colors font-mono"
          />
          {testNickname.length > 0 && (
            <div className={`text-xs flex items-center gap-1.5 ${isNicknameValid ? 'text-emerald-400' : 'text-amber-400'}`}>
              {isNicknameValid ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Nume valid conform regulamentului de Roleplay!</span>
                </>
              ) : (
                <>
                  <HelpCircle className="w-3.5 h-3.5" />
                  <span>Formatul cerut este Nume_Prenume (cu majusculă și literă mică).</span>
                </>
              )}
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <a
            href={`samp://${serverIp}`}
            className="w-full py-3 px-4 text-xs font-semibold text-neutral-950 bg-white hover:bg-neutral-200 rounded-xl transition-all flex items-center justify-center gap-2 text-center shadow-sm"
          >
            <Play className="w-3.5 h-3.5 fill-neutral-950" />
            <span>Deschide în SA-MP Client</span>
          </a>

          <a
            href="https://open.mp"
            target="_blank"
            rel="noreferrer"
            className="w-full py-3 px-4 text-xs font-medium text-white bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.1] rounded-xl transition-all flex items-center justify-center gap-2 text-center"
          >
            <Download className="w-3.5 h-3.5 text-neutral-400" />
            <span>Descarcă open.mp</span>
            <ExternalLink className="w-3 h-3 text-neutral-500" />
          </a>
        </div>

        {/* Footer info */}
        <div className="text-center text-[11px] text-neutral-500">
          Probleme la conectare? Alătură-te canalului <span className="text-neutral-300">#asistenta</span> pe Discord.
        </div>
      </div>
    </div>
  );
};
