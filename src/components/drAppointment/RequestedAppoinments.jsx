import React from 'react'
import DefaultImg from "../../assets/images/homePage/default.jpg"
import Video from '../../assets/images/drHomePage/video.svg'
import Clinic from '../../assets/images/drHomePage/clinic.svg'
import Home from '../../assets/images/drHomePage/home.svg'
import Calender from '../../assets/images/drHomePage/calender.svg'
import Payment from '../../assets/images/drHomePage/payment.svg'

const RequestedAppoinments = () => {
    return (
        <div className='flex flex-col p-5 bg-white rounded-2xl shadow-lg mb-3'>

            <div className='flex flex-row justify-between pb-3 border-b-2 border-black'>

                <div className="flex flex-row items-center w-2/3">
                    <img src={DefaultImg} alt="" className='h-[80px] w-[80px] rounded-full mr-3' />
                    <div className="flex flex-col">
                        <h1 className="font-montserrat-semibold font-xl">Ahmad Saeed</h1>
                        <p className="font-montserrat-regular">0300 6429791</p>
                        <p className="font-montserrat-regular">Gujranwala</p>
                    </div>
                </div>

                <div className="flex flex-col justify-evenly w-1/3 border-l-2 border-black pl-3">
                    <h2 className='font-montserrat-regular capitalize'><span className='c-text-orange font-montserrat-medium'>Pet Name: </span>Lisa</h2>
                    <h2 className='font-montserrat-regular capitalize'><span className='c-text-orange font-montserrat-medium'>Specie: </span>Dog</h2>
                    <h2 className='font-montserrat-regular capitalize'><span className='c-text-orange font-montserrat-medium'>Breed: </span>Bull Dog</h2>
                    <h2 className='font-montserrat-regular capitalize'><span className='c-text-orange font-montserrat-medium'>Age: </span>10</h2>
                    <h2 className='font-montserrat-regular capitalize'><span className='c-text-orange font-montserrat-medium'>Gender: </span>Female</h2>
                </div>


            </div>
            <div className="flex flex-row justify-between py-2">
                <div className="flex flex-col w-2/3 pr-3">
                    <h1 className="font-montserrat-semibold c-text-orange">Concerns:</h1>
                    <p className="font-montserrat-regular">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus nam maxime numquam culpa labore totam molestiae blanditiis non ducimus, optio maiores ea explicabo vel aut, voluptate suscipit? Recusandae, dignissimos unde.</p>
                </div>
                <div className="rounded-xl border-0 c-orange text-white p-5">
                    <p className="font-montserrat-regular text-center text-base">12:00 PM</p>
                    <p className="font-montserrat-medium text-center text-xl">28</p>
                    <p className="font-montserrat-bold text-center text-base">SAT</p>
                </div>
            </div>

            <div className="flex flex-row justify-between items-center space-x-6 py-2">
                <div className='flex flex-row items-center space-x-6 py-2'>

                    <div className="flex flex-row items-center space-x-2">
                        <img src={Home} alt="" className='h-4 w-auto' />
                        <p className="font-montserrat-medium">Home Visit</p>
                    </div>
                    <div className="flex flex-row items-center space-x-2">
                        <img src={Payment} alt="" className='h-4 w-auto' />
                        <p className="font-montserrat-medium">Pending</p>
                    </div>
                </div>
                <div className='flex flex-row items-center space-x-6 py-2'>
                    <button className="font-montserrat-medium text-white bg-[#FF0000] py-3 rounded-3xl px-5">Dismiss</button>
                    <button className="font-montserrat-medium text-white bg-[#34A853] py-3 rounded-3xl px-5">Confirm</button>
                </div>
            </div>

        </div>
    )
}

export default RequestedAppoinments
