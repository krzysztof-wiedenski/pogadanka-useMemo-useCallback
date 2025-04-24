import React from "react";

const UniqueCategories: React.FC = () => {
  const items = ["fruit", "veg", "fruit", "meat", "veg"];
  const unique = React.useMemo(() => Array.from(new Set(items)), [items]);
  return <div>{unique.join(", ")}</div>;
};

export default UniqueCategories;
