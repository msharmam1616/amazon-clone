import { useNavigate } from 'react-router-dom'
import cart from '../../../assets/cart.jpg'
import { RecoilRoot, useRecoilValue } from 'recoil';
import { userAtom } from '../../../store/atoms/user';

export function OtherSearchStuff(){
    const navigate= useNavigate();
    const isAdmin= useRecoilValue(userAtom).isAdmin;
    const userName = useRecoilValue(userAtom).firstName;

    return (
        <div className='flex items-center justify-end pl-5 my-2'>
            <div className='text-sm'>EN</div>
            <div className='pl-4'>
            <div className='text-xs'>Hello, {userName}</div>
            <div className='text-sm'>My Cart</div>
            </div>
            <div className='pl-4'>
            <div className='text-xs'>Returns</div>
            <div className='text-sm'>& Orders</div>
            </div>
            { isAdmin ? <div className='text-xs ml-[8.5rem] bg-yellow-300 p-3 border rounded-md text-black hover:bg-yellow-600 hover:text-white hover:cursor-pointer flex-end' onClick={()=>{
                navigate('addProduct');
            }}> Add Product </div> : <img className='w-23 h-20 pl-3' src={cart}></img>}
        </div>
    )
}