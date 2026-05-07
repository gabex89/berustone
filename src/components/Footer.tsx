import { useLanguage } from '@/i18n/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-earth_dark py-8 border-t border-stone_warm/20">
      <div className="container mx-auto px-6 text-center">
        <p className="font-display text-lg font-semibold text-stone_light mb-1">BeRu Stone</p>
        <p className="text-stone_warm text-sm mb-3">{t.footer.tagline}</p>
        <p className="text-stone_warm/60 text-sm">{t.footer.rights}</p>
      </div>
    </footer>
  );
};

export default Footer;
