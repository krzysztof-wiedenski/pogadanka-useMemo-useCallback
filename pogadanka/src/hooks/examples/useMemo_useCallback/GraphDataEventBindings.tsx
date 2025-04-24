import React from "react";

const GraphDataEventBindings: React.FC = () => {
  const data = [{ id: 1, label: "Node 1" }];

  const graphData = React.useMemo(
    () => data.map((d) => ({ ...d, x: Math.random(), y: Math.random() })),
    [data]
  );

  const onNodeClick = React.useCallback(
    (id: number) => alert(`Clicked node ${id}`),
    []
  );

  return (
    <ul>
      {graphData.map((n) => (
        <li key={n.id} onClick={() => onNodeClick(n.id)}>
          {n.label}
        </li>
      ))}
    </ul>
  );
};

export default GraphDataEventBindings;
