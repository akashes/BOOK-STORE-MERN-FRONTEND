import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import BookPage from "../pages/books/BookPage";
import Login from "../components/Login";
import Register from "../components/Register";
import CartPage from "../pages/CartPage";
import CheckoutPage from "../pages/books/CheckoutPage";


const router = createBrowserRouter([
    {
      path: "/",
      element:<App/>,
      children:[
        {
            path:"/",
            element:<Home/>

        },
        {
            path:"/orders",
            element:<h1>orders</h1>
        },
        {
            path:"/about",
            element:<h1>about</h1>
        },
        {
          path:"/books/:id",
          element:<BookPage/>
        },
        {
          path:"/login",
          element:<Login/>
        },
        {
          path:"/register",
          element:<Register/>
        },
        {
          path:"/cart",
          element:<CartPage/>
        },
        {
          path:'/checkout',
          element:<CheckoutPage/>
        }
      ]
    },
  ]);


  export default router