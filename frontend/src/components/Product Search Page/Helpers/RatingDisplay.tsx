import { extras } from "../../../assets/extras";


export function RatingDisplay({rating} :any){
   
   
    function returnStars(){
   
    const parent: any[]= [];
    var curRating= rating;

    for(let i=0;i<5;i++){
     const child= document.createElement('img');
    
     if(curRating){
        child.src= "../../../assets/star_open.png";
        curRating--;
        }else{
        child.src= "../../../assets/star_closed.png";
        }
    
        parent.push(child);
    }
    return parent;
   }

    return (
        <div>{returnStars()}</div>
    )
}