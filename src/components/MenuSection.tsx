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
    <div className="mb-6 last:mb-0">
      <h4 className="font-serif text-lg font-semibold text-castle-gold mb-2">
        {name}
      </h4>
      <p className="text-castle-cream/90 text-sm leading-relaxed mb-2">
        {description}
      </p>
      {allergens && (
        <p className="text-muted-foreground text-xs italic">
          <span className="text-castle-burgundy font-medium">Allergens:</span> {allergens}
        </p>
      )}
    </div>
  );
};

const MenuSection = ({ title, subtitle, items }: MenuSectionProps) => {
  return (
    <Card className="bg-card/50 border-border/50 mb-8">
      <CardHeader className="pb-4">
        <h3 className="font-serif text-2xl md:text-3xl font-bold text-castle-burgundy">
          {title}
        </h3>
        {subtitle && (
          <p className="text-muted-foreground text-sm italic">
            {subtitle}
          </p>
        )}
        <div className="w-16 h-px bg-castle-gold"></div>
      </CardHeader>
      <CardContent>
        {items.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </CardContent>
    </Card>
  );
};

export default MenuSection;