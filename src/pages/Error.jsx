/* eslint-disable react/no-unescaped-entities */
import { Link, useRouteError } from "react-router-dom";
import error404 from "../assets/images/error404.svg";
import Wrapper from "../assets/Wrappers/Error";

const Error = () => {
  const error = useRouteError();
  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={error404} alt="Not found" />
          <h3>Ohh! </h3>
          <p>We can't seem to find the page you're looking for</p>
          <Link to="/">back home</Link>
        </div>
      </Wrapper>
    );
  }

  return <> <h1>Something went wrong</h1> </>;
};

export default Error;
