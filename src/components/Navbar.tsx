import { useLanguage } from '@/i18n/LanguageContext';
import logo from '@/assets/logo.png';

const Navbar = () => {
  const { lang, setLang, t } = useLanguage();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollTo('hero')}>
          <img src={logo} alt="BeRu Stone" className="h-10 w-10 object-contain" />
          <span className="font-display text-xl font-bold text-foreground">BeRu Stone</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollTo('hero')} className="text-muted-foreground hover:text-foreground transition-colors font-medium">
            {t.nav.home}
          </button>
          <button onClick={() => scrollTo('services')} className="text-muted-foreground hover:text-foreground transition-colors font-medium">
            {t.nav.services}
          </button>
          <button onClick={() => scrollTo('about')} className="text-muted-foreground hover:text-foreground transition-colors font-medium">
            {t.nav.about}
          </button>
          <button onClick={() => scrollTo('contact')} className="text-muted-foreground hover:text-foreground transition-colors font-medium">
            {t.nav.contact}
          </button>
        </div>

        <div className="flex items-center gap-2 bg-muted rounded-full p-1">
          <button
            onClick={() => setLang('hu')}
            className={`px-3 py-1 rounded-full text-sm font-semibold transition-all ${
              lang === 'hu' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            HU
          </button>
          <button
            onClick={() => setLang('en')}
            className={`px-3 py-1 rounded-full text-sm font-semibold transition-all ${
              lang === 'en' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            EN
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
