import { render } from "@testing-library/react";
import { WeatherAppBottom } from "../WeatherAppBottom";

test("displays the feel_like temp, humidity and wind speed correctly", () => {
  // Arrange
  const data = {
    main: {
      feels_like: 17,
      humidity: 69,
    },
    wind: {
      speed: 2,
    },
  };

  // Act
  const { getByText } = render(<WeatherAppBottom data={data} />);

  // Assert
  expect(getByText("17°C")).toBeInTheDocument();
  expect(getByText("69%")).toBeInTheDocument();
  expect(getByText("2 mph")).toBeInTheDocument();
});
