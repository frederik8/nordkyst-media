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
      title: 'Indsigt & strategi',
      text: 'Vi lærer din virksomhed, målgruppe og nuværende markedsføring at kende og lægger en klar plan.',
    },
    {
      step: '02',
      title: 'Opsætning & lancering',
      text: 'Vi bygger kampagner, indhold og flows med fokus på kvalitet, struktur og troværdig kommunikation.',
    },
    {
      step: '03',
      title: 'Optimering & sparring',
      text: 'Vi følger resultaterne tæt og justerer løbende, så din markedsføring udvikler sig i den rigtige retning.',
    },
  ];

  const reasons = [
    {
      title: 'Fuld gennemsigtighed',
      text: 'Du ved altid, hvad der bliver lavet, hvordan dit budget bliver brugt, og hvad næste skridt er.',
    },
    {
      title: 'Skræddersyet plan',
      text: 'Vi bygger ikke standardløsninger. Din strategi bliver tilpasset din virksomhed, dine mål og dit marked.',
    },
    {
      title: 'Personlig rådgivning',
      text: 'Du får en fast kontaktperson og direkte sparring fra start, så samarbejdet er enkelt og nærværende.',
    },
  ];

  const demoCases = [
    {
      result: '+42%',
      title: 'Flere henvendelser gennem Google Ads',
      text: 'En lokal servicevirksomhed fik flere relevante leads efter en ny annoncestruktur, bedre søgeord og skarpere landing pages.',
    },
    {
      result: '4.1 ROAS',
      title: 'Stærkere salg via Meta annoncering',
      text: 'En webshop løftede sin omsætning med en mere målrettet Facebook- og Instagram-strategi samt løbende kreativ testning.',
    },
    {
      result: '+28%',
      title: 'Mere værdi fra email marketing',
      text: 'Et automatisk email setup gav højere genkøb og bedre opfølgning på både nye og eksisterende kunder.',
    },
  ];

  const testimonials = [
    {
      name: 'Lokal virksomhed',
      quote: 'Vi oplevede endelig, at vi havde overblik over både budget, indsats og resultater. Det gav langt mere ro i samarbejdet.',
    },
    {
      name: 'E-commerce brand',
      quote: 'Kommunikationen var enkel, ærlig og professionel. Vi vidste hele tiden, hvad der blev lavet, og hvorfor det blev gjort.',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-zinc-900 selection:text-white">
      <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div>
            <div className="text-lg font-semibold tracking-tight">Nordkyst Media</div>
            <div className="text-xs text-zinc-500">Marketingbureau i Løkken</div>
          </div>

          <nav className="hidden gap-8 text-sm text-zinc-600 md:flex">
            <a href="#services" className="transition hover:text-zinc-900">Ydelser</a>
            <a href="#about" className="transition hover:text-zinc-900">Om os</a>
            <a href="#cases" className="transition hover:text-zinc-900">Cases</a>
            <a href="#contact" className="transition hover:text-zinc-900">Kontakt</a>
          </nav>

          <a
            href="#contact"
            className="rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-700"
          >
            Book en samtale
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(24,24,27,0.08),transparent_30%),linear-gradient(to_bottom_right,#f4f4f5,#ffffff,#f4f4f5)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div className="flex flex-col justify-center">
            <div className="mb-4 inline-flex w-fit rounded-full border border-zinc-200 bg-white px-3 py-1 text-sm text-zinc-600 shadow-sm">
              Gennemsigtig og resultatorienteret marketing
            </div>

            <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl">
              Et marketingbureau med fokus på klare resultater og personlig rådgivning.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
              Nordkyst Media er baseret i Løkken og hjælper virksomheder med Google Ads, Facebook Ads, email marketing og sociale medier. Vi har selv prøvet at være kunde hos bureauer, hvor man ikke vidste, hvad pengene gik til. Derfor bygger vi i dag løsninger med gennemsigtighed, struktur og en plan, der er tilpasset din virksomhed.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-zinc-700"
              >
                Få en gratis samtale
              </a>
              <a
                href="#cases"
                className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium text-zinc-900 transition hover:border-zinc-900"
              >
                Se demo cases
              </a>
            </div>

            <div className="mt-10 grid max-w-lg grid-cols-3 gap-6 border-t border-zinc-200 pt-8">
              <div>
                <div className="text-2xl font-semibold">4</div>
                <div className="mt-1 text-sm text-zinc-500">Kerneydelser</div>
              </div>
              <div>
                <div className="text-2xl font-semibold">100%</div>
                <div className="mt-1 text-sm text-zinc-500">Gennemsigtighed</div>
              </div>
              <div>
                <div className="text-2xl font-semibold">Løkken</div>
                <div className="mt-1 text-sm text-zinc-500">Lokal base</div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full max-w-xl rounded-[32px] border border-zinc-200 bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(0,0,0,0.12)]">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-5 transition hover:border-zinc-300 hover:bg-white">
                  <div className="text-sm text-zinc-500">Annoncering</div>
                  <div className="mt-2 text-xl font-semibold">Google & Meta</div>
                  <p className="mt-3 text-sm leading-6 text-zinc-600">
                    Kampagner med fokus på synlighed, leads og salg.
                  </p>
                </div>
                <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-5 transition hover:border-zinc-300 hover:bg-white">
                  <div className="text-sm text-zinc-500">Automation</div>
                  <div className="mt-2 text-xl font-semibold">Email flows</div>
                  <p className="mt-3 text-sm leading-6 text-zinc-600">
                    Automatiske emails, der styrker relationer og øger kundeværdien.
                  </p>
                </div>
                <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-5 transition hover:border-zinc-300 hover:bg-white sm:col-span-2">
                  <div className="text-sm text-zinc-500">Strategisk partner</div>
                  <div className="mt-2 text-xl font-semibold">Simpelt, seriøst og effektivt</div>
                  <p className="mt-3 text-sm leading-6 text-zinc-600">
                    Vi kombinerer strategi, data og tydelig kommunikation, så du altid ved, hvad der bliver gjort – og hvorfor.
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
            Marketing, der er bygget til at skabe vækst
          </h2>
          <p className="mt-4 text-lg leading-8 text-zinc-600">
            Vi hjælper virksomheder med at få mere værdi ud af deres markedsføring gennem en kombination af annoncering, indhold og struktur.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-[28px] border border-zinc-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-lg"
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
              Vi bygger den type bureau, vi selv savnede som kunder
            </h2>
          </div>

          <div className="space-y-6 text-zinc-300">
            <p className="text-lg leading-8">
              Vi er baseret i Løkken og arbejder med virksomheder, der ønsker professionel hjælp til digital markedsføring. Vi har selv stået på den anden side og oplevet, hvor frustrerende det kan være at betale mange penge uden reel indsigt i arbejdet bag.
            </p>
            <p className="text-lg leading-8">
              Derfor arbejder vi med klare processer, tydelig rapportering og personlig rådgivning. Du får ikke en standardpakke, men en løsning, der er bygget til din virksomhed og dine mål.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">Derfor vælger virksomheder os</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            En mere gennemsigtig og personlig måde at arbejde med marketing på
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reasons.map((item) => (
            <div key={item.title} className="rounded-[28px] border border-zinc-200 bg-zinc-50 p-6 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-zinc-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="cases" className="bg-zinc-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">Demo cases</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Eksempler på den type resultater, vi arbejder hen imod
            </h2>
            <p className="mt-4 text-lg leading-8 text-zinc-600">
              Nedenstående er illustrative eksempler på, hvordan målrettet digital marketing kan skabe vækst for forskellige typer virksomheder.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {demoCases.map((item) => (
              <div key={item.title} className="rounded-[28px] border border-zinc-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="text-3xl font-semibold tracking-tight text-zinc-950">{item.result}</div>
                <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-zinc-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">Proces</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Sådan arbejder vi sammen
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {process.map((item) => (
            <div key={item.step} className="rounded-[28px] border border-zinc-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="text-sm font-medium text-zinc-500">{item.step}</div>
              <h3 className="mt-3 text-2xl font-semibold">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-zinc-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">Udtalelser</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Tillid skabes gennem klar kommunikation
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {testimonials.map((item) => (
              <div key={item.name} className="rounded-[28px] border border-zinc-200 bg-zinc-50 p-6 shadow-sm">
                <p className="text-lg leading-8 text-zinc-700">“{item.quote}”</p>
                <div className="mt-6 text-sm font-medium text-zinc-500">{item.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[32px] bg-zinc-900 px-8 py-12 text-white sm:px-12">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-400">Kontakt</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Lad os tage en uforpligtende snak om din markedsføring
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-300">
              Fortæl kort om din virksomhed og dine mål. Så vender vi tilbage med en første vurdering og forslag til, hvordan vi kan hjælpe.
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
          </div>

          <div className="rounded-[32px] border border-zinc-200 bg-white p-8 shadow-sm">
            <form className="space-y-4">
              <div>
                <label className="mb-2 block text-sm font-medium text-zinc-700">Navn</label>
                <input
                  type="text"
                  placeholder="Dit navn"
                  className="w-full rounded-2xl border border-zinc-300 px-4 py-3 outline-none transition focus:border-zinc-900"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-zinc-700">Virksomhed</label>
                <input
                  type="text"
                  placeholder="Din virksomhed"
                  className="w-full rounded-2xl border border-zinc-300 px-4 py-3 outline-none transition focus:border-zinc-900"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-zinc-700">Email</label>
                <input
                  type="email"
                  placeholder="din@email.dk"
                  className="w-full rounded-2xl border border-zinc-300 px-4 py-3 outline-none transition focus:border-zinc-900"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-zinc-700">Hvad ønsker du hjælp til?</label>
                <textarea
                  rows={5}
                  placeholder="Fortæl kort om din virksomhed og hvad du ønsker hjælp til"
                  className="w-full rounded-2xl border border-zinc-300 px-4 py-3 outline-none transition focus:border-zinc-900"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-zinc-700"
              >
                Send forespørgsel
              </button>
            </form>
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
