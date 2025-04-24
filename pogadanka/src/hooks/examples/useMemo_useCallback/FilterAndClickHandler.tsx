import React from "react";

const FilterAndClickHandler: React.FC = () => {
  const items = ["apple", "banana"];

  const filtered = React.useMemo(
    () => items.filter((i) => i.startsWith("a")),
    [items]
  );

  const handleClick = React.useCallback((item: any) => alert(item), []);
  return (
    <ul>
      {filtered.map((item) => (
        <li key={item} onClick={() => handleClick(item)}>
          {item}
        </li>
      ))}
    </ul>
  );
};

export default FilterAndClickHandler;
