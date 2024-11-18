import { Product } from "../../interfaces/Electronics";
import { TopBar } from "../Main Page/helpers/TopBar";
import { ElectronicsImages } from "../../assets/products/Electronics";
import { SubBar } from "../Main Page/helpers/SubBar";

export function ProductPage(){
   const product= {
        imagePath: ElectronicsImages[0],
        name: "POCO C55 (Power Black, 6GB RAM, 128GB Storage)",
        brand: "POCO",
        review: 4,
        ratings: 1321,
        discount: 54,
        price: 13999
   }
    return (
        <div>
        <TopBar/>
        <SubBar></SubBar>
        <div className="grid grid-cols-12 pt-8">
            <div className="col-span-4 flex justify-center h-3/4">
                <img src={product.imagePath}></img>
            </div>
            <div className="col-span-5 flex flex-col align-center">
                 <div className="text-3xl">{product.name}</div>
                 <div className="text-purple-800 pt-2"> Brand : {product.brand} </div>
                 <div className="flex"> 
                    <div> {product.review} star </div>
                    <div className="pl-3"> | {product.ratings} ratings  </div>
                 </div>
                 <div className="border border-slate-300 my-5"></div>
                 <div className="flex">
                    <div className="text-3xl text-red-500"> -{product.discount}% </div>
                    <div className="text-3xl pl-4"> ₹{product.price - (product.price *(product.discount)/100)}</div>
                 </div>
                 <div className="line-through"> MRP: {product.price} </div>  
                 <div> EMI starts at : {(product.price/12).toFixed(1)}. No Cost EMI options available.</div>
                 <div> Get Amazon Pay ICICI credit card in 30mins. Enjoy 5% cashback!</div>
                 <div className="border border-slate-300 mt-8"> </div>
            </div>
            <div className="col-span-3 border border-slate-200 mx-8 rounded-xl h-3/4 overflow-hidden">
                <div className="flex flex-col bg-slate-200 h-1/12">
                       <div className="pt-3 pl-6 font-bold"> With Exchange </div>
                      <div className="pl-6 text-red-700 pb-3"> Upto ₹ {(product.price/2).toFixed(1)} off! </div>
                </div>
                <div className=" flex flex-col align-center justify-evenly">
                    <div className="font-bold"> Without Exchange </div>
                    <div className="text-red-700"> ₹ {product.price} </div>
                    <div className="w-full"> Free Prime delivery by <div className="font-bold"> Tuesday, 23 April </div></div>
                    <div> Ships from     Amazon </div>
                    <div> Seller    Samsung</div>
                    <div> Add a Protection Plan: </div>
                    <div> Extended Warranty by OneAssist for ₹249</div>
                    <button> Add to Cart </button>
                    <button> Buy Now </button>
                </div>

            </div>
        </div>
        </div>
    )


}