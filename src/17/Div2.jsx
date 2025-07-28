import React from 'react'
import Div3 from './Div3'
import { cntAtom2 } from './CntAtom'
import { useAtom } from 'jotai'

export default function Div2() {
  const[cnt2] = useAtom(cntAtom2)
  return (
      <div className="w-8/10 h-8/10 bg-amber-500 relative">
        <div className="absolute top-0 left-0 p-2 text-black">Div2 {cnt2}</div>
        <div className="flex justify-center items-center h-full">
          <Div3 />
        </div>
      </div>



      

  )

}
