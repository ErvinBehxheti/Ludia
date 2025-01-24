export default function HomeView() {
  const app = document.getElementById("app") as HTMLDivElement;

  app.innerHTML = `
    <header class="fixed w-full z-10 bg-transparent backdrop-blur-md">
      <nav class="max-w-7xl mx-auto px-4 py-5 flex justify-between items-center">
        <a href="#home" class="text-[#2bbc8a] font-bold text-xl hover:text-white transition-colors">Javascript</a>
        <button id="menu-toggle" class="text-softWhite hover:text-white focus:outline-none sm:hidden flex" aria-label="Toggle menu">
          <img id="menu-icon" src="assets/menu.svg" alt="toggle" class="w-6 h-6" />
        </button>
        <nav class="hidden sm:flex">
          <ul class="flex space-x-6 text-white">
            <li class="nav-li"><a href="#home" class="nav-li_a hover:text-[#2bbc8a] transition-colors">Home</a></li>
            <li class="nav-li"><a href="#about" class="nav-li_a hover:text-[#2bbc8a] transition-colors">About</a></li>
            <li class="nav-li"><a href="#topics" class="nav-li_a hover:text-[#2bbc8a] transition-colors">Topics</a></li>
            <li class="nav-li"><a href="/ludia" class="nav-li_a hover:text-[#2bbc8a] transition-colors" data-link>Ludia</a></li>
          </ul>
        </nav>
      </nav>
      <div id="sidebar" class="nav-sidebar max-h-0 sm:hidden">
        <nav>
          <ul class="nav-ul p-5">
            <li class="nav-li"><a href="#home" class="nav-li_a hover:text-[#2bbc8a] transition-colors">Home</a></li>
            <li class="nav-li"><a href="#about" class="nav-li_a hover:text-[#2bbc8a] transition-colors">About</a></li>
            <li class="nav-li"><a href="#topics" class="nav-li_a hover:text-[#2bbc8a] transition-colors">Topics</a></li>
            <li class="nav-li"><a href="/ludia" class="nav-li_a hover:text-[#2bbc8a] transition-colors" data-link>Ludia</a></li>
          </ul>
        </nav>
      </div>
    </header>

    <section id="home" class="flex min-h-screen justify-center items-center w-full p-5 text-gray-200 bg-gradient-to-r from-purple-500 to-blue-500">
      <div class="text-center max-w-lg">
        <h1 class="text-4xl font-bold mb-4">Welcome to Ludia</h1>
        <p class="text-xl">Here I will show you random things I've built with vanilla javascript.</p>
      </div>
      <div class="w-1/2 flex justify-center items-center">
        <div class="svg-container">
          <img src="https://media.istockphoto.com/id/1312850689/vector/matrix-background-binary-code-texture-falling-green-numbers-data-visualization-concept.jpg?s=612x612&w=0&k=20&c=l1xAzPJUjbROnui5McM-_vbDswAg5OoSzwJuFpdj3WE=" alt="coding pic" />
        </div>
      </div>
    </section>

    <section id="about" class="flex min-h-screen justify-center items-center w-full p-10 bg-gradient-to-t from-purple-500 to-blue-500">
      <div class="text-center text-white max-w-lg">
        <h2 class="text-3xl font-bold">About Ludia</h2>
        <p class="text-lg mt-4">
          I’ve always wanted to create something exciting using vanilla JavaScript—a <abbr title="Single Page Application">SPA</abbr> built from scratch without relying on libraries or frameworks. One day, I stumbled upon an amazing SPA building video that made me realize I could do it too. I started learning and building, and here we are today. I hope you enjoy the content I’ve created for you. Happy learning!
        </p>
      </div>
    </section>

    <section id="topics" class="flex min-h-screen justify-center items-center w-full p-10 bg-gradient-to-t from-blue-500 to-purple-500">
      <div class="text-center text-white max-w-lg">
        <h2 class="text-3xl font-bold">The Video</h2>
        <iframe width="320" height="320" src="https://www.youtube.com/embed/ZleShIpv5zQ" title="Creating an SPA Router in Vanilla JS" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </section>
  `;

  setupNavbar();
}

function setupNavbar() {
  const menuToggle = document.getElementById("menu-toggle") as HTMLButtonElement;
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
