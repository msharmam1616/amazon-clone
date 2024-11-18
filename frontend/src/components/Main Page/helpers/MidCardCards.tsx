
interface item{
    image: any,
    title: string
}


export function MidCardCards({title, content}: any ){
    return (
        <div className="flex flex-col border border-5 border-black bg-white mt-36 ml-5 h-4/5" > 
            <div className="m-4 text-2xl font-bold">
                {title}
            </div>
            <div className="grid grid-cols-2">
                {content.map((item: item)  =>{
                    return (
                        <div className=" m-4">
                            <div className="w-1/2">
                                <img src={item.image} alt="" className="w-1/2 h-1/2"/>
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