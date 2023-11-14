import { render } from "@testing-library/react";

import App from "./App";
import { describe, expect, it } from "vitest";

describe("App", () => {
  it("should render component", () => {
    const components = render(<App />);

    /*test para verificar que el componente existe*/
    expect(components).toBeDefined;

    // test para verificar que el componente tiene un texto en específico, en este caso "react" en modo no estricto
    /*const heading = components.getByRole("heading", {
      name: /react/i,
    }).textContent; */

    // test para verificar que el componente tiene cualquier texto
    /*  const heading = screen.getByRole("heading");
    expect(heading.textContent).toBeTruthy(); */
  });
});
