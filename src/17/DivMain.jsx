import React, { useState, useEffect } from 'react'
import Div1 from './Div1'
import { useAtom } from 'jotai';
import {cntAtom, cntAtom2 } from "./CntAtom"


export default function DivMain() {
    const [n] = useAtom(cntAtom);
    const [n2] = useAtom(cntAtom2);


    return (
          <div className='w-full h-full bg-amber-700 relative'>
            <div className='absolute top-3 left-10 text-blue-800 font-bold' >
                n = {n}<br/>
                n2 = {n2}
            </div>
            <div className='flex justify-center items-center h-full'>
                <Div1/>
            </div>
          </div>
  )
}
