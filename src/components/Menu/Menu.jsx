export const Menu = ({ menu }) => {
  return (
    <div>
      <h3>Меню</h3>
      <ul>
        {menu.map((item) => {
          return <MenuItem name={item.name} key={item.id} />;
        })}
      </ul>
    </div>
  );
};

const MenuItem = ({ name }) => {
  return <li>{name}</li>;
};
