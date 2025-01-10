import { fetchHTML } from "../../utils";
import Layout from "../Layout/Layout";

export default async function TodoList() {
  Layout();
  const layoutContent = document.getElementById("content") as HTMLDivElement;

  const todolist = await fetchHTML("todolist");
  layoutContent.innerHTML = todolist;

  const input = document.getElementById("todo-input") as HTMLInputElement;
  const form = document.getElementById("todo-form") as HTMLFormElement;
  const list = document.getElementById("todo-list") as HTMLUListElement;

  handleInputChange(input);
  onSubmit(form, input, list);
}

let todoInputState = "";

function handleInputChange(input: HTMLInputElement) {
  input.addEventListener("input", () => {
    todoInputState = input.value;
  });
}

function onSubmit(
  form: HTMLFormElement,
  input: HTMLInputElement,
  list: HTMLUListElement
) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (todoInputState.trim() === "") {
      alert("Please enter a valid to-do item.");
      return;
    }

    const li = document.createElement("li");
    li.textContent = todoInputState;
    list.appendChild(li);

    input.value = "";
    todoInputState = "";
  });
}
