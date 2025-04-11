import { render, screen, fireEvent } from "@testing-library/react";
import WeatherForm from "../WeatherForm";

describe("WeatherForm", () => {
  it("renders input and button", () => {
    render(<WeatherForm onCityChange={jest.fn()} />);

    expect(screen.getByLabelText(/city/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /get forecast/i })).toBeInTheDocument();
  });

  it("calls onCityChange with trimmed city on submit", () => {
    const mockFn = jest.fn();
    render(<WeatherForm onCityChange={mockFn} />);

    const input = screen.getByLabelText(/city/i);
    const button = screen.getByRole("button", { name: /get forecast/i });

    fireEvent.change(input, { target: { value: "   Paris  " } });
    fireEvent.click(button);

    expect(mockFn).toHaveBeenCalledWith("Paris");
  });

  it("does not call onCityChange with empty input", () => {
    const mockFn = jest.fn();
    render(<WeatherForm onCityChange={mockFn} />);

    const button = screen.getByRole("button", { name: /get forecast/i });
    fireEvent.click(button);

    expect(mockFn).not.toHaveBeenCalled();
  });
});
