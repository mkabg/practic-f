import { useState } from 'react';

function Button() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
    <input type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter text..."
      />
      <button type="button" onClick={() => setInputValue('')}>Clear Input</button>
      </div>
  );
}

export default Button;