import { render } from "@testing-library/react";
import { Button } from "./Button";

describe(`Component: ${Button.name}`, () => {
  it("should render", () => {
    const { container } = render(<Button>My Button</Button>);

    expect(container).toMatchSnapshot();
  });
  it("should match inner snapshot", () => {
    const { container } = render(<Button>My Button</Button>);

    expect(container).toMatchInlineSnapshot(`
      <div>
        <button
          class=" btn btn-md btn-text"
        >
          My Button
        </button>
      </div>
    `);
  });
});
