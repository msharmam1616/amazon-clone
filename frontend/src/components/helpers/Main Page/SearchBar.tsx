import { useEffect, useRef, useState } from 'react';
import search from '../../../assets/search.png';
import axios from 'axios';

export function SearchBar(){

    const [filter, setFilter]= useState("");
    const [productList, setProductList]= useState([]);
    const userInput= useRef<HTMLInputElement>(null);

    useEffect(() => {
        axios.get('http://locahost:3000/api/v1/products/getProduct?filter=' +filter)
        .then(res =>{
            setProductList(res.data.products);
        })
    }, [filter] )

    
    return (
        <div className='grid grid-cols-10 mt-4 pl-10'>
            <button className='pr-2 text-black border-white rounded-s-sm h-12 bg-slate-300 col-span-1'>All</button>
            <input type="text" className='h-12 col-span-8 text-black p-1' ref={userInput} onChange={ (e) =>{
                setFilter(e.target.value);
            }}></input>

            {
                productList.length > 0 ? 
                <div className='bg-white fixed text-black w-1/2 h-auto ml-24 mt-12 z-10'> 
                        {productList.map(product => <div className='hover:bg-slate-700 hover:text-white hover:cursor-pointer p-4'> {product} </div>)}
                </div> 
                 : null
            }

            <img src={search} alt="" className='h-12 col-span-1'/>
        </div>
    )
}