import React, { useEffect, useState } from 'react'

const News = () => {
    const[news,setNews]=useState([])
    useEffect(()=>{
        fetch('news.json').then(res=>res.json()).then(data=>setNews(data))
    })
    
  return (
    <div>
      news
    </div>
  )
}

export default News
