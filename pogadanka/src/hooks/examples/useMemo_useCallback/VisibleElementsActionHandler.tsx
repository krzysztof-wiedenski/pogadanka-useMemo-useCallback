import React from "react";

const VisibleElementsActionHandler: React.FC = () => {
  const allItems = ["one", "two", "three"];

  const [filter, setFilter] = React.useState("t");

  const visible = React.useMemo(
    () => allItems.filter((i) => i.includes(filter)),
    [filter]
  );

  const highlight = React.useCallback(
    (item: string) => alert(`Highlight ${item}`),
    []
  );

  return (
    <div>
      <ul>
        {visible.map((i) => (
          <li key={i} onClick={() => highlight(i)}>
            {i}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VisibleElementsActionHandler;
