import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <ProductList /> },
      { path: "/product/:id", element: <ProductDetail /> },
      { path: "/cart", element: <Cart /> },
    ],
  },
]);
