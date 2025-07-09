import React, { useEffect, useState } from 'react'

export default function TailCard({iurl, title, location, date , hashtag}) {

    const delimiters = /[,]+/;

 const tag = hashtag.split(delimiters).map(item => <span key={item} className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3 text-left ">
                                    {item.trim()}
                                    </span>)

  return (
  

        

<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className="rounded-t-lg" src={iurl} alt="" />
    </a>
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




