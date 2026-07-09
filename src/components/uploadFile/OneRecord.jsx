import React from 'react'
import RecordIcon from '../../assets/images/record-icon.png'
import DrIcon from '../../assets/images/dr-icon.png'
import CalenderIcon from '../../assets/images/calender-icon.png'

const OneRecord = () => {
    return (
        <div className='flex flex-col b-0 c-light-pink rounded-lg py-5 px-7'>
            <div className="py-3 flex flex-row items-center">
                <img src={RecordIcon} alt="" className='w-[50px] h-auto' />
                <div className="pl-3">
                    <h2 className="font-montserrat-semibold text-xl">General Checkup</h2>
                </div>
            </div>

            <div className="flex flex-col pl-10">
                <div className="flex flex-row py-1">
                    <img src={DrIcon} alt="" className='w-[24px] h-auto' />
                    <p className="font-montserrat-regular pl-3">Animal Name: Mohid Bhatti</p>
                </div>
                <div className="flex flex-row py-1">
                    <img src={DrIcon} alt="" className='w-[24px] h-auto' />
                    <p className="font-montserrat-regular pl-3">Dr. Ahmad Saeed</p>
                </div>
                <div className="flex flex-row py-1">
                    <img src={CalenderIcon} alt="" className='w-[24px] h-auto' />
                    <p className="font-montserrat-regular pl-3">12 July 2025</p>
                </div>
            </div>
            <div className="flex felx-row justify-end">
                <button className='cursor-pointer p-3 c-orange text-white px-5 border-0 rounded-full w-1/4'>Open</button>
            </div>
        </div>
    )
}

export default OneRecord
