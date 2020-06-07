import React from "react";

export const renderField = ({
  input,
  label,
  type,
  meta: { asyncValidating, touched, error }
}) => (
  <div>
    <div>
      <input {...input} type={type} placeholder={label} />
      {touched &&
        ((error && <span style={{ color: "red" }}>{error}</span>) ||
          (asyncValidating && (
            <span style={{ color: "orange" }}>validating . . .</span>
          )))}
    </div>
  </div>
);
