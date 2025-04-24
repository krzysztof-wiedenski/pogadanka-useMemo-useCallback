import React from "react";

const CartTotalAddRemoveHandlers: React.FC = () => {
  const [cart, setCart] = React.useState([{ id: 1, price: 10, qty: 1 }]);

  const total = React.useMemo(
    () => cart.reduce((sum, i) => sum + i.price * i.qty, 0),
    [cart]
  );

  const addItem = React.useCallback(
    () => setCart((c) => [...c, { id: c.length + 1, price: 5, qty: 1 }]),
    []
  );

  return (
    <div>
      Total: ${total} <button onClick={addItem}>Add</button>
    </div>
  );
};

export default CartTotalAddRemoveHandlers;
