import { subBarImages } from "../../../assets/subBarImages/subBarImages"
import { SubBarHelper } from "../../helpers/Main Page/SubBarHelper"

export function SubBar(){
    return (
        <div className="flex flex-col">
          <div className="bg-slate-700 pl-2 p-2 text-white w-[100%]"> Deliver to : 302012 </div> 
        <div className="flex items-center justify-between gap-[1.1rem] overflow-scroll"> 
            {menuItems.map((menuItem:any) =>{
                return (
                    <div className="flex flex-col w-auto my-3">
                    <img src={menuItem.imagePath} className="w-[5rem] max-h-[55px]"></img>
                    <div>{menuItem.title}</div>
                    </div>
                )
            })}
        </div>
        </div>
    )
}


const menuItems=[
    {
        title: "Beauty",
        imagePath: "https://m.media-amazon.com/images/I/21xXjwTSVIL._SX100_SY100_.png",
    },
    {
        title: "Groceries",
        imagePath: "https://m.media-amazon.com/images/I/21CJrl0e7+L._SX100_SY100_.png"
    },
    {
        title: "Fashion",
        imagePath: "https://m.media-amazon.com/images/I/11luqHr9bsL._SX100_SY100_.jpg"
    },
    {
        title: "Mobiles",
        imagePath: "https://m.media-amazon.com/images/I/21OQCcPV0tL._SX100_SY100_.png"
    },
    {
        title: "Electronics",
        imagePath: "https://m.media-amazon.com/images/I/11dcI5r-U6L._SX100_SY100_.png"
    },
    {
        title: "Deals",
        imagePath: "https://m.media-amazon.com/images/I/312t+JcSoDL._SX100_SY100_.jpg"
    },
    {
        title: "Home",
        imagePath: "https://m.media-amazon.com/images/I/31ICLWjUdHL._SX100_SY100_.png"
    }
]