// routes.js
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Payment from "./pages/Payment";
import Contact from "./pages/Contact";
import Account from "./pages/Account";
import About from "./pages/About";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import Product from "./pages/Product";
import AllProducts from "./pages/AllProducts";
import NotFound from "./pages/NotFound";
import Category from "./pages/Category";

const routes = [
  {
    path: "/",
    element: Layout,
    children: [
      { path: "", element: Home },
      { path: "contact", element: Contact },
      { path: "account", element: Account },
      { path: "about", element: About },
      { path: "signup", element: SignUp },
      { path: "login", element: LogIn },
      { path: "wishlist", element: Wishlist },
      { path: "cart", element: Cart },
      { path: "checkout", element: Checkout },
      { path: "payment", element: Payment },
      { path: "allProducts", element: AllProducts },
      { path: "category", element: Category },
      { path: "allProducts/:title", element: Product },
      { path: "*", element: NotFound },
    ],
  },
];

export default routes;
