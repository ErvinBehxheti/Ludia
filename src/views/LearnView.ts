export default function LearnView() {
  const app = document.getElementById("app") as HTMLDivElement;
  const currentRoute = window.location.pathname;

  app.innerHTML = `
    <div class="flex relative z-10">
      <aside class="min-h-screen w-[20%] bg-white p-4">
        <h1 class="text-xl font-bold mb-4">Physics</h1>
        <nav>
          <ul class="space-y-2">
            <li>
              <a href="/learn/vectors" data-link class="sidebar-link section" data-section="vectors">Vectors</a>
            </li>
            <li class="subsection dontShow" data-parent="vectors">
              <a href="/learn/vectors/multi-dimensional" data-link>2&3 Dimensional</a>
            </li>
            <li class="subsection dontShow" data-parent="vectors">
              <a href="/learn/vectors/dot-product" data-link>Dot Product</a>
            </li>
            <li class="subsection dontShow" data-parent="vectors">
              <a href="/learn/vectors/cross-product" data-link>Cross Product</a>
            </li>
            <li>
              <a href="/learn" data-link class="sidebar-link section" data-section="motion">Motion</a>
            </li>
            <li class="subsection dontShow" data-parent="motion">Rotary Motion</li>
          </ul>
        </nav>
      </aside>

      <div class="w-[80%] p-8" id="learning-view"></div>
    </div>
  `;

  Sidebar(currentRoute);
}

function Sidebar(currentRoute: string) {
  const sections = document.querySelectorAll(".section");
  const subsections = document.querySelectorAll(".subsection");

  subsections.forEach((subsection) => {
    const subsectionElement = subsection as HTMLElement;
    const parentId = subsectionElement.dataset.parent;
    if (currentRoute.includes(parentId as string)) {
      subsection.classList.remove("dontShow");
    } else {
      subsection.classList.add("dontShow");
    }
  });

  sections.forEach((section) => {
    section.addEventListener("click", (e: Event) => {
      e.preventDefault();
      const target = e.target as HTMLElement;
      const sectionId = target.dataset.section;
      if (!sectionId) {
        return;
      }

      subsections.forEach((subsection) => {
        const subsectionElement = subsection as HTMLElement;
        const parentId = subsectionElement.dataset.parent;
        if (parentId === sectionId) {
          subsectionElement.classList.toggle("dontShow");
        } else {
          subsectionElement.classList.add("dontShow");
        }
      });
    });
  });
}
