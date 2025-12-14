import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/components/ui/use-toast';
import { Swords, Calendar, Clock } from 'lucide-react';
function App() {
  const {
    toast
  } = useToast();
  const [name, setName] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const n = urlParams.get('nome') || 'Nick';
    setName(n);
  }, []);

  const handleDiscordClick = () => {
    window.open('https://discord.gg/Q4dSM7ZVZd', '_blank');
  };

  return (
    <>
      <audio ref={audioRef} src="/assets/anuncio.mp3" />
      {isOpen ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
        <Helmet>
          <title>Desture Minecraft - A Guerra das Ordens</title>
          <meta name="description" content="Você foi convidado para participar da épica Guerra das Ordens no servidor Desture Minecraft. Junte-se em 03 de Janeiro às 18:00!" />
        </Helmet>
        
        <div className="min-h-screen relative overflow-hidden bg-[#0a0a0a]">
          {/* Minecraft block pattern background */}
          <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `
                linear-gradient(0deg, #1a1a1a 1px, transparent 1px),
                linear-gradient(90deg, #1a1a1a 1px, transparent 1px)
              `,
          backgroundSize: '32px 32px'
        }} />

          {/* Animated particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => <motion.div key={i} className="absolute w-1 h-1 bg-amber-500/30" initial={{
            x: Math.random() * window.innerWidth,
            y: -10,
            opacity: 0
          }} animate={{
            y: window.innerHeight + 10,
            opacity: [0, 1, 1, 0]
          }} transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "linear"
          }} />)}
          </div>

        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4">
          <motion.div initial={{
          opacity: 0,
          y: 50
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          ease: "easeOut"
        }} className="max-w-4xl w-full">
            {/* Logo */}
            <motion.div initial={{
            scale: 0.8,
            opacity: 0
          }} animate={{
            scale: 1,
            opacity: 1
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }} className="flex justify-center mb-8">
              <div className="relative">
                <img src="https://horizons-cdn.hostinger.com/686be453-8787-4fc0-ac4c-68c566304111/destureguerra-mRDpv.png" alt="Desture Minecraft - A Guerra das Ordens logo with two banners" className="w-full max-w-md h-auto drop-shadow-[0_0_30px_rgba(251,191,36,0.4)]" />
                <motion.div className="absolute inset-0 bg-gradient-to-t from-amber-500/20 to-transparent blur-xl" animate={{
                opacity: [0.3, 0.6, 0.3]
              }} transition={{
                duration: 2,
                repeat: Infinity
              }} />
              </div>
            </motion.div>

            {/* Main content card */}
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.4
          }} className="bg-gradient-to-b from-stone-900/90 to-stone-950/90 backdrop-blur-sm border-4 border-stone-700 shadow-[0_0_50px_rgba(0,0,0,0.8)] relative overflow-hidden" style={{
            clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%)'
          }}>
              {/* Corner decorations */}
              <div className="absolute top-0 left-0 w-16 h-16 border-l-4 border-t-4 border-blue-600/50" />
              <div className="absolute top-0 right-0 w-16 h-16 border-r-4 border-t-4 border-red-600/50" />
              <div className="absolute bottom-0 left-0 w-16 h-16 border-l-4 border-b-4 border-blue-600/50" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-r-4 border-b-4 border-red-600/50" />

              <div className="p-8 md:p-12 relative z-10">
                {/* Title section */}
                <motion.div initial={{
                opacity: 0
              }} animate={{
                opacity: 1
              }} transition={{
                delay: 0.6
              }} className="text-center mb-8">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <Swords className="w-8 h-8 text-blue-500" />
                    <h1 className="text-3xl md:text-5xl font-bold text-amber-400 tracking-wider" style={{
                    textShadow: '0 0 20px rgba(251, 191, 36, 0.5), 4px 4px 0 rgba(0,0,0,0.8)',
                    fontFamily: '"Press Start 2P", cursive'
                  }}>VOCÊ FOI CONVIDADO(A)!</h1>
                    <Swords className="w-8 h-8 text-red-500" />
                  </div>
                </motion.div>

                {/* Invitation text */}
                <motion.div initial={{
                opacity: 0
              }} animate={{
                opacity: 1
              }} transition={{
                delay: 0.8
              }} className="space-y-6 mb-8">
                  <p className="text-lg md:text-xl text-stone-200 leading-relaxed text-center px-4">
                    Prepare-se para a batalha épica entre as ordens no servidor <span className="text-amber-400 font-bold">Desture Minecraft</span>!
                  </p>
                  
                  <div className="bg-stone-950/50 border-2 border-stone-700 p-6 space-y-4">
                    <p className="text-stone-300 text-center">
                      Duas forças poderosas se enfrentarão em uma guerra sem precedentes. Prepare seus equipamentos, construam seus reinos, cumpram os objetivos, formem seus exércitos e lute pela glória da sua ordem!
                    </p>
                    
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-4">
                      <div className="flex items-center gap-3 bg-blue-900/30 px-6 py-3 border-2 border-blue-700/50">
                        <Calendar className="w-6 h-6 text-blue-400" />
                        <div>
                          <div className="text-xs text-stone-400 uppercase">Data</div>
                          <div className="text-lg font-bold text-blue-300">03 de Janeiro</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3 bg-red-900/30 px-6 py-3 border-2 border-red-700/50">
                        <Clock className="w-6 h-6 text-red-400" />
                        <div>
                          <div className="text-xs text-stone-400 uppercase">Horário</div>
                          <div className="text-lg font-bold text-red-300">18:00</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-stone-400 text-center italic">
                    A guerra está chegando. Você está pronto para defender sua ordem?
                  </p>
                </motion.div>

                {/* CTA Button */}
                <motion.div initial={{
                opacity: 0,
                scale: 0.9
              }} animate={{
                opacity: 1,
                scale: 1
              }} transition={{
                delay: 1,
                duration: 0.3
              }} className="flex justify-center">
                  <Button onClick={handleDiscordClick} className="bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white font-bold text-lg px-8 py-6 border-4 border-indigo-800 shadow-[0_8px_0_rgba(55,48,163,0.8)] hover:shadow-[0_4px_0_rgba(55,48,163,0.8)] active:shadow-[0_2px_0_rgba(55,48,163,0.8)] hover:translate-y-1 active:translate-y-2 transition-all duration-150 relative overflow-hidden group">
                    <span className="relative z-10 flex items-center gap-3">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                      </svg>
                      ENTRAR NO DISCORD
                    </span>
                    <motion.div className="absolute inset-0 bg-white/10" initial={{
                    x: '-100%'
                  }} whileHover={{
                    x: '100%'
                  }} transition={{
                    duration: 0.6
                  }} />
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            {/* Footer text */}
            <motion.div initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 1.2
          }} className="text-center mt-8">
              <p className="text-stone-500 text-sm">OBS: Só entre se realmente for participar!</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      <Toaster />
    </motion.div>
  ) : (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a] cursor-pointer" onClick={() => { setIsOpen(true); audioRef.current.play(); }}>
      <div className="text-center text-white">
        <div className="text-4xl font-bold mb-4" style={{ fontFamily: "'Landers', sans-serif" }}>Olá, {name}</div>
        <div className="text-2xl font-bold" style={{ fontFamily: "'Landers', sans-serif" }}>CLIQUE PARA ABRIR!</div>
      </div>
    </div>
  )}
</>
);
}

export default App;