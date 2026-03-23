import Link from "next/link";
import { Cpu, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  Layanan: [
    { label: "Software Development", href: "#" },
    { label: "IT Consulting", href: "#" },
    { label: "Cloud Infrastructure", href: "#" },
    { label: "Cyber Security", href: "#" },
  ],
  Perusahaan: [
    { label: "Tentang Kami", href: "#tentang" },
    { label: "Karir", href: "#" },
    { label: "Studi Kasus", href: "#" },
    { label: "Blog Teknologi", href: "#" },
  ],
  Dukungan: [
    { label: "Pusat Bantuan", href: "#" },
    { label: "Dokumentasi API", href: "#" },
    { label: "Syarat & Ketentuan", href: "#" },
    { label: "Kebijakan Privasi", href: "#" },
  ],
};

const socials = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer id="kontak" className="bg-[#0a0f1a] text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
                <Cpu className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">
                Polarius<span className="text-primary">Tech</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-8 max-w-sm">
              Mitra transformasi digital terpercaya yang menghadirkan solusi teknologi mutakhir. 
              Kami membantu bisnis mengakselerasi pertumbuhan melalui inovasi software dan 
              infrastruktur IT yang tangguh.
            </p>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <p>Jl. Gamping, Sleman, DI Yogyakarta</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <p>hello@polariustech.id</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <p>+62 123 456 7890</p>
              </div>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">{title}</h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-primary transition-colors duration-200 flex items-center group"
                    >
                      <span className="w-0 group-hover:w-2 h-[1px] bg-primary mr-0 group-hover:mr-2 transition-all"></span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800/50 flex flex-col md:row items-center justify-between gap-6">
          <div className="text-sm">
            © {new Date().getFullYear()} <span className="text-white font-medium">Polarius Tech Consulting</span>. Seluruh Hak Cipta Dilindungi.
          </div>
          
          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-10 h-10 bg-gray-800/50 border border-gray-700/50 rounded-full flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all duration-300"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}