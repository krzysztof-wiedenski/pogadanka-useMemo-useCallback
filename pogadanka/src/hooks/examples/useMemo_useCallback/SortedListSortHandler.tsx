import React from "react";

const SortedListSortHandler: React.FC = () => {
  const [asc, setAsc] = React.useState(true);

  const items = [3, 1, 2];

  const sorted = React.useMemo(
    () => [...items].sort((a, b) => (asc ? a - b : b - a)),
    [asc]
  );

  const toggleSort = React.useCallback(() => setAsc((a) => !a), []);

  return (
    <div>
      <button onClick={toggleSort}>Toggle Sort</button>
      <div>{sorted.join(", ")}</div>
    </div>
  );
};

export default SortedListSortHandler;
