import Home from "../../pages/index";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

import { SessionProvider } from "next-auth/react";
describe("HomePage", () => {
  it("should render the heading", () => {
    const { baseElement } = render(
      <SessionProvider session={pageProps.session}>
        <Home />
      </SessionProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
