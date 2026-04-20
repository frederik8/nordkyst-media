export default function NordkystMediaWebsite() {
  const services = [
    {
      title: 'Google Ads',
      text: 'Vi skaber målrettede kampagner, der giver flere henvendelser, flere salg og bedre udnyttelse af dit annoncebudget.',
    },
    {
      title: 'Facebook Ads',
      text: 'Vi hjælper virksomheder med at nå de rigtige kunder gennem stærke annoncer på Facebook og Instagram.',
    },
    {
      title: 'Email Marketing',
      text: 'Vi bygger emails og flows, der styrker relationen til dine kunder og øger din omsætning over tid.',
    },
    {
      title: 'SoMe Marketing',
      text: 'Vi planlægger og udvikler indhold, der løfter din synlighed og skaber en professionel tilstedeværelse online.',
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Strategi',
      text: 'Vi lærer din virksomhed at kende og lægger en plan med klare mål.',
    },
    {
      step: '02',
      title: 'Eksekvering',
      text: 'Vi opsætter kampagner, indhold og systemer med fokus på kvalitet og performance.',
    },
    {
      step: '03',
      title: 'Optimering',
      text: 'Vi følger resultaterne tæt og forbedrer løbende for at skabe vækst.',
    },
  ];

  const cases = [
    {
      title: 'Flere lokale leads',
      text: 'Vi hjælper lokale og landsdækkende virksomheder med at skabe flere relevante kundehenvendelser gennem betalt annoncering.',
    },
    {
      title: 'Stærkere online synlighed',
      text: 'Vi udvikler indhold og kampagner, som gør din virksomhed mere synlig og mere troværdig online.',
    },
    {
      title: 'Bedre kundeoplevelser',
      text: 'Med email marketing og struktur i din kommunikation skaber vi stærkere relationer til dine kunder.',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div>
            <div className="text-lg font-semibold tracking-tight">Nordkyst Media</div>
            <div className="text-xs text-zinc-500">Marketingbureau i Løkken</div>
          </div>

          <nav className="hidden gap-8 text-sm text-zinc-600 md:flex">
            <a href="#services" className="transition hover:text-zinc-900">Ydelser</a>
            <a href="#about" className="transition hover:text-zinc-900">Om os</a>
            <a href="#process" className="transition hover:text-zinc-900">Proces</a>
            <a href="#contact" className="transition hover:text-zinc-900">Kontakt</a>
          </nav>

          <a
            href="#contact"
            className="rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-700"
          >
            Få en samtale
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-100 via-white to-zinc-100" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div className="flex flex-col justify-center">
            <div className="mb-4 inline-flex w-fit rounded-full border border-zinc-200 bg-white px-3 py-1 text-sm text-zinc-600 shadow-sm">
              Resultatorienteret marketing fra Nordjylland
            </div>

            <h1 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl">
              Vi hjælper virksomheder med at vokse gennem digital marketing.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-600">
              Nordkyst Media er et moderne marketingbureau i Løkken. Vi startede selv som virksomhed og brugte marketingbureauer – men oplevede manglende gennemsigtighed og høje priser uden klar værdi. Derfor bygger vi i dag marketing, hvor du altid ved, hvad du betaler for, og hvad du får ud af det. Samtidig skræddersyr vi en plan specifikt til din virksomhed med personlig vejledning fra start.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-zinc-700"
              >
                Book et møde
              </a>
              <a
                href="#services"
                className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium text-zinc-900 transition hover:border-zinc-900"
              >
                Se vores ydelser
              </a>
            </div>

            <div className="mt-10 grid max-w-lg grid-cols-3 gap-6 border-t border-zinc-200 pt-8">
              <div>
                <div className="text-2xl font-semibold">+100%</div>
                <div className="mt-1 text-sm text-zinc-500">Fokus på vækst</div>
              </div>
              <div>
                <div className="text-2xl font-semibold">4</div>
                <div className="mt-1 text-sm text-zinc-500">Kerneydelser</div>
              </div>
              <div>
                <div className="text-2xl font-semibold">Løkken</div>
                <div className="mt-1 text-sm text-zinc-500">Lokal base</div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full max-w-xl rounded-[32px] border border-zinc-200 bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-5">
                  <div className="text-sm text-zinc-500">Annoncering</div>
                  <div className="mt-2 text-xl font-semibold">Google & Meta</div>
                  <p className="mt-3 text-sm leading-6 text-zinc-600">
                    Kampagner med fokus på synlighed, leads og salg.
                  </p>
                </div>
                <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-5">
                  <div className="text-sm text-zinc-500">Automation</div>
                  <div className="mt-2 text-xl font-semibold">Email flows</div>
                  <p className="mt-3 text-sm leading-6 text-zinc-600">
                    Automatiske emails, der skaber relationer og mersalg.
                  </p>
                </div>
                <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-5 sm:col-span-2">
                  <div className="text-sm text-zinc-500">Strategisk partner</div>
                  <div className="mt-2 text-xl font-semibold">Simpelt, seriøst og effektivt</div>
                  <p className="mt-3 text-sm leading-6 text-zinc-600">
                    Vi kombinerer kreativitet med data og hjælper virksomheder med at få mere ud af deres markedsføring – uden unødigt støj.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">Ydelser</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Digital marketing med fokus på resultater
          </h2>
          <p className="mt-4 text-lg leading-8 text-zinc-600">
            Vi hjælper virksomheder med at få en stærkere digital tilstedeværelse og mere værdi ud af deres markedsføring.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-[28px] border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-4 text-sm leading-7 text-zinc-600">{service.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="bg-zinc-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-400">Om Nordkyst Media</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Et bureau med lokal forankring og digitalt fokus
            </h2>
          </div>

          <div className="space-y-6 text-zinc-300">
            <p className="text-lg leading-8">
              Vi er baseret i Løkken og arbejder med virksomheder, der ønsker professionel hjælp til digital markedsføring. Vi har selv stået på den anden side som kunde – og ved, hvor frustrerende det er ikke at have indsigt i, hvad ens budget bliver brugt på. Derfor er gennemsigtighed en central del af vores tilgang.
            </p>
            <p className="text-lg leading-8">
              Vi tror på, at gode resultater skabes gennem overblik, ærlig rådgivning og fuld gennemsigtighed. Du får indsigt i data, klare rapporter og en samarbejdspartner, der forklarer tingene simpelt – uden buzzwords. Vi bygger marketing, som både ser godt ud og virker i praksis.
            </p>
          </div>
        </div>
      </section>

      <section id="process" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">Proces</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Sådan arbejder vi
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-[28px] border border-zinc-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold">Fuld gennemsigtighed</h3>
              <p className="mt-4 text-sm leading-7 text-zinc-600">Du ved altid, hvad der bliver lavet, og hvordan dit budget bliver brugt.</p>
            </div>
            <div className="rounded-[28px] border border-zinc-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold">Personlig rådgivning</h3>
              <p className="mt-4 text-sm leading-7 text-zinc-600">Du får direkte sparring og en fast kontaktperson, der følger dig fra start til slut.</p>
            </div>
            <div className="rounded-[28px] border border-zinc-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold">Fokus på resultater</h3>
              <p className="mt-4 text-sm leading-7 text-zinc-600">Alt vi laver har ét mål: at skabe vækst i din virksomhed.</p>
            </div>
          {process.map((item) => (
            <div key={item.step} className="rounded-[28px] border border-zinc-200 bg-zinc-50 p-6">
              <div className="text-sm font-medium text-zinc-500">{item.step}</div>
              <h3 className="mt-3 text-2xl font-semibold">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-zinc-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-zinc-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">Hvorfor vælge os</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Vi skaber marketing, der er gennemsigtig og professionel
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {cases.map((item) => (
              <div key={item.title} className="rounded-[28px] border border-zinc-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-zinc-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
        <div className="rounded-[32px] bg-zinc-900 px-8 py-12 text-white sm:px-12">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-400">Kontakt</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Skal vi hjælpe med din markedsføring?
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-300">
            Tag kontakt til os for en uforpligtende samtale om, hvordan vi kan styrke din virksomhed med Google Ads, Facebook Ads, email marketing og sociale medier.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <div className="text-sm text-zinc-400">Bureau</div>
              <div className="mt-2 text-lg font-medium">Nordkyst Media</div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <div className="text-sm text-zinc-400">Lokation</div>
              <div className="mt-2 text-lg font-medium">Løkken, Nordjylland</div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <div className="text-sm text-zinc-400">Kontakt</div>
              <div className="mt-2 text-lg font-medium">kontakt@nordkystmedia.dk</div>
            </div>
          </div>

          <div className="mt-8">
            <a
              href="mailto:kontakt@nordkystmedia.dk"
              className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-medium text-zinc-900 transition hover:bg-zinc-200"
            >
              Skriv til os
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-zinc-200">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>© 2026 Nordkyst Media. Alle rettigheder forbeholdes.</div>
          <div>Marketingbureau i Løkken · Google Ads · Facebook Ads · Email Marketing · SoMe</div>
        </div>
      </footer>
    </div>
  );
}
