
interface item{
    image: any,
    title: string
}


export function MidCardCards({title, content}: any ){
    return (
        <div className="flex flex-col border border-5 border-black bg-white mt-36 ml-5" > 
            <div className="m-4 text-sm font-bold">
                {title}
            </div>
            <div className="grid grid-cols-2 justify-end items-center">
                {content.map((item: item)  =>{
                    return (
                        <div className="flex flex-col justify mx-3 my-2">
                            <div className="w-1/2">
                                <img src={item.image} alt="" className="w-[2.2rem] h-[2rem]"/>
                            </div>
                            <div>
                                {item.title}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}