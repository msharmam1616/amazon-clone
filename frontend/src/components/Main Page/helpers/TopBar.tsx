
import { RecoilRoot } from 'recoil';
import logo from '../../../assets/logo.png';
import { OtherSearchStuff } from '../../helpers/Main Page/OtherSearchStuff';
import { SearchBar } from '../../helpers/Main Page/SearchBar';

export function TopBar(){
    return (
        <div className='flex flex-wrap bg-[black] text-white'>
            <img src={logo} alt="" className="h-10 w-16 ml-5 mt-2" />
            <SearchBar></SearchBar>
            <RecoilRoot>
            <OtherSearchStuff></OtherSearchStuff>
            </RecoilRoot>
        </div>
    )
}