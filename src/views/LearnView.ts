export default function LearnView() {
  const app = document.getElementById("app") as HTMLDivElement;
  const currentRoute = window.location.pathname;

  app.innerHTML = `
    <div class="flex relative z-10">
      <aside class="min-h-screen w-[20%] bg-white p-4">
        <nav class="fixed">
        <h1 class="text-xl font-bold mb-4">Physics</h1>
          <ul class="space-y-2">
            <li>
              <a href="/learn/math" data-link class="sidebar-link section" data-section="math">Basic Math</a>
            </li>
            <li class="subsection dontShow" data-parent="math">
              <a href="/learn/math/trigonometry" data-link>Trigonometry</a>
            </li>
            <li class="subsection dontShow" data-parent="math">
              <a href="/learn/math/vectors" data-link>Vectors</a>
            </li>
            <li class="subsection dontShow" data-parent="math">
              <a href="/learn/math/vectors/dot-product" data-link>Dot Product</a>
            </li>
            <li class="subsection dontShow" data-parent="math">
              <a href="/learn/math/calculus" data-link>Calculus</a>
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
