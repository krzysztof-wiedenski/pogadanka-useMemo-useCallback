import React from "react";

const useCustomHook = (callback: () => void) => {
  React.useEffect(() => {
    callback();
  }, [callback]);
};

const Component = () => {
  const logHello = React.useCallback(() => console.log("Hello"), []);
  useCustomHook(logHello);
  return <div>Check console</div>;
};
export default Component;
