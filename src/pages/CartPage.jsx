import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import {useDispatch, useSelector} from 'react-redux'
import { clearCart, removeFromCart } from '../redux/features/cart/cartSlice';
import { Link, useNavigate } from 'react-router-dom';
import { getImgUrl } from '../utils/getImgUrl';

import Swal from 'sweetalert2'


const CartPage = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const cartItems = useSelector(state=>state.cart.cartItems)
    const totalPrice = cartItems.reduce((acc, item) => acc + item.newPrice, 0).toFixed(2)
    
    const handleRemoveFromCart=(id)=>{
        console.log(id)
        dispatch(removeFromCart({id}))
    }

    const handleCheckout=()=>{
        console.log('inside')
        if(cartItems.length===0){
            // Swal.fire({
            //     icon: "error",
            //     title: "There is nothing to checkout...",
            //     text: "Please add items to the cart before checkout!!",
            //   });
                Swal.fire({
                                width: 300,
                                position: "top-center",
                                icon: "error",
                                title: "There is nothing to checkout...",
                                                text: "Please add items to the cart before checkout!!",
                                showConfirmButton: false,
                                timer: 2000,
                                focusConfirm: false
                              });

        }else{
            navigate('/checkout')
        }
    }

  return (
    <div className='w-full max-w-2xl mx-auto rounded-md shadow-lg p-4 flex flex-col gap-4'>
        <div className='border-b-2 pb-4'>
        <div className='flex justify-between items-center'>
            <h2 className='text-xl '>Shopping Cart</h2>
            {
                cartItems.length > 0 && ( 
                    <button
                    onClick={()=>dispatch(clearCart())}
                     className='bg-red-800 text-white px-3 py-1 rounded-md'>Clear Cart</button>

                )
            }
     
        </div>
        {/* <p className='text-sm text-gray-600 mt-5'>
            No products found
        </p> */}

<div className="mt-8">
                        <div className="flow-root">

                            {
                                cartItems.length > 0 ? (
                                    <ul role="list" className="-my-6 divide-y divide-gray-200">
                                        {
                                            cartItems.map((product) => (
                                                <li key={product?._id} className="flex py-6">
                                                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                        <img
                                                            alt=""
                                                            src={`${getImgUrl(product?.coverImage)}`}
                                                            className="h-full w-full object-cover object-center"
                                                        />
                                                    </div>

                                                    <div className="ml-4 flex flex-1 flex-col">
                                                        <div>
                                                            <div className="flex flex-wrap justify-between text-base font-medium text-gray-900">
                                                                <h3>
                                                                    <Link to='/'>{product?.title}</Link>
                                                                </h3>
                                                                <p className="sm:ml-4">${product?.newPrice}</p>
                                                            </div>
                                                            <p className="mt-1 text-sm text-gray-500 capitalize"><strong>Category: </strong>{product?.category}</p>
                                                        </div>
                                                        <div className="flex flex-1 flex-wrap items-end justify-between space-y-2 text-sm">
                                                            <p className="text-gray-500"><strong>Qty:</strong> 1</p>

                                                            <div className="flex">
                                                                <button
                                                                onClick={() => handleRemoveFromCart(product._id)}
                                                                type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
                                                                    Remove
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            ))
                                        }



                                    </ul>
                                ) : (<p>No product found!</p>)
                            }


                        </div>
                    </div>
        





        </div>
        <div className='flex justify-between items-center'>
           <div >
            <h2 className='text-xl'>Subtotal</h2>
            <p className='text-sm text-gray-600'>Shipping and taxes calculated at checkout</p>
           </div>
           <div>
            ${totalPrice?totalPrice:0}
           </div>
        </div>
        <button
        onClick={handleCheckout}
        className='bg-blue-700 text-white px-3 py-1 rounded-md'>Checkout</button>
        <Link to={'/'} className='text-center text-gray-600'>or Continue Shopping <FaArrowRightLong className='inline-block'/> </Link>
      
    </div>
  )
}

export default CartPage
