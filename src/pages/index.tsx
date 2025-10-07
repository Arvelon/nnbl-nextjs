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
      }}
    >
      <Image
        src="/logo.png"
        alt="Logo"
        width={200}
        height={200}
        priority
        style={{ objectFit: 'contain' }}
      />
    </div>
  );
}
