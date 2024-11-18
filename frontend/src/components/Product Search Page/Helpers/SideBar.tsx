

export function SideBar(){

    const menu_items= [
        {
            name: "Customer Review",
            subItems: [
                "4 * and Up",
                "3 * and Up",
                "2 * and Up",
                "1 * and Up" 
            ]
        },
        {
            name: "Price",
            subItems: [
                "Under 1000",
                "5000 - 10000",
                "10000-20000",
                "20000 and above" 
            ]
        },
        {
            name: "Mobile Storage",
            subItems: [
                "32 GB",
                "64 GB",
                "128 GB",
                "256 GB" 
            ]
        },
    ]

    return (
        <div className="col-span-2 border border-slate">
            {
                menu_items.map(item =>{
                    return (
                        <div className="flex flex-col items-center my-5">
                            <div className="">{item.name}</div>
                            <div>{item.subItems.map(subItem =>{
                                return (
                                    <div>
                                    <input type="checkbox"/> {subItem}
                                    </div>
                                )
                            })}</div>
                            <div className="border border-black w-3/4 my-3"></div>
                        </div>
                        
                    )
                })
            }
        </div>
    )
}