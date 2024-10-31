import React, { useState } from "react";
import { Button } from "react-hive";
import { TextInput } from "../lib/TextInput/TextInput";
import { Login } from "../lib/Login/Login";

function App() {
  const [value, setValue] = useState("");
  const handleInput = (value: string) => setValue(value);
  console.log(`value is: ${value}`);
  return (
    <div className="tw-col">
      <Button>Test</Button>
      <TextInput
        type="text"
        handleUserInput={handleInput}
        value={value}
        size={"lg"}
        // styles="w-full"
        style={{ width: "100%" }}
      />
      <Login />
    </div>
  );
}

export default App;
