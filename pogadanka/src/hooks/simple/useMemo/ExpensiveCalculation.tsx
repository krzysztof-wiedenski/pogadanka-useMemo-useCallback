import React, { useMemo, useState } from "react";

// useMemo
const ExpensiveCalculation: React.FC = () => {
  const [number, setNumber] = useState(1);

  const factorial = useMemo(() => {
    const calculateFactorial = (n: number): number => {
      return n <= 1 ? 1 : n * calculateFactorial(n - 1);
    };
    return calculateFactorial(number);
  }, [number]);

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <p>Factorial: {factorial}</p>
    </div>
  );
};
