import React, { useMemo, useCallback, useState } from "react";

type Item = {
  id: number;
  label: string;
  visible: boolean;
};

// useCallback + useMemo
const CombinedMemoExample: React.FC = () => {
  const [items] = useState<Item[]>([
    { id: 1, label: "Item A", visible: true },
    { id: 2, label: "Item B", visible: false },
    { id: 3, label: "Item C", visible: true },
  ]);

  const visibleItems = useMemo(() => {
    return items.filter((item) => item.visible);
  }, [items]);

  const handleClick = useCallback(
    (id: number) => {
      const item = visibleItems.find((item) => item.id === id);
      alert(`Clicked: ${item?.label}`);
    },
    [visibleItems]
  );

  return (
    <div>
      <ul>
        {visibleItems.map((item) => (
          <li key={item.id}>
            {item.label}
            <button onClick={() => handleClick(item.id)}>Select</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
