export default function DotVector() {
  const learningView = document.getElementById("learning-view") as HTMLElement;

  learningView.innerHTML = `
    <article>
    hey
    </article>
    `;
  // @ts-ignore
  MathJax.typeset();
}
