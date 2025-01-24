export default function Layout() {
  const app = document.getElementById("app") as HTMLDivElement;
  const currentRoute = window.location.pathname;

  const layoutHTML = `
    <div class="relative flex z-10">
    <div class="min-h-screen w-64 rounded-lg">
  <div
    class="w-full min-h-screen shadow-md backdrop-blur-lg rounded-lg text-[#2C2C2C]"
    style="
      background-color: #d9afd9;
      background-image: linear-gradient(0deg, #d9afd9 0%, #97d9e1 100%);
    "
  >
    <div class="flex flex-col w-full h-full">
      <div class="flex pt-4 justify-center h-16">
        <a data-link href="/" class="text-2xl font-bold inline-block">Ludia Home</a>
      </div>
      <div class="flex flex-col justify-center h-full">
        <nav class="flex flex-col justify-center w-full">
          <a class="sidebar-item" data-link href="/gauss-method">Gauss Method</a>
          <a class="sidebar-item" data-link href="/trigonometry">Trigonometry</a>
          <a class="sidebar-item" data-link href="/ballgame">Ball Game</a>
          <a class="sidebar-item" data-link href="/mood">Mood</a>
          <a class="sidebar-item" data-link href="/quote">Quote</a>
          <a class="sidebar-item" data-link href="/color-picker">Color Picker</a>
          <a class="sidebar-item" data-link href="/cat-facts">Cat Facts</a>
          <a class="sidebar-item" data-link href="/clock">Stopwatch</a>
        </nav>
      </div>
    </div>
  </div>
</div>
<div id="content" class="w-full">
  <h1>About This Dashboard (Kinda)</h1>
  <p>
  This dashboard is made so you can check what is possible with vanilla javascript and this is just the tip of the iceberg while this website main purpose is to give an experience like its built with React it also shows some quirky things built with Javascript. While everything about this seems simple or not so advanced keep in mind all this reactivity and the experience of it almost being a mobile app is brought to you by only pure javascript skills.
  </p>
</div>
    </div>
  `;

  app.innerHTML = layoutHTML;

  Sidebar(currentRoute);
}

function Sidebar(currentRoute: string) {
  const sidebarItems = document.querySelectorAll("a");
  sidebarItems.forEach((item) => {
    item.classList.remove("text-white");
    if (item.getAttribute("href") === currentRoute) {
      item.classList.add("text-white");
    }
  });
}
