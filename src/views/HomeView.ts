export default function HomeView() {
  const app = document.getElementById("app") as HTMLDivElement;
  app.innerHTML = `
      <h1>Home</h1>
      <button id="clickMe">Click Me</button>
      <p id="message"></p>
    `;

  const button = document.getElementById("clickMe") as HTMLButtonElement;
  const message = document.getElementById("message") as HTMLElement;

  button.addEventListener("click", () => {
    message.textContent = "Button clicked!";
  });
}
