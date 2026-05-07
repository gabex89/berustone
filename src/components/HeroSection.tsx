import { useLanguage } from '@/i18n/LanguageContext';
import heroImage from '@/assets/hero-railway.jpg';

const HeroSection = () => {
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-earth_dark/70" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <p className="text-amber font-semibold tracking-[0.3em] uppercase text-sm mb-4">
          {t.hero.subtitle}
        </p>
        <h1 className="font-display text-5xl md:text-7xl font-bold text-secondary mb-6 leading-tight">
          {t.hero.title}
        </h1>
        <p className="text-stone_light text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          {t.hero.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollTo('contact')}
            className="bg-primary hover:bg-forest_light text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:shadow-lg"
          >
            {t.hero.cta}
          </button>
          <button
            onClick={() => scrollTo('services')}
            className="border-2 border-stone_light text-stone_light hover:bg-stone_light/10 px-8 py-4 rounded-lg font-semibold text-lg transition-all"
          >
            {t.hero.learnMore}
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
