import React from "react";

const Child = React.memo(({ onAction }: { onAction: () => void }) => {
  console.log("Child rendered");
  return <button onClick={onAction}>Click Me</button>;
});

const Parent = () => {
  const handleAction = React.useCallback(() => alert("Clicked"), []);
  return <Child onAction={handleAction} />;
};
export default Parent;
