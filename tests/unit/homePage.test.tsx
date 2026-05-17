import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HomePage from "../../app/page";
import "../../lib/i18n";
import { I18nProvider } from "../../components/18nProvider/I18nProvider";

describe("Home page", () => {
  it("Test Rendering", () => {
    render(
      <I18nProvider>
        <HomePage />
      </I18nProvider>,
    );
    expect(screen.getByText("Be Buzzy")).toBeInTheDocument();
  });
});
