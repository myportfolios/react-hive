import React, { useState } from "react";
import { TextInput } from "../TextInput/TextInput";
import { Button } from "react-hive";

interface LoginProps {
  title?: string;
  type: string;
}
export function Login({ title }: LoginProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInput = (value: string, type: string) => {
    switch (type) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        return;
    }
  };
  return (
    <div className="flex flex-col w-64 items-center p-6 space-y-2 border border-primary shadow-lg">
      <span className="label">{title}</span>
      <TextInput
        handleUserInput={handleInput}
        type="email"
        value={email}
        isVertical
        label="Email"
      />
      <TextInput
        handleUserInput={handleInput}
        type="password"
        value={password}
        isVertical
        label="Password"
      />
      <Button>{"Submit"}</Button>
    </div>
  );
}

/**
 * To do
 * 1. Test login component - input and  submit button
 * 2. Create label for each input, set focus on label when component loads
 * 3. Test Error state for input
 */
