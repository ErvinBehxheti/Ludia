import router from "./router";
import "./styles/main.css";
import HomeView from "./views/HomeView";
import Layout from "./views/Layout/Layout";
import GaussMethod from "./views/Gauss/GaussMethod";
import Trigonometry from "./views/Trigonometry/trigonometry";
import BallGame from "./views/Ball/ballgame";
import Emoji from "./views/Emoji/emoji";
import Quote from "./views/Quote/quote";
import ColorPicker from "./views/Color/ColorPicker";
import CatFacts from "./views/Cats/CatFacts";
import Clock from "./views/Clock/clock";

router.addRoute("/", () => {
  HomeView();
});

router.addRoute("/ludia", () => {
  Layout();
});

router.addRoute("/gauss-method", async () => {
  await GaussMethod();
});

router.addRoute("/trigonometry", async () => {
  await Trigonometry();
});

router.addRoute("/ballgame", async () => {
  await BallGame();
});

router.addRoute("/mood", async () => {
  await Emoji();
});

router.addRoute("/quote", async () => {
  await Quote();
});

router.addRoute("/color-picker", async () => {
  await ColorPicker();
});

router.addRoute("/cat-facts", async () => {
  await CatFacts();
});

router.addRoute("/clock", async () => {
  await Clock();
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
