import { render } from "@testing-library/react";

import { Login } from "./Login";

describe(`should render ${Login.name}`, () => {
  it("should render", () => {
    const { container } = render(<Login />);

    expect(container).toMatchSnapshot();
  });
});
