import React from "react";
import { TextInput } from "../TextInput/TextInput";
import { Button } from "react-hive";

export function Login() {
  return (
    <div className="flex flex-col w-64 h-64 items-center p-6 space-y-6 border border-primary shadow-lg">
      <span className="label-component">Enter details to login</span>
      <TextInput
        handleUserInput={() => {}}
        type="email"
        value="email"
        isVertical
      />
      <TextInput
        handleUserInput={() => {}}
        type="password"
        value="password"
        isVertical
      />
      <Button>{"Submit"}</Button>
    </div>
  );
}
