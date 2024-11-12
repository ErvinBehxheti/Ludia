export default function LearnView() {
  const app = document.getElementById("app") as HTMLDivElement;

  if (!document.getElementById("learning-view")) {
    app.innerHTML = `
      <div class="flex relative z-10">
        <aside class="min-h-screen w-[20%] bg-white p-4">
          <h1 class="text-xl font-bold mb-4">Physics</h1>
          <nav>
            <ul class="space-y-2">
              <li><a href="/learn/vectors" data-link class="sidebar-link">Vectors</a></li>
            </ul>
          </nav>
        </aside>
    
        <div class="w-[80%] p-8" id="learning-view"></div>
      </div>
    `;
  }
}
