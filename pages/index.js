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

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', background: '#fff', color: '#18181b' }}>
      <header style={{ borderBottom: '1px solid #e4e4e7', padding: '20px 30px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: 22, fontWeight: 700 }}>Nordkyst Media</div>
            <div style={{ fontSize: 13, color: '#71717a' }}>Marketingbureau i Løkken</div>
          </div>
          <a href="#contact" style={{ background: '#18181b', color: '#fff', padding: '10px 18px', borderRadius: 999, textDecoration: 'none' }}>
            Få en samtale
          </a>
        </div>
      </header>

      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '80px 30px' }}>
        <h1 style={{ fontSize: 52, lineHeight: 1.1, maxWidth: 800 }}>
          Vi hjælper virksomheder med at vokse gennem digital marketing.
        </h1>
        <p style={{ marginTop: 24, fontSize: 20, lineHeight: 1.7, maxWidth: 850, color: '#52525b' }}>
          Nordkyst Media er et moderne marketingbureau i Løkken. Vi startede selv som virksomhed og brugte marketingbureauer – men oplevede manglende gennemsigtighed og høje priser uden klar værdi. Derfor bygger vi i dag marketing, hvor du altid ved, hvad du betaler for, og hvad du får ud af det. Samtidig skræddersyr vi en plan specifikt til din virksomhed med personlig vejledning fra start.
        </p>
      </section>

      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '0 30px 80px' }}>
        <h2 style={{ fontSize: 34 }}>Ydelser</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 20, marginTop: 30 }}>
          {services.map((service) => (
            <div key={service.title} style={{ border: '1px solid #e4e4e7', borderRadius: 22, padding: 22 }}>
              <h3>{service.title}</h3>
              <p style={{ color: '#52525b', lineHeight: 1.7 }}>{service.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: '#09090b', color: 'white', padding: '80px 30px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h2 style={{ fontSize: 34 }}>Om Nordkyst Media</h2>
          <p style={{ marginTop: 20, fontSize: 18, lineHeight: 1.8, color: '#d4d4d8', maxWidth: 900 }}>
            Vi er baseret i Løkken og arbejder med virksomheder, der ønsker professionel hjælp til digital markedsføring. Vi har selv stået på den anden side som kunde – og ved, hvor frustrerende det er ikke at have indsigt i, hvad ens budget bliver brugt på. Derfor er gennemsigtighed en central del af vores tilgang.
          </p>
          <p style={{ marginTop: 20, fontSize: 18, lineHeight: 1.8, color: '#d4d4d8', maxWidth: 900 }}>
            Vi tror på, at gode resultater skabes gennem overblik, ærlig rådgivning og fuld gennemsigtighed. Du får indsigt i data, klare rapporter og en samarbejdspartner, der forklarer tingene simpelt. Vi bygger marketing, som både ser godt ud og virker i praksis.
          </p>
        </div>
      </section>

      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '80px 30px' }}>
        <h2 style={{ fontSize: 34 }}>Sådan arbejder vi</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 20, marginTop: 30 }}>
          <div style={{ border: '1px solid #e4e4e7', borderRadius: 22, padding: 22 }}>
            <h3>Fuld gennemsigtighed</h3>
            <p style={{ color: '#52525b', lineHeight: 1.7 }}>Du ved altid, hvad der bliver lavet, og hvordan dit budget bliver brugt.</p>
          </div>
          <div style={{ border: '1px solid #e4e4e7', borderRadius: 22, padding: 22 }}>
            <h3>Personlig rådgivning</h3>
            <p style={{ color: '#52525b', lineHeight: 1.7 }}>Du får direkte sparring og en fast kontaktperson, der følger dig fra start til slut.</p>
          </div>
          <div style={{ border: '1px solid #e4e4e7', borderRadius: 22, padding: 22 }}>
            <h3>Fokus på resultater</h3>
            <p style={{ color: '#52525b', lineHeight: 1.7 }}>Alt vi laver har ét mål: at skabe vækst i din virksomhed.</p>
          </div>
        </div>
      </section>

      <section id="contact" style={{ maxWidth: 900, margin: '0 auto', padding: '80px 30px' }}>
        <div style={{ background: '#18181b', color: 'white', borderRadius: 28, padding: 36 }}>
          <h2 style={{ fontSize: 34 }}>Skal vi hjælpe med din markedsføring?</h2>
          <p style={{ marginTop: 18, fontSize: 18, lineHeight: 1.8, color: '#d4d4d8' }}>
            Tag kontakt til os for en uforpligtende samtale om, hvordan vi kan styrke din virksomhed med Google Ads, Facebook Ads, email marketing og sociale medier.
          </p>
          <p style={{ marginTop: 18, color: '#d4d4d8' }}>Kontakt: kontakt@nordkystmedia.dk</p>
        </div>
      </section>
    </div>
  );
}
