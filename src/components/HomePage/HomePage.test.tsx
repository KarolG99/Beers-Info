import { fireEvent, render, screen } from "@testing-library/react";
import HomePage from "./HomePage";

describe("Home Page", () => {
  it("Renders the component", () => {
    render(<HomePage />);
    const loadingText = screen.getByText("Ładowanie..");
    expect(loadingText).toBeInTheDocument();
  });
  it("check if the button works", async () => {
    render(<HomePage />);
    const button = await screen.findByRole("button");
    expect(button).toHaveTextContent(">");
  });
});
