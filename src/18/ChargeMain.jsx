// ChargeMain.jsx
import React, { useEffect, useRef, useState } from 'react';
import TailSelet from '../component/TailSelet';
import zcode from './zcode.json';
import zscode from './zscode.json';
import kind from './kind.json';
import TailButton from '../component/TailButton';
import TailCard from '../component/TailCard';
import stat from './stat.json';
import TailPageNation from '../component/TailPageNation';

export default function ChargeMain() {
  // refs
  const zcodeRef = useRef();
  const zscodeRef = useRef();
  const kindRef = useRef();
  const [data,setData] = useState([]);
  const [cards,setCards] = useState([]);
  let totalCount = 0 ;
  const [currentPage, setCurrentPage] = useState(1) ;
  const [totalPage, setTotalPage] = useState(1) ;
  const perPage = 12 ;

  // 상태로 선택된 지역 코드 추적 (하위 동 필터용)
  const [selectedZcode, setSelectedZcode] = useState("");

  // 핸들러
  const handleZcode = () => {
    const selected = zcodeRef.current?.value;
    setSelectedZcode(selected);
  };

  const handleZscode = () => {
    console.log("선택한 동:", zscodeRef.current?.value);

    if (selectedZcode == "") {
        alert("지역을 입력하세요");
        zcodeRef.current.focus();
        setSelectedZcode('');
    }

  };

  const handleKind = () => {
    console.log("선택한 종류:", kindRef.current?.value);

    if (selectedZcode == "") {
        alert("지역을 입력하세요");
        zcodeRef.current.focus();
    }
  };



  const getDataFetch = async(cpage) => {



    if (zcodeRef.current.value == '') {
        alert("지역을 입력하세요");
        zcodeRef.current.focus();
    }
    else if (zscodeRef.current.value == '' && kindRef.current.value == '' ) {
        alert("지역 동 또는 충전소를 선택하세요");
        zscodeRef.current.focus();
    }

    const baseurl = "http://apis.data.go.kr/B552584/EvCharger/getChargerInfo?"
    const key = `serviceKey=${import.meta.env.VITE_TOUR_API}`
    const etc = `&zcode=${zcodeRef.current.value}`
    const keyword = `&zscode=${zscodeRef.current.value}&kind=${kindRef.current.value}&numOfRows=${perPage}&pageNo=${cpage}&dataType=JSON`

    const url = `${baseurl}${key}${etc}${keyword}`

    const resp = await fetch(url);
    const data = await resp.json();

    console.log("totalCount:" , data.totalCount)
    totalCount = data.totalCount;
    setTotalPage(Math.ceil(totalCount / perPage));
    setCurrentPage(cpage)
    setData(data.items.item);
  }

  useEffect(()=>{



    const tag = data.map(item => <TailCard  iurl={''}
                                            title={item['statNm']} 
                                            location={item['addr']} 
                                            date={''} 
                                            hashtag={[item['useTime'],
                                                      stat[item['stat']],
                                                      item['output'],
                                                      item['method'],
                                                      item['parkingFree']='Y'?"무료":"유로"]}/>)

     console.log(tag)
      setCards(tag)

    // {iurl, title, location, date , hashtag}

  },[data])

  // 선택된 지역에 따른 동 리스트 추출
  const currentZscode = zscode[selectedZcode] || {};

  return (
    <div className="w-full flex-col justify-center mt-10">
      <div className="flex flex-wrap gap-6 justify-center items-start">
        <TailSelet
          title="지역선택"
          selvalue={zcodeRef}
          handle={handleZcode}
          opv={Object.keys(zcode)}
          opt={Object.values(zcode)}
        />
        <TailSelet
          title="지역 동 선택"
          selvalue={zscodeRef}
          handle={handleZscode}
          opv={Object.values(currentZscode)}
          opt={Object.keys(currentZscode)}
        />
        <TailSelet
          title="충전소 구분"
          selvalue={kindRef}
          handle={handleKind}
          opv={Object.keys(kind)}
          opt={Object.values(kind)}
        />
            <TailButton caption="검색" 
                        color="blue"
                        onHandle={()=>getDataFetch(1)}
        />
      </div>
      <div className='grid grid-cols-4 gap-4'>
        {cards}
      </div>

        <TailPageNation currentPage= {currentPage}
                        totalPage={totalPage} 
                        onPageChange ={getDataFetch} />

    </div>
  );
}
