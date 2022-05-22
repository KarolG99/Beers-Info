import { render } from "@testing-library/react";
import { FavBeersProvider } from "../../Providers/FavBeersProvider";
import HomePage from "./HomePage";

describe("Home Page", () => {
  it("Renders the component", () => {
    render(<FavBeersProvider><HomePage /></FavBeersProvider>);
  });
});
