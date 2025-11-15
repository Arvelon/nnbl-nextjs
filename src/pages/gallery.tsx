// pages/index.tsx — Gallery with click-to-view detail

import { useState } from "react";
import Image from "next/image";
import Nav from "../components/Nav";
import path from "path";
import fs from "fs";

export default function Gallery({ images }: { images: string[] }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white text-[#333] font-sans antialiased">
      <Nav />

      <section id="services" className="py-24 px-6 text-center flex flex-col">
        <h2 className="text-3xl font-semibold">Galerij</h2>

        <div className="mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {images.map((src, idx) => (
            <div
              key={idx}
              className="cursor-pointer overflow-hidden rounded-lg"
              onClick={() => setSelectedImage(src)}
            >
              <Image
                src={src}
                alt={`Gallery ${idx}`}
                width={300}
                height={300}
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-3xl w-full">
            <button
              className="absolute top-2 right-2 text-white text-2xl font-bold"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <Image
              src={selectedImage}
              alt="Selected"
              width={1200}
              height={1200}
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="py-10 border-t text-center text-sm text-[#777]">
        © {new Date().getFullYear()} Natural Nails by Lisa
      </footer>
    </div>
  );
}

export async function getStaticProps() {
  const imagesDir = path.join(process.cwd(), "public/images");
  const filenames = fs.readdirSync(imagesDir);
  const images = filenames.map((file: unknown) => `/images/${file}`);
  return { props: { images } };
}
