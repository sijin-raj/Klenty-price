import React from 'react'



const TabItem = ({ title, active=false, onClick}) => {
    return (
        <>
            <div className='w-full'>
            <div onClick={onClick} className={`w-4/5 h-10 px-8   flex flex-col items-center border-primary border justify-center space-y-6 space-x-6   text-center ${active ? 'bg-custom-blue active-feature-shadow' : '' } cursor-pointer`}>
                <p className={`${active ? 'text-primary' : 'text-font_secondary' } font-bold text-md`}>{title}</p>
            </div>
            </div>
        </>
    )
}

export default TabItem