import React from "react";

const DataTransformation: React.FC = () => {
  const rawData = [
    { date: "2023-01-01", value: 10 },
    { date: "2023-01-02", value: 20 },
  ];

  const chartData = React.useMemo(
    () => rawData.map((d) => ({ x: d.date, y: d.value })),
    [rawData]
  );

  return <pre>{JSON.stringify(chartData, null, 2)}</pre>;
};

export default DataTransformation;
