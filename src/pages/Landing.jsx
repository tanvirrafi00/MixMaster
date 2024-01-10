/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import axios from "axios";
import { useLoaderData } from "react-router-dom";
import Cocktail from "./Cocktail";
const cocktailSearchUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
export const loader = async () => {
  const searchTerm = "margarita";
  const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
  return { drinks: response.data.drinks, searchTerm };
};

const Landing = () => {
  const { searchTerm, drinks } = useLoaderData();
  console.log(drinks);
  return <Cocktail drinks={drinks} />;
};

export default Landing;
