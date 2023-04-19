import { render } from "@testing-library/react";
import { WeatherAppTop } from "../WeatherAppTop";

test("displays the location, temperature and description correctly", () => {
  // Arrange
  const data = {
    name: "New York",
    main: {
      temp: 20,
    },
    weather: [
      {
        main: "Clear",
      },
    ],
  };

  // Act
  const { getByText } = render(<WeatherAppTop data={data} />);

  // Assert
  expect(getByText("New York")).toBeInTheDocument();
  expect(getByText("20°C")).toBeInTheDocument();
  expect(getByText("Clear")).toBeInTheDocument();
});
