export default function HomeView() {
  const app = document.getElementById("app") as HTMLDivElement;

  app.innerHTML = `
    <header class="fixed h-20 w-full z-10">
      <nav class="max-w-7xl mx-auto">
        <div class="flex justify-between items-center py-5 mx-auto">
          <a href="#home" class="text-[#2bbc8a] font-bold text-xl hover:text-white transition-colors">Physics</a>
          <button id="menu-toggle" class="text-softWhite hover:text-white focus:outline-none sm:hidden flex" aria-label="Toggle menu">
            <img id="menu-icon" src="assets/menu.svg" alt="toggle" class="w-6 h-6" />
          </button>
          <nav class="sm:flex hidden">
            <ul class="flex space-x-6 text-white">
              <li><a href="#home" class="nav-link">Home</a></li>
              <li><a href="#about" class="nav-link">About</a></li>
              <li><a href="#topics" class="nav-link">Topics</a></li>
            </ul>
          </nav>
        </div>
      </nav>
    </header>

    <section id="home" class="flex min-h-screen justify-center items-center w-full p-10">
      <div class="text-center text-white">
        <h1 class="text-4xl font-bold">Welcome to Physics World</h1>
        <p class="text-xl mt-4">Your gateway to understanding the universe.</p>
      </div>
    </section>

    <section id="about" class="flex min-h-screen justify-center items-center w-full p-10">
      <div class="text-center text-white max-w-md">
        <h2 class="text-3xl font-bold">About Us</h2>
        <p class="text-lg mt-4">
          Formula Visualizer is dedicated to making physics accessible through interactive animations and visuals. Explore concepts intuitively and deepen your understanding.
        </p>
      </div>
    </section>

    <section id="topics" class="flex min-h-screen justify-center items-center w-full p-10">
      <div class="text-center text-white max-w-lg">
        <h2 class="text-3xl font-bold">Topics</h2>
        <p class="text-lg mt-4">
          Dive into various topics, from Newtonian mechanics to electromagnetism, and experience formulas come to life with our interactive visualizations.
        </p>
        <div class="flex flex-wrap justify-center mt-6">
          <!-- Add visual topic cards here if desired -->
          <div class="topic-card m-4 p-4 bg-gray-800 rounded-lg shadow-lg">
            <h3 class="text-xl font-semibold text-[#2bbc8a]">Newton's Laws</h3>
            <p class="mt-2">Discover the fundamental principles of motion.</p>
          </div>
          <div class="topic-card m-4 p-4 bg-gray-800 rounded-lg shadow-lg">
            <h3 class="text-xl font-semibold text-[#2bbc8a]">Electromagnetism</h3>
            <p class="mt-2">Explore the interactions between electric and magnetic fields.</p>
          </div>
        </div>
      </div>
    </section>
  `;

  setupNavbar();
}

function setupNavbar() {
  const menuToggle = document.getElementById(
    "menu-toggle"
  ) as HTMLButtonElement;
  const menuIcon = document.getElementById("menu-icon") as HTMLImageElement;
  const sidebar = document.getElementById("sidebar") as HTMLDivElement;

  let isOpen = false;
  menuToggle?.addEventListener("click", () => {
    isOpen = !isOpen;
    sidebar.classList.toggle("max-h-screen", isOpen);
    sidebar.classList.toggle("max-h-0", !isOpen);
    menuIcon.src = isOpen ? "assets/close.svg" : "assets/menu.svg";
  });

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link?.getAttribute("href")?.slice(1);
      const targetSection = document.getElementById(targetId as string);
      targetSection?.scrollIntoView({ behavior: "smooth" });
    });
  });
}
