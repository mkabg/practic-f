import { forwardRef } from 'react';

const TextBox = forwardRef<HTMLInputElement, React.HTMLProps<HTMLInputElement>>((props, ref) => {
  return (
    <div>
      <input type="text" placeholder="enter your name" ref={ref} {...props} />
    </div>
  );
});

export default TextBox;
