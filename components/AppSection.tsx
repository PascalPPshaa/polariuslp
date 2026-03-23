import { ArrowDownRight } from "lucide-react";

export default function AppSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1600&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#4B3FE4]/95 via-[#6B3FA0]/90 to-[#C0394B]/85" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-6 border border-white/30">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              Official Aplikasi
            </div>

            <h2 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
              Segera Konsultasi Bersama Kami dan Nikmati Pelayanan yang Lebih Cepat!
            </h2>

            <p className="text-white/80 leading-relaxed mb-8 max-w-md">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry &apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>

            <p className="text-white font-semibold flex items-center gap-2 mb-5">
              Unduh Sekarang <ArrowDownRight className="w-4 h-4" />
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                className="flex items-center gap-3 bg-black text-white px-5 py-3 rounded-xl hover:bg-gray-900 transition-colors"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.18 23.76c.33.19.71.24 1.09.15l12.45-7.19-2.67-2.67-10.87 9.71zm-1.15-20.54C1.76 3.62 2 4.1 2 4.63v14.74c0 .53.24 1.01.51 1.41l.1.1 8.26-8.26v-.19L2.03 3.22zM20.49 10.7l-2.67-1.54-3.01 3.01 3.01 3.01 2.68-1.55c.76-.44.76-1.5-.01-1.93zM4.27.24C3.89.14 3.51.19 3.18.38L14.14 11.33l2.67-2.67L4.27.24z" />
                </svg>
                <div>
                  <p className="text-[10px] text-gray-400">GET IT ON</p>
                  <p className="text-sm font-semibold">Google Play</p>
                </div>
              </a>

              <a
                href="#"
                className="flex items-center gap-3 bg-black text-white px-5 py-3 rounded-xl hover:bg-gray-900 transition-colors"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div>
                  <p className="text-[10px] text-gray-400">Download on the</p>
                  <p className="text-sm font-semibold">App Store</p>
                </div>
              </a>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-56 h-[450px] bg-white/10 backdrop-blur-sm rounded-[3rem] border-2 border-white/20 flex items-center justify-center shadow-2xl">
                <div className="w-48 h-[420px] bg-gradient-to-b from-gray-900 to-gray-800 rounded-[2.5rem] flex items-center justify-center">
                  <div className="text-center text-white px-4">
                    <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold text-lg">P</span>
                    </div>
                    <p className="font-bold text-sm">Polarius</p>
                    <p className="text-xs text-gray-400 mt-1">Pelayanan Terbaik</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-3 shadow-xl">
                <p className="text-xs font-bold text-gray-800">📦 Testimoni</p>
                <p className="text-primary font-extrabold text-lg">1,240+</p>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-3 shadow-xl">
                <p className="text-xs font-bold text-gray-800">⭐ Rating</p>
                <p className="text-yellow-500 font-extrabold text-lg">4.9/5</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
