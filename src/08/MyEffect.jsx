import React from 'react'
import { useEffect, useState } from 'react'
import TailButton from '../component/TailButton'

export default function MyEffect() {
    const [cnt, setcnt] = useState(0)

    useEffect(()=>{},[]) ; // 생성자, [] 맨 처음 컴포넌트가 만들어 졌을 때
    useEffect(()=>{},[cnt]) ; // cnt가 변경 후 실행
    useEffect(()=>{}) ; // 화면이 변경되는 시점에 무조건 실행


    useEffect(()=>{
        console.log("useEffect[] :", cnt) //0,1,2
    },[]) ;

    useEffect(()=>{
        console.log("useEffect[cnt] :", cnt) // 1,2,3
    },[cnt]) ;

    useEffect(()=>{
        console.log("useEffect :", cnt) // 0,1,2,3
    }) ;


    const handleup = () => {
        setcnt(cnt+1);
       
    }
    const handledown = () => {
        setcnt(cnt-1);
       
    }


  return (

    <div className='text-2xl'>
        <TailButton caption="+" color="orange" onHandle={handleup} />
        MyEffect cnt : {cnt}
        <TailButton caption="-" color="blue" onHandle={handledown} />
    </div>
  )
}
