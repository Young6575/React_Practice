import React from 'react'
import Foodcard from './Foodcard'
import fooddata from './fooddata.json'
import TailButton from '../component/TailButton'
import { useState } from 'react'

export default function FoodMain() {

    const [tag, settag] = useState([]);

    let group = fooddata.map( item => item["운영주체 분류"].replaceAll(' ',''))
    group = [...new Set(group)]

    //구분
    let group1 = fooddata.map (item => item["구분"].replaceAll(' ',''))
    group1 = [...new Set(group1)]



    const handleClick = (item) => {
        
        const name = item;
        let itemarr = fooddata.filter(item => item["구분"].replaceAll(' ','') == name);
        itemarr = itemarr.map(item => <Foodcard key={item["사업장명"]} item={item} />)
        settag(itemarr);
    }
  
    return (

    <div className='flex flex-col justify-start items-center
                    w-full ' >
        <div>
            {group1.map(item => <TailButton key={item} 
                                            caption={item}
                                            color="blue"
                                            onHandle = {() => handleClick(item)} />)

            }
        </div>


        <div className='w-6/10 grid grid-cols-1 xl:grid-cols-2 gap-4'>
         


        { tag }
        </div>

    </div>
  )
}
