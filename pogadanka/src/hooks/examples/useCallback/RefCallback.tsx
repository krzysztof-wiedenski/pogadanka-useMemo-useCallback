import React from "react";

const RefCallback: React.FC = () => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const focusInput = React.useCallback(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={focusInput}>Focus</button>
    </div>
  );
};

export default RefCallback;
