import { Card } from "@/components/ui/card";
import castleHero from "@/assets/elegant-castle-hero.jpg";

const MenuHeader = () => {
  return (
    <div className="relative mb-8 md:mb-12 overflow-hidden rounded-lg">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${castleHero})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-elegant-cream/90 via-elegant-beige/80 to-elegant-cream/95" />
      <Card className="relative bg-transparent border-elegant-brown/20 text-center p-6 md:p-12 lg:p-16">
        <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-elegant-brown mb-4 md:mb-6">
          Bran Castle
        </h1>
        <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl text-elegant-dark-grey mb-6 md:mb-8">
          MENU
        </h2>
        <div className="w-24 md:w-32 h-px bg-elegant-brown mx-auto mb-6 md:mb-8"></div>
        <p className="text-elegant-dark-grey text-lg sm:text-xl md:text-2xl font-light mb-3 md:mb-4">
          September 28, 2025
        </p>
        <p className="text-elegant-grey text-sm sm:text-base md:text-lg px-4">
          An exclusive culinary journey in the legendary Transylvanian castle
        </p>
      </Card>
    </div>
  );
};

export default MenuHeader;