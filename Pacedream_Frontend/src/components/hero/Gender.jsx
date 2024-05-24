import React from 'react'

function Gender() {
    return (
        <div>
        <h2>Gender</h2>
        <div className='flex flex-row gap-2 items-center'>
            <button className="h-[46px] border-[1px] rounded-full w-fit px-5 text-[#757575] hover:bg-[#632DF8] hover:text-white" >Male</button> 
             <button className="h-[46px] border-[1px] rounded-full w-fit px-5 text-[#757575] hover:bg-[#632DF8] hover:text-white" >Female</button>
    
        </div>
        </div>
    )    
}

export default Gender