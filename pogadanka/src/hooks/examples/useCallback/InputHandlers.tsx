import React from "react";

const InputHandlers: React.FC = () => {
  const [text, setText] = React.useState("");

  const handleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setText(e.target.value);
    },
    []
  );

  return <input value={text} onChange={handleChange} />;
};

export default InputHandlers;
