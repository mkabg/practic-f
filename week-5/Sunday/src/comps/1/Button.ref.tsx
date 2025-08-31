import { useRef } from "react";

export default function ButtonRef() {
  const inputRef = useRef<HTMLInputElement>(null);

  const clearInput = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={clearInput}>Clear Input</button>
    </div>
  );
}
