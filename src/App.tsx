import React, { useState } from "react";
import { Button } from "react-hive";
import { TextInput } from "../lib/TextInput/TextInput";
import { Login } from "../lib/Login/Login";

function App() {
  const [value, setValue] = useState("");
  const [type, setType] = useState("");
  const handleInput = (value: string, type: string) => {
    setValue(value);
    setType(type);
  };
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
      <Login title="Testing Login" type={type} />
    </div>
  );
}

export default App;
