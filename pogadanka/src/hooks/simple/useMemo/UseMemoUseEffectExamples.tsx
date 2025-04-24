// React TypeScript Tutorial: useMemo and useEffect with Examples

import React, { useEffect, useMemo, useState } from "react";

// This component demonstrates the use of useMemo and useEffect hooks in different scenarios
const UseMemoUseEffectExamples: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [users, setUsers] = useState<string[]>(["Alice", "Bob", "Charlie"]);
  const [search, setSearch] = useState<string>("");

  // useEffect - running on every count change
  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]);

  // useEffect - simulate fetching data
  useEffect(() => {
    const fetchUsers = async () => {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Fetched users");
    };
    fetchUsers();
  }, []); // Empty dependency array means this runs once on mount

  // useMemo - memoizing expensive calculation
  const expensiveComputation = useMemo(() => {
    console.log("Computing factorial of count");
    const factorial = (n: number): number => {
      return n <= 1 ? 1 : n * factorial(n - 1);
    };
    return factorial(count);
  }, [count]);

  // useMemo - filtering users based on search input
  const filteredUsers = useMemo(() => {
    console.log("Filtering users");
    return users.filter((user) =>
      user.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, users]);

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">useMemo and useEffect Tutorial</h1>

      {/* Count increment section */}
      <div>
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Increment Count
        </button>
        <p>Count: {count}</p>
        <p>Factorial of Count (memoized): {expensiveComputation}</p>
      </div>

      {/* Search users section */}
      <div>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search users..."
          className="px-2 py-1 border rounded"
        />
        <ul>
          {filteredUsers.map((user) => (
            <li key={user}>{user}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UseMemoUseEffectExamples;
