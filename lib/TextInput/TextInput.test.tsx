import { render } from "@testing-library/react";
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
});
