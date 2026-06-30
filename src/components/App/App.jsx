import { restaurants } from "../../mocks/mock.js";
import { Restaurant } from "../Restaurant/Restaurant.jsx";

export const App = () => {
  return (
    <div>
      {restaurants.map((restaurant) => (
        <Restaurant restaurantInfo={restaurant} key={restaurant.id} />
      ))}
    </div>
  );
};
