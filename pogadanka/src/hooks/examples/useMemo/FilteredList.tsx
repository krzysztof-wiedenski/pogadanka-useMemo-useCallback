import React from "react";

const FilteredList: React.FC = () => {
  const users = ["Alice", "Bob"];

  const filtered = React.useMemo(
    () => users.filter((u) => u.includes("A")),
    [users]
  );

  return (
    <ul>
      {filtered.map((u) => (
        <li key={u}>{u}</li>
      ))}
    </ul>
  );
};

export default FilteredList;
