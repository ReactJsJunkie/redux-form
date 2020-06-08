import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { renderField } from "./renderField";
import { asyncValidate } from "./asyncValidate";

let LoginForm = props => {
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

// Decorate with reduxForm(). It will read the initialValues prop provided by connect()
LoginForm = reduxForm({
  form: "loginuser", // a unique identifier for this form
  asyncValidate
})(LoginForm);

// You have to connect() to any reducers that you wish to connect to yourself
LoginForm = connect(
  state => ({
    users: state.users.data // pull initial values from account reducer
  }),
  {} // bind account loading action creator
)(LoginForm);

export default LoginForm;
