export default function MathView() {
  const learningView = document.getElementById("learning-view") as HTMLElement;

  learningView.innerHTML = `
    <article class="text-white text-lg">
        Learn Basic math before diving into physics
    </article>
    `;
  // @ts-ignore
  MathJax.typeset();
}
