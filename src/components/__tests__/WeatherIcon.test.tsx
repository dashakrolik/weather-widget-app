import { render, screen } from "@testing-library/react";
import WeatherIcon from "../WeatherIcon";
import '@testing-library/jest-dom';

describe("WeatherIcon", () => {
  it("renders the correct icon for a known weather code", () => {
    render(<WeatherIcon weatherCode={1000} size={64} />);
    const image = screen.getByAltText("Weather icon") as HTMLImageElement;
    expect(image).toHaveAttribute("src", expect.stringContaining("Sun.svg"));
    expect(image).toHaveAttribute("width", "64");
    expect(image).toHaveAttribute("height", "64");
  });

  it("renders the fallback icon for an unknown weather code", () => {
    render(<WeatherIcon weatherCode={9999} size={48} />);
    const image = screen.getByAltText("Weather icon");
    expect(image).toHaveAttribute("src", expect.stringContaining("Cloud.svg"));
  });

  it("applies the correct background gradient color", () => {
    const { container } = render(<WeatherIcon weatherCode={1000} size={64} />);
    const box = container.firstChild as HTMLElement;

    expect(box).toHaveStyle(
      "background: radial-gradient(circle, #FFD16666 0%, #FFD16622 50%, transparent 100%)"
    );
  });
});
