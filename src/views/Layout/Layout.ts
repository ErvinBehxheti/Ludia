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
        <h1 class="text-2xl font-bold inline-block">Dashboard</h1>
      </div>
      <div class="flex flex-col justify-center h-full">
        <nav class="flex flex-col justify-center w-full">
          <a class="sidebar-item" data-link href="/gauss-method">Gauss Method</a>
          <a class="sidebar-item" data-link href="/trigonometry">Trigonometry</a>
          <a class="sidebar-item" data-link href="/ballgame">Ball Game</a>
          <a class="sidebar-item" data-link href="/mood">Mood</a>
          <a class="sidebar-item" data-link href="/quote">Quote</a>
          <a class="sidebar-item" data-link href="/color-picker">Color Picker</a>
          <a class="sidebar-item">Currency Converter</a>
          <a class="sidebar-item">Stopwatch</a>
          <a class="sidebar-item">Color Picker</a>
          <a class="sidebar-item">BMI Calculator</a>
        </nav>
      </div>
    </div>
  </div>
</div>
<div id="content" class="w-full"></div>
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
