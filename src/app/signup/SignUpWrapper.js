"use client";

import { useContext } from "react";
import SignUp from "./page";
import { Signuptcx } from "../context/signup-context";

export default function SignUpWrapper() {
  const context = useContext(Signuptcx);

  return (
    <SignUp
      handleSubmit={context.handleSubmit}
      validateInputs={context.validateInputs}
      nameErrorMessage={context.nameErrorMessage}
      nameError={context.nameError}
      passwordErrorMessage={context.passwordErrorMessage}
      passwordError={context.passwordError}
      emailErrorMessage={context.emailErrorMessage}
      emailError={context.emailError}
    />
  );
}
