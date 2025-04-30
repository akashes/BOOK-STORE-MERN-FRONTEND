import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import BookPage from "../pages/books/BookPage";
import Login from "../components/Login";
import Register from "../components/Register";
import CartPage from "../pages/CartPage";
import CheckoutPage from "../pages/books/CheckoutPage";
import SingleBook from "../pages/books/SingleBook";
import PrivateRoute from "./PrivateRoute";
import OrderPage from "../pages/books/OrderPage";
import AdminRoute from "./AdminRoute";
import AdminLogin from "../components/AdminLogin";
import DashboardLayout from "../pages/dashboard/DashboardLayout";
import Dashboard from "../pages/dashboard/Dashboard";
import ManageBooks from "../pages/dashboard/manageBooks/manageBooks";
import AddBook from "../pages/dashboard/addBook/AddBook";


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
            element:<PrivateRoute>
              <OrderPage/>
            </PrivateRoute>
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
          element:<PrivateRoute><CheckoutPage/></PrivateRoute>
        },
      
    
      ]
    },
    {
      path:'/admin',
      element:<AdminLogin/>

    },
    {
      path:'/dashboard',
      element:<AdminRoute><DashboardLayout/></AdminRoute>,
      children:[
        {
          path:"",
          element:<AdminRoute>
            <Dashboard/>
          </AdminRoute>
        },
        {
          path:"add-new-book",
          element:<AdminRoute>
            <AddBook/>
          </AdminRoute>
        },
        {
          path:"edit-book:/id",
          element:<AdminRoute>
            <h1>Edit Book</h1>
          </AdminRoute>
        },
        {
          path:"manage-books",
          element:<AdminRoute>
            <ManageBooks/>
          </AdminRoute>
        }
      ]
    }
  ]);


  export default router