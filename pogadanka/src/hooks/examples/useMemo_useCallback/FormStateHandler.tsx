import React from "react";

const FormStateHandler: React.FC = () => {
  const [form, setForm] = React.useState({ name: "", age: "" });

  const isValid = React.useMemo(
    () => form.name.length > 0 && Number(form.age) > 0,
    [form]
  );

  const handleSubmit = React.useCallback(
    () => alert(JSON.stringify(form)),
    [form]
  );

  return (
    <div>
      <input
        placeholder="Name"
        onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
      />
      <input
        placeholder="Age"
        onChange={(e) => setForm((f) => ({ ...f, age: e.target.value }))}
      />
      <button onClick={handleSubmit} disabled={!isValid}>
        Submit
      </button>
    </div>
  );
};

export default FormStateHandler;
