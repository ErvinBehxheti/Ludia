import Lenis from "lenis";
import "./index.css";
import router from "./router";
import ApodPage from "./views/Apod/apod";
import HomeView from "./views/HomeView";
import Layout from "./views/Layout/Layout";
import "./galaxyBackground";

new Lenis({
  autoRaf: true,
});

async function loadFeaturedApod() {
  const API_KEY = "4C1ZxhuHzbD4ZHZYsbvy7TW8h6wmHx1cZHN2Sf62";
  const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch featured APOD data");
    }
    const apodData = await response.json();
    return `
      <div class="p-6 bg-gray-700 rounded-lg shadow-md">
        <h2 class="text-2xl font-bold text-yellow-400 mb-2">Today's Astronomy Picture</h2>
        ${
          apodData.media_type === "image"
            ? `<img src="${apodData.url}" alt="${apodData.title}" class="w-full rounded-md mb-4" />`
            : `<iframe class="w-full rounded-md mb-4" src="${apodData.url}" frameborder="0" allowfullscreen></iframe>`
        }
        <p class="text-lg">${apodData.explanation.substring(0, 200)}...</p>
        <a href="/apod/${
          apodData.date
        }" data-link class="text-yellow-400 hover:underline mt-2 inline-block">Read more</a>
      </div>
    `;
  } catch (error) {
    console.error(error);
    return `<p class="text-red-500">Unable to load featured image at this time.</p>`;
  }
}

router.addRoute("/", async () => {
  HomeView();
  const featuredApodHTML = await loadFeaturedApod();
  const featuredApod = document.getElementById(
    "featured-apod"
  ) as HTMLDivElement;
  featuredApod.innerHTML = featuredApodHTML;
});

router.addRoute("/apods", () => {
  Layout();
});

router.addRoute("/apod/:date", async (params: { date: string }) => {
  Layout();
  await ApodPage(params);
});

router.addRoute("/404", () => {
  const app = document.getElementById("app") as HTMLDivElement;
  const notFoundHTML = `
  
  <div class="flex flex-col items-center justify-center h-full relative z-30 bg-black">
    <h1 class="text-4xl font-bold text-white">404</h1>
    <p class="text-xl text-white">Route not found</p>
    <a href="/" data-link class="text-white">Go Back</a>
    </div>
  `;
  app.innerHTML = notFoundHTML;
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
