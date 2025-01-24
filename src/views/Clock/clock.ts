import { fetchHTML } from "../../utils";
import Layout from "../Layout/Layout";

export default async function Clock() {
    Layout();
    const layout = document.getElementById('content') as HTMLElement;

    const clockHTML = await fetchHTML('clock');
    layout.innerHTML = clockHTML;

    const clockElement = document.getElementById('clock');

    // Function to update the clock and change color
    const updateClock = () => {
      const now = new Date();
      let hours = now.getHours();
      let minutes = now.getMinutes();
      let seconds = now.getSeconds();

      // Format time to always show two digits
      hours = hours < 10 ? '0' + hours : hours;
      minutes = minutes < 10 ? '0' + minutes : minutes;
      seconds = seconds < 10 ? '0' + seconds : seconds;

      // Set the clock text
      clockElement.textContent = `${hours}:${minutes}:${seconds}`;

      // Change color every second
      const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
      clockElement.style.color = randomColor;
      document.body.style.backgroundColor = randomColor;
    };

    // Update the clock every second
    setInterval(updateClock, 1000);

    // Initial clock update
    updateClock();
}