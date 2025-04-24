import React from "react";

const ThemeStyleGenerator: React.FC = () => {
  const [dark, setDark] = React.useState(false);

  const theme = React.useMemo(
    () => ({
      backgroundColor: dark ? "#333" : "#fff",
      color: dark ? "#fff" : "#000",
    }),
    [dark]
  );

  return (
    <div style={theme}>
      <button onClick={() => setDark((d) => !d)}>Toggle Theme</button>
    </div>
  );
};

export default ThemeStyleGenerator;
