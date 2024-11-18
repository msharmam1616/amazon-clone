
import { RecoilRoot } from 'recoil';
import logo from '../../../assets/logo.png';
import { DeliverTo } from '../../helpers/Main Page/DeliverTo';
import { OtherSearchStuff } from '../../helpers/Main Page/OtherSearchStuff';
import { SearchBar } from '../../helpers/Main Page/SearchBar';

export function TopBar(){
    return (
        <div className='flex h-20 bg-black text-white justify-evenly'>
            <img src={logo} alt="" className="h-15 w-18" />
            <DeliverTo></DeliverTo>
            <SearchBar></SearchBar>
            <RecoilRoot>
            <OtherSearchStuff></OtherSearchStuff>
            </RecoilRoot>
        </div>
    )
}