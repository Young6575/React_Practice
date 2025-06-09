

export default function MyListItem() {
    const imgUrl = "./img/css.png" ;
    const title = "CSS";
    const content = "Cascading Style Sheets(CSS)는 HTML이나 XML(XML의 방언인 SVG, XHTML 포함)로 작성된 문서의 표시 방법을 기술하기 위한 스타일 시트 언어"
  return (
    <div className="w-1/2 h-50
                    flex justify-start items-start
                    border-gray-500">
        <div className="w-1/4 h-full bg-amber-600
                        flex items-center justify-start">
            <img className="w-2/4 h 2/3 flex justify-start items-start" src={imgUrl} />
        </div>
        <div className="w-3/4 h-full bg-amber-900 p-5
                        flex flex-col items-start justify-between">
            
           <div className="w-full flex flex-col justify-start items-start">
             <h1> {title} </h1>

             <p className="w-full flex flex-col justify-start items-start bg-amber-200"> 
                {content}

             </p>
           </div> 
           <div className="w-full h-4
                           flex justify-end items-center">
                좋아요
           </div>
        </div>
    </div>
  )
}
