import Image from 'next/image';
import Nav from '../components/Nav';

export default function Home() {
  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#fff', color: '#333' }}>
      <Nav />

      {/* Hero Section */}
      <section style={{
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        gap: '24px',
        padding: '0 20px',
      }}>
        <Image
          src="/logo.svg"
          alt="Natural Nails by Lisa"
          width={400}
          height={400}
          priority
          style={{ objectFit: 'contain' }}
        />
        <p style={{ fontSize: '1.2rem', maxWidth: '500px' }}>
          Gun jezelf prachtige, verzorgde nagels en een moment van pure ontspanning.
          Boek vandaag je behandeling en straal tot in de puntjes.
        </p>
        <a
          href="https://booking.naturalnailsbylisa.be"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            padding: '12px 28px',
            backgroundColor: '#F2C0BD',
            color: '#fff',
            fontWeight: 'bold',
            borderRadius: '8px',
            textDecoration: 'none',
            transition: 'background-color 0.3s',
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F5D1CC'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#F2C0BD'}
        >
          Maak hier je afspraak
        </a>
      </section>

      {/* About Section */}
      <section style={{
        padding: '80px 20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '16px',
        backgroundColor: '#fff8f6',
        textAlign: 'center',
      }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Over Lisa</h2>
        <p style={{ maxWidth: '600px', fontSize: '1rem' }}>
          Ik ben Lisa, jouw nagelstyliste met passie voor perfectie en rust.
          Met aandacht voor detail en liefde voor het vak creëer ik nagels die bij jouw stijl passen.
          Jij verdient een behandeling die professioneel, persoonlijk én ontspannend is.
        </p>
      </section>

      {/* Services Section */}
      <section style={{
        padding: '80px 20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '24px',
        textAlign: 'center',
      }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Diensten</h2>
        <p style={{ maxWidth: '600px', fontSize: '1rem' }}>
          Of je nu kiest voor natuurlijke verzorging of een elegante, duurzame nagelset:
          elke behandeling wordt afgestemd op jouw wensen en lifestyle.
        </p>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '24px',
          justifyContent: 'center',
          marginTop: '24px',
        }}>
          {['Manicure', 'Pedicure', 'Gelnagels', 'Nagelverzorging op maat'].map((service) => (
            <div key={service} style={{
              backgroundColor: '#F2C0BD',
              color: '#fff',
              padding: '24px',
              borderRadius: '12px',
              minWidth: '200px',
              flex: '1 1 200px',
            }}>
              {service}
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section style={{
        padding: '80px 20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '24px',
        textAlign: 'center',
        backgroundColor: '#fff8f6',
      }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Klaar voor prachtige nagels?</h2>
        <p style={{ maxWidth: '600px', fontSize: '1rem' }}>
          Plan eenvoudig je afspraak en ervaar zelf de combinatie van professionele zorg en ontspanning.
        </p>
        <a
          href="https://booking.naturalnailsbylisa.be"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            padding: '12px 28px',
            backgroundColor: '#F2C0BD',
            color: '#fff',
            fontWeight: 'bold',
            borderRadius: '8px',
            textDecoration: 'none',
            transition: 'background-color 0.3s',
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F5D1CC'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#F2C0BD'}
        >
          Boek je afspraak
        </a>
      </section>
    </div>
  );
}
