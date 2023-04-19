import { render, screen } from "@testing-library/react";
import WeatherApp from "../WeatherApp";

test("renders WeatherApp", () => {
  // Arrange
  render(<WeatherApp />);

  // Act
  const searchBar = screen.getByPlaceholderText("Enter location");

  // Assert
  expect(searchBar).toBeInTheDocument();
});
