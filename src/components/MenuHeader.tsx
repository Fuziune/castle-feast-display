import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";
import castleHero from "@/assets/elegant-castle-hero.jpg";

interface HeaderData {
  title: string;
  subtitle: string;
  description: string;
  heroImage?: string;
}

const MenuHeader = () => {
  const [headerData, setHeaderData] = useState<HeaderData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadContent = async () => {
      try {
        // Load the header JSON directly from the content folder
        const response = await fetch('/content/header/header.json');
        if (!response.ok) {
          throw new Error('Failed to load header');
        }
        const data = await response.json();
        setHeaderData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error loading header:", error);
        setLoading(false);
      }
    };

    loadContent();
  }, []);

  if (loading) {
    return null;
  }

  const title = headerData?.title || "Bran Castle";
  const subtitle = headerData?.subtitle || "MENU";
  const description = headerData?.description || "An exclusive culinary journey in the legendary Transylvanian castle";
  const heroImage = headerData?.heroImage || castleHero;

  return (
    <div className="relative mb-8 md:mb-12 overflow-hidden rounded-lg">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-elegant-cream/90 via-elegant-beige/80 to-elegant-cream/95" />
      <Card className="relative bg-transparent border-elegant-brown/20 text-center p-6 md:p-12 lg:p-16">
        <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-elegant-brown mb-4 md:mb-6">
          {title}
        </h1>
        <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl text-elegant-dark-grey mb-6 md:mb-8">
          {subtitle}
        </h2>
        <div className="w-24 md:w-32 h-px bg-elegant-brown mx-auto mb-6 md:mb-8"></div>
        <p className="text-elegant-dark-grey text-lg sm:text-xl md:text-2xl font-light mb-3 md:mb-4">
        </p>
        <p className="text-elegant-grey text-sm sm:text-base md:text-lg px-4">
          {description}
        </p>
      </Card>
    </div>
  );
};

export default MenuHeader;