import React from 'react'
import { Link } from 'react-router-dom'

export default function AppNav() {
  return (
    <div className='flex justify-center'>
        <Link to='/'>
                  <div className='p-4 m-2 hover:bg-amber-700 
                                border border-zinc-700 rounded bg-amber-200'>
                    시계
                  </div>
        </Link>

         <Link to='/lotto'>
                  <div className='p-4 m-2 hover:bg-amber-700 
                                border border-zinc-700 rounded bg-amber-200'>
                    로또
                  </div>
        </Link>

         <Link to='/FoodMain'>
                  <div className='p-4 m-2 hover:bg-amber-700 
                                border border-zinc-700 rounded bg-amber-200'>
                    푸드
                  </div>
        </Link>

         <Link to='/BoxOffice'>
                  <div className='p-4 m-2 hover:bg-amber-700 
                                border border-zinc-700 rounded bg-amber-200'>
                    박스오피스
                  </div>
        </Link>

         <Link to='/Traffic_Temp'>
                  <div className='p-4 m-2 hover:bg-amber-700 
                                border border-zinc-700 rounded bg-amber-200'>
                    교통사고
                  </div>
        </Link>

         <Link to='/Gallery'>
                  <div className='p-4 m-2 hover:bg-amber-700 
                                border border-zinc-700 rounded bg-amber-200'>
                    갤러리
                  </div>
        </Link>

         <Link to='/Festival'>
                  <div className='p-4 m-2 hover:bg-amber-700 
                                border border-zinc-700 rounded bg-amber-200'>
                    축제
                  </div>
        </Link>

         <Link to='/Fcst'>
                  <div className='p-4 m-2 hover:bg-amber-700 
                                border border-zinc-700 rounded bg-amber-200'>
                    일기예보
                  </div>
        </Link>

         <Link to='/DivMain'>
                  <div className='p-4 m-2 hover:bg-amber-700 
                                border border-zinc-700 rounded bg-amber-200'>
                    Div
                  </div>
        </Link>

                 <Link to='/ChargeMain'>
                  <div className='p-4 m-2 hover:bg-amber-700 
                                border border-zinc-700 rounded bg-amber-200'>
                    전기차 충전소
                  </div>
        </Link>
        
    </div>
  )
}
