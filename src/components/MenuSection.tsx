import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface MenuItemProps {
  name: string;
  description: string;
  allergens?: string;
}

interface MenuSectionProps {
  title: string;
  subtitle?: string;
  items: MenuItemProps[];
}

const MenuItem = ({ name, description, allergens }: MenuItemProps) => {
  return (
    <div className="mb-4 md:mb-6 last:mb-0 px-2 md:px-0">
      <h4 className="font-serif text-base md:text-lg font-semibold text-elegant-brown mb-2 leading-tight">
        {name}
      </h4>
      <p className="text-elegant-dark-grey text-sm md:text-base leading-relaxed mb-2">
        {description}
      </p>
      {allergens && (
        <p className="text-elegant-grey text-xs italic">
          <span className="text-elegant-brown font-medium">Allergens:</span> {allergens}
        </p>
      )}
    </div>
  );
};

const MenuSection = ({ title, subtitle, items }: MenuSectionProps) => {
  return (
    <Card className="bg-card/80 border-elegant-beige shadow-sm mb-6 md:mb-8 mx-2 md:mx-0">
      <CardHeader className="pb-3 md:pb-4 px-4 md:px-6">
        <h3 className="font-serif text-xl md:text-2xl lg:text-3xl font-bold text-elegant-brown leading-tight">
          {title}
        </h3>
        {subtitle && (
          <p className="text-elegant-grey text-xs md:text-sm italic mt-1">
            {subtitle}
          </p>
        )}
        <div className="w-12 md:w-16 h-px bg-elegant-brown mt-2"></div>
      </CardHeader>
      <CardContent className="px-4 md:px-6">
        {items.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </CardContent>
    </Card>
  );
};

export default MenuSection;