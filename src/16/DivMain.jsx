import React, { useState, useEffect } from 'react'
import Div1 from './Div1'




export default function DivMain() {
    const [ n, setN] = useState(0);
    const [ n2, setN2] = useState(0);

useEffect(()=>{
    setN2(n*2);
    
},[n])

    return (
          <div className='w-full h-full bg-amber-700 flex justify-center items-center text-left'>
            <div >
                n = {n}, n2 = {n2}
            </div>
            <Div1 n={n} setN={setN} setN2={setN2} />
          </div>
  )
}
