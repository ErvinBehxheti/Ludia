export default function CrossProduct() {
    const learningView = document.getElementById("learning-view") as HTMLElement;
  
    learningView.innerHTML = `
    <article class="text-white">
        Cross Product
    </article>
    `;
    // @ts-ignore
    MathJax.typeset();
  }
  