import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const BookPage = () => {
    const {id}=useParams()
    const[book,setBook]=useState({})
    useEffect(()=>{

        const fetchBook=async()=>{
            console.log(id)
          const data  =await fetch('/books.json')
          const result = await data.json()
          console.log(result)
          const bookData = result.find((book) => book._id == id); // Use `find` instead of `filter`
          console.log(bookData)
          setBook(bookData)
          
          
        }
        fetchBook()
        
    },[])
  return (
    <div>
      {
        book.title
      }
    </div>
  )
}

export default BookPage
