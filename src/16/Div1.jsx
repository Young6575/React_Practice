import React from 'react'
import Div2 from './Div2'

export default function Div1({n, setN, setN2}) {
  return (

          <div className='w-8/10 h-8/10 bg-amber-600 flex justify-center items-center text-left'>
            Div1
            <Div2 n={n} setN={setN} setN2={setN2} />
          </div>
    
          
        
  )
}
