import React, { useEffect, useState } from 'react'

export default function TailCard({iurl, title, location, date , hashtag}) {

    const delimiters = /[,]+/;
    const head = ["이용가능시간: ","충전기상태: ","충천용량: ","충전방식: ","주차료: "]

 const tag = Array.isArray(hashtag)
    ? hashtag.map((item, idx) => (
        <span key={idx} className="bg-amber-200 mr-3 rounded-3xl">
          {head[idx]}{item}
        </span>
      ))
    : hashtag?.split(/[,]+/).map((item, idx) => (
        <span key={idx} className="...">
          {item.trim()}
        </span>
      ));

  return (
  

        

 <div className="h-40 w-120 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
 {iurl &&   <a href="#">
        <img className="rounded-t-lg" src={iurl} alt="" />
    </a> }
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-left">
                {title}
            </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-left">
            {location}
        </p>
        <p className="mb-3 font-light text-gray-700 dark:text-gray-400 text-left">
            {date}
        </p>


            {tag}
        
    </div>
</div>


  )
}




