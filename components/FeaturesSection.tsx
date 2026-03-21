import {
  Users,
  ShieldCheck, 
  Cloud,    
  Code2,  
  Cpu, 
  BarChart3,  
  HeadphonesIcon,
  LayoutDashboard, 
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Konsultasi Strategis",
    desc: "Tim ahli kami membantu merancang roadmap teknologi yang sesuai dengan visi bisnis Anda.",
  },
  {
    icon: ShieldCheck,
    title: "Keamanan Siber",
    desc: "Perlindungan data berlapis dan audit keamanan berkala untuk menjaga aset digital Anda.",
  },
  {
    icon: Cloud,
    title: "Solusi Cloud",
    desc: "Migrasi dan pengelolaan infrastruktur cloud yang skalabel untuk efisiensi operasional.",
  },
  {
    icon: Code2,
    title: "Custom Software",
    desc: "Pengembangan aplikasi web dan mobile kustom dengan teknologi terbaru dan performa tinggi.",
  },
  {
    icon: Cpu,
    title: "Modernisasi Sistem",
    desc: "Memperbarui sistem legacy Anda menjadi arsitektur modern yang lebih cepat dan adaptif.",
  },
  {
    icon: BarChart3,
    title: "Analitik Data",
    desc: "Transformasi data mentah menjadi wawasan bisnis yang berharga melalui dashboard interaktif.",
  },
  {
    icon: HeadphonesIcon,
    title: "Managed Services 24/7",
    desc: "Dukungan teknis proaktif dan pemantauan sistem tanpa henti untuk menjamin uptime maksimal.",
  },
  {
    icon: LayoutDashboard,
    title: "Integrasi API",
    desc: "Menghubungkan berbagai platform bisnis Anda ke dalam satu ekosistem digital yang kohesif.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="layanan" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-primary uppercase bg-primary/10 rounded-full">
            Layanan Unggulan
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
            Solusi Teknologi Terintegrasi untuk <span className="text-primary">Akselerasi Bisnis Anda.</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {features.map(({ icon: Icon, title, desc }, i) => (
            <div key={i} className="group relative">
              <div className="w-14 h-14 bg-white shadow-md rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-all duration-300 transform group-hover:-translate-y-1">
                <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                {title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}