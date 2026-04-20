export default function Page() {
  const services = [
    {
      title: 'Google Ads',
      text: 'Vi skaber målrettede kampagner, der giver flere henvendelser og flere salg.',
    },
    {
      title: 'Facebook Ads',
      text: 'Vi hjælper dig med at ramme de rigtige kunder på Facebook og Instagram.',
    },
    {
      title: 'Email Marketing',
      text: 'Vi opsætter emails og flows, der øger din omsætning.',
    },
    {
      title: 'SoMe Marketing',
      text: 'Vi skaber indhold og strategi, der styrker din synlighed.',
    },
  ];

  return (
    <div style={{ fontFamily: 'Arial', padding: 40 }}>
      <h1>Nordkyst Media</h1>
      <p>
        Vi er et marketingbureau i Løkken. Vi har selv prøvet at være kunder hos
        bureauer, hvor man ikke vidste hvad man betalte for. Derfor arbejder vi
        med fuld gennemsigtighed og skræddersyede løsninger.
      </p>

      <h2>Vores ydelser</h2>
      <div>
        {services.map((s) => (
          <div key={s.title} style={{ marginBottom: 20 }}>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </div>
        ))}
      </div>

      <h2>Kontakt</h2>
      <p>kontakt@nordkystmedia.dk</p>
    </div>
  );
}
