import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { userAtom } from "../../store/atoms/user";

export function AddProduct(){
    const categoryRef= useRef<HTMLInputElement>(null);
    const typeRef= useRef<HTMLInputElement>(null);
    const nameRef= useRef<HTMLInputElement>(null);
    const priceRef= useRef<HTMLInputElement>(null);
    const imageRef= useRef<HTMLInputElement>(null);
    const specRef= useRef<HTMLInputElement>(null);
    const brandRef= useRef<HTMLInputElement>(null);
    const descriptionRef= useRef<HTMLInputElement>(null);
    const quantityRef= useRef<HTMLInputElement>(null);
    const ratingRef= useRef<HTMLInputElement>(null);

    const user= useRecoilValue(userAtom);

    const backendUrl= import.meta.env.VITE_BACKEND_URL;
    const [status,setStatus]= useState("");

    const navigate= useNavigate();

    useEffect(()=>{
        console.log(backendUrl);
    },[]);

    return (
        <div className="flex flex-col items-center h-full w-full">
            <div className= "mt-6 mb-10 text-4xl"> Add Product </div>
            <div className="border border-slate h-auto rounded-xl flex flex-col items-stretch py-5 px-4 shadow-inner shadow-lg w-[80%]">

                 <div className="mt-2"> Product Category </div>
                <input type="text" className="inputField" ref={categoryRef} ></input>
                <div className="mt-8"> Product Type </div>
                <input type="text" className="inputField" ref={typeRef} ></input>
                <div className="mt-8"> Name of the Product </div>
                <input type="text" className="inputField" ref={nameRef} ></input>
                <div className="mt-8"> Product Brand </div>
                <input type="text" className="inputField" ref={brandRef} ></input>
                <div className="mt-8"> Product Description </div>
                <input type="text" className="inputField" ref={descriptionRef} ></input>
                <div className="mt-8"> Product Price </div>
                <input type="text" className="inputField" ref={priceRef} ></input>
                <div className="mt-8">Product Image Path</div>
                <input type="text" className="inputField" ref={imageRef} ></input>
                <div className="mt-8">Product Quantity</div>
                <input type="text" className="inputField" ref={quantityRef} ></input>
                <div className="mt-8"> Product Rating </div>
                <input type="text" className="inputField" ref={ratingRef} ></input>
                

                <button className="border border-3 w-full mt-5 mr-2.5 rounded-md py-3 bg-yellow-300 hover:bg-yellow-400" onClick={ () =>{
                    axios.post(backendUrl+"/api/v1/products/addProduct",{
                      category: categoryRef.current?.value,
                      type: typeRef.current?.value,
                      name: nameRef?.current?.value,
                      price: priceRef.current?.value,
                      imagePath: imageRef.current?.value,
                      brand: brandRef.current?.value,
                      description: descriptionRef.current?.value,
                      rating: ratingRef.current?.value,
                      quantity: quantityRef.current?.value
                    })
                    .then(res => {
                        setStatus("Product Added Successfully!");
                    })
                    .catch((e) => {
                        setStatus("Error while saving product! please try again!");
                    })
                }}>Continue</button>
            </div>
            {status.length > 0 ? <div> </div> : null} 
            <button onClick={()=>{
                navigate('/main');
            }} className="mt-3 border border-slate-900 rounded-xl p-2"> Back to main page </button>
        </div>
    )
}