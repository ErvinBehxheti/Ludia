import { fetchHTML } from "../../utils";
import Layout from "../Layout/Layout";

export default async function ColorPicker() {
  Layout();
  const colorPickerHTML = await fetchHTML("colorpicker");

  const layout = document.getElementById("content") as HTMLDivElement;
  layout.innerHTML = colorPickerHTML;

  const colorPicker = document.getElementById("color-picker");
  const colorCodeDisplay = document.getElementById("color-code");

  // Update the background color and color code when the user selects a color
  colorPicker.addEventListener("input", (e) => {
    const selectedColor = e.target.value;
    document.body.style.backgroundColor = selectedColor;
    colorCodeDisplay.textContent = selectedColor;
  });
}
