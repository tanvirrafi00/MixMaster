/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Wrapper from "../assets/Wrappers/CocktailCard";

const CocktailCard = ({ id, name, image, info, glass }) => {
  return (
    <Wrapper>
      <div className="img-container">
        <img src={image} alt="" />
      </div>
      <div className='footer'>
        <h4>{name}</h4>
        <h5>{glass}</h5>
        <p>{info}</p>

        <Link to={`/cocktail/${id}`} className='btn'>
          details
        </Link>
      </div>
    </Wrapper>
  );
};

export default CocktailCard;
