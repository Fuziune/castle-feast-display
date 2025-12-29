import MenuHeader from "@/components/MenuHeader";
import MenuSection from "@/components/MenuSection";
import { useEffect, useState } from "react";

interface MenuItem {
  name: string;
  description: string;
  allergens?: string;
}

interface MenuSection {
  title: string;
  subtitle?: string;
  items: MenuItem[];
}

interface MenuData {
  title: string;
  slug: string;
  sections: MenuSection[];
}

const MenuNew = () => {
  const [menuData, setMenuData] = useState<MenuData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadContent = async () => {
      try {
        // Load the menu JSON directly from the content folder
        const response = await fetch('/content/menus/menu-new.json');
        if (!response.ok) {
          throw new Error('Failed to load menu');
        }
        const data = await response.json();
        setMenuData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error loading menu:", error);
        setLoading(false);
      }
    };

    loadContent();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-elegant-brown text-xl">Loading menu...</div>
      </div>
    );
  }

  if (!menuData) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-elegant-brown text-xl">Menu not found</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-2 sm:px-4 py-4 md:py-8 max-w-4xl">
        <MenuHeader />

        {menuData.sections.map((section, index) => (
          <MenuSection
            key={index}
            title={section.title}
            subtitle={section.subtitle}
            items={section.items || []}
          />
        ))}

        <div className="text-center mt-8 md:mt-12 p-4 md:p-6">
          <div className="w-24 md:w-32 h-px bg-elegant-brown mx-auto mb-4"></div>
        </div>
      </div>
    </div>
  );
};

export default MenuNew;


