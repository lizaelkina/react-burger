export const BurgerIngredient = ({ingredient}) => {
  return (
      <div>
        <img src={ingredient.image} alt={ingredient.name}/>
        <figcaption>{ingredient.name}</figcaption>
      </div>
  );
}
