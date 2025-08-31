// Mood.jsx
import { useState } from "react";

// Define allowed mood types
type MoodType = "Neutral" | "Happy" | "Sad" | "Angry";

// Simple map from mood name to emoji
const EMOJI: Record<MoodType, string> = {
  Neutral: "😐",
  Happy: "😊",
  Sad: "😢",
  Angry: "😠",
};

const COUNTER = { happy: 0, sad: 0, angry: 0 };

const HISTORY: MoodType[] = [];

export default function Mood() {
  // Current mood state
  const [mood, setMood] = useState<MoodType>("Neutral");

  // Helper to update mood
  const changeMood = (next: MoodType) => {
    if (next === mood) return; // no-op if same mood
    setMood(next);
    if (next === "Happy") (COUNTER.happy += 1), HISTORY.push(next);
    else if (next === "Sad") (COUNTER.sad += 1), HISTORY.push(next);
    else if (next === "Angry") (COUNTER.angry += 1), HISTORY.push(next);
  };

  function getRandom(): MoodType {
    const moods: MoodType[] = ["Happy", "Sad", "Angry"];
    const rand = Math.floor(Math.random() * moods.length);
    // if (mood === moods[rand]) {
    //   return getRandom()
    // }
    return moods[rand];
  }

  function reset() {
    changeMood("Neutral");
    COUNTER.happy = 0;
    COUNTER.sad = 0;
    COUNTER.angry = 0;
    HISTORY.length = 0;
  }

  return (
    <div className="current">
      <h2 className="current">Current Mood: {mood + " " + EMOJI[mood]}</h2>
      <h3>
        History: {HISTORY.slice(-3).join("\n")}
        <p>
          <p>Counter: </p>
          Happy: {COUNTER.happy}, Sad: {COUNTER.sad}, Angry:
          {COUNTER.angry}
        </p>
      </h3>

      <div className="button">
        <button className="h" onClick={() => changeMood("Happy")}>
          😊 Happy
        </button>
        <button className="s" onClick={() => changeMood("Sad")}>
          😢 Sad
        </button>
        <button className="a" onClick={() => changeMood("Angry")}>
          😠 Angry
        </button>
        <p>
          <button className="r" onClick={() => changeMood(getRandom())}>
            Random 🤔
          </button>
          <button className="r" onClick={() => reset()}>
            Reset 😐
          </button>
        </p>
      </div>
    </div>
  );
}
