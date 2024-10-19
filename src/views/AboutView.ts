export default function AboutView() {
  const app = document.getElementById("app") as HTMLDivElement;
  app.innerHTML = `
      <h1>About</h1>
      <p>This is the about page</p>
    `;
}
