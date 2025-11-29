# 🍽️ What is For Dinner (Random Recipe Generator)

## 💡 Project Overview

A simple and interactive web application designed to help users quickly decide on their next meal by displaying a **random, detailed recipe** with a single click.

## ✨ Key Features

- **Instant Randomization:** Generates a new recipe instantly on page load and upon button click.
- **Comprehensive Recipe Details:** Displays all necessary information: Ingredients, Step-by-Step Instructions, Nutrition Facts, and Chief Tips.
- **Responsive UI:** Modern, clean, and fully responsive design implemented using **Bootstrap 5**.

## 🛠️ Tech Stack & Implementation Highlights

### Technologies Used

- **HTML5** (Structure)
- **CSS3** (Styling)
- **Bootstrap 5** (Responsive Framework)
- **Vanilla JavaScript** (Core Logic)

### 🚀 Core JS Implementation

The project logic (`script.js`) is built around these fundamental JavaScript concepts, which represent the **most important points** used:

1.  **Local Data Structure:** Recipes are stored efficiently as an **Array of Objects** within the JavaScript file, ensuring fast, dependency-free content loading.
2.  **DOM Manipulation:** Extensive use of `document.querySelector()` and the `.textContent` property to **dynamically update** all recipe details (name, ingredients, nutrition, etc.) without requiring a page refresh.
3.  **Randomization Logic:** Utilizing `Math.random()` and `Math.floor()` to select a unique, random index for fetching a new recipe from the data array every time the user interacts with the button.
4.  **Event Handling:** Implementing `addEventListener` to bind the recipe generation function to the "Try another recipe" button click event.
