import axios from "axios";
import { IMAGES } from "../../assets/homepageCards/homePageImages"
import { useState, useRef } from "react"
import { useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { userAtom } from "../../store/atoms/user";


export function SignUp(){

    const [signIn, setSignIn]= useState(true);
    const firstNameRef= useRef<HTMLInputElement>(null);
    const lastNameRef= useRef<HTMLInputElement>(null);
    const userNameRef= useRef<HTMLInputElement>(null);
    const passwordRef= useRef<HTMLInputElement>(null);
    const [error,setError]= useState("");
    const navigate= useNavigate();
    const setUserState= useSetRecoilState(userAtom);

    function handleSignUp(){

        let userData: object; 
        let reqUrl:string;

        if(!signIn){
            userData= {
                firstName: firstNameRef.current?.value,
                lastName: lastNameRef.current?.value,
                username: userNameRef.current?.value,
                password: passwordRef.current?.value
            }
            reqUrl= "http://localhost:3000/api/v1/user/signUp";
        }else{
            userData= {
                username: userNameRef.current?.value,
                password: passwordRef.current?.value
            }
            reqUrl= "http://localhost:3000/api/v1/user/signIn"
        }

        axios.post(reqUrl, userData)
        .then(res => {
                setUserState(user => {return {...user, token: res.data.token}})
                navigate('/main');
         })
        .catch((e) => {
            console.log(e);
              setError("An unkown error occured");
        })
    }

    return (
        <div className="flex flex-col items-center h-full w-full">
            <img src={IMAGES[4]} className="w-44 h-18 mt-10 mb-10"></img>
            <div className="border border-slate h-auto rounded-xl flex flex-col items-stretch py-5 px-4 w-3/12 shadow-inner shadow-lg">
                { error.length > 0 ? <div> {error} </div> : null }
                <div className="mt-4 text-4xl"> {signIn ? "Sign in" : "Sign Up" }</div>
                {signIn ? null : <div>
                 <div className="mt-4"> FirstName </div>
                 <input type="text" ref={firstNameRef} className="mt-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                 <div className="mt-4"> LastName </div>
                 <input type="text" ref={lastNameRef} className="mt-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                 </div>}
                <div className="mt-4" > Email or mobile phone number </div>
                <input type="text" ref={userNameRef} className="mt-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                <div className="mt-4">Password</div>
                <input type="password" ref={passwordRef} className="mt-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                <button className="border border-3 w-full mt-5 mr-2.5 rounded-md pt-1 pb-1 bg-yellow-300 hover:bg-yellow-400" onClick={handleSignUp}>Continue</button>
                <div className="w-full mt-3">By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</div>
                <div>Need Help?</div>
            </div>

            <div className="mt-10 flex flex-col items-center">
                <div>{signIn ? "New To Amazon?" : "Already have an account?" }</div>
                <button className="border border-1 rounded-md p-2 bg-yellow-300 hover:bg-yellow-400" onClick={()=>{
                    setSignIn(!signIn);
                }}> { signIn ? "Create Your Amazon Acount!": "Sign In to you account!"}</button>
            </div>
        </div>
    )
}