import location from '../../../assets/location.jpg'

export function DeliverTo(){
    return (
        <div className='flex flex-row items-center pl-2'>
            <img src={location} className="h-7 w-7 mt-4"></img>
            <div className='pl-1'>
            <div>
                Deliver to
            </div>
            <div>Vrindavan 281121</div> 
            </div>
        </div>
    )
}