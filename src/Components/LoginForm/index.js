import React from "react";
import { Field, reduxForm } from "redux-form";
import { renderField } from "./renderField";
import { asyncValidate } from "./asyncValidate";

const LoginForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="email"
        type="email"
        component={renderField}
        label="Username"
      />
      <Field
        name="password"
        type="password"
        component={renderField}
        label="Password"
      />

      <div>
        <button type="submit" disabled={submitting}>
          Login
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "loginuser", // a unique identifier for this form
  asyncValidate
})(LoginForm);
