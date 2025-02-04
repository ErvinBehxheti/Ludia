export default function Layout() {
  const app = document.getElementById("app") as HTMLDivElement;
  const currentRoute = window.location.pathname;

  const layoutHTML = `
    <div class="relative z-10 flex min-h-screen bg-gray-900">
      <!-- Sidebar -->
      <aside class="w-64 bg-gray-800 shadow-lg">
        <div class="p-6">
          <a href="/" data-link class="text-2xl font-extrabold text-yellow-400 hover:text-white transition-colors">
            Asteroid Explorer
          </a>
        </div>
        <nav class="mt-8">
          <ul>
            <li class="px-6 py-3 hover:bg-gray-700">
              <a data-link href="/apods" class="block text-gray-300 hover:text-yellow-400 transition-colors">
                APOD's
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      <main id="content" class="flex-1 p-8 text-gray-100">
        <h1 class="text-3xl font-bold mb-4">NASA APOD Archive</h1>
        <p class="mb-6">
          Browse Astronomy Picture of the Day entries for a given date range. Click on a card to see detailed information.
        </p>

        <div class="flex items-center space-x-4 mb-6 justify-center">
          <div>
            <label for="start-date" class="block text-sm font-medium mb-1">Start Date</label>
            <input 
              type="date" 
              id="start-date" 
              class="text-gray-900 px-3 py-2 rounded focus:outline-none" 
            />
          </div>
          <div>
            <label for="end-date" class="block text-sm font-medium mb-1">End Date</label>
            <input 
              type="date" 
              id="end-date" 
              class="text-gray-900 px-3 py-2 rounded focus:outline-none" 
            />
          </div>
          <button 
            id="fetch-button" 
            class="bg-yellow-500 text-gray-900 font-semibold px-4 py-2 rounded hover:bg-yellow-600 transition-colors"
          >
            Fetch APODs
          </button>
        </div>

        <div 
          id="apods-container" 
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          <!-- Kartat -->
        </div>
      </main>
    </div>
  `;

  app.innerHTML = layoutHTML;

  setupSidebar(currentRoute);

  const startDateInput = document.getElementById(
    "start-date"
  ) as HTMLInputElement;
  const endDateInput = document.getElementById("end-date") as HTMLInputElement;
  const fetchButton = document.getElementById(
    "fetch-button"
  ) as HTMLButtonElement;

  const today = new Date();
  const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);

  startDateInput.valueAsDate = thirtyDaysAgo;
  endDateInput.valueAsDate = today;

  fetchButton.addEventListener("click", () => {
    const start = startDateInput.value;
    const end = endDateInput.value;
    fetchAndRenderApods(start, end);
  });

  fetchAndRenderApods(
    thirtyDaysAgo.toISOString().split("T")[0],
    today.toISOString().split("T")[0]
  );
}

function setupSidebar(currentRoute: string) {
  const sidebarLinks = document.querySelectorAll("aside nav ul li a");
  sidebarLinks.forEach((link) => {
    link.classList.remove("text-yellow-400");
    if (link.getAttribute("href") === currentRoute) {
      link.classList.add("text-yellow-400");
    }
  });
}

async function fetchAndRenderApods(startDate: string, endDate: string) {
  const container = document.getElementById(
    "apods-container"
  ) as HTMLDivElement;

  container.innerHTML = `<p class="text-sm text-gray-400">Loading...</p>`;

  try {
    const API_KEY = "4C1ZxhuHzbD4ZHZYsbvy7TW8h6wmHx1cZHN2Sf62";
    const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&start_date=${startDate}&end_date=${endDate}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch APOD data");
    }

    const apods = await response.json();

    renderApods(apods, container);
  } catch (error) {
    console.error(error);
    container.innerHTML = `<p class="text-red-500">Error loading APOD data. Please try again.</p>`;
  }
}

function renderApods(apods: any[], container: HTMLDivElement) {
  const apodArray = Array.isArray(apods) ? apods : [apods];

  if (apodArray.length === 0) {
    container.innerHTML = `<p class="text-gray-400">No APODs found for this range.</p>`;
    return;
  }

  let html = "";
  for (const apod of apodArray) {
    html += `
      <div class="bg-gray-800 rounded-lg p-4 shadow hover:shadow-lg transition-shadow flex flex-col">
        <!-- If it's an image, show thumbnail; if it's a video, show a placeholder or a small embed -->
        ${
          apod.media_type === "image"
            ? `<img src="${apod.url}" alt="${apod.title}" class="h-48 w-full object-cover mb-3 rounded" />`
            : `<div class="h-48 w-full bg-black text-center flex items-center justify-center mb-3 rounded">
                <p class="text-gray-300">Video APOD</p>
              </div>`
        }
        <h2 class="text-lg font-semibold mb-2">${apod.title}</h2>
        <p class="text-sm text-gray-400 mb-4">Date: ${apod.date}</p>
        <!-- Link to the detail page for that date -->
        <a 
          href="/apod/${apod.date}" 
          data-link 
          class="mt-auto inline-block text-yellow-400 hover:underline"
        >
          View Details
        </a>
      </div>
    `;
  }

  container.innerHTML = html;
}
