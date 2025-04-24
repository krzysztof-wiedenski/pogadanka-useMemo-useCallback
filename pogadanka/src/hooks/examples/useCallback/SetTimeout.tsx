import React from "react";

const SetTimeout: React.FC = () => {
  const [msg, setMsg] = React.useState("");

  const showDelayed = React.useCallback(() => {
    setTimeout(() => setMsg("Delayed Hello!"), 1000);
  }, []);

  return (
    <div>
      <button onClick={showDelayed}>Show Message</button>
      <p>{msg}</p>
    </div>
  );
};

export default SetTimeout;
