import { useRef, useState } from "react";
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
    const user= useRecoilValue(userAtom);
    const [status,setStatus]= useState("");

    const navigate= useNavigate();

    return (
        <div className="flex flex-col items-center h-full w-full">
            <div className= "mt-10 mb-10 text-4xl"> Add Product </div>
            <div className="border border-slate h-auto rounded-xl flex flex-col items-stretch py-5 px-4 w-3/12 shadow-inner shadow-lg">

                 <div className="mt-4l"> Product Category </div>
                <input type="text" className="inputField" ref={categoryRef} ></input>
                <div className="mt-4l"> Product Type </div>
                <input type="text" className="inputField" ref={typeRef} ></input>
                <div className="mt-4l"> Name of the Product </div>
                <input type="text" className="inputField" ref={nameRef} ></input>
                <div className="mt-4"> Product Price </div>
                <input type="text" className="inputField" ref={priceRef} ></input>
                <div className="mt-4">Product Image Path</div>
                <input type="text" className="inputField" ref={imageRef} ></input>
                <div className="mt-4">Product Spec</div>
                <input type="text" className="inputField" ref={specRef} ></input>

                <button className="border border-3 w-full mt-5 mr-2.5 rounded-md pt-1 pb-1 bg-yellow-300 hover:bg-yellow-400" onClick={ () =>{
                    axios.post("https://localhost:3000/api/v1/product/addProduct",{
                      category: categoryRef.current?.value,
                      type: typeRef.current?.value,
                      name: nameRef?.current?.value,
                      price: priceRef.current?.value,
                      imagePath: imageRef.current?.value,
                      spec: specRef.current?.value
                    }, {
                        headers: {
                            Authorization: user.token
                        }
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
            }} className="pt-3"> Back to main page </button>
        </div>
    )
}