import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { FavBeersProvider } from "../../Providers/FavBeersProvider";
import BeersPerName from "./BeersPerName";

describe("Beers Per Name", () => {
  it("Tests the search", async () => {
    render(
      <MemoryRouter>
        <FavBeersProvider>
          <BeersPerName />
        </FavBeersProvider>
      </MemoryRouter>
    );
    const beerName = "buzz";
    const searchInput = screen.getByPlaceholderText("szukaj piwa");
    const searchButton = screen.getByText("Szukaj");

    expect(searchButton).toBeDisabled();
    fireEvent.change(searchInput, { target: { value: beerName } });
    expect(searchInput).toHaveValue(beerName);
    expect(searchButton).not.toBeDisabled();

    fireEvent.click(searchButton);
    await screen.findByTestId("beer");
  });
});
