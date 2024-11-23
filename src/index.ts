import router from "./router";
import "./styles/main.css";
import LearnView from "./views/LearnView";

declare const MathJax: any;

router.addRoute("/", async () => {
  const { default: HomeView } = await import("./views/HomeView");
  HomeView();
});

router.addRoute("/learn", async () => {
  LearnView();
});

router.addRoute("/learn/math", async () => {
  LearnView();
  const { default: MathView } = await import("./views/Math/MathView");
  MathView();
});

router.addRoute("/learn/math/vectors", async () => {
  LearnView();
  const { default: VectorsView } = await import("./views/Vectors/VectorsView");
  VectorsView();
});

router.addRoute("/learn/math/vectors/dot-product", async () => {
  LearnView();
  const { default: DotVector } = await import("./views/Vectors/DotVector");
  DotVector();
});

router.addRoute("/learn/math/trigonometry", async () => {
  LearnView();
  const { default: TrigView } = await import("./views/Math/Trigonometry");
  TrigView();
});

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
