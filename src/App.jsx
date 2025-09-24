import { useState } from 'react'

function App() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const closeMobile = () => setMobileOpen(false)

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-[#00a858] text-white shadow-lg shadow-black/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/Logos/logocinza.png" alt="Clínica Nova Esperança" className="h-8 w-auto" />
            <span className="sr-only">Clínica Nova Esperança</span>
          </div>
          <nav className="hidden md:flex items-center gap-2 md:ml-auto text-sm">
            <a href="#hero" className="font-medium text-white/90 hover:text-white px-3 py-2 rounded-md transition-all duration-200 hover:bg-white/15 active:scale-[0.98]">Início</a>
            <a href="#especialidades" className="font-medium text-white/90 hover:text-white px-3 py-2 rounded-md transition-all duration-200 hover:bg-white/15 active:scale-[0.98]">Especialidades</a>
            <a href="#sobre" className="font-medium text-white/90 hover:text-white px-3 py-2 rounded-md transition-all duration-200 hover:bg-white/15 active:scale-[0.98]">Sobre</a>
            <a href="#diferenciais" className="font-medium text-white/90 hover:text-white px-3 py-2 rounded-md transition-all duration-200 hover:bg-white/15 active:scale-[0.98]">Diferenciais</a>
            <a href="#contato" className="font-medium text-white/90 hover:text-white px-3 py-2 rounded-md transition-all duration-200 hover:bg-white/15 active:scale-[0.98]">Contato</a>
          </nav>
          {/* Botão hambúrguer (mobile) */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Abrir menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span className="sr-only">Abrir menu</span>
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        {/* Navegação mobile */}
        {mobileOpen && (
          <div className="md:hidden border-t border-white/15">
            <div className="px-6 py-4 space-y-3 bg-[#00a858]">
              <a href="#hero" onClick={closeMobile} className="block text-sm">Início</a>
              <a href="#especialidades" onClick={closeMobile} className="block text-sm">Especialidades</a>
              <a href="#sobre" onClick={closeMobile} className="block text-sm">Sobre</a>
              <a href="#diferenciais" onClick={closeMobile} className="block text-sm">Diferenciais</a>
              <a href="#contato" onClick={closeMobile} className="block text-sm">Contato</a>
            </div>
          </div>
        )}
      </header>

      {/* Conteúdo com fundo claro contínuo */}
      <main className="bg-[#effaef] flex-1">
        {/* Hero */}
        <section id="hero" className="p-0">
          <div className="relative w-full">
            <img
              src="/Fotos/Hero.png"
              alt="Clínica Nova Esperança - Hero"
              className="w-full h-auto object-cover block"
            />
            {/* Gradiente sobre a imagem para transição do header */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-4 bg-gradient-to-b from-black/15 to-transparent"></div>
            <div className="px-6 py-10 md:py-14 bg-[#effaef]">
              <div className="max-w-5xl mx-auto">
                <h1 className="font-display text-3xl md:text-5xl font-semibold text-[#135432] leading-tight">
                  Sua clínica completa de saúde, odontologia e exames em Paulista/PE.
                </h1>
                <p className="mt-4 text-base md:text-lg text-gray-700 max-w-3xl">
                  Há 8 anos cuidando de adultos, crianças e famílias com atendimento humano,
                  acessível e centralizado em um só lugar.
                </p>
                <div className="mt-6">
                  <a
                    href="https://wa.me/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-[#00a858] text-white px-5 py-3 font-medium shadow-md shadow-black/10 hover:bg-[#1e6d44] transition-colors"
                  >
                    Agendar consulta pelo WhatsApp
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                      <path d="M12 2C6.477 2 2 6.02 2 11.006c0 1.74.47 3.37 1.285 4.783L2 22l6.39-1.23A9.94 9.94 0 0 0 12 20.012C17.523 20.012 22 15.99 22 11.006 22 6.02 17.523 2 12 2Zm5.093 14.07c-.214.6-1.255 1.15-1.73 1.18-.474.03-1.09.04-1.758-.11-.402-.09-.92-.3-1.588-.59-2.79-1.2-4.602-4.13-4.742-4.32-.14-.19-1.13-1.5-1.13-2.86 0-1.36.72-2.03.98-2.31.26-.28.57-.35.76-.35.19 0 .38 0 .55.01.18.01.41-.07.64.49.214.6.73 2.07.8 2.22.07.15.11.32.02.51-.09.19-.14.31-.28.48-.14.17-.3.38-.43.51-.14.14-.29.3-.12.59.17.29.75 1.23 1.61 1.99 1.11.98 2.05 1.29 2.34 1.44.29.15.46.13.63-.08.17-.21.72-.84.91-1.12.19-.28.39-.23.64-.14.26.09 1.63.77 1.91.9.28.14.46.21.53.32.07.12.07.69-.15 1.29Z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Especialidades */}
        <section id="especialidades" className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="font-display text-2xl md:text-3xl font-semibold">Especialidades</h2>
          </div>
        </section>

        {/* Sobre */}
        <section id="sobre" className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="font-display text-2xl md:text-3xl font-semibold">Sobre</h2>
          </div>
        </section>

        {/* Diferenciais */}
        <section id="diferenciais" className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="font-display text-2xl md:text-3xl font-semibold">Diferenciais</h2>
          </div>
        </section>

        {/* Contato */}
        <section id="contato" className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="font-display text-2xl md:text-3xl font-semibold">Contato</h2>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
