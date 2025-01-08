import { fetchHTML } from "../../utils";

export default async function Layout() {
  const app = document.getElementById("app") as HTMLDivElement;
  const currentRoute = window.location.pathname;

  const layoutHTML = await fetchHTML("layout");

  app.innerHTML = layoutHTML;
}