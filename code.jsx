import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Camera, Calendar, Music, Volume2, VolumeX, ChevronDown } from 'lucide-react';

// --- CONFIGURAÇÃO DE PERSONALIZAÇÃO ---
const DATA = {
  coupleName: "Nós",
  anniversaryDate: "2025-05-19", // Data do início
  heroTitle: "365 dias de nós",
  heroSubtitle: "Uma jornada escrita com amor, risadas e a melhor companhia do mundo.",
  heroImage: "https://images.unsplash.com/photo-1516589174184-c6852661446c?q=80&w=1974", // Foto Principal
  
  memories: [
    {
      title: "O Primeiro Encontro",
      date: "19 Mai 2025",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=1469",
      description: "Aquele frio na barriga que eu nunca vou esquecer. Onde tudo começou."
    },
    {
      title: "Pôr do Sol Inesquecível",
      date: "12 Ago 2025",
      image: "https://images.unsplash.com/photo-1510076857177-7470076d4098?q=80&w=1472",
      description: "O mundo parou por um segundo enquanto olhávamos o horizonte. Ali eu soube."
    },
    {
      title: "Viagem dos Sonhos",
      date: "05 Jan 2026",
      image: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?q=80&w=1374",
      description: "Perder-nos em ruas novas e encontrar-nos um no outro."
    }
  ],

  letter: {
    title: "Para a minha pessoa favorita,",
    content: `Um ano parece muito tempo, mas ao teu lado passou num piscar de olhos. Cada pequeno detalhe — o teu sorriso logo de manhã, o jeito como me ouves, as nossas piadas internas — transformou a minha vida. 
    
    Obrigado por seres o meu porto seguro e a minha maior aventura. Este é apenas o primeiro capítulo de muitos que ainda vamos escrever juntos. Escolho-te hoje, amanhã e todos os dias que virão.`,
    signature: "Com todo o meu amor."
  }
};

const Section = ({ children, className, ...props }) => (
  <motion.section 
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className={`py-20 px-6 max-w-6xl mx-auto ${className}`}
    {...props}
  >
    {children}
  </motion.section>
);

export default function AnniversarySite() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="bg-[#FAF9F6] text-[#2C2C2C] selection:bg-rose-100 font-light">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <img 
            src={DATA.heroImage} 
            alt="Hero" 
            className="w-full h-full object-cover grayscale-[20%]"
          />
          <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />
        </motion.div>

        <div className="relative z-10 text-center text-white px-4">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="uppercase tracking-[0.3em] text-sm mb-4"
          >
            {DATA.coupleName}
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-5xl md:text-8xl font-serif mb-6"
          >
            {DATA.heroTitle}
          </motion.h1>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="border border-white/50 backdrop-blur-md px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-500"
            onClick={() => {
              const storySection = document.getElementById('story');
              if (storySection) {
                storySection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Ver a nossa história
          </motion.button>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
          <ChevronDown size={30} color="white" />
        </div>
      </section>

      {/* 2. MOMENTOS MARCANTES (EDITORIAL LAYOUT) */}
      <Section id="story">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-serif mb-4 italic">Os nossos marcos</h2>
          <div className="h-[1px] w-20 bg-rose-200 mx-auto" />
        </div>

        <div className="space-y-32">
          {DATA.memories.map((m, i) => (
            <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}>
              <div className="w-full md:w-1/2 overflow-hidden rounded-lg shadow-2xl shadow-black/5">
                <motion.img 
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.6 }}
                  src={m.image} 
                  className="w-full aspect-[4/5] object-cover"
                  alt={m.title}
                />
              </div>
              <div className="w-full md:w-1/2 space-y-6 px-4">
                <span className="text-xs tracking-widest text-rose-400 uppercase font-bold">{m.date}</span>
                <h3 className="text-4xl font-serif leading-tight">{m.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed italic">"{m.description}"</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 3. SEÇÃO CARTA (GLASSMORPHISM) */}
      <section className="bg-rose-50/50 py-24">
        <Section>
          <div className="max-w-2xl mx-auto bg-white p-12 md:p-20 shadow-sm border border-rose-100 relative">
            <div className="absolute -top-6 -left-6 opacity-10">
              <Heart size={100} fill="currentColor" className="text-rose-300" />
            </div>
            <h2 className="text-3xl font-serif mb-10 text-rose-800">{DATA.letter.title}</h2>
            <div className="prose prose-rose">
              {DATA.letter.content.split('\n').map((paragraph, idx) => (
                <p key={idx} className="mb-6 text-gray-700 leading-loose">
                  {paragraph}
                </p>
              ))}
            </div>
            <p className="mt-12 font-serif text-xl italic text-rose-900">{DATA.letter.signature}</p>
          </div>
        </Section>
      </section>

      {/* 4. FOOTER */}
      <footer className="py-20 text-center border-t border-gray-100">
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="inline-block mb-6"
        >
          <Heart fill="#fb7185" color="#fb7185" size={32} />
        </motion.div>
        <h2 className="text-3xl font-serif italic mb-2">Escolho-te todos os dias</h2>
        <p className="text-gray-400 tracking-tighter">Para sempre, {DATA.coupleName}.</p>
      </footer>

      {/* FLOATING MUSIC TOGGLE */}
      <button 
        onClick={() => setIsPlaying(!isPlaying)}
        className="fixed bottom-8 right-8 z-50 p-4 bg-white/80 backdrop-blur-md rounded-full shadow-lg border border-rose-100"
      >
        {isPlaying ? <Volume2 size={20} className="text-rose-500" /> : <VolumeX size={20} className="text-gray-400" />}
      </button>

    </div>
  );
}