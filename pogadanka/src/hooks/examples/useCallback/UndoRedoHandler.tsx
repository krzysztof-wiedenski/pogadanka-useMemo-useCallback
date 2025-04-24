import React from "react";

const UndoRedoHandler: React.FC = () => {
  const [history, setHistory] = React.useState<string[]>([]);

  const addAction = React.useCallback((action: string) => {
    setHistory((prev) => [...prev, action]);
  }, []);

  return (
    <div>
      <button onClick={() => addAction("Step")}>Do Step</button>
      <pre>{JSON.stringify(history)}</pre>
    </div>
  );
};

export default UndoRedoHandler;
