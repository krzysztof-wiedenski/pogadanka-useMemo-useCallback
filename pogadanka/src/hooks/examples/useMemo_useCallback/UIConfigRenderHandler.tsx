import React from "react";

const UIConfigRenderHandler: React.FC = () => {
  const config = React.useMemo(() => ({ theme: "dark", fontSize: 14 }), []);
  const renderUI = React.useCallback(
    () => console.log("Rendering with", config),
    [config]
  );
  React.useEffect(() => renderUI(), [renderUI]);
  return <div>Check console for UI config rendering</div>;
};

export default UIConfigRenderHandler;
