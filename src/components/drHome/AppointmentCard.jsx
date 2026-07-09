import DefaultImg from "../../assets/images/homePage/default.jpg"
import Video from '../../assets/images/drHomePage/video.svg'
import Clinic from '../../assets/images/drHomePage/clinic.svg'
import Home from '../../assets/images/drHomePage/home.svg'
import Calender from '../../assets/images/drHomePage/calender.svg'
import Payment from '../../assets/images/drHomePage/payment.svg'
import { useNavigate } from "react-router-dom"

const AppointmentCard = () => {

    const navigate = useNavigate();

    return (
        <div className="flex flex-row w-full shadow-lg rounded-xl p-5 mb-3">
            <img src={DefaultImg} alt="" className="h-[100px] w-[100px] rounded-full mr-5" />
            <div className="flex flex-col">
                <h2 className="font-montserrat-semibold">Ahmad Saeed</h2>
                <h3 className="font-montserrat-regular">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis dignissimos minima illo laboriosam voluptatibus magni non sequi assumenda, est ab eius tempore odit! Placeat voluptate culpa cumque, voluptates dolorem quas.</h3>
                <div className="flex flex-row justify-between">
                    <div className="flex flex-row space-x-6 mt-2">
                        <div className="flex flex-row space-x-2 items-center">
                            <img src={Video} alt="" className="h-4 w-auto" />
                            <p className="font-montserrat-medium">Online</p>
                        </div>
                        <div className="flex flex-row space-x-2 items-center">
                            <img src={Calender} alt="" className="h-4 w-auto" />
                            <p className="font-montserrat-medium">9:30 PM</p>
                        </div>
                        <div className="flex flex-row space-x-2 items-center">
                            <img src={Payment} alt="" className="h-4 w-auto" />
                            <p className="font-montserrat-medium">Pending</p>
                        </div>
                    </div>
                    <button type="button" onClick={() => { navigate('/appointment-detail') }} className="cursor-pointer py-3 px-5 font-montserrat-medium c-orange border-0 text-white rounded-lg">View Details</button>
                </div>
            </div>
        </div>
    )
}

export default AppointmentCard
