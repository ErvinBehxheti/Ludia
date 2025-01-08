export default function HomeView() {
  const app = document.getElementById("app") as HTMLDivElement;

  app.innerHTML = `
    <header class="fixed h-20 w-full z-10">
      <nav class="max-w-7xl mx-auto">
        <div class="flex justify-between items-center py-5 mx-auto">
          <a
            href="#home"
            class="text-[#2bbc8a] font-bold text-xl hover:text-white transition-colors"
            >Physics</a
          >
          <button
            id="menu-toggle"
            class="text-softWhite hover:text-white focus:outline-none sm:hidden flex"
            aria-label="Toggle menu"
          >
            <img
              id="menu-icon"
              src="assets/menu.svg"
              alt="toggle"
              class="w-6 h-6"
            />
          </button>
          <nav class="sm:flex hidden">
            <ul class="flex space-x-6 text-white">
              <li class="nav-li">
                <a
                  href="#home"
                  class="nav-li_a hover:text-[#2bbc8a] transition-colors"
                  >Home</a
                >
              </li>
              <li class="nav-li">
                <a
                  href="#about"
                  class="nav-li_a hover:text-[#2bbc8a] transition-colors"
                  >About</a
                >
              </li>
              <li class="nav-li">
                <a
                  href="#topics"
                  class="nav-li_a hover:text-[#2bbc8a] transition-colors"
                  >Topics</a
                >
              </li>
              <li class="nav-li">
                <a
                  href="/learn"
                  class="nav-li_a hover:text-[#2bbc8a] transition-colors"
                  data-link
                  >Learn</a
                >
              </li>
            </ul>
          </nav>
        </div>
      </nav>
      <div id="sidebar" class="nav-sidebar max-h-0">
        <nav>
          <ul class="nav-ul p-5">
            <li class="nav-li">
              <a
                href="#home"
                class="nav-li_a hover:text-[#2bbc8a] transition-colors"
                >Home</a
              >
            </li>
            <li class="nav-li">
              <a
                href="#about"
                class="nav-li_a hover:text-[#2bbc8a] transition-colors"
                >About</a
              >
            </li>
            <li class="nav-li">
              <a
                href="#topics"
                class="nav-li_a hover:text-[#2bbc8a] transition-colors"
                >Topics</a
              >
            </li>
            <li class="nav-li">
                <a
                  href="/learn"
                  class="nav-li_a hover:text-[#2bbc8a] transition-colors"
                  data-link
                  >Learn</a
                >
            </li>
          </ul>
        </nav>
      </div>
    </header>

    <section
      id="home"
      class="flex min-h-screen justify-center items-center w-full p-10 text-gray-200"
    >
      <div class="text-center w-1/2">
        <h1 class="text-4xl font-bold">Welcome to Physics World</h1>
        <p class="text-xl mt-4">Your gateway to understanding the universe.</p>
      </div>

      <div class="w-1/2 flex justify-center items-center">
        <div class="svg-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="50 50 300 300"
          >
            <defs>
              <symbol id="e">
                <ellipse
                  cx="200"
                  cy="200"
                  rx="33"
                  ry="88"
                  fill="none"
                  stroke="inherit"
                />
              </symbol>
            </defs>

            <circle id="atom" fill="#3B3B3B" cx="200" cy="200" r="139" />

            <use id="orbit-1" xlink:href="#e" stroke="#CCCCCC" />
            <use
              id="orbit-2"
              xlink:href="#e"
              stroke="#CCCCCC"
              transform="rotate(60 200 200)"
            />
            <use
              id="orbit-3"
              xlink:href="#e"
              stroke="#CCCCCC"
              transform="rotate(120 200 200)"
            />

            <use id="electron-1" xlink:href="#e" stroke="#2bbc8a" />
            <use
              id="electron-2"
              xlink:href="#e"
              stroke="#2bbc8a"
              transform="rotate(60 200 200)"
            />
            <use
              id="electron-3"
              xlink:href="#e"
              stroke="#2bbc8a"
              transform="rotate(120 200 200)"
            />

            <circle id="nucleus" fill="#7D7D7D" cx="200" cy="200" r="16" />
          </svg>
        </div>
      </div>
    </section>

    <section
      id="about"
      class="flex min-h-screen justify-center items-center w-full p-10"
    >
      <div class="text-center text-white w-1/2">
        <h2 class="text-3xl font-bold">About Formula Visualizer</h2>
        <p class="text-lg mt-4">
          I’ve always wanted to create something exciting using vanilla
          JavaScript—a <abbr title="Single Page Application">SPA</abbr> built
          from scratch without relying on libraries or frameworks. One day, I
          stumbled upon an amazing animated physics video that inspired me to
          build this website, making learning basic physics fun and interactive.
        </p>
      </div>
    </section>

    <section
      id="topics"
      class="flex min-h-screen justify-center items-center w-full p-10"
    >
      <div class="text-center text-white max-w-lg">
        <h2 class="text-3xl font-bold">Topics</h2>
        <p class="text-lg mt-4">
          How can you learn effectively? For every topic, I provide a thorough
          explanation, ensuring only minimal prior knowledge is needed. I break
          down each concept step by step and include a captivating animation at
          the end to aid visualization. To start learning, click "Learn" in the
          navbar or <a href="/learn" data-link>Click Here</a>!
        </p>

        <div class="flex flex-wrap justify-center mt-6">
          <div class="topic-card m-4 p-4 bg-gray-800 rounded-lg shadow-lg">
            <h3 class="text-xl font-semibold text-[#2bbc8a]">Vectors</h3>
            <p class="mt-2">Navigate in the space of Vectors</p>
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
}
