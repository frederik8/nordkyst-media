export default function Home() {
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

  const reasons = [
    {
      title: 'Fuld gennemsigtighed',
      text: 'Du ved altid, hvad der bliver lavet, og hvordan dit budget bliver brugt.',
    },
    {
      title: 'Personlig rådgivning',
      text: 'Du får direkte sparring og en fast kontaktperson, der følger dig fra start til slut.',
    },
    {
      title: 'Fokus på resultater',
      text: 'Alt vi laver har ét mål: at skabe vækst i din virksomhed.',
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
    <div style={{ fontFamily: 'Arial, sans-serif', background: '#ffffff', color: '#18181b' }}>
      <header style={{ position: 'sticky', top: 0, zIndex: 50, background: 'rgba(255,255,255,0.95)', borderBottom: '1px solid #e4e4e7' }}>
        <div
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            padding: '20px 24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 20,
            flexWrap: 'wrap',
          }}
        >
          <div>
            <div style={{ fontSize: 22, fontWeight: 700 }}>Nordkyst Media</div>
            <div style={{ fontSize: 13, color: '#71717a' }}>Marketingbureau i Løkken</div>
          </div>

          <div style={{ display: 'flex', gap: 20, alignItems: 'center', flexWrap: 'wrap' }}>
            <a href="#services" style={{ color: '#52525b', textDecoration: 'none' }}>Ydelser</a>
            <a href="#about" style={{ color: '#52525b', textDecoration: 'none' }}>Om os</a>
            <a href="#process" style={{ color: '#52525b', textDecoration: 'none' }}>Proces</a>
            <a href="#contact" style={{ color: '#52525b', textDecoration: 'none' }}>Kontakt</a>
            <a
              href="#contact"
              style={{
                background: '#18181b',
                color: '#ffffff',
                padding: '10px 18px',
                borderRadius: 999,
                textDecoration: 'none',
                fontWeight: 600,
              }}
            >
              Få en samtale
            </a>
          </div>
        </div>
      </header>

      <section style={{ background: 'linear-gradient(to bottom right, #f4f4f5, #ffffff, #f4f4f5)' }}>
        <div
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            padding: '90px 24px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 50,
            alignItems: 'center',
          }}
        >
          <div>
            <div
              style={{
                display: 'inline-block',
                padding: '8px 14px',
                borderRadius: 999,
                border: '1px solid #e4e4e7',
                background: '#fff',
                color: '#52525b',
                fontSize: 14,
                marginBottom: 18,
              }}
            >
              Resultatorienteret marketing fra Nordjylland
            </div>

            <h1 style={{ fontSize: 54, lineHeight: 1.1, margin: 0, maxWidth: 700 }}>
              Vi hjælper virksomheder med at vokse gennem digital marketing.
            </h1>

            <p style={{ marginTop: 24, fontSize: 20, lineHeight: 1.8, color: '#52525b', maxWidth: 760 }}>
              Nordkyst Media er et moderne marketingbureau i Løkken. Vi startede selv som virksomhed og brugte marketingbureauer – men oplevede manglende gennemsigtighed og høje priser uden klar værdi. Derfor bygger vi i dag marketing, hvor du altid ved, hvad du betaler for, og hvad du får ud af det. Samtidig skræddersyr vi en plan specifikt til din virksomhed med personlig vejledning fra start.
            </p>

            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginTop: 30 }}>
              <a
                href="#contact"
                style={{
                  background: '#18181b',
                  color: '#fff',
                  padding: '14px 22px',
                  borderRadius: 999,
                  textDecoration: 'none',
                  fontWeight: 600,
                }}
              >
                Book et møde
              </a>
              <a
                href="#services"
                style={{
                  border: '1px solid #d4d4d8',
                  color: '#18181b',
                  padding: '14px 22px',
                  borderRadius: 999,
                  textDecoration: 'none',
                  fontWeight: 600,
                }}
              >
                Se vores ydelser
              </a>
            </div>

            <div
              style={{
                marginTop: 40,
                paddingTop: 28,
                borderTop: '1px solid #e4e4e7',
                display: 'grid',
                gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
                gap: 20,
                maxWidth: 500,
              }}
            >
              <div>
                <div style={{ fontSize: 28, fontWeight: 700 }}>+100%</div>
                <div style={{ fontSize: 14, color: '#71717a', marginTop: 4 }}>Fokus på vækst</div>
              </div>
              <div>
                <div style={{ fontSize: 28, fontWeight: 700 }}>4</div>
                <div style={{ fontSize: 14, color: '#71717a', marginTop: 4 }}>Kerneydelser</div>
              </div>
              <div>
                <div style={{ fontSize: 28, fontWeight: 700 }}>Løkken</div>
                <div style={{ fontSize: 14, color: '#71717a', marginTop: 4 }}>Lokal base</div>
              </div>
            </div>
          </div>

          <div>
            <div
              style={{
                background: '#fff',
                border: '1px solid #e4e4e7',
                borderRadius: 32,
                padding: 24,
                boxShadow: '0 20px 60px rgba(0,0,0,0.08)',
              }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 16 }}>
                <div style={{ background: '#fafafa', border: '1px solid #e4e4e7', borderRadius: 24, padding: 20 }}>
                  <div style={{ fontSize: 14, color: '#71717a' }}>Annoncering</div>
                  <div style={{ fontSize: 22, fontWeight: 700, marginTop: 8 }}>Google & Meta</div>
                  <p style={{ color: '#52525b', lineHeight: 1.7, marginTop: 10 }}>
                    Kampagner med fokus på synlighed, leads og salg.
                  </p>
                </div>

                <div style={{ background: '#fafafa', border: '1px solid #e4e4e7', borderRadius: 24, padding: 20 }}>
                  <div style={{ fontSize: 14, color: '#71717a' }}>Automation</div>
                  <div style={{ fontSize: 22, fontWeight: 700, marginTop: 8 }}>Email flows</div>
                  <p style={{ color: '#52525b', lineHeight: 1.7, marginTop: 10 }}>
                    Automatiske emails, der skaber relationer og mersalg.
                  </p>
                </div>

                <div
                  style={{
                    background: '#fafafa',
                    border: '1px solid #e4e4e7',
                    borderRadius: 24,
                    padding: 20,
                    gridColumn: '1 / -1',
                  }}
                >
                  <div style={{ fontSize: 14, color: '#71717a' }}>Strategisk partner</div>
                  <div style={{ fontSize: 22, fontWeight: 700, marginTop: 8 }}>Simpelt, seriøst og effektivt</div>
                  <p style={{ color: '#52525b', lineHeight: 1.7, marginTop: 10 }}>
                    Vi kombinerer kreativitet med data og hjælper virksomheder med at få mere ud af deres markedsføring – uden unødigt støj.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" style={{ maxWidth: 1200, margin: '0 auto', padding: '90px 24px' }}>
        <p style={{ fontSize: 13, letterSpacing: 3, textTransform: 'uppercase', color: '#71717a', fontWeight: 600 }}>
          Ydelser
        </p>
        <h2 style={{ fontSize: 40, marginTop: 14, marginBottom: 0 }}>Digital marketing med fokus på resultater</h2>
        <p style={{ fontSize: 20, color: '#52525b', lineHeight: 1.8, marginTop: 18, maxWidth: 760 }}>
          Vi hjælper virksomheder med at få en stærkere digital tilstedeværelse og mere værdi ud af deres markedsføring.
        </p>

        <div
          style={{
            marginTop: 40,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 20,
          }}
        >
          {services.map((service) => (
            <div
              key={service.title}
              style={{
                border: '1px solid #e4e4e7',
                borderRadius: 28,
                padding: 24,
                background: '#fff',
                boxShadow: '0 4px 14px rgba(0,0,0,0.04)',
              }}
            >
              <h3 style={{ fontSize: 24, marginTop: 0 }}>{service.title}</h3>
              <p style={{ color: '#52525b', lineHeight: 1.8 }}>{service.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" style={{ background: '#09090b', color: '#fff' }}>
        <div
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            padding: '90px 24px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 40,
          }}
        >
          <div>
            <p style={{ fontSize: 13, letterSpacing: 3, textTransform: 'uppercase', color: '#a1a1aa', fontWeight: 600 }}>
              Om Nordkyst Media
            </p>
            <h2 style={{ fontSize: 40, marginTop: 14 }}>Et bureau med lokal forankring og digitalt fokus</h2>
          </div>

          <div>
            <p style={{ fontSize: 20, lineHeight: 1.8, color: '#d4d4d8' }}>
              Vi er baseret i Løkken og arbejder med virksomheder, der ønsker professionel hjælp til digital markedsføring. Vi har selv stået på den anden side som kunde – og ved, hvor frustrerende det er ikke at have indsigt i, hvad ens budget bliver brugt på. Derfor er gennemsigtighed en central del af vores tilgang.
            </p>
            <p style={{ fontSize: 20, lineHeight: 1.8, color: '#d4d4d8', marginTop: 24 }}>
              Vi tror på, at gode resultater skabes gennem overblik, ærlig rådgivning og fuld gennemsigtighed. Du får indsigt i data, klare rapporter og en samarbejdspartner, der forklarer tingene simpelt – uden buzzwords. Vi bygger marketing, som både ser godt ud og virker i praksis.
            </p>
          </div>
        </div>
      </section>

      <section id="process" style={{ maxWidth: 1200, margin: '0 auto', padding: '90px 24px' }}>
        <p style={{ fontSize: 13, letterSpacing: 3, textTransform: 'uppercase', color: '#71717a', fontWeight: 600 }}>
          Proces
        </p>
        <h2 style={{ fontSize: 40, marginTop: 14 }}>Sådan arbejder vi</h2>

        <div
          style={{
            marginTop: 40,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 20,
          }}
        >
          {reasons.map((item) => (
            <div
              key={item.title}
              style={{
                border: '1px solid #e4e4e7',
                borderRadius: 28,
                padding: 24,
                background: '#fff',
                boxShadow: '0 4px 14px rgba(0,0,0,0.04)',
              }}
            >
              <h3 style={{ fontSize: 24, marginTop: 0 }}>{item.title}</h3>
              <p style={{ color: '#52525b', lineHeight: 1.8 }}>{item.text}</p>
            </div>
          ))}

          {process.map((item) => (
            <div
              key={item.step}
              style={{
                border: '1px solid #e4e4e7',
                borderRadius: 28,
                padding: 24,
                background: '#fafafa',
              }}
            >
              <div style={{ fontSize: 14, color: '#71717a', fontWeight: 600 }}>{item.step}</div>
              <h3 style={{ fontSize: 30, marginTop: 12 }}>{item.title}</h3>
              <p style={{ color: '#52525b', lineHeight: 1.8 }}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: '#fafafa' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '90px 24px' }}>
          <p style={{ fontSize: 13, letterSpacing: 3, textTransform: 'uppercase', color: '#71717a', fontWeight: 600 }}>
            Hvorfor vælge os
          </p>
          <h2 style={{ fontSize: 40, marginTop: 14 }}>Vi skaber marketing, der er gennemsigtig og professionel</h2>

          <div
            style={{
              marginTop: 40,
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: 20,
            }}
          >
            {cases.map((item) => (
              <div
                key={item.title}
                style={{
                  border: '1px solid #e4e4e7',
                  borderRadius: 28,
                  padding: 24,
                  background: '#fff',
                  boxShadow: '0 4px 14px rgba(0,0,0,0.04)',
                }}
              >
                <h3 style={{ fontSize: 24, marginTop: 0 }}>{item.title}</h3>
                <p style={{ color: '#52525b', lineHeight: 1.8 }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" style={{ maxWidth: 900, margin: '0 auto', padding: '90px 24px' }}>
        <div
          style={{
            background: '#18181b',
            color: '#fff',
            borderRadius: 32,
            padding: 40,
          }}
        >
          <p style={{ fontSize: 13, letterSpacing: 3, textTransform: 'uppercase', color: '#a1a1aa', fontWeight: 600 }}>
            Kontakt
          </p>
          <h2 style={{ fontSize: 40, marginTop: 14 }}>Skal vi hjælpe med din markedsføring?</h2>
          <p style={{ marginTop: 18, fontSize: 20, lineHeight: 1.8, color: '#d4d4d8' }}>
            Tag kontakt til os for en uforpligtende samtale om, hvordan vi kan styrke din virksomhed med Google Ads, Facebook Ads, email marketing og sociale medier.
          </p>

          <div
            style={{
              marginTop: 30,
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: 16,
            }}
          >
            <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 24, padding: 20 }}>
              <div style={{ fontSize: 14, color: '#a1a1aa' }}>Bureau</div>
              <div style={{ marginTop: 8, fontSize: 20, fontWeight: 600 }}>Nordkyst Media</div>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 24, padding: 20 }}>
              <div style={{ fontSize: 14, color: '#a1a1aa' }}>Lokation</div>
              <div style={{ marginTop: 8, fontSize: 20, fontWeight: 600 }}>Løkken, Nordjylland</div>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 24, padding: 20 }}>
              <div style={{ fontSize: 14, color: '#a1a1aa' }}>Kontakt</div>
              <div style={{ marginTop: 8, fontSize: 20, fontWeight: 600 }}>kontakt@nordkystmedia.dk</div>
            </div>
          </div>

          <div style={{ marginTop: 30 }}>
            <a
              href="mailto:kontakt@nordkystmedia.dk"
              style={{
                display: 'inline-block',
                background: '#fff',
                color: '#18181b',
                padding: '14px 22px',
                borderRadius: 999,
                textDecoration: 'none',
                fontWeight: 600,
              }}
            >
              Skriv til os
            </a>
          </div>
        </div>
      </section>

      <footer style={{ borderTop: '1px solid #e4e4e7' }}>
        <div
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            padding: '28px 24px',
            color: '#71717a',
            fontSize: 14,
            display: 'flex',
            justifyContent: 'space-between',
            gap: 16,
            flexWrap: 'wrap',
          }}
        >
          <div>© 2026 Nordkyst Media. Alle rettigheder forbeholdes.</div>
          <div>Marketingbureau i Løkken · Google Ads · Facebook Ads · Email Marketing · SoMe</div>
        </div>
      </footer>
    </div>
  );
}
