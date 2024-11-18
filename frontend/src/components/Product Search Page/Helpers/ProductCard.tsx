import { ImageCard } from "./ImageCard";


export function ProductCard({products} :any){

    return (
        <div className="ml-2 w-full h-full">
        {products.map( (product:any) => {
            return (
                <div className="flex my-4">
                    <div className="w-[20rem] h-[20rem]">
                        <ImageCard imagePath={product.imagePath}></ImageCard>
                    </div>
                <div className="ml-3 text-md w-[80%] flex flex-col justify-evenly">
                    <div className="font-bold">{product.name}</div>
                    <div className="flex w-[2vw]">
                            {product.rating >= 1 ?  <img src="/start_closed.png"/> : <img src="/star_open.png"/> }   
                            {product.rating >= 2 ?  <img src="/start_closed.png"/> : <img src="/star_open.png"/> }
                            {product.rating >= 3 ?  <img src="/start_closed.png"/> : <img src="/star_open.png"/> }
                            {product.rating >= 4 ?  <img src="/start_closed.png"/> : <img src="/star_open.png"/> }
                            {product.rating == 5 ?  <img src="/start_closed.png"/> : <img src="/star_open.png"/>}           
                    </div>
                    <div className="flex relative">
                    <div className="text-[1.5rem] font-bold"> ₹ {product.price - ((product.price)*product.discount/100)}</div>
                    <div className="flex ml-3 relative top-3"> M.R.P: <div className="line-through"> ₹ {product.price} </div> </div>
                    <div className="relative top-3 ml-2"> ( {product.discount} % discount ) </div>
                    </div>
                    <div> No Cost EMI available on select cards. </div>
                    <button className="p-3 bg-yellow-300 rounded-xl hover:bg-yellow-500 hover:text-white w-[10vw]"> Add To Cart </button>
                </div>
                </div>
            )
        })}
        </div>
    )
}