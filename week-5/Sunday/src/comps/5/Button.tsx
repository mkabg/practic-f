import { useRef, useState } from "react";

export default function Button() {
  const count = useRef(0);
  const [visibleCount, setVisibleCount] = useState<number | null>(null);

  const updateRef = () => {
    count.current += 1;
  };

  const showTotal = () => {
    setVisibleCount(count.current);
  };

  const reset = () => {
    count.current = 0;
    setVisibleCount(0);
  };
  return (
    <div>
      <button onClick={updateRef}>Click Me</button>
      <button onClick={showTotal}>Show Total Clicks</button>
      <button onClick={reset}>Reset</button>
      {visibleCount !== null && <p>count: {visibleCount}</p>}
    </div>
  );
}
