import Link from "next/link";
import { ArrowRight, Briefcase, CheckCircle, Code2 } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-visible pt-16 pb-48">
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1600&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-blue-900/70" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-6 border border-white/30">
            <CheckCircle className="w-4 h-4" />
            Mitra Konsultan IT Terpercaya
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            Solusi Teknologi yang{" "}
            <span className="text-yellow-300">Mengerti Prioritas Anda</span>
          </h1>

          <p className="text-white/85 text-lg leading-relaxed mb-8 max-w-md">
            Menyederhanakan Kompleksitas, Mempercepat Inovasi. Kami menghadirkan strategi IT yang adaptif dan terukur.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="https://wa.me/6287840866596?text=Halo%20PolariusTech,%20saya%20ingin%20konsultasi%20mengenai%20layanan%20IT."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-primary font-bold px-7 py-3.5 rounded-full hover:bg-yellow-300 hover:text-primary transition-all duration-300 shadow-lg"
            >
              Konsultasi Sekarang
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="#layanan"
              className="inline-flex items-center gap-2 border-2 border-white/60 text-white font-semibold px-7 py-3.5 rounded-full hover:bg-white/10 transition-all duration-300"
            >
              Lihat Layanan
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 transform translate-y-1/2 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 shadow-2xl rounded-2xl overflow-hidden border border-gray-100">
            <div className="bg-white p-10 md:p-12 border-r border-gray-50 flex flex-col">
              <Code2 className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Pengembangan Aplikasi</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Membangun solusi perangkat lunak kustom yang inovatif dan user-friendly untuk mendukung pertumbuhan bisnis Anda.
              </p>
              <Link href="#" className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all mt-auto">
                Baca Selengkapnya <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            
            <div className="bg-white p-10 md:p-12 flex flex-col">
              <Briefcase className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Strategi IT & Bisnis</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Transformasi proses bisnis Anda dengan roadmap teknologi yang tepat sasaran untuk efisiensi maksimal.
              </p>
              <Link href="#" className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all mt-auto">
                Baca Selengkapnya <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}