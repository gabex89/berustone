import { useLanguage } from '@/i18n/LanguageContext';

const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    { code: 'E02-01', title: t.services.items.e0201 },
    { code: 'E02-05', title: t.services.items.e0205 },
    { code: 'E02-06', title: t.services.items.e0206 },
    { code: 'E02-13', title: t.services.items.e0213 },
    { code: 'E02-15', title: t.services.items.e0215 },
    { code: 'E02-17', title: t.services.items.e0217 },
    { code: 'E03-09', title: t.services.items.e0309 },
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-2">{t.services.subtitle}</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">{t.services.title}</h2>
        </div>

        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-4">
          {services.map((s) => (
            <div
              key={s.code}
              className="bg-card rounded-xl p-5 border border-border hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex items-start gap-4"
            >
              <div className="shrink-0 bg-primary/10 text-primary font-mono font-bold text-sm px-3 py-2 rounded-lg">
                {s.code}
              </div>
              <p className="text-foreground font-medium leading-snug pt-1">{s.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
