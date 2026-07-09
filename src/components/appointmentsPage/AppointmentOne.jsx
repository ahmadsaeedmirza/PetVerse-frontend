import React from 'react'

const AppointmentOne = ({ name, type, status, pic }) => {
    return (
        <div className="flex flex-row items-center w-full p-5">
            <img src={pic} alt="" className='w-[80px] h-[80px] rounded-full mr-5' />
            <div className="flex flex-col w-full">
                <div className="flex flex-row justify-between items-between">
                    <h1 className="font-montserrat-semibold text-xl c-text-orange">Appointment</h1>
                    <p className="font-montserrat-medium text-base">24 Jun Monday at 11:23 AM</p>
                </div>
                <p className="font-montserrat-regular text-base capitalize">{name}</p>
                <p className="font-montserrat-regular text-base capitalize">{type}</p>
                <p className="font-montserrat-regular text-base c-text-orange capitalize">{status}</p>
            </div>
        </div>
    )
}

export default AppointmentOne
