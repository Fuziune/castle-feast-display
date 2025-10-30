import MenuHeader from "@/components/MenuHeader";
import MenuSection from "@/components/MenuSection";

const MenuNew = () => {
  const starters = [
    {
      name: "Red velvet and butter with leurda",
      description: "Flour, red velvet base, eggs, butter, milk",
      allergens: "lactose, gluten, eggs"
    },
    {
      name: "Whole foie gras and rings of hard bread | pomegranate jelly | grape slices",
      description: "Foie gras, flour, pomegranate juice, gelatin, grapes",
      allergens: "gluten"
    },
    {
      name: "Rolls of beef carpaccio, goat cheese with pistachios",
      description: "Beef, goat cheese, pistachios",
      allergens: "milk, pistachios"
    },
    {
      name: "Pâté of poultry liver (chicken + duck) with chili pepper and ginger chutney",
      description: "Duck liver, chicken liver, butter, orange juice, nutmeg, red pepper, vinegar, salt, pepper, ginger",
      allergens: "gluten, milk"
    }
  ];

  const fish = [
    {
      name: "Crostini with smoked trout mousse and smoked fish carpaccio with pesto capers",
      description: "Smoked fish, onion, butter, mayonnaise, oil, lemon, capers",
      allergens: "fish, milk, gluten, egg"
    },
    {
      name: "Salmon trout roe cream with lime",
      description: "Roe, oil, semolina, lemon",
      allergens: "milk, gluten"
    }
  ];

  const cheesesAndMousses = [
    {
      name: "Matured cheeses with caraway seeds and fruits",
      description: "Milk, caraway seeds, grapes, walnut kernels",
      allergens: "milk, nuts"
    },
    {
      name: "Matured cheese with truffle seeds and fruits",
      description: "Milk, truffle ragout, apple slices, walnut kernels",
      allergens: "milk, nuts"
    },
    {
      name: "Assorted nuts",
      description: "Almonds, pistachios",
      allergens: "nuts"
    },
    {
      name: "Cream cheese mousse, avocado and lime zest",
      description: "Milk, avocado, lime zest, salt, pepper",
      allergens: "milk, gluten"
    }
  ];

  const miniTartine = [
    {
      name: "Mini-Tartine — hummus with beetroot | walnut oil | pomegranate seeds",
      description: "Chickpeas, tahini, beetroot juice, vegetable oil, walnut oil, pomegranate seeds",
      allergens: "sesame, walnuts, gluten"
    }
  ];

  const dessert = [
    {
      name: "Coliva in black crust",
      description: "Dehulled wheat, sugar, walnut, rum essence, biscuit",
      allergens: "gluten, walnut, peanuts"
    },
    {
      name: "Mini chocolate cake",
      description: "",
      allergens: "walnut, gluten, eggs, milk"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-2 sm:px-4 py-4 md:py-8 max-w-4xl">
        <MenuHeader />

        <MenuSection 
          title="Starters" 
          items={starters}
        />

        <MenuSection 
          title="Fish" 
          items={fish}
        />

        <MenuSection 
          title="Selection of matured cheeses and mousses" 
          items={cheesesAndMousses}
        />

        <MenuSection 
          title="Mini - Tartine"
          items={miniTartine}
        />

        <MenuSection 
          title="Dessert" 
          items={dessert}
        />

        <div className="text-center mt-8 md:mt-12 p-4 md:p-6">
          <div className="w-24 md:w-32 h-px bg-elegant-brown mx-auto mb-4"></div>
        </div>
      </div>
    </div>
  );
};

export default MenuNew;


