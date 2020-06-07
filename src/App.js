import React, { useState } from "react";

import NewUserForm from "./Components/NewUserForm";
import LoginForm from "./Components/LoginForm";

export default function App() {
  const [login, setLogin] = useState(false);
  const LoginFormToggle = () => {
    setLogin(!login);
  };
  return (
    <div className="App">
      <h1>{login ? "Login" : "New User"}</h1>
      <button onClick={LoginFormToggle}>{login ? "Login" : "New User"}</button>
      <hr />
      {login ? (
        <NewUserForm
          onSubmit={values => alert(JSON.stringify(values, null, 2))}
        />
      ) : (
        <LoginForm
          onSubmit={values => alert(JSON.stringify(values, null, 2))}
        />
      )}
    </div>
  );
}
