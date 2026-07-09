import React from 'react'

const NotificationOne = ({ pic }) => {
    return (
        <div className="flex flex-row items-center w-full p-5">
            <img src={pic} alt="" className='w-[80px] h-[80px] rounded-full mr-5' />
            <div className="flex flex-col w-full">
                <div className="flex flex-row justify-between">
                    <h1 className="font-montserrat-semibold text-xl">Appointment Confirmation</h1>
                    <p className="font-montserrat-medium text-base">11:23 AM</p>
                </div>
                <p className="font-montserrat-regular text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit corrupti aliquam sequi similique! Sit iusto dolor facilis quibusdam hic fugit sint nesciunt nemo.</p>
            </div>
        </div>
    )
}

export default NotificationOne
