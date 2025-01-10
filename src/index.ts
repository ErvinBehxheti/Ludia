import router from "./router";
import "./styles/main.css";
import HomeView from "./views/HomeView";
import Layout from "./views/Layout/Layout";
import TodoList from "./views/TodoList/Todolist";

router.addRoute("/", () => {
  HomeView();
});

router.addRoute("/learn", () => {
  Layout();
});

router.addRoute("/todo-list", async () => {
  await TodoList();
});

document.addEventListener("DOMContentLoaded", () => {
  router.loadRoute();

  document.body.addEventListener("click", (event) => {
    const target = event.target as HTMLElement;
    if (target.tagName === "A" && target.hasAttribute("data-link")) {
      event.preventDefault();
      const href = target.getAttribute("href") as string;
      router.navigate(href);
    }
  });
});
