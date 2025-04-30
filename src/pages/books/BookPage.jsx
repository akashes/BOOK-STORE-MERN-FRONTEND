import React from 'react'
import { FiShoppingCart } from "react-icons/fi"
import { useParams } from "react-router-dom"

import { getImgUrl } from '../../utils/getImgUrl';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/features/cart/cartSlice';
import { useFetchBookByIdQuery } from '../../redux/features/books/booksApi';
import { useEffect } from 'react';

const BookPage = () => {
    const {id} = useParams();
    const {data: book, isLoading, isError} = useFetchBookByIdQuery(id);

    const dispatch =  useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
    }


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    if(isLoading) return <div>Loading...</div>
    if(isError) return <div>Error happending to load book info</div>
    
  return (
    <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-6 md:p-10 mt-8 grid md:grid-cols-2 gap-10 items-start">
      {/* Book Cover */}
      <div className="flex justify-center">
        <img
          src={`${import.meta.env.VITE_SERVER_URL}/uploads/${book.coverImage}`}
          alt={book.title}
          className="w-full max-w-xs rounded-md shadow-md"
        />
      </div>

      {/* Book Details */}
      <div>
        <h1 className="text-3xl font-bold text-indigo-700 mb-4">{book.title}</h1>

        <p className="text-gray-700 mb-2">
          <span className="font-semibold">Author:</span> {book.author || "admin"}
        </p>
        <p className="text-gray-700 mb-2">
          <span className="font-semibold">Published:</span>{" "}
          {new Date(book?.createdAt).toLocaleDateString()}
        </p>
        <p className="text-gray-700 mb-2 capitalize">
          <span className="font-semibold">Category:</span> {book?.category}
        </p>
        <p className="text-gray-700 mb-6">
          <span className="font-semibold">Description:</span> {book.description}
        </p>

        <button
          onClick={() => handleAddToCart(book)}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-5 rounded-md flex items-center gap-2 transition duration-200"
        >
          <FiShoppingCart />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  )
}

export default BookPage