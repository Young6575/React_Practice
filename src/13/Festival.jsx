import React, { useEffect, useState } from 'react'
import TailCard from '../component/TailCard'
import FestivalNav from './FestivalNav';


export default function Festival() {
const [tdata,setTdata] = useState([]);
const [option,setOption] = useState([]);
const [selc1,setSelc1] = useState();
const [tag,SetTag] = useState([]);


const getFetchData = async () => {
     const baseurl = "https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?"
      const key = `serviceKey=${import.meta.env.VITE_TOUR_API}`
      const etc = "&pageNo=1&numOfRows=41&resultType=json"

      const url = `${baseurl}${key}${etc}`

     const resp = await fetch(url);
     const data = await resp.json();

     setTdata(data.getFestivalKr.item)
     console.log(url);

}


useEffect(()=>{
    getFetchData();

},[])

 useEffect(()=>{
    if (tdata.length ==0) return;

    let tm = tdata.map(item => item.GUGUN_NM)
    tm = [...new Set(tm)]
    setOption(tm)


 },[tdata])


 useEffect(()=>{
    
    console.log(selc1)
    let tm = tdata.filter(item => item.GUGUN_NM == selc1)
                  .map(item => <TailCard key={item.UC_SEQ}
                                         iurl={item.MAIN_IMG_NORMAL.split('('[0])}
                                        title={item.TITLE}
                                        location={item.SUBTITLE}
                                        date={item.USAGE_DAY_WEEK_AND_TIME}
                                        hashtag={item.TRFC_INFO} /> )

    SetTag(tm)


 },[selc1])


    return (
    <div>
        <FestivalNav title='부산축제정보' option={option} sel={setSelc1}/>
    
        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8'>
          {tag}
        </div>
    </div>
  )
}
