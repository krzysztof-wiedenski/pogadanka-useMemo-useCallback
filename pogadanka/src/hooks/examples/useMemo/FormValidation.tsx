import React from "react";

const FormValidation: React.FC = () => {
  const [email, setEmail] = React.useState("");

  const isValid = React.useMemo(
    () => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
    [email]
  );

  return (
    <div>
      <input value={email} onChange={(e) => setEmail(e.target.value)} />{" "}
      <p>{isValid ? "Valid" : "Invalid"}</p>
    </div>
  );
};

export default FormValidation;
