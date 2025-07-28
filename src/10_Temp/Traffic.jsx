import React, { useEffect, useState } from 'react'
import TrafficNav from './TrafficNav';

export default function Traffic_Temp() {

    //전체 데이터
    const [tdata,setTdata] = useState([]);

    //대분류 데이터
    const [c1, setC1] = useState([]);

    //선택된 대분류
    const [sel1, setSel1] = useState();

    //sel1에 따른 사고유형
    const [c2, setC2] = useState([]);

    //선택된 사고유형
    const [sel2, setSel2] = useState();

    //자료 데이터
    const [info, setInfo] = useState();
    const [infoTag, setInfoTag] = useState();



    //데이터 fetch함수 (async - 비동기 함수// 다른 일 동시에 가능 )
    const getFetchData = async() => {
        const baseurl = "https://api.odcloud.kr/api/15070282/v1/uddi:8449c5d7-8be5-4712-9093-968fc0b2d9fc?"
        const url = `${baseurl}page=1&perPage=18&serviceKey=${import.meta.env.VITE_DATA_API}` ;

        console.log(url);

        const resp = await fetch(url) ;
        const data = await resp.json() ;

        setTdata(data.data) ;

    }

    //컴포넌트 생성될 때 맨 처음 한번 실행
    // [] dependency array
    useEffect(() => {
        //데이터 fetch (비동기 방식으로)
        getFetchData();
    },[]);

    // tdata가 변경이 되었을 때
    useEffect(()=>{
      //useState에 의해 초기화 될때
      if (tdata.length == 0) return;

      //fetch tdata 변경이 되었을 때
      let tm =tdata.map(item => item["사고유형대분류"]);
      //중복제거
      tm = [...new Set(tm)]; // 집합으로 나옴 - map이나 이런 함수 사용 불가. 그래서 [...] 사용

      //대분류 생성
      setC1(tm);
     
    },[tdata])


    //  대분류 중에 특정 항목이 선택되면
    useEffect(()=>{
      //대분류가 초기화 되어 선택 항목이 없을 때
      if (!sel1) return;

      //사고유형 목록 생성
      let tm = tdata.filter(item => item["사고유형대분류"] == sel1) 
                    .map(item => item["사고유형"]) ;
      // tm = tm.map(item => item["사고유형"]) ;
      setC2(tm) ;
      setInfoTag('') ;
    },[sel1])

    //사고유형이 선택되었을 때
    useEffect(()=>{
      if (!sel1 || !sel2 || !c2) return;

      let tm = tdata.filter(item => item["사고유형대분류"] == sel1 && item["사고유형"] == sel2);

      setInfo(tm[0]);
    },[sel2])

    //사고유형이 결정이 되면
    useEffect(()=>{
      if(!info) return;

      let tm = ["사고건수", "사망자수", "중상자수", "경상자수", "부상신고자수"];

      tm = tm.map(item => <div key={item} className='flex text-lg h-12 p-2 mx-2'>
                            <div className='bg-green-400 border h-8 w-30'>{item}</div>
                            <div className='pl-5'>{info[item]}</div>
                          </div>)
      setInfoTag(tm);

    },[info])

  return (
    <div className='w-full'>
      {c1 && <TrafficNav title="대분류" 
                    c = {c1} 
                    sel = {sel1}
                    setSel = {setSel1} />
       }

       {c2 && sel1 && <TrafficNav title="사고유형" 
                    c = {c2} 
                    sel = {sel2}
                    setSel = {setSel2} />
       }
       <div className='w-full flex justify-center'>
        {infoTag}
       </div>
    </div>
  )
}
