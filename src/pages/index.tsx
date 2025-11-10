import Image from 'next/image';
import Nav from '../components/Nav';

export default function Home() {
  return (
    <div className="font-sans bg-white text-gray-800">
      <Nav />

      {/* Hero Section */}
      <section className="min-h-[80vh] flex flex-col items-center justify-center text-center gap-6 px-5">
        <div className="hidden sm:block">
          <Image
            src="/logo.svg"
            alt="Natural Nails by Lisa"
            width={400}
            height={400}
            priority
            className="object-contain"
          />
        </div>

        <p className="text-lg sm:text-xl max-w-md">
          Gun jezelf prachtige, verzorgde nagels en een moment van pure ontspanning.
          Boek vandaag je behandeling en straal tot in de puntjes.
        </p>

        <a
          href="https://booking.naturalnailsbylisa.be"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-7 py-3 bg-[#F2C0BD] text-white font-bold rounded-lg hover:bg-[#F5D1CC] transition-colors"
        >
          Maak hier je afspraak
        </a>
      </section>

      {/* About Section */}
      <section className="px-5 py-20 bg-[#fff8f6] text-center flex flex-col items-center gap-4">
        <h2 className="text-2xl font-bold">Over Lisa</h2>

        <p className="max-w-xl text-base">
          Ik ben Lisa, jouw nagelstyliste met passie voor perfectie en rust.
          Met aandacht voor detail en liefde voor het vak creëer ik nagels die bij jouw stijl passen.
          Jij verdient een behandeling die professioneel, persoonlijk én ontspannend is.
        </p>
      </section>

      {/* Services Section */}
      <section className="px-5 py-20 text-center flex flex-col items-center gap-8">
        <h2 className="text-2xl font-bold">Diensten</h2>

        <p className="max-w-xl text-base">
          Of je nu kiest voor natuurlijke verzorging of een elegante, duurzame nagelset:
          elke behandeling wordt afgestemd op jouw wensen en lifestyle.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mt-6">
          {['Manicure', 'Pedicure', 'Gelnagels', 'Nagelverzorging op maat'].map((service) => (
            <div
              key={service}
              className="bg-[#F2C0BD] text-white px-6 py-6 rounded-xl min-w-[160px] sm:min-w-[200px] flex-1 text-center"
            >
              {service}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-5 py-20 bg-[#fff8f6] text-center flex flex-col items-center gap-6">
        <h2 className="text-2xl font-bold">Klaar voor prachtige nagels?</h2>

        <p className="max-w-xl text-base">
          Plan eenvoudig je afspraak en ervaar zelf de combinatie van professionele zorg en ontspanning.
        </p>

        <a
          href="https://booking.naturalnailsbylisa.be"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-7 py-3 bg-[#F2C0BD] text-white font-bold rounded-lg hover:bg-[#F5D1CC] transition-colors"
        >
          Boek je afspraak
        </a>
      </section>
    </div>
  );
}
