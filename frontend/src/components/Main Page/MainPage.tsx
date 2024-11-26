import { SubBar } from "./helpers/SubBar";
import { TopBar } from "./helpers/TopBar";
import { MidCard } from "./helpers/MidCard";
import { useRecoilState } from "recoil";
import { userAtom } from "../../store/atoms/user";

export function MainPage(){

    const [state, setState]= useRecoilState(userAtom);

    function handleclick(){
        setState((state) =>({
            ...state,
            touched: !state.touched
        }));
    }

    return (<div onClick={handleclick}>
    <TopBar></TopBar> 
    <SubBar></SubBar>
    <MidCard></MidCard>
   </div>)
}