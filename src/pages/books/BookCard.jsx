import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { getImgUrl } from "../../utils/getImgUrl";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cart/cartSlice";
import {useSelector} from 'react-redux'

import Swal from 'sweetalert2'

// import {ToastContainer,toast} from 'react-toastify'
const BookCard = ({ book }) => {
  const dispatch = useDispatch();
  const cartData = useSelector(state => state.cart)
  return (
    <div className=" rounded-lg transition-shadow duration-300">
      <div className="flex flex-col sm:flex-row sm:items-center sm:h-72  sm:justify-center gap-4">
        <div className="sm:h-72 sm:flex-shrink-0 border rounded-md">
          <Link to={`/books/${book._id}`}>
            <img
              src={getImgUrl(book.coverImage)}
              alt=""
              className="w-full bg-cover p-2 rounded-md cursor-pointer hover:scale-105 transition-all duration-200"
            />
          </Link>
        </div>

        <div>
          <Link to={`/books/${book._id}`}>
            <h3 className="text-xl font-semibold hover:text-blue-600 mb-3">
              {book.title}
            </h3>
          </Link>
          <p className="text-gray-600 mb-5">
            {book.description.length > 80
              ? `${book.description.slice(0, 80)}...`
              : `${book.description}`}
          </p>
          <p className="font-medium mb-5">
            ${book?.newPrice}{" "}
            <span className="line-through font-normal ml-2">
              ${book?.oldPrice}
            </span>
          </p>
          <button
          
            onClick={() => {

              const isAlreadyInCart=cartData.cartItems.some(i=>i._id===book._id)
              if(isAlreadyInCart){
                
                Swal.fire({
                  width: 300,
                  position: "top-center",
                  icon: "info",
                  title: "Item already in  cart",
                  showConfirmButton: false,
                  timer: 1500,
                  focusConfirm: false
                });
                
              }else{

                dispatch(addToCart(book));
                Swal.fire({
                  width: 300,
                  position: "to-center",
                  icon: "success",
                  title: "Item added to cart",
                  showConfirmButton: false,
                  timer: 1000,
                  focusConfirm:false
                });
              }
            }}
          className="btn-primary mx-auto w-full  px-6 space-x-1 flex  items-center  justify-center sm:justify-between gap-1 ">
            <FiShoppingCart className="shrink-0" />
            <span className="hidden sm:inline-block">
              Add to Cart
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
