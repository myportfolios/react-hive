import { render, fireEvent } from "@testing-library/react";
import { useState } from "react";
import { TextInput } from "./TextInput";

describe(`Component: ${TextInput.name}`, () => {
  it("should render", () => {
    const handleChange = () => {};
    const { container } = render(
      <TextInput
        value="This is TextInput Component"
        handleUserInput={handleChange}
      />
    );
    expect(container).toMatchSnapshot();
  });
  it(`should trigger handleUserInput function when user types`, () => {
    const handleChange = vi.fn();
    const TextInputWrapper = () => {
      const [inputValue, setInputValue] = useState("I am typing");
      const handleUserInput = (value: string) => {
        setInputValue(value);
        handleChange(value); // Use `handleChange` to check the value
      };

      return <TextInput handleUserInput={handleUserInput} value={inputValue} />;
    };

    const { getByRole } = render(<TextInputWrapper />);
    fireEvent.change(getByRole("textbox"), {
      target: { value: "New input" },
    });

    // Assert that handleChange was called with the correct argument
    expect(handleChange).toHaveBeenCalledWith("New input");
  });
});
