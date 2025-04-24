import React from "react";

const ThemePropsToggleHandler: React.FC = () => {
  const [dark, setDark] = React.useState(false);

  const styles = React.useMemo(
    () => ({
      color: dark ? "white" : "black",
      background: dark ? "black" : "white",
    }),
    [dark]
  );

  const toggle = React.useCallback(() => setDark((d) => !d), []);

  return (
    <div style={styles}>
      <button onClick={toggle}>Toggle Theme</button>
    </div>
  );
};

export default ThemePropsToggleHandler;
