import { Input } from "@/components/entities/Input";
import { PrimaryButton } from "@/components/entities/PrimaryButton";
import { Login } from "@/models";
import { useLoginMutation } from "@/store/api/authApi";
import { useState } from "react";
import { StyledLoginError, StyledLoginForm } from "./LoginForm.styles";

export const LoginForm = () => {
  const [loginValues, setLoginValues] = useState<Login>({ username: "", password: "" });
  const [auth, { isLoading, isError }] = useLoginMutation();

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    setLoginValues((prev) => ({ ...prev, [target.name]: target.value }));
  };

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (loginValues.username.trim() === "" || loginValues.password.trim() === "") return;

    try {
      await auth(loginValues).unwrap();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <StyledLoginForm onSubmit={submitHandler}>
      <Input
        name="username"
        placeholder="Login"
        autoComplete="username"
        spellCheck="false"
        autoCapitalize="off"
        value={loginValues.username}
        onChange={changeHandler}
      />
      <Input
        name="password"
        type="password"
        placeholder="Password"
        autoComplete="current-password"
        spellCheck="false"
        autoCapitalize="off"
        value={loginValues.password}
        onChange={changeHandler}
      />
      {isError && <StyledLoginError>Authorization failed</StyledLoginError>}
      <PrimaryButton disabled={isLoading}>{isLoading ? "Waiting..." : "Login"}</PrimaryButton>
    </StyledLoginForm>
  );
};
