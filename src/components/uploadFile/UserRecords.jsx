import React from 'react'
import NoRecord from '../../assets/images/record.png'
import OneRecord from './OneRecord';

const UserRecords = () => {
    const records = ['ahmad'];
    return (
        <div className="px-8 py-5">

            {records.length === 0 ? (
                <>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col py-5 justify-center items-center">
                        <img src={NoRecord} alt="" className='h-50 w-auto' />
                        <h2 className="font-moserrat-medium text-center pt-3 text-2xl">No Record Found</h2>
                    </div>
                    <button type='button' onClick={() => navigate('/home')} className='absolute left-1/4 bottom-0 my-5 cursor-pointer w-1/2 mt-10 flex justify-center align-center p-3 c-orange text-white mx-auto border-0 rounded-lg'>Book Appointment</button>
                </>
            ) : (
                <>
                    <div className="grid grid-cols-2 gap-3 py-5">
                        <OneRecord />
                        <OneRecord />
                        <OneRecord />
                        <OneRecord />
                        <OneRecord />
                        <OneRecord />
                        <OneRecord />
                        <OneRecord />
                        <OneRecord />
                    </div>
                    <button type='button' onClick={() => navigate('/home')} className='cursor-pointer w-1/2 flex justify-center align-center p-3 c-orange text-white mx-auto border-0 rounded-lg'>Book Appointment</button>
                </>
            )}
        </div>
    )
}

export default UserRecords
