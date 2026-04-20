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

  const results = [
    { value: '+42%', text: 'Flere leads gennem målrettet annoncering' },
    { value: '4.1 ROAS', text: 'Annonceafkast fra optimerede Meta kampagner' },
    { value: '+28%', text: 'Mere omsætning via automatiseret email marketing' },
  ];

  const process = [
    {
      title: 'Analyse',
      text: 'Vi gennemgår din nuværende marketing, dine mål og din målgruppe for at skabe et klart udgangspunkt.',
    },
    {
      title: 'Strategi',
      text: 'Vi skræddersyr en plan, der passer til din virksomhed, dit budget og de resultater, du ønsker at skabe.',
    },
    {
      title: 'Eksekvering',
      text: 'Vi opsætter kampagner, indhold og flows med fokus på struktur, kvalitet og troværdig kommunikation.',
    },
    {
      title: 'Optimering',
      text: 'Vi måler løbende på resultaterne og forbedrer din markedsføring ud fra data og konkrete indsigter.',
    },
  ];

  const cases = [
    {
      category: 'Google Ads',
      title: 'Lokal servicevirksomhed',
      result: '+42% flere henvendelser',
      text: 'Efter en ny annoncestruktur, bedre søgeord og skarpere landingssider steg antallet af relevante henvendelser markant over tre måneder.',
    },
    {
      category: 'Meta Ads',
      title: 'Webshop med vækstfokus',
      result: '4.1 i ROAS',
      text: 'En målrettet Facebook- og Instagram-strategi med løbende kreativ testning løftede både afkast og omsætning.',
    },
    {
      category: 'Email Marketing',
      title: 'Virksomhed med genkøbspotentiale',
      result: '+28% mere omsætning',
      text: 'Et mere struktureret setup med automatiske flows gav bedre opfølgning, flere genkøb og stærkere kunderelationer.',
    },
  ];

  const testimonials = [
    {
      quote:
        'Vi oplevede endelig, at vi havde overblik over både budget, indsats og resultater. Det gav langt mere ro i samarbejdet.',
      name: 'Lokal virksomhed',
    },
    {
      quote:
        'Kommunikationen var enkel, ærlig og professionel. Vi vidste hele tiden, hvad der blev lavet, og hvorfor det blev gjort.',
      name: 'E-commerce brand',
    },
  ];

  const reasons = [
    {
      title: 'Fuld gennemsigtighed',
      text: 'Du ved altid, hvad der bliver lavet, hvordan budgettet bliver brugt, og hvad næste skridt er.',
    },
    {
      title: 'Skræddersyet plan',
      text: 'Vi bygger ikke standardløsninger. Din strategi bliver tilpasset din virksomhed, dine mål og dit marked.',
    },
    {
      title: 'Personlig rådgivning',
      text: 'Du får en fast kontaktperson og personlig vejledning fra start, så samarbejdet bliver enkelt og trygt.',
    },
  ];

  const wrap = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 24px',
  };

  const cardStyle = {
    background: '#ffffff',
    border: '1px solid #e5e7eb',
    borderRadius: '24px',
    padding: '28px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.04)',
  };

  const inputStyle = {
    width: '100%',
    padding: '14px 16px',
    borderRadius: '16px',
    border: '1px solid #d1d5db',
    fontSize: '15px',
    boxSizing: 'border-box',
    outline: 'none',
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', background: '#ffffff', color: '#111827' }}>
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 20,
          background: 'rgba(255,255,255,0.94)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid #e5e7eb',
        }}
      >
        <div
          style={{
            ...wrap,
            paddingTop: '18px',
            paddingBottom: '18px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '20px',
            flexWrap: 'wrap',
          }}
        >
          <div>
            <div style={{ fontSize: '22px', fontWeight: '700' }}>Nordkyst Media</div>
            <div style={{ fontSize: '13px', color: '#6b7280', marginTop: '4px' }}>
              Marketingbureau i Løkken
            </div>
          </div>

          <div style={{ display: 'flex', gap: '18px', alignItems: 'center', flexWrap: 'wrap' }}>
            <a href="#services" style={{ textDecoration: 'none', color: '#4b5563', fontSize: '15px' }}>
              Ydelser
            </a>
            <a href="#about" style={{ textDecoration: 'none', color: '#4b5563', fontSize: '15px' }}>
              Om os
            </a>
            <a href="#cases" style={{ textDecoration: 'none', color: '#4b5563', fontSize: '15px' }}>
              Cases
            </a>
            <a href="#contact" style={{ textDecoration: 'none', color: '#4b5563', fontSize: '15px' }}>
              Kontakt
            </a>
            <a
              href="#contact"
              style={{
                textDecoration: 'none',
                background: '#111827',
                color: '#ffffff',
                padding: '12px 18px',
                borderRadius: '999px',
                fontWeight: '600',
                fontSize: '14px',
              }}
            >
              Book en samtale
            </a>
          </div>
        </div>
      </header>

      <section
        style={{
          background:
            'linear-gradient(135deg, rgba(243,244,246,1) 0%, rgba(255,255,255,1) 50%, rgba(243,244,246,1) 100%)',
          padding: '90px 0',
        }}
      >
        <div
          style={{
            ...wrap,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '50px',
            alignItems: 'center',
          }}
        >
          <div>
            <div
              style={{
                display: 'inline-block',
                border: '1px solid #e5e7eb',
                background: '#ffffff',
                color: '#6b7280',
                borderRadius: '999px',
                padding: '8px 14px',
                fontSize: '14px',
                marginBottom: '18px',
              }}
            >
              Gennemsigtig og resultatorienteret marketing
            </div>

            <h1
              style={{
                fontSize: '58px',
                lineHeight: '1.05',
                margin: 0,
                color: '#111827',
                maxWidth: '760px',
              }}
            >
              Et marketingbureau med fokus på klare resultater og personlig rådgivning.
            </h1>

            <p
              style={{
                fontSize: '20px',
                lineHeight: '1.8',
                color: '#4b5563',
                marginTop: '24px',
                maxWidth: '760px',
              }}
            >
              Nordkyst Media er baseret i Løkken og hjælper virksomheder med Google Ads, Facebook Ads,
              email marketing og sociale medier. Vi har selv prøvet at være kunder hos bureauer, hvor man
              ikke vidste, hvad pengene gik til. Derfor bygger vi i dag løsninger med gennemsigtighed,
              struktur og en plan, der er tilpasset din virksomhed.
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '30px' }}>
              <a
                href="#contact"
                style={{
                  textDecoration: 'none',
                  background: '#111827',
                  color: '#ffffff',
                  padding: '14px 22px',
                  borderRadius: '999px',
                  fontWeight: '600',
                  boxShadow: '0 10px 20px rgba(17,24,39,0.15)',
                }}
              >
                Få en gratis samtale
              </a>
              <a
                href="#cases"
                style={{
                  textDecoration: 'none',
                  border: '1px solid #d1d5db',
                  color: '#111827',
                  padding: '14px 22px',
                  borderRadius: '999px',
                  fontWeight: '600',
                  background: '#ffffff',
                }}
              >
                Se cases
              </a>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, minmax(0,1fr))',
                gap: '20px',
                maxWidth: '520px',
                marginTop: '38px',
                paddingTop: '28px',
                borderTop: '1px solid #e5e7eb',
              }}
            >
              <div>
                <div style={{ fontSize: '28px', fontWeight: '700' }}>4</div>
                <div style={{ fontSize: '14px', color: '#6b7280', marginTop: '6px' }}>Kerneydelser</div>
              </div>
              <div>
                <div style={{ fontSize: '28px', fontWeight: '700' }}>100%</div>
                <div style={{ fontSize: '14px', color: '#6b7280', marginTop: '6px' }}>Gennemsigtighed</div>
              </div>
              <div>
                <div style={{ fontSize: '28px', fontWeight: '700' }}>Løkken</div>
                <div style={{ fontSize: '14px', color: '#6b7280', marginTop: '6px' }}>Lokal base</div>
              </div>
            </div>
          </div>

          <div>
            <div
              style={{
                background: '#ffffff',
                border: '1px solid #e5e7eb',
                borderRadius: '32px',
                padding: '24px',
                boxShadow: '0 20px 60px rgba(0,0,0,0.08)',
              }}
            >
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, minmax(0,1fr))',
                  gap: '16px',
                }}
              >
                <div
                  style={{
                    background: '#f9fafb',
                    border: '1px solid #e5e7eb',
                    borderRadius: '22px',
                    padding: '20px',
                  }}
                >
                  <div style={{ fontSize: '14px', color: '#6b7280' }}>Annoncering</div>
                  <div style={{ fontSize: '22px', fontWeight: '700', marginTop: '8px' }}>Google & Meta</div>
                  <p style={{ color: '#4b5563', lineHeight: '1.7', marginTop: '10px' }}>
                    Kampagner med fokus på synlighed, leads og salg.
                  </p>
                </div>

                <div
                  style={{
                    background: '#f9fafb',
                    border: '1px solid #e5e7eb',
                    borderRadius: '22px',
                    padding: '20px',
                  }}
                >
                  <div style={{ fontSize: '14px', color: '#6b7280' }}>Automation</div>
                  <div style={{ fontSize: '22px', fontWeight: '700', marginTop: '8px' }}>Email flows</div>
                  <p style={{ color: '#4b5563', lineHeight: '1.7', marginTop: '10px' }}>
                    Automatiske emails, der styrker relationer og øger kundeværdien.
                  </p>
                </div>

                <div
                  style={{
                    background: '#111827',
                    color: '#ffffff',
                    border: '1px solid #111827',
                    borderRadius: '22px',
                    padding: '22px',
                    gridColumn: '1 / -1',
                    boxShadow: '0 10px 30px rgba(17,24,39,0.18)',
                  }}
                >
                  <div style={{ fontSize: '14px', color: '#cbd5e1' }}>Strategisk partner</div>
                  <div style={{ fontSize: '22px', fontWeight: '700', marginTop: '8px' }}>
                    Simpelt, seriøst og effektivt
                  </div>
                  <p style={{ color: '#e5e7eb', lineHeight: '1.7', marginTop: '10px' }}>
                    Vi kombinerer strategi, data og tydelig kommunikation, så du altid ved, hvad der
                    bliver gjort – og hvorfor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: '#f9fafb', borderTop: '1px solid #e5e7eb', borderBottom: '1px solid #e5e7eb' }}>
        <div
          style={{
            ...wrap,
            paddingTop: '28px',
            paddingBottom: '28px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '20px',
          }}
        >
          {results.map((item) => (
            <div key={item.value}>
              <div style={{ fontSize: '32px', fontWeight: '700', color: '#111827' }}>{item.value}</div>
              <div style={{ marginTop: '6px', color: '#6b7280', lineHeight: '1.6' }}>{item.text}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="services" style={{ ...wrap, paddingTop: '90px', paddingBottom: '90px' }}>
        <div style={{ fontSize: '13px', letterSpacing: '3px', textTransform: 'uppercase', color: '#6b7280', fontWeight: '700' }}>
          Ydelser
        </div>
        <h2 style={{ fontSize: '40px', lineHeight: '1.15', margin: '12px 0 0 0', color: '#111827' }}>
          Marketing, der er bygget til at skabe vækst
        </h2>
        <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#6b7280', marginTop: '18px', maxWidth: '760px' }}>
          Vi hjælper virksomheder med at få mere værdi ud af deres markedsføring gennem en kombination af annoncering,
          indhold og struktur.
        </p>

        <div
          style={{
            marginTop: '40px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '20px',
          }}
        >
          {services.map((service) => (
            <div key={service.title} style={cardStyle}>
              <h3 style={{ fontSize: '24px', marginTop: 0 }}>{service.title}</h3>
              <p style={{ color: '#4b5563', lineHeight: '1.8' }}>{service.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" style={{ background: '#0f172a', color: '#ffffff' }}>
        <div
          style={{
            ...wrap,
            paddingTop: '90px',
            paddingBottom: '90px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px',
          }}
        >
          <div>
            <div style={{ fontSize: '13px', letterSpacing: '3px', textTransform: 'uppercase', color: '#94a3b8', fontWeight: '700' }}>
              Om Nordkyst Media
            </div>
            <h2 style={{ fontSize: '40px', lineHeight: '1.15', marginTop: '12px' }}>
              Vi bygger den type bureau, vi selv savnede som kunder
            </h2>
          </div>

          <div>
            <p style={{ fontSize: '19px', lineHeight: '1.9', color: '#cbd5e1' }}>
              Vi er baseret i Løkken og arbejder med virksomheder, der ønsker professionel hjælp til digital markedsføring.
              Vi har selv stået på den anden side og oplevet, hvor frustrerende det kan være at betale mange penge uden reel
              indsigt i arbejdet bag.
            </p>
            <p style={{ fontSize: '19px', lineHeight: '1.9', color: '#cbd5e1', marginTop: '22px' }}>
              Derfor arbejder vi med klare processer, tydelig rapportering og personlig rådgivning. Du får ikke en standardpakke,
              men en løsning, der er bygget til din virksomhed og dine mål.
            </p>
          </div>
        </div>
      </section>

      <section style={{ ...wrap, paddingTop: '90px', paddingBottom: '90px' }}>
        <div style={{ fontSize: '13px', letterSpacing: '3px', textTransform: 'uppercase', color: '#6b7280', fontWeight: '700' }}>
          Derfor vælger virksomheder os
        </div>
        <h2 style={{ fontSize: '40px', lineHeight: '1.15', margin: '12px 0 0 0', color: '#111827' }}>
          En mere gennemsigtig og personlig måde at arbejde med marketing på
        </h2>

        <div
          style={{
            marginTop: '40px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '20px',
          }}
        >
          {reasons.map((item) => (
            <div
              key={item.title}
              style={{
                ...cardStyle,
                background: '#f9fafb',
              }}
            >
              <h3 style={{ fontSize: '24px', marginTop: 0 }}>{item.title}</h3>
              <p style={{ color: '#4b5563', lineHeight: '1.8' }}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="cases" style={{ background: '#f9fafb' }}>
        <div style={{ ...wrap, paddingTop: '90px', paddingBottom: '90px' }}>
          <div style={{ fontSize: '13px', letterSpacing: '3px', textTransform: 'uppercase', color: '#6b7280', fontWeight: '700' }}>
            Cases
          </div>
          <h2 style={{ fontSize: '40px', lineHeight: '1.15', margin: '12px 0 0 0', color: '#111827' }}>
            Eksempler på den type resultater, vi arbejder for at skabe
          </h2>
          <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#6b7280', marginTop: '18px', maxWidth: '760px' }}>
            Her vises eksempler på, hvordan en tydelig strategi, stærk eksekvering og løbende optimering kan skabe vækst
            for forskellige typer virksomheder.
          </p>

          <div
            style={{
              marginTop: '40px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '20px',
            }}
          >
            {cases.map((item) => (
              <div key={item.title} style={cardStyle}>
                <div style={{ fontSize: '13px', color: '#6b7280', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: '700' }}>
                  {item.category}
                </div>
                <h3 style={{ fontSize: '24px', marginTop: '14px', marginBottom: '0' }}>{item.title}</h3>
                <div style={{ fontSize: '28px', fontWeight: '700', marginTop: '14px', color: '#111827' }}>{item.result}</div>
                <p style={{ color: '#4b5563', lineHeight: '1.8', marginTop: '16px' }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ ...wrap, paddingTop: '90px', paddingBottom: '90px' }}>
        <div style={{ fontSize: '13px', letterSpacing: '3px', textTransform: 'uppercase', color: '#6b7280', fontWeight: '700' }}>
          Proces
        </div>
        <h2 style={{ fontSize: '40px', lineHeight: '1.15', margin: '12px 0 0 0', color: '#111827' }}>
          Fra analyse til løbende vækst
        </h2>

        <div
          style={{
            marginTop: '40px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '20px',
          }}
        >
          {process.map((item, index) => (
            <div
              key={item.title}
              style={{
                ...cardStyle,
                background: index === 1 ? '#111827' : '#ffffff',
                color: index === 1 ? '#ffffff' : '#111827',
                border: index === 1 ? '1px solid #111827' : '1px solid #e5e7eb',
              }}
            >
              <div style={{ fontSize: '14px', color: index === 1 ? '#cbd5e1' : '#6b7280', fontWeight: '700' }}>
                0{index + 1}
              </div>
              <h3 style={{ fontSize: '24px', marginTop: '12px' }}>{item.title}</h3>
              <p style={{ color: index === 1 ? '#e5e7eb' : '#4b5563', lineHeight: '1.8' }}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: '#ffffff' }}>
        <div style={{ ...wrap, paddingTop: '90px', paddingBottom: '90px' }}>
          <div style={{ fontSize: '13px', letterSpacing: '3px', textTransform: 'uppercase', color: '#6b7280', fontWeight: '700' }}>
            Udtalelser
          </div>
          <h2 style={{ fontSize: '40px', lineHeight: '1.15', margin: '12px 0 0 0', color: '#111827' }}>
            Tillid skabes gennem klar kommunikation
          </h2>

          <div
            style={{
              marginTop: '40px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '20px',
            }}
          >
            {testimonials.map((item) => (
              <div
                key={item.name}
                style={{
                  ...cardStyle,
                  background: '#f9fafb',
                }}
              >
                <p style={{ fontSize: '18px', lineHeight: '1.9', color: '#374151', margin: 0 }}>
                  “{item.quote}”
                </p>
                <div style={{ marginTop: '22px', fontSize: '14px', color: '#6b7280', fontWeight: '700' }}>
                  {item.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" style={{ ...wrap, paddingTop: '90px', paddingBottom: '90px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
          }}
        >
          <div
            style={{
              background: '#111827',
              color: '#ffffff',
              borderRadius: '32px',
              padding: '38px',
              boxShadow: '0 20px 50px rgba(17,24,39,0.18)',
            }}
          >
            <div style={{ fontSize: '13px', letterSpacing: '3px', textTransform: 'uppercase', color: '#9ca3af', fontWeight: '700' }}>
              Kontakt
            </div>
            <h2 style={{ fontSize: '40px', lineHeight: '1.15', marginTop: '14px' }}>
              Lad os tage en uforpligtende snak om din markedsføring
            </h2>
            <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#d1d5db', marginTop: '18px' }}>
              Fortæl kort om din virksomhed og dine mål. Så vender vi tilbage med en første vurdering
              og forslag til, hvordan vi kan hjælpe.
            </p>

            <div
              style={{
                marginTop: '28px',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                gap: '14px',
              }}
            >
              <div
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '20px',
                  padding: '18px',
                }}
              >
                <div style={{ fontSize: '13px', color: '#9ca3af' }}>Bureau</div>
                <div style={{ marginTop: '8px', fontSize: '18px', fontWeight: '700' }}>Nordkyst Media</div>
              </div>

              <div
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '20px',
                  padding: '18px',
                }}
              >
                <div style={{ fontSize: '13px', color: '#9ca3af' }}>Lokation</div>
                <div style={{ marginTop: '8px', fontSize: '18px', fontWeight: '700' }}>Løkken</div>
              </div>

              <div
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '20px',
                  padding: '18px',
                }}
              >
                <div style={{ fontSize: '13px', color: '#9ca3af' }}>Email</div>
                <div style={{ marginTop: '8px', fontSize: '18px', fontWeight: '700' }}>kontakt@nordkystmedia.dk</div>
              </div>
            </div>
          </div>

          <div style={cardStyle}>
            <h3 style={{ fontSize: '28px', marginTop: 0 }}>Send en forespørgsel</h3>

            <form action="https://formspree.io/f/your-form-id" method="POST">
              <div style={{ marginTop: '18px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: '#374151', fontWeight: '600' }}>
                  Navn
                </label>
                <input name="name" type="text" placeholder="Dit navn" style={inputStyle} />
              </div>

              <div style={{ marginTop: '16px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: '#374151', fontWeight: '600' }}>
                  Virksomhed
                </label>
                <input name="company" type="text" placeholder="Din virksomhed" style={inputStyle} />
              </div>

              <div style={{ marginTop: '16px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: '#374151', fontWeight: '600' }}>
                  Email
                </label>
                <input name="email" type="email" placeholder="din@email.dk" style={inputStyle} />
              </div>

              <div style={{ marginTop: '16px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: '#374151', fontWeight: '600' }}>
                  Månedligt marketing budget
                </label>
                <select name="budget" style={{ ...inputStyle, background: '#ffffff' }}>
                  <option>Vælg budget</option>
                  <option>0 - 5.000 kr.</option>
                  <option>5.000 - 15.000 kr.</option>
                  <option>15.000 - 30.000 kr.</option>
                  <option>30.000+ kr.</option>
                </select>
              </div>

              <div style={{ marginTop: '16px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: '#374151', fontWeight: '600' }}>
                  Hvad ønsker du hjælp til?
                </label>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Fortæl kort om din virksomhed og hvad du ønsker hjælp til"
                  style={{ ...inputStyle, resize: 'vertical' }}
                />
              </div>

              <button
                type="submit"
                style={{
                  marginTop: '18px',
                  width: '100%',
                  background: '#111827',
                  color: '#ffffff',
                  border: 'none',
                  padding: '14px 18px',
                  borderRadius: '999px',
                  fontWeight: '700',
                  fontSize: '15px',
                  cursor: 'pointer',
                  boxShadow: '0 10px 20px rgba(17,24,39,0.14)',
                }}
              >
                Send forespørgsel
              </button>
            </form>

            <p style={{ marginTop: '14px', fontSize: '13px', color: '#6b7280', lineHeight: '1.6' }}>
              For at gøre formularen aktiv skal du udskifte <strong>your-form-id</strong> med dit eget Formspree-ID.
            </p>
          </div>
        </div>
      </section>

      <footer style={{ borderTop: '1px solid #e5e7eb' }}>
        <div
          style={{
            ...wrap,
            paddingTop: '28px',
            paddingBottom: '28px',
            display: 'flex',
            justifyContent: 'space-between',
            gap: '16px',
            flexWrap: 'wrap',
            color: '#6b7280',
            fontSize: '14px',
          }}
        >
          <div>© 2026 Nordkyst Media. Alle rettigheder forbeholdes.</div>
          <div>Marketingbureau i Løkken · Google Ads · Facebook Ads · Email Marketing · SoMe</div>
        </div>
      </footer>
    </div>
  );
}
