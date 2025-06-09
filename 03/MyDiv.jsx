import MyDiv2 from "./MyDiv2"

export default function MyDiv() {
    const x = "div1" ;
    const y = "div2" ;
    const z = "div3" ;


  return (
    <div className="w-9/10 h-4/5 bg-amber-700
                    flex flex-col items-center
                    p-20 text-2xl
                    text-white  font-bold ">
        <div className="w-9/10 flex justify-start
                        mb-5">
            {x}
        </div>                

        
        <MyDiv2 a={x} b={y} c={z}/>
        
    </div>
  )
}
