import React, { useEffect, useState } from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination,Navigation } from 'swiper/modules';
import BookCard from '../books/BookCard';
import { useFetchAllBooksQuery } from '../../redux/features/books/booksApi';


const Recommended = () => {
  const{data:books=[]}=useFetchAllBooksQuery()
    // const[books,setBooks]=useState([])
    // useEffect(()=>{
    //     fetch('books.json').then(res=>res.json()).then(data=>setBooks(data))
    // },[])
  return (
    <div className='py-16 mx-10'>
        <h2 className='text-3xl font-semibold mb-6'>Recommended for you</h2>
      
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={true} 
        // pagination={{
        //   clickable: true,
        // }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1080:{
            slidesPerView: 3,
            spaceBetween: 50
          }
        }}
        modules={[Pagination,Navigation]}
        className="mySwiper"
      >
         {
            books?.length>0 && books.slice(8,18).map((book,index)=>{
                return(
                    <SwiperSlide key={index}>


                    <BookCard key={index} book={book}/>
                    </SwiperSlide>
                )
            })


        }
     
      </Swiper>
    </div>
  )
}

export default Recommended
