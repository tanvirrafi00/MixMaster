import Wrapper from "../assets/Wrappers/Cocktail";
import SingleCocktailCard from "./SingleCocktailCard";

/* eslint-disable react/prop-types */
const Cocktail = ({ drinks }) => {
  const formatDrinks = drinks.map((item) => {
    const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = item;
    return {
      id: idDrink,
      name: strDrink,
      image: strDrinkThumb,
      info: strAlcoholic,
      glass: strGlass,
    };
  });

  return (
    <Wrapper>
      {formatDrinks.map((item) => {
        return <SingleCocktailCard key={item.id} {...item} />;
      })}
    </Wrapper>
  );
};

export default Cocktail;
