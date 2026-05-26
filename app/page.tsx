export default function HomePage() {
  const links = {
    android: "#",
    ios: "#",
    instagram: "https://instagram.com/parcha2.app",
  };

  const categories = [
    "Rumba",
    "Comida",
    "Café",
    "Deporte",
    "Viajes",
    "Cine",
    "Gaming",
    "Estudio",
  ];

  return (
    <main className="min-h-screen bg-[#0d0221] text-white">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0d0221]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <img
              src="/icon-parcha2.png"
              alt="Parcha2"
              className="h-10 w-10 rounded-xl"
            />
            <span className="text-lg font-bold tracking-tight">Parcha2</span>
          </div>

          <nav className="hidden gap-6 text-sm text-white/80 md:flex">
            <a href="#como-funciona" className="hover:text-white">
              Cómo funciona
            </a>
            <a href="#categorias" className="hover:text-white">
              Categorías
            </a>
            <a href="#descargar" className="hover:text-white">
              Descargar
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute left-[-120px] top-[-60px] h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute right-[-100px] top-[100px] h-80 w-80 rounded-full bg-violet-500/20 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-fuchsia-400/30 bg-fuchsia-500/10 px-4 py-2 text-sm text-fuchsia-200">
              Próximamente cambiando la forma de parchar en Colombia
            </div>

            <img
              src="/logo-parcha2-white.png"
              alt="Parcha2"
              className="mb-6 h-16 w-auto md:h-20"
            />

            <h1 className="max-w-2xl text-4xl font-extrabold leading-tight md:text-6xl">
              Encuentra planes, crea parches y conoce gente cerca de ti.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-white/75">
              Parcha2 es la app para dejar de decir “hagamos algo” y empezar a
              hacer planes de verdad. Crea parches, únete a actividades y
              conecta con personas que quieren salir, conocer y hacer algo
              distinto.
            </p>

            <div
              id="descargar"
              className="mt-8 flex flex-col gap-4 sm:flex-row"
            >
              <a
                href={links.android}
                className="rounded-2xl bg-fuchsia-500 px-6 py-4 text-center font-semibold text-white transition hover:bg-fuchsia-400"
              >
                Descargar en Android
              </a>

              <a
                href={links.ios}
                className="rounded-2xl border border-white/20 bg-white/5 px-6 py-4 text-center font-semibold text-white transition hover:bg-white/10"
              >
                Descargar en iPhone
              </a>
            </div>

            <div className="mt-4">
              <a
                href={links.instagram}
                target="_blank"
                className="text-sm text-fuchsia-300 hover:text-fuchsia-200"
              >
                Síguenos en Instagram
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="rounded-[32px] border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur">
              <img
                src="/icon-parcha2.png"
                alt="Parcha2 App"
                className="h-[380px] w-[380px] rounded-[28px] object-cover md:h-[460px] md:w-[460px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="mx-auto max-w-7xl px-6 pb-10">
        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-bold text-fuchsia-300">
              Crea planes fácil
            </h3>
            <p className="mt-3 text-white/70">
              Publica un parche con categoría, lugar, fecha y cupos en segundos.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-bold text-fuchsia-300">
              Descubre gente cerca
            </h3>
            <p className="mt-3 text-white/70">
              Encuentra parches y personas con ganas reales de salir y hacer
              algo.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-bold text-fuchsia-300">
              Coordina dentro de la app
            </h3>
            <p className="mt-3 text-white/70">
              Cuando te aceptan o aceptas a alguien, el chat queda listo para
              organizar el plan.
            </p>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section
        id="como-funciona"
        className="mx-auto max-w-7xl px-6 py-20"
      >
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            ¿Cómo funciona?
          </h2>
          <p className="mt-4 text-white/70">
            Parcha2 está pensada para convertir el “algún día” en un plan real.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl bg-white p-7 text-[#0d0221]">
            <div className="mb-4 text-sm font-bold text-fuchsia-600">01</div>
            <h3 className="text-xl font-bold">Crea tu perfil</h3>
            <p className="mt-3 text-[#0d0221]/70">
              Sube tus fotos, agrega tu ciudad y cuéntale a la gente qué te
              gusta hacer.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-7 text-[#0d0221]">
            <div className="mb-4 text-sm font-bold text-fuchsia-600">02</div>
            <h3 className="text-xl font-bold">Explora o crea un parche</h3>
            <p className="mt-3 text-[#0d0221]/70">
              Busca planes cerca o publica uno nuevo para que otros se unan.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-7 text-[#0d0221]">
            <div className="mb-4 text-sm font-bold text-fuchsia-600">03</div>
            <h3 className="text-xl font-bold">Conecta y sal</h3>
            <p className="mt-3 text-[#0d0221]/70">
              Postúlate, acepta personas y coordina todo por el chat de la app.
            </p>
          </div>
        </div>
      </section>

      {/* CATEGORIAS */}
      <section
        id="categorias"
        className="bg-gradient-to-r from-[#240046] to-[#3c096c] py-20"
      >
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            Hay un parche para cada mood
          </h2>
          <p className="mt-4 max-w-2xl text-white/70">
            Desde un café tranqui hasta una salida improvisada o un plan de
            rumba.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {categories.map((item) => (
              <span
                key={item}
                className="rounded-full border border-fuchsia-400/30 bg-fuchsia-500/10 px-5 py-3 text-sm font-medium text-fuchsia-100"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-[32px] bg-white p-10 text-[#0d0221] shadow-2xl">
          <img
            src="/logo-parcha2.png"
            alt="Parcha2"
            className="mb-6 h-14 w-auto"
          />

          <h2 className="max-w-2xl text-3xl font-extrabold md:text-5xl">
            Deja de desparcharte. Encuentra tu próximo plan en Parcha2.
          </h2>

          <p className="mt-5 max-w-2xl text-lg text-[#0d0221]/70">
            Únete a la comunidad y empieza a descubrir planes, personas y
            experiencias cerca de ti.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={links.android}
              className="rounded-2xl bg-fuchsia-500 px-6 py-4 text-center font-semibold text-white transition hover:bg-fuchsia-400"
            >
              Descargar Android
            </a>

            <a
              href={links.instagram}
              target="_blank"
              className="rounded-2xl border border-[#0d0221]/10 px-6 py-4 text-center font-semibold text-[#0d0221] transition hover:bg-black/5"
            >
              Ir al Instagram
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-8 text-sm text-white/60">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Parcha2. Todos los derechos reservados.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white">
              Términos
            </a>
            <a href="#" className="hover:text-white">
              Privacidad
            </a>
            <a
              href="mailto:hola@parcha2.co"
              className="hover:text-white"
            >
              hola@parcha2.co
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}