import { MidCardImage } from "../../helpers/Main Page/MidCardImage";
import { IMAGES } from "../../../assets/homepageCards/homePageImages";
import { useState } from "react";
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

   function addCounter(){
        setCounter((counter+1)%4);
   }

   function subtractCounter(){
        if(counter == 0) setCounter(3);
        else setCounter(counter-1);
   }
    return (
        <div className="h-full">
            <div className="absolute h-full w-full">
              <MidCardImage image={IMAGES[counter]} ></MidCardImage>
            </div>
            <div className="relative flex justify-between pt-20">
            <button onClick={addCounter} className="h-1/2 w-20 text-6xl"> &lt;</button>
            <button onClick={subtractCounter} className="h-1/2 w-20 text-6xl"> &gt;</button>
            </div>
            <div className=" grid grid-cols-4 gap-x-1 relative h-1/2">
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

