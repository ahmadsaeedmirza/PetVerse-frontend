import React from 'react'
import DefaultImg from "../../assets/images/homePage/default.jpg"
import Meeting from '../../assets/images/drAppointment/meeting-icon.svg'
import Timing from '../../assets/images/drAppointment/timing-icon.svg'
import Date from '../../assets/images/drAppointment/date-icon.svg'

const DrAppointmentDetail = () => {
    return (
        <div className='px-8 py-5'>

            <div className="flex flex-row items-center justify-between w-full">
                <div className='flex flex-row items-center'>
                    <img src={DefaultImg} alt="" className='h-[150px] w-[150px] rounded-full mr-6' />
                    <div className="flex flex-col">
                        <h1 className="font-montserrat-bold c-text-orange text-2xl">Ahmad Saeed</h1>
                        <p className="font-montserrat-regular text-lg">0300 6429791</p>
                        <p className="font-montserrat-regular text-lg">Gujranwala</p>
                    </div>
                </div>
                <div className="rounded-xl border-0 c-orange text-white p-5">
                    <p className="font-montserrat-regular text-center text-base">12:00 PM</p>
                    <p className="font-montserrat-medium text-center text-xl">28</p>
                    <p className="font-montserrat-bold text-center text-base">SAT</p>
                </div>
            </div>



            <div className="flex flex-row justify-evenly my-3 py-5 shadow-lg rounded-xl">
                <div className="flex flex-col items-center">
                    <img src={Meeting} alt="" className='h-[50px] w-[50px]' />
                    <p className="font-montserrat-medium text-center pt-3 text-base">Online</p>
                </div>
                <div className="flex flex-col items-center">
                    <img src={Timing} alt="" className='h-[50px] w-[50px]' />
                    <p className="font-montserrat-medium text-center pt-3 text-base">12:00 PM</p>
                </div>
                <div className="flex flex-col items-center">
                    <img src={Date} alt="" className='h-[50px] w-[50px]' />
                    <p className="font-montserrat-medium text-center pt-3 text-base">Sat, 28 Jun</p>
                </div>
            </div>

            <div className="flex flex-row my-3 py-5 rounded-xl shadow-lg">
                <div className="w-1/2 rounded-lg">This is going to be the map</div>
                <div className="flex flex-col w-1/2">
                    <h2 className="c-text-orange font-montserrat-bold text-2xl">Address</h2>
                    <p className="font-montserrat-regular mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo illum quasi asperiores sunt nihil consequatur repellendus nemo consequuntur tenetur sint nesciunt, sed aliquam sequi necessitatibus ducimus perferendis eaque pariatur voluptate.</p>
                    <button className="font-montserrat-medium py-3 px-5 border-0 mb-3 w-[150px] bg-[#62C5BB] rounded-2xl">Open Map</button>
                    <button className="font-montserrat-medium py-3 px-5 border-0 mb-3 w-[150px] bg-[#92CC7F] rounded-2xl">Call</button>
                </div>
            </div>

            <div className="shadow-lg p-5 my-3 rounded-xl">
                <h1 className="font-montserrat-bold c-text-orange text-2xl capitalize">pet information</h1>
                <p className="font-montserrat-regular text-base capitalize">Pet Name: Chintu</p>
                <p className="font-montserrat-regular text-base capitalize">Specie: Dog</p>
                <p className="font-montserrat-regular text-base capitalize">Breed: German Shepherd</p>
                <p className="font-montserrat-regular text-base capitalize">Age: 2</p>
                <p className="font-montserrat-regular text-base capitalize">Gender: Male</p>
            </div>

            <div className="shadow-lg p-5 my-3 rounded-xl">
                <h1 className="font-montserrat-bold c-text-orange text-2xl capitalize">Concerns</h1>
                <p className="font-montserrat-regular text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. In repudiandae dicta similique incidunt corrupti. Harum velit dolor neque sunt facilis? Pariatur placeat ex ratione molestiae perferendis odit voluptates explicabo sit!
                    Necessitatibus, nihil voluptatum repudiandae repellendus quidem sunt, officia molestiae alias autem placeat ipsum quae dicta laudantium exercitationem, ad neque facere ab nam assumenda nisi? Eaque natus dolore quasi harum tempore?</p>
            </div>

            <div className="shadow-lg p-5 my-3 rounded-xl">
                <h1 className="font-montserrat-bold c-text-orange text-2xl capitalize">Medical History</h1>
                <p className="font-montserrat-regular text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. In repudiandae dicta similique incidunt corrupti. Harum velit dolor neque sunt facilis? Pariatur placeat ex ratione molestiae perferendis odit voluptates explicabo sit!
                    Necessitatibus, nihil voluptatum repudiandae repellendus quidem sunt, officia molestiae alias autem placeat ipsum quae dicta laudantium exercitationem, ad neque facere ab nam assumenda nisi? Eaque natus dolore quasi harum tempore?</p>
            </div>

            <button type="submit" className='relative cursor-pointer w-1/2 my-6 flex justify-center align-center p-3 c-orange text-white mx-auto border-0 rounded-lg'>Start The Session</button>

        </div>
    )
}

export default DrAppointmentDetail
