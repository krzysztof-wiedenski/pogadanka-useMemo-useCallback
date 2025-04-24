import React from "react";

const PerformanceMetrics: React.FC = () => {
  const numbers = [10, 15, 20, 25];

  const stats = React.useMemo(() => {
    const sum = numbers.reduce((a, b) => a + b, 0);
    return {
      avg: sum / numbers.length,
      max: Math.max(...numbers),
      min: Math.min(...numbers),
    };
  }, [numbers]);

  return (
    <div>
      Avg: {stats.avg}, Max: {stats.max}, Min: {stats.min}
    </div>
  );
};

export default PerformanceMetrics;
