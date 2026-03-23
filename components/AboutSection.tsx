import { CheckCircle2, BadgeCheck } from "lucide-react";
import Link from "next/link";
import Image from 'next/image';

const highlights = [
  "Solusi teknologi yang terukur dan skalabel",
  "Keamanan data tingkat tinggi & enkripsi mutakhir",
  "Dukungan teknis 24/7 oleh tenaga ahli",
  "Optimasi infrastruktur untuk efisiensi biaya",
];

export default function AboutSection() {
  return (
    <section id="tentang" className="pt-48 pb-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden h-52">
                <Image
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80"
                  alt="Modern Coding Workspace"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-primary rounded-2xl flex flex-col items-center justify-center h-52 shadow-lg">
                <span className="text-5xl font-extrabold text-white">12+</span>
                <span className="text-white/80 font-semibold mt-2 text-lg text-center">
                  Tahun Inovasi
                </span>
              </div>
              <div className="rounded-2xl overflow-hidden h-52">
                <Image
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80"
                  alt="Server Room"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden h-52">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80"
                  alt="IT Consultation Meeting"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div>
            <div className="section-badge inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-bold mb-4">
              <BadgeCheck className="w-4 h-4" />
              Tentang Kami
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
              Membangun Masa Depan Digital Dengan{" "}
              <span className="text-primary">Strategi yang Tepat</span>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Kami adalah mitra konsultan IT yang berdedikasi untuk membantu bisnis bertransformasi di era digital. 
              Dengan mengombinasikan keahlian teknis dan pemahaman bisnis, kami menghadirkan solusi 
              perangkat lunak dan infrastruktur yang tidak hanya canggih, tapi juga berdampak nyata.
            </p>

            <ul className="space-y-3 mb-8">
              {highlights.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <Link
              href="#layanan"
              className="inline-block bg-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-primary/90 transition-all shadow-lg"
            >
              Pelajari Layanan Kami
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}