import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { FavBeersProvider } from "../../Providers/FavBeersProvider";
import HomePage from "./HomePage";

describe("Home Page", () => {
  it("Renders the component", () => {
    render(
      <MemoryRouter>
        <FavBeersProvider>
          <HomePage />
        </FavBeersProvider>
      </MemoryRouter>
    );
  });

});
