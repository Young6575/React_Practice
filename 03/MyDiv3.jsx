import { GoChevronRight } from "react-icons/go";

export default function MyDiv3({a,b,c}) {
  return (
      <div className="w-9/10 h-4/5 bg-amber-200
                    flex  items-center
                    p-20 text-2xl
                    text-black font-bold">

        <div className="w-9/10 flex justify-start
                        mb-5">
            {a} <GoChevronRight className="text-3xl" /> {b} <GoChevronRight className="text-3xl" /> {c}
        </div>   
    </div>
  )
}

