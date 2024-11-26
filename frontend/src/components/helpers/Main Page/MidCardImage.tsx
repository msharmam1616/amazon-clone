
export function MidCardImage({image} : any){
    return (
        <div className="h-[50%] relative">
            <img src={image} className="h-full w-full absolute"></img>
        </div>
    )
}