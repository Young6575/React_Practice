import React, { useRef } from 'react'

export default function GallerySearch({ title, wordref, handelok, handelcancel }) {


    return (
        <div className='w-8/10 lg:w-6/10'>

            <div className='text-3xl font-bold'>{title}</div>

            <div className='w-full mt-10
                    grid grid-cols-1 lg:grid-cols-3 gap-4'>
            <input type='text' name='searchbox' className='border rounded-lg' ref={wordref} />
            <button className='bg-blue-500 text-white' onClick={handelok}>확인</button>
            <button className='bg-blue-500 text-white' onClick={handelcancel} >취소</button>
            </div>

        </div>
    )
}
