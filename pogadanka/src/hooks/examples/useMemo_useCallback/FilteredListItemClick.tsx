import React from "react";

const FilteredListItemClick: React.FC = () => {
  const [search, setSearch] = React.useState("");

  const items = ["apple", "banana", "grape"];

  const filtered = React.useMemo(
    () => items.filter((i) => i.includes(search)),
    [search]
  );

  const handleClick = React.useCallback((item: string) => alert(item), []);
  return (
    <div>
      <input value={search} onChange={(e) => setSearch(e.target.value)} />{" "}
      <ul>
        {filtered.map((item) => (
          <li key={item} onClick={() => handleClick(item)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilteredListItemClick;
