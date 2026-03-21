import Link from "next/link";
import { ArrowUpRight, Calendar, User } from "lucide-react";

const news = [
  {
    category: "Pengumuman",
    date: "21 Maret, 2026",
    author: "Admin",
    title:
      "Lorem Ipsum",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
  },
  {
    category: "Pengumuman",
    date: "21 Maret, 2026",
    author: "Admin",
    title:
      "Lorem Ipsum",
    img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&q=80",
  },
  {
    category: "Pengumuman",
    date: "21 Maret, 2026",
    author: "Admin",
    title:
      "Lorem Ipsum",
    img: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&q=80",
  },
];

export default function NewsSection() {
  return (
    <section id="berita" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Update berita terbaru kami
          </h2>
          <Link
            href="#"
            className="bg-primary text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-primary-dark transition-colors"
          >
            Semua Berita
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item, i) => (
            <article
              key={i}
              className="group rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {item.category}
                </span>
              </div>

              {/* Body */}
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                  <span className="flex items-center gap-1">
                    <User className="w-3.5 h-3.5" />
                    Oleh {item.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.date}
                  </span>
                </div>
                <h3 className="font-bold text-gray-900 mb-4 leading-snug group-hover:text-primary transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <Link
                  href="#"
                  className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm hover:gap-3 transition-all"
                >
                  Baca Selengkapnya
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
