import { MOBILES } from "../../../assets/products/electronics/mobiles/MOBILES"
import { ProductCard } from "./ProductCard";

const mobilePhones= [
    {
        name: "realme NARZO 70 Pro 5G (Glass Green, 8GB RAM,128GB Storage) Dimensity 7050 5G Chipset | Horizon Glass Design | Segment 1st Flagship Sony IMX890 OIS Camera",
        category: "mobile",
        type: "Electronics",
        brand: "Realme",
        price: 15000,
        imagePath: "https://m.media-amazon.com/images/I/71-EnPs+uQL._AC_UL480_FMwebp_QL65_.jpg",
        description: "a mobile",
        quantity: 2,
        rating: 3,
        discount: 30
    },{
        name: "realme NARZO 70 Pro 5G (Glass Green, 8GB RAM,128GB Storage) Dimensity 7050 5G Chipset | Horizon Glass Design | Segment 1st Flagship Sony IMX890 OIS Camera",
        category: "mobile",
        type: "Electronics",
        brand: "Realme",
        price: 22000,
        imagePath: "https://m.media-amazon.com/images/I/616uMtIWiiL._AC_UL480_FMwebp_QL65_.jpg",
        description: "a mobile",
        quantity: 2,
        rating: 2,
        discount: 40
    },{
        name: "realme NARZO 70 Pro 5G (Glass Green, 8GB RAM,128GB Storage) Dimensity 7050 5G Chipset | Horizon Glass Design | Segment 1st Flagship Sony IMX890 OIS Camera",
        category: "mobile",
        type: "Electronics",
        brand: "Realme",
        price: 40000,
        imagePath: "https://m.media-amazon.com/images/I/711F6T6aySL._AC_UL480_FMwebp_QL65_.jpg",
        description: "a mobile",
        quantity: 2,
        rating: 5,
        discount: 20

    },{
        name: "Oneplus Nord CE4 (Dark Chrome, 8GB RAM, 256GB Storage)",
        category: "mobile",
        type: "Electronics",
        brand: "Realme",
        price: 32000,
        imagePath: "https://m.media-amazon.com/images/I/61MEp5HIdBL._AC_UL480_FMwebp_QL65_.jpg",
        description: "a mobile",
        quantity: 2,
        rating: 4,
        discount: 32
    }, {
        name: "Redmi Note 13 5G (Arctic White, 12GB RAM, 256GB Storage) | 5G Ready | 120Hz Bezel-Less AMOLED | 7.mm Slimmest Note Ever | 108MP Pro-Grade Camera",
        category: "mobile",
        type: "Electronics",
        brand: "Realme",
        price: 12500,
        imagePath:"https://m.media-amazon.com/images/I/61K1Fz5LxvL._AC_UL480_FMwebp_QL65_.jpg",
        description: "a mobile",
        quantity: 2,
        rating: 3,
        discount: 45
    }, {
        name: "OnePlus Nord CE 3 Lite 5G (Chromatic Gray, 8GB RAM, 256GB Storage)",
        category: "mobile",
        type: "Electronics",
        brand: "Realme",
        price: 56000,
        imagePath: "https://m.media-amazon.com/images/I/71i8h-7v3-L._AC_UY327_FMwebp_QL65_.jpg",
        description: "a mobile",
        quantity: 2,
        rating: 2,
        discount: 50
    }
]




export function DisplayPage(){
    return (
        <div className="col-span-10 border border-black h-full w-full">
             <ProductCard products={mobilePhones}></ProductCard>
        </div>
    )
}