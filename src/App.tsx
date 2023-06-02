import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import Cart from "./page/cart";
import Home from "./page/home";
import Shop from "./page/shop";
import About from "./page/about";
import Details from "./page/details";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/shop/:id",
        element: <Details />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
