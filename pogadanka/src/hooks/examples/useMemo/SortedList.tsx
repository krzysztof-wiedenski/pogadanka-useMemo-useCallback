import React from "react";

const SortedList: React.FC = () => {
  const [sortAsc, setSortAsc] = React.useState(true);
  const data = [4, 2, 5, 1, 3];

  const sorted = React.useMemo(() => {
    return [...data].sort((a, b) => (sortAsc ? a - b : b - a));
  }, [sortAsc]);

  return (
    <div>
      <button onClick={() => setSortAsc(!sortAsc)}>Toggle Sort</button>
      <div>{sorted.join(", ")}</div>
    </div>
  );
};

export default SortedList;
