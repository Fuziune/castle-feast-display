import MenuHeader from "@/components/MenuHeader";
import MenuSection from "@/components/MenuSection";

const Index = () => {
  const aperitifsAndTarts = [
    {
      name: "Pie with Mushrooms and Greens",
      description: "Mix of mushrooms, flour, truffle ragu, onion cooked in wine, product vegetable (cooking cream), egg, oil, garlic, vegetables",
      allergens: "eggs, gluten"
    },
    {
      name: "Cake Vegetable Appetizer Brunoise",
      description: "Vegetables brunoise, peppers red, zucchini, onion, carrots colored, flour, egg, oil, greens",
      allergens: "eggs, gluten"
    }
  ];

  const spreadsAndDips = [
    {
      name: "Eggplant Cream Classic with Onion and Mayonnaise",
      description: "Eggplant, onion, egg, oil, salt",
    },
    {
      name: "Eggplant Salad with Peppers Baked, Honey and Apple Cider Vinegar",
      description: "Eggplant, peppers baked, oil, vinegar, honey, salt, pepper",
    }
  ];

  const fishSelection = [
    {
      name: "Trout Roe Cream",
      description: "Caviar, oil, semolina, lemon",
      allergens: "milk, gluten"
    },
    {
      name: "Trout Cream Smoked with Butter and Capers",
      description: "Fish smoked, onion, butter, mayonnaise, oil, lemon and capers",
      allergens: "fish, milk, gluten, egg"
    }
  ];

  const cheeseSelection = [
    {
      name: "Cheese Seasoned with Cumin and Vegetables Sotto Olio",
      description: "Milk, cumin, olives, oregano, tomatoes dry - olives, tomatoes dry"
    },
    {
      name: "Goat Cheese Cream with Peppers Baked and Basil Pesto",
      description: "Milk, pepper baked, greens, oil, lemon"
    },
    {
      name: "Cheese Mousse Blue with Green Apple Puree and Blueberries",
      description: "Cream cheese, cheese Rokeford, green apple puree, sugar",
      allergens: "milk"
    }
  ];

  const meatSelection = [
    {
      name: "Raw Prosciutto with Yellow Watermelon",
      description: "Premium prosciutto paired with fresh yellow watermelon"
    },
    {
      name: "Duck Breast Smoked (Carpaccio) with Apricots",
      description: "Delicately smoked duck breast served carpaccio style with fresh apricots"
    },
    {
      name: "Raw-Dried Sausages with Nuts and Hazelnuts",
      description: "Traditional cured sausages with mixed nuts and hazelnuts",
      allergens: "peanuts, nuts"
    }
  ];

  const warmBuffet = [
    {
      name: "Turkey Fillet with Curry Sauce and Ginger & Basmati Rice",
      description: "Turkey meat, vegetable cooking product, curry, oil, ginger"
    },
    {
      name: "Beef Slow Cooked in Tomato Reduction with Sweet Corn and Red Beans",
      description: "Beef, onion, pepper, tomato sauce, sweet corn, beans tomato, celery, oil, salt, pepper",
      allergens: "gluten, celery"
    },
    {
      name: "Ratatouille with Parmesan & Black Rice",
      description: "Eggplant, tomato, zucchini, pepper colorful, oil, oregano, salt, pepper, rice, oil, salt pepper",
      allergens: "milk, mustard"
    }
  ];

  const breadSelection = [
    {
      name: "Various Types of Artisanal Bread",
      description: "Selection of breads with potatoes, seeds, and black varieties",
      allergens: "gluten, sesame"
    }
  ];

  const desserts = [
    {
      name: "Transylvanian Cake Mix - Three Varieties",
      description: "Traditional Transylvanian cakes in fruit, chocolate and vanilla varieties",
      allergens: "gluten, eggs, nuts, peanuts"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-2 sm:px-4 py-4 md:py-8 max-w-4xl">
        <MenuHeader />
        
        <MenuSection 
          title="Aperitif Selection" 
          subtitle="Cold Starter - Tarts, Finger Food, Canapés, Tapas"
          items={aperitifsAndTarts}
        />

        <MenuSection 
          title="Selection of Spreads & Dips" 
          items={spreadsAndDips}
        />

        <MenuSection 
          title="Fish Selection" 
          items={fishSelection}
        />

        <MenuSection 
          title="Cheese Selection" 
          subtitle="Frostings and Mousses"
          items={cheeseSelection}
        />

        <MenuSection 
          title="Selection of Cured Meats" 
          subtitle="Raw-Dried Meat Products / Pastrami"
          items={meatSelection}
        />

        <MenuSection 
          title="Warm Buffet" 
          subtitle="Warm Corner"
          items={warmBuffet}
        />

        <MenuSection 
          title="Artisanal Breads" 
          items={breadSelection}
        />

        <MenuSection 
          title="Dessert" 
          subtitle="Transylvanian Cakes"
          items={desserts}
        />

        <div className="text-center mt-8 md:mt-12 p-4 md:p-6">
          <div className="w-24 md:w-32 h-px bg-elegant-brown mx-auto mb-4"></div>
          <p className="text-elegant-grey text-xs md:text-sm italic px-4">
            Crafted with passion in the shadows of Bran Castle
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;