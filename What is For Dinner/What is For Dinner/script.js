let img = document.querySelector(".img");
let btn = document.querySelector(".btn");
let p_time = document.querySelector(".p_time");
let rating = document.querySelector(".rating");

let p_time2 = document.querySelector(".p_time2");
let viwers = document.querySelector(".viwers");
let food_type = document.querySelector(".food_type");
let Servings = document.querySelector(".Servings");
let food_country = document.querySelector(".food_country");
let food_name = document.querySelector(".food_name");
let food_description = document.querySelector(".food_description");
let desc1 = document.querySelector(".desc1");

let desc2 = document.querySelector(".desc2");
let desc3 = document.querySelector(".desc3");
let desc4 = document.querySelector(".desc4");
let desc5 = document.querySelector(".desc5");
let desc6 = document.querySelector(".desc6");
let desc7 = document.querySelector(".desc7");
let desc8 = document.querySelector(".desc8");
let instruction_desc_1 = document.querySelector(".instruction_desc_1");
let instruction_desc_2 = document.querySelector(".instruction_desc_2");
let instruction_desc_3 = document.querySelector(".instruction_desc_3");
let instruction_desc_4 = document.querySelector(".instruction_desc_4");
let instruction_desc_6 = document.querySelector(".instruction_desc_6");
let instruction_desc_5 = document.querySelector(".instruction_desc_5");
let Calories = document.querySelector(".Calories");
let Protein = document.querySelector(".Protein");
let Carbohydrates = document.querySelector(".Carbohydrates");
let Fat = document.querySelector(".Fat");
let Fiber = document.querySelector(".Fiber");
let message = document.querySelector(".message");
let Sodium = document.querySelector(".Sodium");
let tip_4 = document.querySelector(".tip_4");
let tip_3 = document.querySelector(".tip_3");
let tip_2 = document.querySelector(".tip_2");
let tip_1 = document.querySelector(".tip_1");
let contents = [
  {
    title: "French Onion Soup",
    img: "./imges/photo-1547592166-23ac45744acd.avif",
    rating: 4.7,
    reviews: "(267 reviews)",
    prepTime: "15 min",
    cookTime: 60,
    servings: 4,
    level: "Intermediate",
    cuisine: "Mediterranean",
    ingredients: [
      "4 large onions, thinly sliced",
      "1/2 cup white wine",
      "1 liter beef broth",
      "4 tablespoons butter",
      "2 tablespoons olive oil",
      "2 cloves garlic, minced",
      "1 teaspoon thyme",
      "Baguette slices & grated Gruyere cheese",
    ],
    instruction: [
      "Heat butter and olive oil over medium heat.",
      "Add sliced onions and cook slowly until deeply caramelized (35–40 minutes).",
      "Stir in garlic and thyme for 1 minute.",
      "Pour in white wine and deglaze the pot.",
      "Add beef broth, salt, and pepper; simmer for 20 minutes.",
      "Top with baguette slices and cheese, then broil until golden.",
    ],
    chiefTips: [
      "Use a heavy-bottomed pot for even caramelization.",
      "Slice onions uniformly to ensure consistent cooking.",
      "Do not rush caramelizing; low heat brings out sweetness.",
      "Serve immediately after broiling for best flavor.",
    ],
    nutrition: {
      calories: 380,
      protein: "18g",
      carbs: "36g",
      fat: "18g",
      fiber: "4g",
      sodium: "980mg",
    },
  },

  {
    title: "Chicken Alfredo Pasta",
    img: "./imges/photo-1565557623262-b51c2513a641.avif",
    rating: 4.8,
    reviews: "(421 reviews)",
    prepTime: "20 min",
    cookTime: 30,
    servings: 3,
    level: "Easy",
    cuisine: "Italian",
    ingredients: [
      "250g fettuccine pasta",
      "2 chicken breasts, sliced",
      "1 cup heavy cream",
      "1 cup grated parmesan",
      "2 tablespoons butter",
      "2 cloves garlic, minced",
      "Salt & black pepper to taste",
      "Fresh parsley for garnish",
    ],
    instruction: [
      "Boil pasta until al dente and set aside.",
      "Season chicken with salt and pepper, then sauté until golden.",
      "In the same pan, melt butter and add garlic for 1 minute.",
      "Pour in heavy cream and simmer for 2–3 minutes.",
      "Add parmesan and stir until sauce thickens.",
      "Combine pasta with sauce and chicken, garnish with parsley.",
    ],
    chiefTips: [
      "Use freshly grated parmesan for better flavor.",
      "Reserve some pasta water to adjust sauce consistency.",
      "Do not overcook chicken to keep it juicy.",
      "Serve immediately for creamy texture.",
    ],
    nutrition: {
      calories: 520,
      protein: "32g",
      carbs: "45g",
      fat: "22g",
      fiber: "3g",
      sodium: "640mg",
    },
  },

  {
    title: "Beef Tacos",
    img: "./imges/photo-1529692236671-f1f6cf9683ba.png",
    rating: 4.2,
    reviews: "(310 reviews)",
    prepTime: "10 min",
    cookTime: 15,
    servings: 4,
    level: "Easy",
    cuisine: "Mexican",
    ingredients: [
      "500g ground beef",
      "1 packet taco seasoning",
      "8 small tortillas",
      "1 cup shredded lettuce",
      "1 cup cheddar cheese",
      "1 diced tomato",
      "1 chopped onion",
      "Sour cream and salsa for serving",
    ],
    instruction: [
      "Cook ground beef in a skillet until browned.",
      "Add taco seasoning and 1/2 cup water and simmer.",
      "Warm tortillas in a pan or microwave.",
      "Assemble tacos with beef, lettuce, cheese, tomatoes, and onion.",
      "Top with sour cream and salsa.",
      "Serve immediately while warm.",
    ],
    chiefTips: [
      "Use fresh tortillas for best texture.",
      "Mix beef thoroughly with seasoning for even flavor.",
      "Add toppings just before serving to keep crunch.",
      "Warm tortillas slightly to prevent cracking.",
    ],
    nutrition: {
      calories: "290 kcal",
      protein: "20g",
      carbs: "28g",
      fat: "12g",
      fiber: "2g",
      sodium: "760mg",
    },
  },

  {
    title: "Vegetable Stir Fry",
    img: "./imges/photo-1455619452474-d2be8b1e70cd.png",
    rating: 4.6,
    reviews: "(189 reviews)",
    prepTime: 11,
    cookTime: 10,
    servings: 2,
    level: "Easy",
    cuisine: "Asian",
    ingredients: [
      "1 bell pepper, sliced",
      "1 carrot, sliced",
      "1 broccoli head, chopped",
      "2 tablespoons soy sauce",
      "1 tablespoon sesame oil",
      "1 tablespoon vegetable oil",
      "2 cloves garlic, minced",
      "1 teaspoon grated ginger",
    ],
    instruction: [
      "Heat vegetable oil in a wok over high heat.",
      "Add garlic and ginger and stir for 30 seconds.",
      "Add all vegetables and stir-fry for 4–5 minutes.",
      "Pour in soy sauce and sesame oil and mix well.",
      "Cook for an additional 2 minutes.",
      "Serve hot with rice or noodles.",
    ],
    chiefTips: [
      "Cut vegetables uniformly for even cooking.",
      "Stir constantly to avoid burning.",
      "Use high heat for a crisp texture.",
      "Serve immediately for best flavor and color.",
    ],
    nutrition: {
      calories: 210,
      protein: "8g",
      carbs: "32g",
      fat: "6g",
      fiber: "5g",
      sodium: "540mg",
    },
  },

  {
    title: "Margherita Pizza",
    img: "./imges/pizaa.png",
    rating: 4.9,
    reviews: "(512 reviews)",
    prepTime: "25 min",
    cookTime: 60,
    servings: 2,
    level: "Intermediate",
    cuisine: "Italian",
    ingredients: [
      "1 pizza dough",
      "1/2 cup tomato sauce",
      "200g fresh mozzarella",
      "Fresh basil leaves",
      "1 tablespoon olive oil",
      "1 teaspoon oregano",
      "1/2 teaspoon garlic powder",
      "Pinch of salt & black pepper",
    ],
    instruction: [
      "Preheat oven to the highest temperature possible.",
      "Spread the pizza dough on a tray.",
      "Add tomato sauce and season with oregano, garlic powder, salt, and pepper.",
      "Place mozzarella slices evenly.",
      "Bake for 12–15 minutes until crust is golden.",
      "Garnish with fresh basil and drizzle olive oil before serving.",
    ],
    chiefTips: [
      "Use a pizza stone for a crispier crust.",
      "Do not overload with toppings to prevent sogginess.",
      "Brush edges with olive oil for golden crust.",
      "Serve immediately after baking for best flavor.",
    ],
    nutrition: {
      calories: 430,
      protein: "19g",
      carbs: "50g",
      fat: "14g",
      fiber: "3g",
      sodium: "720mg",
    },
  },
];

