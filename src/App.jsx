/* eslint-disable no-unused-vars */
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { loader as landingLoader } from "./pages/Landing";

import {
  HomeLayout,
  About,
  Landing,
  Error,
  NewsLetter,
  Cocktail,
} from "./pages";
import SingleError from "./SingleError";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,

    errorElement: <Error />,
    children: [
      {
        index: true,
        loader: landingLoader,
        errorElement: <SingleError />,
        element: <Landing />,
      },
      {
        path: "cocktail",
        element: <Cocktail />,
      },
      {
        path: "newsletter",
        element: <NewsLetter />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
