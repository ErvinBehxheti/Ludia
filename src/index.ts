import router from "./router";
import HomeView from "./views/HomeView";
import "./styles/main.css";
import LearnView from "./views/LearnView";
import VectorsView from "./views/Vectors/VectorsView";
import DotVector from "./views/Vectors/DotVector";
import CrossProduct from "./views/Vectors/CrossProduct";

// Global scope declaration for math stuff;
declare const MathJax: any;

router.addRoute("/", HomeView);
router.addRoute("/learn", LearnView);
router.addRoute("/learn/vectors", LearnView, VectorsView);
router.addRoute("/learn/vectors/dot-product", LearnView, DotVector);
router.addRoute("/learn/vectors/cross-product", LearnView, CrossProduct);

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
