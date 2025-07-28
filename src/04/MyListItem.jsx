import { useState } from "react";

export default function MyListItem({title, imgUrl ,content}) {
//state 변수

const [cnt, setCnt] = useState(0);
  

  const handleUp = () => {
    setCnt(cnt + 1);
    console.log(title,cnt);
  }

  const handleDown = () => {
    (cnt -1) < 0 ? setCnt(0) : setCnt(cnt-1); 
  }
  return (
    <div className="w-full h-70
                    flex justify-start items-start
                    border rounded-3xl overflow-hidden
                   border-gray-500">
        <div className="w-1/4 h-full
                        flex items-start justify-start">

            <img className="w-full h-2/3 flex justify-start items-start" src={imgUrl} />

            <div className="w-full h-1/3">

            </div>
        </div>

        <div className="w-3/4 h-full p-5
                        flex flex-col items-start justify-between">
            
           <div className="w-full flex flex-col justify-start items-start">
             <h1> {title} </h1>

             <p className="w-full pt-2 flex flex-col justify-start items-start"> 
                {content}

             </p>
           </div> 
           <div className="w-full h-4
                           flex justify-end items-center">
                <span className="mx-4 cursor-pointer hover:text-red-600 text-2xl"
                                  onClick={handleUp}>🧡좋아요</span>
                <span className="mx-4 cursor-pointer hover:text-red-600 text-2xl"
                                  onClick={handleDown}>💢싫어요</span>                  
                <span className="text-2xl font-bold">{cnt}</span>
                  
           </div>
        </div>
    </div>
  )
}
