import React from "react";

const FormSubmit: React.FC = () => {
  const [email, setEmail] = React.useState("");

  const handleSubmit = React.useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      alert(email);
    },
    [email]
  );

  return (
    <form onSubmit={handleSubmit}>
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormSubmit;
