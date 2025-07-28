import React from 'react'
import Div3 from './Div3'

export default function Div1({n, setN, setN2}) {
  return (
      <div className='w-8/10 h-8/10 bg-amber-500 flex justify-center items-center align-text-top'>
        Div2
        <Div3 n={n} setN={setN} setN2={setN2} />
      </div>
      

  )

}
