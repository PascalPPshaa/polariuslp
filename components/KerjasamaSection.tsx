import { Handshake } from "lucide-react";
import Link from "next/link";

const partners = [
  "Pascal", "Abra", "Madek", "Majid", "Pascal", "Abra", "Madek", "Majid",
];

export default function KerjasamaSection() {
  return (
    <section className="py-16 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-10">
          <div>
            <div className="section-badge mb-2">
              <Handshake className="w-4 h-4" />
              Kerjasama Polarius
            </div>
            <h2 className="text-2xl font-extrabold text-gray-900">
              Partner Teknologi Terpercaya
            </h2>
          </div>
          <Link href="#" className="btn-primary text-sm">
            Lihat Semua Partner
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {partners.map((name) => (
            <div
              key={name}
              className="bg-white rounded-xl py-5 px-4 flex items-center justify-center shadow-sm border border-gray-100 hover:border-primary/30 hover:shadow-md transition-all duration-300"
            >
              <span className="font-bold text-gray-600 text-sm">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
