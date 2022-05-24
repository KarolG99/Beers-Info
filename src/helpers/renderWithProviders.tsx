import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { FavBeersProvider } from "../Providers/FavBeersProvider";

export const renderWithProviders = (children: JSX.Element) => {
  return render(
    <MemoryRouter>
      <FavBeersProvider>{children}</FavBeersProvider>
    </MemoryRouter>
  );
};
