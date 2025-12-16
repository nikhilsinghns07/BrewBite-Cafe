// Image paths - now using public folder URLs for Next.js
const interiorImg = '/generated_images/cozy_modern_cafe_interior_with_warm_lighting.png';
const latteImg = '/generated_images/artistic_latte_coffee_in_a_ceramic_cup.png';
const sandwichImg = '/generated_images/fresh_gourmet_club_sandwich.png';
const pizzaImg = '/generated_images/artisanal_pizza_with_fresh_toppings.png';
const burgerImg = '/generated_images/gourmet_burger_with_cheese_and_veggies.png';
const friesImg = '/generated_images/crispy_golden_french_fries.png';
const mocktailImg = '/generated_images/colorful_refreshing_mocktail_drink.png';

export type Review = {
  id: string;
  user: string;
  rating: number;
  comment: string;
  date: string;
};

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  reviews: Review[];
  featured?: boolean;
};

export const categories = ["Coffee", "Sandwich", "Pizza", "Burger", "Fries", "Mocktails"];

export const products: Product[] = [
  {
    id: "1",
    name: "Artisan Latte",
    description: "Rich espresso with steamed velvety milk and intricate latte art. A classic comfort.",
    price: 5.50,
    category: "Coffee",
    image: latteImg,
    featured: true,
    reviews: [
      { id: "r1", user: "Alice M.", rating: 5, comment: "Best latte in town!", date: "2023-10-15" },
      { id: "r2", user: "John D.", rating: 4, comment: "Smooth and creamy.", date: "2023-11-02" }
    ]
  },
  {
    id: "2",
    name: "Espresso Doppio",
    description: "Double shot of our signature house blend. Strong, bold, and awakening.",
    price: 3.50,
    category: "Coffee",
    image: latteImg, // Reusing for now as placeholder for coffee
    reviews: []
  },
  {
    id: "3",
    name: "Club Supreme",
    description: "Triple-decker with roasted turkey, crispy bacon, fresh lettuce, and tomato on toasted artisan bread.",
    price: 12.00,
    category: "Sandwich",
    image: sandwichImg,
    reviews: [
      { id: "r3", user: "Sarah K.", rating: 5, comment: "Huge portion and very fresh ingredients.", date: "2023-09-20" }
    ]
  },
  {
    id: "4",
    name: "Margherita Rustic",
    description: "San Marzano tomato sauce, fresh buffalo mozzarella, and basil on a wood-fired crust.",
    price: 14.00,
    category: "Pizza",
    image: pizzaImg,
    featured: true,
    reviews: [
      { id: "r4", user: "Mike R.", rating: 5, comment: "Authentic Italian taste.", date: "2023-12-05" }
    ]
  },
  {
    id: "5",
    name: "Classic Cheeseburger",
    description: "Angus beef patty, cheddar cheese, lettuce, tomato, and house sauce on a brioche bun.",
    price: 11.50,
    category: "Burger",
    image: burgerImg,
    reviews: []
  },
  {
    id: "6",
    name: "Golden Truffle Fries",
    description: "Crispy french fries tossed with white truffle oil, parmesan, and sea salt.",
    price: 6.50,
    category: "Fries",
    image: friesImg,
    reviews: [
      { id: "r5", user: "Emily W.", rating: 4, comment: "Addictive!", date: "2023-11-12" }
    ]
  },
  {
    id: "7",
    name: "Sunset Mojito",
    description: "Refreshing blend of mint, lime, soda, and a splash of grenadine. Alcohol-free.",
    price: 7.00,
    category: "Mocktails",
    image: mocktailImg,
    featured: true,
    reviews: []
  }
];

export const heroImage = interiorImg;
