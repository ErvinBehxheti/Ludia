import { fetchHTML } from "../../utils";
import Layout from "../Layout/Layout";

export default async function Quote() {
  Layout();
  const quote = await fetchHTML("quote");

  const layout = document.getElementById("content") as HTMLDivElement;
  layout.innerHTML = quote;

  const quotes = [
    {
      text: "The only way to do great work is to love what you do.",
      author: "Steve Jobs",
    },
    {
      text: "Life is what happens when you're busy making other plans.",
      author: "John Lennon",
    },
    {
      text: "In three words I can sum up everything I've learned about life: it goes on.",
      author: "Robert Frost",
    },
    {
      text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
      author: "Ralph Waldo Emerson",
    },
    {
      text: "Be yourself; everyone else is already taken.",
      author: "Oscar Wilde",
    },
    {
      text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
      author: "Albert Einstein",
    },
  ];

  const quoteElement = document.getElementById("quote");
  const authorElement = document.getElementById("author");
  const button = document.getElementById("generate-btn");

  button.addEventListener("click", () => {
    // Add fade out effect
    document.querySelector(".quote-container").style.opacity = 0;

    // Wait for the fade out to complete before changing the quote
    setTimeout(() => {
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      quoteElement.textContent = `"${randomQuote.text}"`;
      authorElement.textContent = `– ${randomQuote.author}`;

      // Add fade in effect after the quote changes
      document.querySelector(".quote-container").style.opacity = 1;
    }, 500); // Matches the fade-out duration
  });
}
