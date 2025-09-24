import { Card } from "@/components/ui/card";
import castleHero from "@/assets/bran-castle-hero.jpg";

const MenuHeader = () => {
  return (
    <div className="relative mb-12 overflow-hidden rounded-lg">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${castleHero})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-castle-dark/70 via-castle-dark/50 to-castle-dark/90" />
      <Card className="relative bg-transparent border-castle-burgundy/30 text-center p-12 md:p-16">
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-castle-gold mb-6 drop-shadow-lg">
          Bran Castle
        </h1>
        <h2 className="font-serif text-3xl md:text-4xl text-castle-cream mb-8 drop-shadow-md">
          Fine Dining Experience
        </h2>
        <div className="w-32 h-px bg-castle-gold mx-auto mb-8"></div>
        <p className="text-castle-cream text-xl md:text-2xl font-light mb-4 drop-shadow-md">
          September 28, 2025
        </p>
        <p className="text-castle-cream/90 text-base md:text-lg drop-shadow-sm">
          An exclusive culinary journey in the legendary Transylvanian castle
        </p>
      </Card>
    </div>
  );
};

export default MenuHeader;