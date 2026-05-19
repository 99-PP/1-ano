export default function LoveAnniversaryWebsite() {
  const memories = [
    {
      date: 'O início ✨',
      title: 'O dia em que tudo começou',
      text: 'Foi aqui que a nossa história começou. Ainda hoje penso nesse momento e sorrio.',
      image:
        'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=1200&auto=format&fit=crop',
    },
    {
      date: 'Primeira saída ❤️',
      title: 'O nosso primeiro encontro',
      text: 'Eu estava nervoso, mas bastou um sorriso teu para tudo parecer certo.',
      image:
        'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop',
    },
    {
      date: 'Momentos especiais 📸',
      title: 'As pequenas memórias',
      text: 'As fotos, as conversas, os abraços e todos os detalhes que fizeram este ano inesquecível.',
      image:
        'https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=1200&auto=format&fit=crop',
    },
  ]

  const reasons = [
    'Porque transformas dias normais em memórias incríveis.',
    'Porque o teu sorriso melhora qualquer dia.',
    'Porque contigo tudo parece mais leve.',
    'Porque és a minha pessoa favorita.',
    'Porque amo a forma como me fazes sentir.',
    'Porque quero viver muitos mais momentos contigo.',
  ]

  return (
    <div className="min-h-screen bg-rose-50 text-stone-800 overflow-hidden">
      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center text-center px-6">
        <img
          src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=1400&auto=format&fit=crop"
          alt="couple"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />

        <div className="relative z-10 max-w-3xl">
          <p className="uppercase tracking-[0.4em] text-sm mb-4 text-rose-700">
            1 ano juntos
          </p>

          <h1 className="text-5xl md:text-7xl font-light leading-tight mb-6">
            365 dias
            <br />
            contigo ❤️
          </h1>

          <p className="text-lg md:text-xl text-stone-700 mb-8">
            Obrigado por fazeres deste ano o mais bonito da minha vida.
          </p>

          <a
            href="#timeline"
            className="inline-block bg-rose-500 hover:bg-rose-600 transition text-white px-8 py-4 rounded-full shadow-xl"
          >
            Começar a nossa história ✨
          </a>
        </div>
      </section>

      {/* TIMELINE */}
      <section id="timeline" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light mb-4">
            A nossa história
          </h2>
          <p className="text-stone-600 text-lg">
            Alguns dos momentos mais especiais deste primeiro ano.
          </p>
        </div>

        <div className="space-y-20">
          {memories.map((memory, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-10 items-center ${
                index % 2 !== 0 ? 'md:[&>*:first-child]:order-2' : ''
              }`}
            >
              <div>
                <img
                  src={memory.image}
                  alt={memory.title}
                  className="rounded-[2rem] shadow-2xl w-full h-[420px] object-cover"
                />
              </div>

              <div>
                <p className="text-rose-500 mb-3 tracking-widest uppercase text-sm">
                  {memory.date}
                </p>

                <h3 className="text-4xl font-light mb-6">{memory.title}</h3>

                <p className="text-lg leading-relaxed text-stone-700">
                  {memory.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* REASONS */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-4">
              Razões porque te amo ❤️
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="bg-rose-50 rounded-[2rem] p-8 shadow-lg hover:-translate-y-2 transition duration-300"
              >
                <div className="text-4xl mb-4">💌</div>
                <p className="text-lg text-stone-700 leading-relaxed">
                  {reason}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOVE LETTER */}
      <section className="py-32 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-rose-100 to-rose-200 opacity-60" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-5xl font-light mb-10">Para ti ✨</h2>

          <p className="text-xl leading-loose text-stone-700 mb-10">
            Este primeiro ano contigo foi cheio de momentos inesquecíveis.
            Obrigado por cada abraço, cada conversa e cada sorriso.
            <br />
            <br />
            Espero que isto seja apenas o começo da nossa história.
          </p>

          <button className="bg-rose-500 hover:bg-rose-600 transition text-white px-10 py-5 rounded-full shadow-2xl text-lg">
            Quero continuar esta história contigo ❤️
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-stone-500 bg-white">
        Feito com amor 💖
      </footer>
    </div>
  )
}
