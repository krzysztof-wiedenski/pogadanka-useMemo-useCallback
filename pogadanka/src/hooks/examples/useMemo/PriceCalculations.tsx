import React from "react";

const PriceCalculations: React.FC = () => {
  const cart = [
    { price: 10, qty: 2 },
    { price: 15, qty: 1 },
  ];

  const total = React.useMemo(
    () => cart.reduce((sum, item) => sum + item.price * item.qty, 0),
    [cart]
  );

  return <div>Total: ${total}</div>;
};

export default PriceCalculations;
