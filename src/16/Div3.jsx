import React from 'react'
import TailButton from '../component/TailButton'

export default function Div1({n, setN, setN2}) {

  const handleUp = () => {
    setN(n+1);
  }

const handleDown = () => {
  setN(n-1);
}


  return (
    
    <div className='w-8/10 h-8/10 bg-amber-400 flex-row justify-center items-center'>
      Div3

        
    <div className='w-full h-full flex justify-center items-center'>     
    <button type="button" onClick={handleUp}
    class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
      증가</button>
    <button type="button" onClick={handleDown}
     class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
      감소</button>
    </div>   

    </div>
  )
}
