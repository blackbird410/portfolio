import rps from "./projects_img/rps.png";
import landingPage from "./projects_img/Product_landing_page_2.png";
import arcane from "./projects_img/arcane.png";
import library from "./projects_img/library.png";
import todoList from "./projects_img/todo-list.png";
import sketchpad from "./projects_img/Sketchpad.png";
import signUp from "./projects_img/simple-form.png";
import ticTacToe from "./projects_img/tic-tac-toe.png";
import weatherApp from "./projects_img/weather-app.png";
import imageSlider from "./projects_img/image-slider.png";
import calculator from "./projects_img/Odin-Calculator.png";
import adminDashboard from "./projects_img/admin-dashboard.png";
import restaurant from "./projects_img/restaurant-page.png";
import signUp2 from "./projects_img/second-sign-up-form.png";
import cvApp from "./projects_img/cv-app.png";
import memoryCard from "./projects_img/memory-card.png";
import shoppingCart from "./projects_img/shopping-cart.png";
import todoApp from "./projects_img/todo-app.png";

export const getRepoLink = (p) => {
    let repoLink = p.link.split("blackbird410.github.io");
    return p.link.match("vercel")
      ? p.githubLink
      : `${repoLink[0]}github.com/blackbird410${repoLink[1]}`;
} 

export const projects = [
  {
    name: "Shopping Cart",
    link: "https://shopping-cart-neil.vercel.app/",
    githubLink: "https://github.com/blackbird410/shopping-cart",
    description: "A shopping cart web app created using React",
    pictureLink: shoppingCart,
  },
  {
    name: "Todo App",
    link: "https://neil-todo-app.vercel.app/",
    githubLink: "https://github.com/blackbird410/todo-app",
    description: "A task management app created using React",
    pictureLink: todoApp,
  },
  {
    name: "CV App",
    link: "https://cv-app-neil.vercel.app/",
    githubLink: "https://github.com/blackbird410/cv-application",
    description: "A customizable cv application",
    pictureLink: cvApp,
  },
  {
    name: "Memory Card",
    link: "https://memory-card-neil.vercel.app/",
    githubLink: "https://github.com/blackbird410/memory-card",
    description: "A memory card game",
    pictureLink: memoryCard,
  },
  {
    name: "Weather App",
    link: "https://blackbird410.github.io/weather-app/",
    description: "A weather app",
    pictureLink: weatherApp,
  },
  {
    name: "Todo List",
    link: "https://blackbird410.github.io/todo-list/",
    description: "A personal task management web application",
    pictureLink: todoList,
  },
  {
    name: "Image Slider",
    link: "https://blackbird410.github.io/image-slider/",
    description: "An image slider",
    pictureLink: imageSlider,
  },
  {
    name: "Tic-Tac-Toe",
    link: "https://blackbird410.github.io/Tic-Tac-Toe/",
    description: "A tic tac toe browser game",
    pictureLink: ticTacToe,
  },
  {
    name: "Book Library",
    link: "https://blackbird410.github.io/Library/",
    description: "A book library app",
    pictureLink: library,
  },
  {
    name: "Calculator",
    link: "https://blackbird410.github.io/Calculator/",
    description: "A basic calculator modeled after the IPhone calculator app",
    pictureLink: calculator,
  },
  {
    name: "Etch-A-Sketch",
    link: "https://blackbird410.github.io/Sketchpad/",
    description:
      "A sketchpad, when you hover the mouse on the pad, it apply colors based on the chosen mode.",
    pictureLink: sketchpad,
  },
  {
    name: "Restaurant Page",
    link: "https://blackbird410.github.io/restaurant-page/",
    description: "A template for a restaurant website",
    pictureLink: restaurant,
  },
  {
    name: "Admin Dashboard",
    link: "https://blackbird410.github.io/Admin-dashboard/",
    description: "A template for an administrator dashboard website",
    pictureLink: adminDashboard,
  },
  {
    name: "Product Landing Page",
    link: "https://blackbird410.github.io/Product-landing-page-Odin/",
    description:
      "An ice cream product landing webpage that present the product, and have order options.",
    pictureLink: landingPage,
  },
  {
    name: "Sign-up-form",
    link: "https://blackbird410.github.io/Sign-up-form/",
    description: "A template for sign up form.",
    pictureLink: signUp2,
  },
  {
    name: "Sign-Up Form",
    link: "https://blackbird410.github.io/Odin-Sign-up-Form/",
    description: "A template for sign up form.",
    pictureLink: arcane,
  },
  {
    name: "Simple form",
    link: "https://blackbird410.github.io/simple-form/",
    description: "A form with built in JavaScript validation",
    pictureLink: signUp,
  },
  {
    name: "Rock-Paper-Scissors",
    link: "https://blackbird410.github.io/Rock-Paper-Scissors-/",
    description:
      "The basic rock paper scissors game that you can play against the computer that draws randomly his choice for each game.",
    pictureLink: rps,
  },
];
