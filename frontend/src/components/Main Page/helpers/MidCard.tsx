import { MidCardImage } from "../../helpers/Main Page/MidCardImage";
import { IMAGES } from "../../../assets/homepageCards/homePageImages";
import { useEffect, useRef, useState } from "react";
import { MidCardCards } from "./MidCardCards";
import { MidCardItem } from "../../../interfaces/MidCardItem";

import { KEEP_SHOPPING_FOR } from "../../../assets/midCardImages/Keep shopping for/keepShoppingFor";

const MidCardCardsContent=[
    {
        title: "Keep Shopping For",
        content: KEEP_SHOPPING_FOR
    },
    {
        title: "Continue Where you left",
        content: KEEP_SHOPPING_FOR
    },
    {
        title: "Buy Again",
        content: KEEP_SHOPPING_FOR
    },
    {
        title: "Cashback",
        content: KEEP_SHOPPING_FOR
    }
]




export function MidCard(){
   const [counter, setCounter]= useState(0);

   useEffect(()=>{
       const intervalId= setInterval(()=>{
            setCounter((prevcounter) => (prevcounter+1)%3);
        },5000);
      
       return () => clearInterval(intervalId);
   },[counter])

   function addCounter(){
        setCounter((counter+1)%3);
   }

   function subtractCounter(){
        if(counter == 0) setCounter(2);
        else setCounter(counter-1);
   }
    return (
        <div className="h-full w-full">
            <div className="absolute h-full w-full">
              <MidCardImage image={IMAGES[counter]} ></MidCardImage>
            </div>
            <div className="relative flex justify-between pt-[10rem]">
            <button onClick={addCounter} className="h-1/2 w-20 text-6xl text-slate-500"> &lt;</button>
            <button onClick={subtractCounter} className="h-1/2 w-20 text-6xl text-slate-500"> &gt;</button>
            </div>
            <div className="flex gap-x-1 relative h-[40%] overflow-y-scroll w-[55rem]">
                {
                MidCardCardsContent.map((item:any) =>{
                    console.log(item);
                    return (
                        <MidCardCards title={item.title} content={item.content}></MidCardCards>
                    )
                })}
            </div>
             
        </div>
    )
}

