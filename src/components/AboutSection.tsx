import { useLanguage } from '@/i18n/LanguageContext';

const AboutSection = () => {
  const { t } = useLanguage();

  const ewcCodes = [
    { code: '17 05 03*', placeholder: t.about.ewcPlaceholder1 },
    { code: '17 05 07*', placeholder: t.about.ewcPlaceholder2 },
    { code: '17 05 04', placeholder: t.about.ewcPlaceholder3 },
    { code: '17 05 08', placeholder: t.about.ewcPlaceholder4 },
  ];

  const rCodes = [
    { code: 'R5', desc: t.about.r5 },
    { code: 'R5a', desc: t.about.r5a },
    { code: 'R5c', desc: t.about.r5c },
    { code: 'R12', desc: t.about.r12 },
    { code: 'R13', desc: t.about.r13 },
  ];

  return (
    <section id="about" className="py-24 bg-earth_dark">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-amber font-semibold tracking-widest uppercase text-sm mb-2">{t.about.subtitle}</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-secondary mb-6">{t.about.title}</h2>
          <p className="text-stone_light text-lg leading-relaxed">{t.about.description}</p>
        </div>

        <div className="max-w-4xl mx-auto mb-20">
          <h3 className="text-center font-display text-2xl md:text-3xl font-bold text-secondary mb-8">{t.about.ewcTitle}</h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {ewcCodes.map((item, index) => (
              <div key={index} className="bg-card/10 border border-amber/20 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 bg-amber/20 text-amber font-mono font-bold text-lg px-3 py-2 rounded-lg">
                    {item.code}
                  </div>
                  <div className="flex-1">
                    <p className="text-stone_light italic">{item.placeholder}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-center font-display text-2xl md:text-3xl font-bold text-secondary mb-4">{t.about.rTitle}</h3>
          <p className="text-stone_light/80 text-center text-sm md:text-base leading-relaxed mb-10 max-w-3xl mx-auto">
            {t.about.rIntro}
          </p>
          <div className="space-y-4">
            {rCodes.map((item) => (
              <div key={item.code} className="bg-card/10 border border-amber/20 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 bg-amber/20 text-amber font-mono font-bold text-lg px-3 py-2 rounded-lg min-w-[64px] text-center">
                    {item.code}
                  </div>
                  <p className="text-stone_light leading-relaxed flex-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
