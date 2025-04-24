import React from "react";

const DynamicFiltersSubmit: React.FC = () => {
  const [query, setQuery] = React.useState("");

  const filters = React.useMemo(() => ({ query }), [query]);

  const handleSubmit = React.useCallback(
    () => alert(JSON.stringify(filters)),
    [filters]
  );

  return (
    <div>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default DynamicFiltersSubmit;
