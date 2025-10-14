import Image from 'next/image';

export default function Home() {
  return (
    <div
      style={{
        backgroundColor: '#fff',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        gap: '20px', // space between image and button
      }}
    >
      <Image
        src="/logo.svg"
        alt="Logo"
        width={800}
        height={800}
        priority
        style={{ objectFit: 'contain' }}
      />

      <a
        href="https://booking.naturalnailsbylisa.be"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-block',
          padding: '12px 24px',
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
        Maak hier een afspraak
      </a>
    </div>
  );
}
