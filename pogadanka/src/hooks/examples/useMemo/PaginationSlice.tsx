import React from "react";

const PaginationSlice: React.FC = () => {
  const [page, setPage] = React.useState(0);

  const items = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);
  const perPage = 10;

  const currentPageItems = React.useMemo(
    () => items.slice(page * perPage, (page + 1) * perPage),
    [page]
  );

  return (
    <div>
      <ul>
        {currentPageItems.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
      <button onClick={() => setPage((p) => p + 1)}>Next</button>
    </div>
  );
};

export default PaginationSlice;
