import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["700"] });
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={`${playfair.className} ${inter.className} min-h-screen flex flex-col bg-[#FFF8F9]`}>
      
      {/* Hero */}
      <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://au.gelous.co/cdn/shop/files/CC-AHOP_3_88001b16-09ac-4949-9663-11db960f196d_600x.jpg?v=1741081833"
          alt="Nail art"
          className="absolute inset-0 w-full h-full object-cover brightness-90"
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl sm:text-6xl font-bold text-[#4D3A3A] mb-4">Natural Nails by Lisa</h1>
          <p className="text-lg sm:text-xl text-[#5A4B4B] max-w-md mx-auto">
            Professionele nagelverzorging in een gezellige en ontspannen sfeer.
          </p>
          <a
            href="mailto:boek@naturalnailsbylisa.be"
            className="mt-8 inline-block bg-[#D88FA0] text-white px-8 py-3 rounded-full text-lg hover:bg-[#c77a93] transition"
          >
            Nu Afspraak Boeken
          </a>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-semibold text-[#4D3A3A] mb-12">Onze Diensten</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { title: "Manicure", desc: "Classic en gel manicures om uw handen stralend te houden." },
            { title: "Pedicure", desc: "Verwen uw voeten met een ontspannende pedicure." },
            { title: "Nagelkunst", desc: "Creatieve nail art en unieke ontwerpen voor elke stijl." },
          ].map((service) => (
            <div key={service.title} className="bg-white border border-[#E0D6D8] rounded-xl p-6 shadow-md hover:shadow-xl transition text-[#5A4B4B]">
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About / Story */}
      <section className="py-20 px-6 bg-[#FDEFF1] text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold text-[#4D3A3A] mb-6">Over Lisa</h2>
        <p className="text-[#5A4B4B] text-lg">
          Lisa is een gepassioneerde nagelstylist met jarenlange ervaring. Ze gelooft dat verzorgde nagels zelfvertrouwen geven en een persoonlijke touch aan elke look toevoegen.
        </p>
      </section>

      {/* Call to Action / Contact */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-semibold text-[#4D3A3A] mb-4">Klaar voor prachtige nagels?</h2>
        <p className="text-[#5A4B4B] mb-6">
          Bel ons op <strong>(555) 123-4567</strong> of stuur een mail naar <strong>boek@naturalnailsbylisa.be</strong>
        </p>
        <a
          href="mailto:boek@naturalnailsbylisa.be"
          className="inline-block bg-[#D88FA0] text-white px-8 py-3 rounded-full text-lg hover:bg-[#c77a93] transition"
        >
          Afspraak Boeken
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-[#E0D6D8] py-8 text-center text-[#5A4B4B]">
        &copy; {new Date().getFullYear()} Natural Nails by Lisa. Alle rechten voorbehouden.
      </footer>
    </div>
  );
}
