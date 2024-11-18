import { SubBarHelper } from "../../helpers/Main Page/SubBarHelper"

export function SubBar(){
    return (
        <div className="flex justify-around p-2 bg-slate-700 text-white">
            {menuItems.map(menuItem => {
                return <SubBarHelper title={menuItem}></SubBarHelper>
            })}
        </div>
    )
}


const menuItems=[
    "Amazon miniTV",
    "Sell",
    "Gift Cards",
    "Buy Again",
    "Browsing History", 
    "Amazon Pay",
    "Coupons",
    "Gift Ideas",
    "Customer Service",
    "Books",
    "Today's Deals",
    "Fashion",
    "Best Sellers"
]