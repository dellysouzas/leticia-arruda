import { useState } from 'react'

function App() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const closeMobile = () => setMobileOpen(false)
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#00a858] text-white shadow-lg shadow-black/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button 
              onClick={scrollToTop}
              className="flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer"
              aria-label="Voltar ao topo da página"
            >
              <img src="/Logos/logocinza.png" alt="Clínica Nova Esperança" className="h-8 w-auto" />
              <span className="sr-only">Clínica Nova Esperança</span>
            </button>
          </div>
          
          <div className="flex items-center gap-4">
            {/* Navegação desktop */}
            <nav className="hidden md:flex items-center gap-2 text-sm">
              <a href="#hero" className="font-medium text-white/90 hover:text-white px-3 py-2 rounded-md transition-all duration-200 hover:bg-white/15 active:scale-[0.98]">Início</a>
              <a href="#especialidades" className="font-medium text-white/90 hover:text-white px-3 py-2 rounded-md transition-all duration-200 hover:bg-white/15 active:scale-[0.98]">Especialidades</a>
              <a href="#sobre" className="font-medium text-white/90 hover:text-white px-3 py-2 rounded-md transition-all duration-200 hover:bg-white/15 active:scale-[0.98]">Sobre</a>
              <a href="#diferenciais" className="font-medium text-white/90 hover:text-white px-3 py-2 rounded-md transition-all duration-200 hover:bg-white/15 active:scale-[0.98]">Diferenciais</a>
              <a href="#contato" className="font-medium text-white/90 hover:text-white px-3 py-2 rounded-md transition-all duration-200 hover:bg-white/15 active:scale-[0.98]">Contato</a>
            </nav>

            {/* Ícones sociais */}
            <div className="flex items-center gap-3">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/clinica.novaesperanca/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-white/10 transition-colors"
                aria-label="Instagram da Clínica Nova Esperança"
              >
                <svg
                  className="h-6 w-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/5581987284666"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-white/10 transition-colors"
                aria-label="WhatsApp da Clínica Nova Esperança"
              >
                <svg
                  className="h-6 w-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </a>
            </div>

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
                  Sua clínica completa de saúde, odontologia e exames em Paulista/PE
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
        <section id="especialidades" className="py-20 md:py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-left max-w-5xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00a858]/10 text-[#135432] text-sm font-medium mb-4">
                <span className="w-2 h-2 rounded-full bg-[#00a858]"></span>
                Especialidades
              </div>
              <h2 className="font-display text-3xl md:text-5xl font-semibold text-[#135432] leading-tight">
                Tudo o que você precisa para cuidar da sua saúde!
              </h2>
            </div>

            <div className="mt-10 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {/* Consultas médicas */}
              <div className="group overflow-hidden rounded-2xl bg-white ring-1 ring-black/5 shadow-lg shadow-black/10 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/15">
                <div className="relative">
                  <img src="/Serviços/Clinica%20geral.png" alt="Consultas médicas" className="h-48 md:h-56 w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                  <h3 className="absolute bottom-3 left-4 right-4 text-white text-xl md:text-2xl font-semibold">
                    Consultas médicas
                  </h3>
                </div>
                <div className="p-5">
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    Clínico Geral, Pediatria, Ginecologia, Cardiologia, Psiquiatria, Médico do Trabalho.
                  </p>
                </div>
              </div>

              {/* Odontologia completa */}
              <div className="group overflow-hidden rounded-2xl bg-white ring-1 ring-black/5 shadow-lg shadow-black/10 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/15">
                <div className="relative">
                  <img src="/Serviços/Odontologia.png" alt="Odontologia completa" className="h-48 md:h-56 w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                  <h3 className="absolute bottom-3 left-4 right-4 text-white text-xl md:text-2xl font-semibold">
                    Odontologia completa
                  </h3>
                </div>
                <div className="p-5">
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    Todas as especialidades de dentistas em um só lugar, cuidando do seu sorriso.
                  </p>
                </div>
              </div>

              {/* Exames laboratoriais e de imagem */}
              <div className="group overflow-hidden rounded-2xl bg-white ring-1 ring-black/5 shadow-lg shadow-black/10 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/15">
                <div className="relative">
                  <img src="/Serviços/Exames%20laboratoriais.png" alt="Exames laboratoriais e de imagem" className="h-48 md:h-56 w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                  <h3 className="absolute bottom-3 left-4 right-4 text-white text-xl md:text-2xl font-semibold">
                    Exames laboratoriais e de imagem
                  </h3>
                </div>
                <div className="p-5">
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    Resultados rápidos, com precisão e valores acessíveis.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <div className="max-w-5xl mx-auto">
                <div className="relative overflow-hidden rounded-xl ring-1 ring-[#00a858]/20 bg-[#effaef]">
                  <div className="absolute inset-y-0 left-0 w-1.5 bg-[#00a858]" />
                  <div className="px-5 py-5 md:px-7 md:py-6 flex items-start gap-3 md:gap-4">
                    <div className="shrink-0 text-[#00a858]">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 md:h-7 md:w-7">
                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.28-2.28a.75.75 0 0 0-1.06-1.06l-4.72 4.72-1.69-1.69a.75.75 0 1 0-1.06 1.06l2.22 2.22c.293.293.767.293 1.06 0l5.25-5.25Z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-sm md:text-base leading-relaxed text-[#135432]">
                      Sem precisar se deslocar para vários lugares,{' '}
                      <span className="px-1 rounded bg-[#00a858]/10 font-semibold">você resolve tudo em um só espaço.</span>
                    </p>
                  </div>
                </div>
              </div>
      </div>
      
            {/* Profissionais - compacto */}
            <div className="mt-10 md:mt-12 max-w-5xl mx-auto">
              <div className="flex items-center gap-3 text-[#135432]">
                <h3 className="font-display text-lg md:text-xl font-semibold">Profissionais</h3>
                <div className="h-px flex-1 bg-[#1e6d44]/20" />
              </div>
              <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-sm md:text-[15px]">
                <li className="text-gray-800"><span className="font-semibold">Dra. Joelma Tompson</span> — <span className="text-gray-600">Ginecologia</span></li>
                <li className="text-gray-800"><span className="font-semibold">Dr. Rui Tompson</span> — <span className="text-gray-600">Cardiologia</span></li>
                <li className="text-gray-800"><span className="font-semibold">Dra. Soledade Lundgrem</span> — <span className="text-gray-600">Clínica geral, Pediatria e Medicina do Trabalho</span></li>
                <li className="text-gray-800"><span className="font-semibold">Dra. Aelson Souza</span> — <span className="text-gray-600">Ultrassom</span></li>
                <li className="text-gray-800"><span className="font-semibold">Dr. George Almerio</span> — <span className="text-gray-600">Psiquiatria</span></li>
                <li className="text-gray-800"><span className="font-semibold">Dra. Letícia Arruda</span> — <span className="text-gray-600">Dentista</span></li>
                <li className="text-gray-800"><span className="font-semibold">Dra. Eduarda Freire</span> — <span className="text-gray-600">Dentista</span></li>
                <li className="text-gray-800"><span className="font-semibold">Dra. Rebeca Santos</span> — <span className="text-gray-600">Dentista</span></li>
                <li className="text-gray-800"><span className="font-semibold">Dra. Thaís de Castro</span> — <span className="text-gray-600">Dentista</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Sobre */}
        <section id="sobre" className="py-20 md:py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-5xl mx-auto text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00a858]/10 text-[#135432] text-sm font-medium mb-4">
                <span className="w-2 h-2 rounded-full bg-[#00a858]"></span>
                Sobre a clínica
              </div>
              <h2 className="font-display text-3xl md:text-5xl font-semibold text-[#135432] leading-tight">
                Clínica Nova Esperança: um legado de compromisso
              </h2>
              <div className="mt-4 space-y-3 md:space-y-4 text-gray-700 max-w-3xl">
                <p>
                  Somos uma clínica familiar fundada em 2017, com a missão de oferecer um
                  atendimento próximo, humano e de qualidade.
                </p>
                <p>
                  Nosso propósito é simples: colocar as necessidades do paciente em primeiro
                  lugar e entregar a melhor experiência em saúde da região de Paulista, com valores
                  acessíveis.
        </p>
      </div>
      
              {/* Valores */}
              <div className="mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl">
                <div className="rounded-2xl bg-white ring-1 ring-black/5 shadow-lg shadow-black/10 p-5">
                  <div className="flex items-start gap-3">
                    <div className="shrink-0 text-[#00a858]">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                        <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-gray-900">Compromisso com o paciente</h3>
                      <p className="mt-2 text-sm text-gray-700">Cuidamos com empatia, escuta ativa e foco nas necessidades individuais.</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl bg-white ring-1 ring-black/5 shadow-lg shadow-black/10 p-5">
                  <div className="flex items-start gap-3">
                    <div className="shrink-0 text-[#00a858]">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                        <path d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm0 3a.75.75 0 01.75.75v5.19l3.22 3.22a.75.75 0 11-1.06 1.06l-3.5-3.5a.75.75 0 01-.22-.53V6a.75.75 0 01.75-.75z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-gray-900">Responsabilidade em cada atendimento</h3>
                      <p className="mt-2 text-sm text-gray-700">Protocolos seguros e equipe dedicada para oferecer confiança em cada consulta.</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl bg-white ring-1 ring-black/5 shadow-lg shadow-black/10 p-5">
                  <div className="flex items-start gap-3">
                    <div className="shrink-0 text-[#00a858]">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                        <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-gray-900">Excelência em todos os serviços</h3>
                      <p className="mt-2 text-sm text-gray-700">Qualidade clínica, estrutura completa e resultados confiáveis para sua saúde.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Agende agora mesmo */}
            <div className="mt-12 max-w-5xl mx-auto">
              <div className="text-left">
                <a
                  href="https://wa.me/5581987284666"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#00a858] text-white px-8 py-4 font-semibold shadow-lg shadow-black/10 hover:bg-[#1e6d44] transition-colors hover:shadow-xl hover:shadow-black/15 active:scale-[0.98]"
                >
                  Agende agora mesmo
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="M12 2C6.477 2 2 6.02 2 11.006c0 1.74.47 3.37 1.285 4.783L2 22l6.39-1.23A9.94 9.94 0 0 0 12 20.012C17.523 20.012 22 15.99 22 11.006 22 6.02 17.523 2 12 2Zm5.093 14.07c-.214.6-1.255 1.15-1.73 1.18-.474.03-1.09.04-1.758-.11-.402-.09-.92-.3-1.588-.59-2.79-1.2-4.602-4.13-4.742-4.32-.14-.19-1.13-1.5-1.13-2.86 0-1.36.72-2.03.98-2.31.26-.28.57-.35.76-.35.19 0 .38 0 .55.01.18.01.41-.07.64.49.214.6.73 2.07.8 2.22.07.15.11.32.02.51-.09.19-.14.31-.28.48-.14.17-.3.38-.43.51-.14.14-.29.3-.12.59.17.29.75 1.23 1.61 1.99 1.11.98 2.05 1.29 2.34 1.44.29.15.46.13.63-.08.17-.21.72-.84.91-1.12.19-.28.39-.23.64-.14.26.09 1.63.77 1.91.9.28.14.46.21.53.32.07.12.07.69-.15 1.29Z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Diferenciais */}
        <section id="diferenciais" className="py-20 md:py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-left max-w-5xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00a858]/10 text-[#135432] text-sm font-medium mb-4">
                <span className="w-2 h-2 rounded-full bg-[#00a858]"></span>
                Diferenciais
              </div>
              <h2 className="font-display text-3xl md:text-5xl font-semibold text-[#135432] leading-tight">
                Por que escolher a Clínica Nova Esperança para cuidar de você?
              </h2>
            </div>

            <div className="mt-10 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* Tudo em um só lugar */}
              <div className="group overflow-hidden rounded-2xl bg-white ring-1 ring-black/5 shadow-lg shadow-black/10 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/15">
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 text-[#00a858]">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
                        <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 9.74s9-4.19 9-9.74V7l-10-5zM8 15V9h2v6H8zm4 0V9h2v6h-2z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-semibold text-[#135432] mb-2">
                        Tudo em um só lugar
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        Consultas médicas, odontologia, exames e ultrassom em um único espaço, oferecendo mais comodidade.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Melhor custo-benefício */}
              <div className="group overflow-hidden rounded-2xl bg-white ring-1 ring-black/5 shadow-lg shadow-black/10 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/15">
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 text-[#00a858]">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-semibold text-[#135432] mb-2">
                        Melhor custo-benefício da região
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        Qualidade com valores acessíveis. Atendimento de excelência com preços que cabem no bolso.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Atendimento humanizado */}
              <div className="group overflow-hidden rounded-2xl bg-white ring-1 ring-black/5 shadow-lg shadow-black/10 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/15">
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 text-[#00a858]">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
                        <path d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-semibold text-[#135432] mb-2">
                        Atendimento humanizado
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        Atendemos de adulto a criança. Somos capazes de oferecer o melhor para a família toda.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 8 anos de experiência */}
              <div className="group overflow-hidden rounded-2xl bg-white ring-1 ring-black/5 shadow-lg shadow-black/10 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/15">
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 text-[#00a858]">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-semibold text-[#135432] mb-2">
                        8 anos de experiência
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        Centenas de famílias atendidas em Paulista com confiança e cuidado.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contato */}
        <section id="contato" className="py-20 md:py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-left max-w-5xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00a858]/10 text-[#135432] text-sm font-medium mb-4">
                <span className="w-2 h-2 rounded-full bg-[#00a858]"></span>
                Contato
              </div>
              <h2 className="font-display text-3xl md:text-5xl font-semibold text-[#135432] leading-tight">
                Agende sua consulta agora mesmo
              </h2>
              <p className="mt-4 text-base md:text-lg text-gray-700 max-w-3xl">
                Garanta já o seu atendimento — vagas limitadas por especialidade.
              </p>
            </div>

            <div className="mt-10 max-w-5xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                {/* Formulário de agendamento */}
                <div className="bg-white rounded-2xl shadow-lg shadow-black/10 ring-1 ring-black/5 p-6 md:p-8">
                  <form className="space-y-6">
                    <div>
                      <label htmlFor="nome" className="block text-sm font-medium text-gray-900 mb-2">
                        Nome completo
                      </label>
                      <input
                        type="text"
                        id="nome"
                        name="nome"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00a858] focus:border-[#00a858] transition-colors"
                        placeholder="Seu nome completo"
                      />
                    </div>

                    <div>
                      <label htmlFor="telefone" className="block text-sm font-medium text-gray-900 mb-2">
                        Telefone/WhatsApp
                      </label>
                      <input
                        type="tel"
                        id="telefone"
                        name="telefone"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00a858] focus:border-[#00a858] transition-colors"
                        placeholder="(81) 99999-9999"
                      />
                    </div>

                    <div>
                      <label htmlFor="especialidade" className="block text-sm font-medium text-gray-900 mb-2">
                        Especialidade desejada
                      </label>
                      <select
                        id="especialidade"
                        name="especialidade"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00a858] focus:border-[#00a858] transition-colors"
                      >
                        <option value="">Selecione uma especialidade</option>
                        <option value="clinica-geral">Clínica Geral</option>
                        <option value="pediatria">Pediatria</option>
                        <option value="ginecologia">Ginecologia</option>
                        <option value="cardiologia">Cardiologia</option>
                        <option value="psiquiatria">Psiquiatria</option>
                        <option value="medicina-trabalho">Medicina do Trabalho</option>
                        <option value="odontologia">Odontologia</option>
                        <option value="ultrassom">Ultrassom</option>
                        <option value="exames">Exames Laboratoriais</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="data" className="block text-sm font-medium text-gray-900 mb-2">
                        Data de preferência
                      </label>
                      <input
                        type="date"
                        id="data"
                        name="data"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00a858] focus:border-[#00a858] transition-colors"
                      />
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        const nome = document.getElementById('nome').value;
                        const telefone = document.getElementById('telefone').value;
                        const especialidade = document.getElementById('especialidade').value;
                        const data = document.getElementById('data').value;
                        
                        if (!nome || !telefone || !especialidade || !data) {
                          alert('Por favor, preencha todos os campos.');
                          return;
                        }
                        
                        const especialidades = {
                          'clinica-geral': 'Clínica Geral',
                          'pediatria': 'Pediatria',
                          'ginecologia': 'Ginecologia',
                          'cardiologia': 'Cardiologia',
                          'psiquiatria': 'Psiquiatria',
                          'medicina-trabalho': 'Medicina do Trabalho',
                          'odontologia': 'Odontologia',
                          'ultrassom': 'Ultrassom',
                          'exames': 'Exames Laboratoriais'
                        };
                        
                        const dataFormatada = new Date(data).toLocaleDateString('pt-BR');
                        const mensagem = `Olá! Gostaria de agendar uma consulta:

👤 Nome: ${nome}
📱 Telefone: ${telefone}
🏥 Especialidade: ${especialidades[especialidade]}
📅 Data preferencial: ${dataFormatada}

Aguardo retorno para confirmação. Obrigado!`;
                        
                        const url = `https://wa.me/5581987284666?text=${encodeURIComponent(mensagem)}`;
                        window.open(url, '_blank');
                      }}
                      className="w-full bg-[#00a858] text-white font-semibold py-4 px-6 rounded-lg hover:bg-[#1e6d44] transition-colors shadow-md shadow-black/10 hover:shadow-lg hover:shadow-black/15 active:scale-[0.98]"
                    >
                      Confirmar meu agendamento
                    </button>
                  </form>
                </div>

                {/* Informações rápidas */}
                <div className="space-y-6">
                  <div className="bg-white rounded-2xl shadow-lg shadow-black/10 ring-1 ring-black/5 p-6 md:p-8">
                    <h3 className="font-display text-xl font-semibold text-[#135432] mb-4">
                      Informações da clínica
                    </h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="shrink-0 text-[#00a858] mt-1">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                            <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">Endereço</p>
                          <a 
                            href="https://maps.google.com/?q=Av.+Brasil,+153.+Jardim+Maranguape,+Paulista+-+PE"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-[#00a858] hover:text-[#1e6d44] transition-colors"
                          >
                            Av. Brasil, 153. Jardim Maranguape, Paulista – PE
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="shrink-0 text-[#00a858] mt-1">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd"/>
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">Horário de atendimento</p>
                          <p className="text-sm text-gray-700">Segunda a sexta, das 7h às 17h</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="shrink-0 text-[#00a858] mt-1">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                            <path d="M12 2C6.477 2 2 6.02 2 11.006c0 1.74.47 3.37 1.285 4.783L2 22l6.39-1.23A9.94 9.94 0 0 0 12 20.012C17.523 20.012 22 15.99 22 11.006 22 6.02 17.523 2 12 2Zm5.093 14.07c-.214.6-1.255 1.15-1.73 1.18-.474.03-1.09.04-1.758-.11-.402-.09-.92-.3-1.588-.59-2.79-1.2-4.602-4.13-4.742-4.32-.14-.19-1.13-1.5-1.13-2.86 0-1.36.72-2.03.98-2.31.26-.28.57-.35.76-.35.19 0 .38 0 .55.01.18.01.41-.07.64.49.214.6.73 2.07.8 2.22.07.15.11.32.02.51-.09.19-.14.31-.28.48-.14.17-.3.38-.43.51-.14.14-.29.3-.12.59.17.29.75 1.23 1.61 1.99 1.11.98 2.05 1.29 2.34 1.44.29.15.46.13.63-.08.17-.21.72-.84.91-1.12.19-.28.39-.23.64-.14.26.09 1.63.77 1.91.9.28.14.46.21.53.32.07.12.07.69-.15 1.29Z"/>
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">WhatsApp</p>
                          <a 
                            href="https://wa.me/5581987284666"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-[#00a858] hover:text-[#1e6d44] transition-colors"
                          >
                            (81) 98728-4666
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#effaef] rounded-2xl p-6 md:p-8">
                    <div className="flex items-start gap-3">
                      <div className="shrink-0 text-[#00a858]">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                          <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.28-2.28a.75.75 0 0 0-1.06-1.06l-4.72 4.72-1.69-1.69a.75.75 0 1 0-1.06 1.06l2.22 2.22c.293.293.767.293 1.06 0l5.25-5.25Z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#135432] mb-2">Agendamento rápido e seguro</h4>
                        <p className="text-sm text-gray-700 leading-relaxed">
                          Preencha o formulário e receba a confirmação diretamente pelo WhatsApp. 
                          Nossa equipe entrará em contato.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#00a858] text-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Dados da clínica */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img src="/Logos/logocinza.png" alt="Clínica Nova Esperança" className="h-8 w-auto" />
              </div>
              <p className="text-sm text-white/90">
                CNPJ: 24.146.414/0001-91
              </p>
            </div>

            {/* Endereço */}
            <div className="space-y-3">
              <h4 className="font-semibold text-white">Endereço</h4>
              <div className="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-white/80 mt-0.5 shrink-0">
                  <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
                </svg>
                <p className="text-sm text-white/90">
                  Avenida Brasil, 153<br />
                  Jardim Maranguape, Paulista
                </p>
              </div>
            </div>

            {/* Horário de funcionamento */}
            <div className="space-y-3">
              <h4 className="font-semibold text-white">Horário de Funcionamento</h4>
              <div className="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-white/80 mt-0.5 shrink-0">
                  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd"/>
                </svg>
                <p className="text-sm text-white/90">
                  Segunda a sexta-feira<br />
                  das 7h às 17h
                </p>
              </div>
            </div>

            {/* Contato */}
            <div className="space-y-3">
              <h4 className="font-semibold text-white">Contato</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-white/80 shrink-0">
                    <path d="M12 2C6.477 2 2 6.02 2 11.006c0 1.74.47 3.37 1.285 4.783L2 22l6.39-1.23A9.94 9.94 0 0 0 12 20.012C17.523 20.012 22 15.99 22 11.006 22 6.02 17.523 2 12 2Zm5.093 14.07c-.214.6-1.255 1.15-1.73 1.18-.474.03-1.09.04-1.758-.11-.402-.09-.92-.3-1.588-.59-2.79-1.2-4.602-4.13-4.742-4.32-.14-.19-1.13-1.5-1.13-2.86 0-1.36.72-2.03.98-2.31.26-.28.57-.35.76-.35.19 0 .38 0 .55.01.18.01.41-.07.64.49.214.6.73 2.07.8 2.22.07.15.11.32.02.51-.09.19-.14.31-.28.48-.14.17-.3.38-.43.51-.14.14-.29.3-.12.59.17.29.75 1.23 1.61 1.99 1.11.98 2.05 1.29 2.34 1.44.29.15.46.13.63-.08.17-.21.72-.84.91-1.12.19-.28.39-.23.64-.14.26.09 1.63.77 1.91.9.28.14.46.21.53.32.07.12.07.69-.15 1.29Z"/>
                  </svg>
                  <a 
                    href="https://wa.me/5581987284666"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/90 hover:text-white transition-colors"
                  >
                    (81) 98728-4666
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-white/80 shrink-0">
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"/>
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"/>
                  </svg>
                  <a 
                    href="mailto:cpnesperanca2016@gmail.com"
                    className="text-sm text-white/90 hover:text-white transition-colors"
                  >
                    cpnesperanca2016@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Linha divisória e copyright */}
          <div className="mt-8 pt-6 border-t border-white/20">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-white/80">
                © 2025 Clínica Nova Esperança. Todos os direitos reservados.
              </p>
              <p className="text-sm text-white/80">
                Site desenvolvido pela <a href="https://nivaresearch.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition-colors underline">Niva Research</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
