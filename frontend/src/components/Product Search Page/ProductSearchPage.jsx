import {TopBar} from '../Main Page/helpers/TopBar';
import {SubBar} from '../Main Page/helpers/SubBar'
import {SideBar} from './Helpers/SideBar'
import {DisplayPage} from './Helpers/DisplayPage';

export function ProductSearchPage(){
    return (
        <div>
            <TopBar></TopBar>
            <SubBar></SubBar>

            <div className='grid grid-cols-12'>
            <SideBar></SideBar>
            <DisplayPage></DisplayPage>
            </div>
        </div>
    )
}