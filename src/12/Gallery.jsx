import React, { useState, useEffect, useRef } from 'react'
import GallerySearch from './GallerySearch'
import TailCard from '../component/TailCard'

export default function Gallery() {
const [kword,setKword] = useState();
const [tdata,setTdata] = useState([]);
const [tag,setTag] = useState([]);
const [hashtag,setHashtag] = useState([]);
const invalue = useRef();



    const getFetchData = async () => {
      const baseurl = "https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?"
      const key = `serviceKey=${import.meta.env.VITE_TOUR_API}`
      const etc = "&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A"
      let keyword = `&keyword=${encodeURI(invalue.current.value)}&_type=json`

      const url = `${baseurl}${key}${etc}${keyword}`

     const resp = await fetch(url);
     const data = await resp.json();
        
      setTdata(data.response.body.items.item)
        console.log(tdata)

    }

    const handelok = (e)=> {
        e.preventDefault();
        getFetchData();
        

        // tdata.current.map(item => 
        //             <TailCard iurl= item['galWebImageUrl'] 
        //                       title='금정산' 
        //                       location='부산' 
        //                       hashtag='12'/>)
    
        


        
    }


    const handelcancel = (e)=> {
        e.preventDefault();
    }


    useEffect(()=>{
        if (tdata.length == 0) return;

        let tm = tdata.map(item => <TailCard key={item.galContentId}
                                             iurl={item.galWebImageUrl}
                                             title={item.galTitle}
                                             location={item.galPhotographyLocation}
                                             hashtag={item.galSearchKeyword} />   
                                             
        )
  

        setTag(tm)
    },[tdata])



  return (
    <div className='w-full flex flex-col justify-start items-center'>
      <GallerySearch title='한국관광공사_사진정보' wordref = {invalue}
                     handelok={handelok} handelcancel={handelcancel}/>


        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8'>
          {tag}

         
        </div>

      



    </div>
  )
}
