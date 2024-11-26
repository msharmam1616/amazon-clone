import { useEffect, useRef, useState } from 'react';
import search from '../../../assets/search.png';
import axios from 'axios';
import { useRecoilValue } from 'recoil';
import { userAtom } from '../../../store/atoms/user';
import { useNavigate } from 'react-router-dom';

export function SearchBar(){

    const [filter, setFilter]= useState("");
    const [productList, setProductList]= useState([]);
    const userInput= useRef<HTMLInputElement>(null);
    const state= useRecoilValue(userAtom);
    const [show, setShow]= useState(false);
    const productRef= useRef(null);
    const navigator= useNavigate();

    useEffect(()=>{
        if(state.touched){
            setShow(false);
        }
    },[state.touched])


    const productList1= [
        "nothing",
        "nothing mobile",
        "nothing seller",
        "not"
    ]

    function openSearchPage(){
        navigator.navigate()
    }

    useEffect(() => {
        setShow(true);
        axios.get('http://locahost:3000/api/v1/products/getProduct?filter=' +filter)
        .then(res =>{
            setProductList(res.data.products);
        })
    }, [filter] )

    
    return (
        <div className='mt-1 w-[100%]'>
            <div className='relative top-0'>
            <input type="text" className='h-10 text-black p-1 rounded-xl w-[90%] ml-[5%] mr-[5%] pl-3' ref={userInput} onChange={ (e) =>{
                setFilter(e.target.value);
            }}>
            </input>
            {
                show && productList1.length > 0 ? 
                <div className='bg-white absolute text-black w-[90%] h-auto ml-[5%] z-10' onClick={openSearchPage}> 
                        {productList1.map(product => <div className='hover:bg-slate-700 hover:text-white hover:cursor-pointer p-4' ref={productRef}> {product} </div>)}
                </div> 
                 : null
            }
            <img src={search} alt="" className='absolute h-10 w-16 rounded-xl top-[0.5%] right-[5%]'/> 
            </div>
        </div>
    )
}