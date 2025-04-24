import React from "react";

const KeyboardShortcuts: React.FC = () => {
  React.useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Enter") alert("Enter pressed");
    };
    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return <p>Press "Enter" key</p>;
};

export default KeyboardShortcuts;
