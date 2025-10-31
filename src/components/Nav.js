import Link from 'next/link';
import Image from 'next/image';

export default function Nav() {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '16px 32px',
      backgroundColor: '#fff',
      boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
      position: 'sticky',
      top: 0,
      zIndex: 100,
    }}>
      <Link href="/">
        <Image src="/logo.svg" alt="Logo.svg" width={120} height={120} style={{ objectFit: 'contain' }} />
      </Link>

      <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
        <Link href="/" style={{ textDecoration: 'none', color: '#333', fontWeight: '500' }}>Home</Link>
        <Link href="/services" style={{ textDecoration: 'none', color: '#333', fontWeight: '500' }}>Services</Link>
        <Link href="/gallery" style={{ textDecoration: 'none', color: '#333', fontWeight: '500' }}>Gallery</Link>
        <Link href="/contact" style={{ textDecoration: 'none', color: '#333', fontWeight: '500' }}>Contact</Link>
      </div>
    </nav>
  );
}
