import React from "react";

const ExpensiveMath: React.FC = () => {
  const [num, setNum] = React.useState(30);

  const fib = React.useMemo(() => {
    const fibCalc = (n: number): number =>
      n <= 1 ? n : fibCalc(n - 1) + fibCalc(n - 2);
    return fibCalc(num);
  }, [num]);

  return (
    <div>
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(Number(e.target.value))}
      />{" "}
      Fibonacci: {fib}
    </div>
  );
};

export default ExpensiveMath;
