import { useState, useRef } from "react";

export default function Count() {
  const [currentCount, setCurrent] = useState(0);

  const updateCount = (action: string) => {
    {
      previous.current = currentCount;

      if (action === "+") {
        setCurrent((prev) => prev + 1);
      } else {
        setCurrent((prev) => prev - 1);
      }
    }
  };

  const previous = useRef(0);

  return (
    <div>
      <button onClick={() => updateCount("+")}>+ 1</button>
      <button onClick={() => updateCount("-")}>- 1</button>
      <p>
        current: {currentCount}, previous: {previous.current}
      </p>
    </div>
  );
}
