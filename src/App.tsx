import React, { useState } from "react";
import { Button } from "react-hive";
import { TextInput } from "../lib/TextInput/TextInput";

function App() {
  const [value, setValue] = useState("");
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value);
  console.log(`value is: ${value}`);
  return (
    <div className="tw-col">
      <Button>Test</Button>
      <TextInput
        handleUserInput={handleInput}
        value={value}
        size={"lg"}
        // styles="w-full"
        style={{ width: "100%" }}
      />
    </div>
  );
}

export default App;
