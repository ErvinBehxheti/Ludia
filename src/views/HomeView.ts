export default function HomeView() {
  const app = document.getElementById("app") as HTMLDivElement;

  app.innerHTML = `
    <header class="fixed h-20 w-full">
      <nav class="max-w-7xl mx-auto border-b-2">
        <div class="flex justify-between items-center py-5 mx-auto c-space">
          <a href="/" class="text-[#2bbc8a] font-bold text-xl hover:text-white transition-colors">Physics</a>
          <button id="menu-toggle" class="text-softWhite hover:text-white focus:outline-none sm:hidden flex" aria-label="Toggle menu">
            <img id="menu-icon" src="assets/menu.svg" alt="toggle" class="w-6 h-6" />
          </button>
          <nav class="sm:flex hidden">
            <ul id="nav-items" class="nav-ul"></ul>
          </nav>
        </div>
      </nav>
      <div id="sidebar" class="nav-sidebar max-h-0">
        <nav>
          <ul class="nav-ul p-5" id="nav-items-mobile"></ul>
        </nav>
      </div>
    </header>

    <section class="flex min-h-screen w-full bg-[#1d1f21]">
    <div>
    </div>
    <div>
    </div>
    </section>
  `;

  setupNavbar();
}

function setupNavbar() {
  const menuIcon = document.getElementById("menu-icon") as HTMLImageElement;
  const sidebar = document.getElementById("sidebar") as HTMLDivElement;
  const menuToggle = document.getElementById(
    "menu-toggle"
  ) as HTMLButtonElement;
  const navItems = document.getElementById("nav-items") as HTMLUListElement;
  const navItemsMobile = document.getElementById(
    "nav-items-mobile"
  ) as HTMLUListElement;

  const navLinks = [
    { id: 1, name: "Home", href: "#home" },
    { id: 2, name: "About", href: "#about" },
    { id: 3, name: "Topics", href: "#topics" },
  ];

  let isOpen = false;
  const toggleMenu = () => {
    isOpen = !isOpen;
    sidebar.classList.toggle("max-h-screen", isOpen);
    sidebar.classList.toggle("max-h-0", !isOpen);
    menuIcon.src = isOpen ? "assets/close.svg" : "assets/menu.svg";
  };

  const closeMenu = () => {
    isOpen = false;
    sidebar.classList.remove("max-h-screen");
    sidebar.classList.add("max-h-0");
    menuIcon.src = "assets/menu.svg";
  };

  const populateNavItems = (navContainer: HTMLElement) => {
    navLinks.forEach((item) => {
      const li = document.createElement("li");
      li.classList.add("nav-li");

      const a = document.createElement("a");
      a.href = item.href;
      a.classList.add("nav-li_a");
      a.textContent = item.name;
      a.onclick = closeMenu;

      li.appendChild(a);
      navContainer.appendChild(li);
    });
  };

  populateNavItems(navItems);
  populateNavItems(navItemsMobile);

  menuToggle.addEventListener("click", toggleMenu);
}
