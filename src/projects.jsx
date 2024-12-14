import cvApp from "./projects_img/cv-app.png";
import todoApp from "./projects_img/todo-app.png";
import sharliceWorkshop from "./projects_img/sharlice-workshop.png";
import sharliceAdmin from "./projects_img/sharlice-admin.png";

export const getRepoLink = (p) => {
  let repoLink = p.link.split("blackbird410.github.io");
  return p.link.match("vercel")
    ? p.githubLink
    : `${repoLink[0]}github.com/blackbird410${repoLink[1]}`;
};

export const projects = [
  {
    name: "Sharlice Workshop",
    link: "https://sharlice-workshop.vercel.app/",
    githubLink: "",
    description: "A website for a local workshop",
    pictureLink: sharliceWorkshop,
  },
  {
    name: "Sharlice Admin Page",
    link: "https://workshop-admin.vercel.app/",
    githubLink: "",
    description: "An admin page for the workshop",
    pictureLink: sharliceAdmin,
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
];
