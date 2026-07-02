import { Menu } from "../Menu/Menu.jsx";
import { Reviews } from "../Reviews/Reviews.jsx";

export const Restaurant = ({ restaurantInfo }) => {
  return (
    <div>
      <div>
        <h2>{restaurantInfo.name}</h2>
      </div>
      <div>
        <Menu menu={restaurantInfo.menu} />
      </div>
      <div>
        <Reviews reviews={restaurantInfo.reviews} />
      </div>
    </div>
  );
};
