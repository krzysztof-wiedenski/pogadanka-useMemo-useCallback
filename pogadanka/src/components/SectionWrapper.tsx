export const SectionWrapper: React.FC<{
  title: string;
  children: React.ReactNode;
}> = ({ title, children }) => (
  <div
    style={{
      border: "1px solid #ccc",
      padding: "1rem",
      marginBottom: "1.5rem",
      borderRadius: "8px",
      backgroundColor: "#f9f9f9",
      color: "#333",
    }}
  >
    <h3 style={{ marginBottom: "1rem" }}>{title}</h3>
    {children}
  </div>
);
