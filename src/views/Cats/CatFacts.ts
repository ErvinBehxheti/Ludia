import { fetchHTML } from "../../utils";
import Layout from "../Layout/Layout";

export default async function CatFacts() {
    Layout();
    const catFactsHTML = await fetchHTML("catfacts");
    
    const layout = document.getElementById("content") as HTMLDivElement;
    layout.innerHTML = catFactsHTML;
    
    const catFacts = [
        "Cats have five toes on their front paws, but only four on their back paws.",
        "A group of cats is called a clowder.",
        "Cats sleep for 70% of their lives.",
        "A cat's nose is as unique as a human's fingerprint.",
        "A cat can rotate its ears 180 degrees.",
        "The oldest cat ever recorded was 38 years old!",
        "Cats can make over 100 different sounds.",
        "A cat’s brain is 90% similar to a human's brain.",
        "Cats are crepuscular, meaning they are most active at dawn and dusk."
      ];
  
      const factText = document.getElementById('cat-fact');
      const button = document.getElementById('generate-btn');
  
      // Function to fetch and display a new cat fact
      const getCatFact = () => {
        // Pick a random fact from the array
        const randomFact = catFacts[Math.floor(Math.random() * catFacts.length)];
        factText.textContent = randomFact;
        
        // Optionally change the background color for fun
        document.body.style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
      };
  
      button.addEventListener('click', getCatFact);
}