import { fetchHTML } from "../../utils";
import Layout from "../Layout/Layout";

export default async function Emoji() {
    Layout();
    const emoji = await fetchHTML('emoji')

    const layout = document.getElementById('content') as HTMLDivElement
    layout.innerHTML = emoji;

    const moodMessage = document.getElementById('mood-message');
    const emojis = document.querySelectorAll('.emoji');
    
    const moods = {
      happy: {
        background: 'linear-gradient(to right, #ff7e5f, #feb47b)',
        message: 'Feeling Happy! 😄'
      },
      sad: {
        background: 'linear-gradient(to right, #2b5876, #4e4376)',
        message: 'Feeling Blue... 😢'
      },
      excited: {
        background: 'linear-gradient(to right, #ff9966, #ff5e62)',
        message: 'Feeling Excited! 😆'
      },
      angry: {
        background: 'linear-gradient(to right, #f44336, #f57c00)',
        message: 'Feeling Angry! 😡'
      }
    };

    emojis.forEach(emoji => {
      emoji.addEventListener('click', () => {
        const mood = emoji.id;
        document.body.style.backgroundImage = moods[mood].background;
        moodMessage.textContent = moods[mood].message;
        
        // Show the mood message with fade-in effect
        moodMessage.style.opacity = 1;
        setTimeout(() => {
          moodMessage.style.opacity = 0;
        }, 2000);
      });
    });
}