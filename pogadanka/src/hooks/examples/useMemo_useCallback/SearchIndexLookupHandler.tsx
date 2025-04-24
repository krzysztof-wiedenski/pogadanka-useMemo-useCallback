import React from "react";

const SearchIndexLookupHandler: React.FC = () => {
  const data = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
  ];

  const lookup = React.useMemo(
    () => Object.fromEntries(data.map((d) => [d.name, d])),
    [data]
  );

  const onSearch = React.useCallback(
    (name: string) => alert(JSON.stringify(lookup[name])),
    [lookup]
  );

  return (
    <div>
      <button onClick={() => onSearch("Jane")}>Search Jane</button>
    </div>
  );
};

export default SearchIndexLookupHandler;