let last_index = -1;

btn.onclick = () => {
  let random_index = Math.floor(Math.random() * contents.length);
  while (last_index === random_index) {
    random_index = Math.floor(Math.random() * contents.length);
  }
  last_index = random_index;
  console.log(random_index);

  if (contents[random_index].cookTime > 45) {
    message.style.display = "block";
  } else {
    message.style.display = "none";
  }
  console.log(contents[random_index].cookTime);

  img.src = contents[random_index].img;
  p_time.textContent = contents[random_index].prepTime;
  rating.textContent = contents[random_index].rating;
  p_time2.textContent = contents[random_index].cookTime;
  Servings.textContent = contents[random_index].servings;
  viwers.textContent = contents[random_index].reviews;
  food_type.textContent = contents[random_index].level;
  food_country.textContent = contents[random_index].cuisine;
  food_name.textContent = contents[random_index].title;
  food_description.textContent = contents[random_index].food_description;
  desc1.textContent = contents[random_index].ingredients[0];
  desc2.textContent = contents[random_index].ingredients[1];
  desc3.textContent = contents[random_index].ingredients[2];
  desc4.textContent = contents[random_index].ingredients[3];
  desc5.textContent = contents[random_index].ingredients[4];
  desc6.textContent = contents[random_index].ingredients[5];
  desc7.textContent = contents[random_index].ingredients[6];
  desc8.textContent = contents[random_index].ingredients[7];
  instruction_desc_1.textContent = contents[random_index].instruction[0];
  instruction_desc_2.textContent = contents[random_index].instruction[1];
  instruction_desc_3.textContent = contents[random_index].instruction[2];
  instruction_desc_4.textContent = contents[random_index].instruction[3];
  instruction_desc_5.textContent = contents[random_index].instruction[4];
  instruction_desc_6.textContent = contents[random_index].instruction[5];
  Calories.textContent = contents[random_index].nutrition.calories;
  Protein.textContent = contents[random_index].nutrition.protein;
  Carbohydrates.textContent = contents[random_index].nutrition.carbs;
  Fat.textContent = contents[random_index].nutrition.fat;
  Fiber.textContent = contents[random_index].nutrition.fiber;
  Sodium.textContent = contents[random_index].nutrition.sodium;
  tip_1.textContent = contents[random_index].chiefTips[0];
  tip_2.textContent = contents[random_index].chiefTips[1];
  tip_3.textContent = contents[random_index].chiefTips[2];
  tip_4.textContent = contents[random_index].chiefTips[3];
};
