export default async function HomeView() {
    const app = document.getElementById("app") as HTMLDivElement;
  
    app.innerHTML = `
      <header 
        class="fixed top-0 w-full z-10 bg-black bg-opacity-60 backdrop-blur-md shadow-md"
      >
        <nav class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a 
            href="/" 
            data-link 
            class="text-3xl font-extrabold text-yellow-400 hover:text-white transition-colors"
          >
            APOD Explorer
          </a>
  
          <button 
            id="menu-toggle" 
            class="text-white hover:text-yellow-400 focus:outline-none sm:hidden flex" 
            aria-label="Toggle menu"
          >
            <img 
              id="menu-icon" 
              src="assets/menu.svg" 
              alt="Toggle Menu" 
              class="w-6 h-6" 
            />
          </button>
  
          <nav class="hidden sm:flex">
            <ul class="flex space-x-8 text-white">
              <li>
                <a 
                  href="#home" 
                  class="hover:text-yellow-400 transition-colors smooth-scroll"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  class="hover:text-yellow-400 transition-colors smooth-scroll"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="/apods" 
                  data-link 
                  class="hover:text-yellow-400 transition-colors"
                >
                  APOD's
                </a>
              </li>
            </ul>
          </nav>
        </nav>
  
        <div 
          id="sidebar" 
          class="sm:hidden overflow-hidden transition-all duration-300 max-h-0 bg-black bg-opacity-80"
        >
          <nav>
            <ul class="p-5 space-y-4 text-white">
              <li>
                <a 
                  href="#home" 
                  class="hover:text-yellow-400 transition-colors smooth-scroll"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  class="hover:text-yellow-400 transition-colors smooth-scroll"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="/apod" 
                  data-link 
                  class="hover:text-yellow-400 transition-colors"
                >
                  APOD
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
  
      <section 
        id="home" 
        class="pt-24 flex flex-col items-center justify-center min-h-screen text-gray-100 p-8"
      >
        <div class="max-w-2xl mx-auto text-center bg-black bg-opacity-60 p-6 rounded-md">
          <h1 class="text-5xl font-extrabold mb-4 text-yellow-400">
            Welcome to APOD Explorer
          </h1>
          <p class="text-xl mb-6">
            Journey through the cosmos with NASA's Astronomy Picture of the Day.
            Discover breathtaking images and learn fascinating facts about our universe.
          </p>
          <a 
            id="today-apod"
            data-link 
            class="inline-block px-8 py-3 bg-yellow-500 text-gray-900 font-semibold rounded hover:bg-yellow-600 transition-colors"
          >
            View Today’s APOD
          </a>
        </div>
      </section>
  
      <section 
        class="py-16 text-gray-100"
      >
        <div class="max-w-7xl mx-auto px-6">
          <h2 class="text-3xl font-bold mb-8 text-center">Featured APOD</h2>
          <div class="flex justify-center">
            <div class="w-full max-w-3xl" id="featured-apod">
            </div>
          </div>
        </div>
      </section>
  
      <section 
        id="about" 
        class="py-16 text-gray-100"
      >
        <div class="max-w-4xl mx-auto px-8">
          <h2 class="text-4xl font-bold text-center mb-8">About APOD Explorer</h2>
          <p class="text-lg leading-relaxed mb-8">
            APOD Explorer is dedicated to bringing NASA’s daily breathtaking views of 
            the cosmos right to your screen. Every day, a new image or video is featured, 
            capturing the wonders of our universe. Delve deeper into each picture’s explanation 
            to learn the science and stories behind these celestial spectacles.
          </p>
          <p class="text-lg leading-relaxed">
            Whether you’re an aspiring astronomer, a seasoned stargazer, or simply someone 
            who loves gazing at the night sky, APOD Explorer aims to spark curiosity and 
            inspire exploration. From distant galaxies to planetary close-ups, there’s 
            always something new to discover in the cosmos.
          </p>
        </div>
      </section>
  
      <section 
        class="py-16  text-gray-100"
      >
        <div class="max-w-6xl mx-auto px-8">
          <h2 class="text-3xl font-bold mb-8 text-center">Did You Know?</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="bg-gray-800 p-6 rounded shadow hover:shadow-lg transition-shadow">
              <h3 class="text-xl font-semibold mb-2 text-yellow-400">Fact One</h3>
              <p class="text-sm leading-relaxed">
                The first image NASA posted as an APOD was on June 16, 1995. Since then, 
                thousands of astonishing pictures have been featured, many contributed by 
                astronomers and amateur observers around the world.
              </p>
            </div>
            <div class="bg-gray-800 p-6 rounded shadow hover:shadow-lg transition-shadow">
              <h3 class="text-xl font-semibold mb-2 text-yellow-400">Fact Two</h3>
              <p class="text-sm leading-relaxed">
                Some APODs are videos, showcasing time-lapses of celestial events such as solar 
                eclipses, meteor showers, or even rocket launches, providing dynamic insights 
                into our universe’s wonders.
              </p>
            </div>
            <div class="bg-gray-800 p-6 rounded shadow hover:shadow-lg transition-shadow">
              <h3 class="text-xl font-semibold mb-2 text-yellow-400">Fact Three</h3>
              <p class="text-sm leading-relaxed">
                APOD is curated by professional astronomers Robert Nemiroff and Jerry Bonnell 
                and is one of NASA’s longest-running outreach projects, loved by millions of 
                space enthusiasts worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>
  
      <footer 
        class="bg-opacity-80 text-gray-300 py-6 text-center z-10 relative"
      >
        <p class="">
          &copy; ${new Date().getFullYear()} APOD Explorer. Images courtesy of NASA's Astronomy Picture of the Day.
        </p>
      </footer>
    `;
  
    setupNavbar();

    const todayApod = document.getElementById("today-apod") as HTMLAnchorElement;
    const today = new Date().toISOString().split("T")[0];
    todayApod.href = `/apod/${today}`;
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