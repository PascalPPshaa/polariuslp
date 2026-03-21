const stats = [
  { value: "50K+", label: "Lorem Ipsum" },
  { value: "120+", label: "Lorem Ipsum" },
  { value: "12+", label: "Lorem Ipsum" },
  { value: "99%", label: "Lorem Ipsum" },
];

export default function StatsSection() {
  return (
    <section className="py-16 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-4xl sm:text-5xl font-extrabold text-white mb-2">
                {stat.value}
              </p>
              <p className="text-white/70 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
