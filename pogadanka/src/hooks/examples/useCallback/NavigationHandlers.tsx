import React from "react";

const NavigationHandlers: React.FC = () => {
  const navigate = (path: string) => alert(`Navigating to ${path}`);

  const goToProfile = React.useCallback(() => navigate("/profile"), []);

  return <button onClick={goToProfile}>Go to Profile</button>;
};

export default NavigationHandlers;
