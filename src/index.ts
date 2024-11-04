import router from "./router";
import HomeView from "./views/HomeView";
import "./styles/main.css";

router.addRoute("/", HomeView);
router.addRoute("/404", () => {
  const app = document.getElementById("app") as HTMLDivElement;
  app.innerHTML = "<h1>404 - Not Found</h1>";
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
