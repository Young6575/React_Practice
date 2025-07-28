import React from 'react'
import Div2 from './Div2'

export default function Div1() {
  return (

          <div className='w-8/10 h-8/10 bg-amber-600 relative'>
            <div className='absolute top-0 left-0 p-2'>Div1</div>
            <div className='flex justify-center items-center h-full'><Div2/></div>
          </div>
    
          
        
  )
}
