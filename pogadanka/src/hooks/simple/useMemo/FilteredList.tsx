import React, { useMemo, useState } from "react";

// useMemo
const FilteredList: React.FC = () => {
  const [query, setQuery] = useState("");
  const users = ["Alice", "Bob", "Charlie", "David"];

  const filteredUsers = useMemo(() => {
    return users.filter((user) =>
      user.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search users..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {filteredUsers.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </div>
  );
};
