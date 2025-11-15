import Image from "next/image";
import Nav from "../components/Nav";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#333] font-sans antialiased">
      <Nav />

      {/* HERO — no fixed heights, fully DPR-safe */}
      <header className="pt-4 pb-20 md:pt-36 md:pb-32 flex items-center">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

          {/* Left */}
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl font-medium leading-tight">
              Natural Nails by Lisa
            </h1>

            <p className="mt-6 text-lg max-w-md text-[#555]">
              Beautiful nails, personalized care, and a relaxing experience.
              Boek je afspraak en laat je verwennen.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://booking.naturalnailsbylisa.be"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 pb-2 rounded-full text-sm font-bold text-white"
                style={{ backgroundColor: "#E6A8A0" }}
              >
                Maak een afspraak
              </a>

              <a
                href="#services"
                className="px-6 py-3 pb-2 rounded-full border border-[#E6A8A0] text-sm font-bold text-[#E6A8A0]"
              >
                Bekijk diensten
              </a>
            </div>
          </div>

          {/* Right image */}
          <div className="order-1 md:order-2 w-full min-h-[45vh] md:min-h-[60vh] rounded-md overflow-hidden flex items-center justify-center">
            <Image
              src="/hero.jpg"
              alt="Natural Nails by Lisa"
              width={500}
              height={500}
              className="object-cover w-100 h-100 rounded-lgs"
              priority
            />
          </div>
        </div>
      </header>

      {/* ABOUT */}
      <section
        id="about"
        className="py-24 px-6 flex flex-col lg:flex-row gap-14 justify-center items-center"
        style={{ backgroundColor: "#fff8f6" }}
      >
        <div className="max-w-3xl flex flex-col p-6 lg:p-10">
          <h2 className="text-3xl font-semibold">Onze aanpak</h2>
          <p className="text-[#555] text-lg mb-10">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
            porro inventore architecto delectus consectetur ipsa nostrum.
          </p>

          <h2 className="text-3xl font-semibold">BIAP Strategie</h2>
          <p className="text-[#555] text-lg mb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            sequi temporibus nobis.
          </p>

          <h2 className="text-3xl font-semibold">Verzorging</h2>
          <p className="text-[#555] text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            iusto, expedita dolorum.
          </p>
        </div>

        <div className="w-full max-w-lg rounded-md overflow-hidden">
          <Image
            src="/images/IMG_20250919_144126.jpg"
            alt="Onze aanpak"
            width={600}
            height={600}
            className="object-cover w-full h-full"
          />
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 px-6 text-center">
        <h2 className="text-3xl font-semibold">Galerij</h2>

        <div className="max-w-5xl mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <Image
            src="/images/IMG_20250919_141008.jpg"
            alt="Gallery image 1"
            width={300}
            height={300}
            className="object-cover w-full h-full"
          />

          <Image
            src="/images/IMG_20251008_193322.jpg"
            alt="Gallery image 2"
            width={300}
            height={300}
            className="object-cover w-full h-full"
          />

          <Image
            src="/images/IMG_20251105_192757.jpg"
            alt="Gallery image 3"
            width={300}
            height={300}
            className="object-cover w-full h-full"
          />
        </div>

        <Link href="/gallery">
          <p className="hover:underline mt-10 cursor-pointer">Bekijk meer</p>
        </Link>
      </section>

      {/* CTA */}
      <section
        className="py-24 px-6 text-center flex flex-col items-center gap-6"
        style={{ backgroundColor: "#fff8f6" }}
      >
        <h2 className="text-3xl font-semibold">Klaar voor mooie nagels?</h2>

        <a
          href="https://booking.naturalnailsbylisa.be"
          target="_blank"
          rel="noopener noreferrer"
          className="px-7 py-3 rounded-full font-bold text-white text-sm"
          style={{ backgroundColor: "#E6A8A0" }}
        >
          Boek je afspraak
        </a>
      </section>

      {/* FOOTER */}
      <footer className="py-10 border-t text-center text-sm text-[#777]">
        © {new Date().getFullYear()} Natural Nails by Lisa
      </footer>
    </div>
  );
}
