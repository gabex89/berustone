import { useLanguage } from '@/i18n/LanguageContext';
import { MapPin, Phone, Mail } from 'lucide-react';

const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-2">{t.contact.subtitle}</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">{t.contact.title}</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center gap-4 p-8 rounded-xl bg-card border border-border">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
              <MapPin className="w-7 h-7 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-1">{t.contact.address}</h4>
              <p className="text-muted-foreground">6753 Szeged, hrsz.: 02047/27 <br />Magyarország / Hungary</p>
            </div>
          </div>

          <div className="flex flex-col items-center text-center gap-4 p-8 rounded-xl bg-card border border-border">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
              <Phone className="w-7 h-7 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-1">{t.contact.phoneLabel}</h4>
              <p className="text-muted-foreground">+36 20 932 3082</p>
            </div>
          </div>

          <div className="flex flex-col items-center text-center gap-4 p-8 rounded-xl bg-card border border-border">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
              <Mail className="w-7 h-7 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-1">{t.contact.emailLabel}</h4>
              <p className="text-muted-foreground">info@berustone.hu</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

