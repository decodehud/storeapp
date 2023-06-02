import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import Cart from "./page/cart";
import Home from "./page/home";
import Shop from "./page/shop";
import About from "./page/about";
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
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
