export default async function ApodPage(params: { "date": string }) {
    const layout = document.getElementById("content") as HTMLDivElement;
    const API_KEY = "4C1ZxhuHzbD4ZHZYsbvy7TW8h6wmHx1cZHN2Sf62";
    const date = params["date"];
    const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}${date ? `&date=${date}` : ''}`;
  
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch Astronomy Picture of the Day data");
      }
      const apodData = await response.json();
  
      layout.innerHTML = `
        <div class="max-w-3xl mx-auto p-6 bg-gray-800 rounded-lg shadow-lg">
          <h1 class="text-3xl font-bold text-yellow-400 mb-4">${apodData.title}</h1>
          ${
            apodData.media_type === 'image'
              ? `<img src="${apodData.url}" alt="${apodData.title}" class="w-full rounded-md mb-4" />`
              : `<div class="w-full mb-4"><iframe class="w-full rounded-md" src="${apodData.url}" frameborder="0" allowfullscreen></iframe></div>`
          }
          <p class="text-lg leading-relaxed">${apodData.explanation}</p>
          <p class="text-sm text-gray-400 mt-4">Date: ${apodData.date}</p>
        </div>
      `;
    } catch (error) {
      layout.innerHTML = `<p class="text-red-500">Error loading Astronomy Picture of the Day data. Please try again later.</p>`;
      console.error(error);
    }
  }
  