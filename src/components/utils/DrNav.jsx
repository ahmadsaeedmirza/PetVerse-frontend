import { useLocation, useNavigate, Link } from "react-router-dom";
import Welcome from '../../assets/images/homePage/welcome-nav-logo.png';
import Default from '../../assets/images/homePage/default.jpg';
import NotificationIcon from '../../assets/images/homePage/notification-icon.svg';
import Home from '../../assets/images/homePage/home-icon.svg?react';
import Bookings from '../../assets/images/homePage/my-appointments.svg?react';
import Reviews from '../../assets/images/homePage/reviews-icon.svg?react';
import Timing from '../../assets/images/homePage/timing-icon.svg?react';

const DrNav = ({ heading }) => {

    const location = useLocation();
    const isActive = (path) => location.pathname === path;

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/my-account');
    }

    return (
        <>
            <div className="flex flex-row py-5 px-8 items-center justify-between">
                {/* <div className='flex flex-row w-1/3 justify-start items-center'> */}
                {/* <img src={Default} alt="" className='h-[30px] w-[30px] cursor-pointer rounded-full' onClick={handleClick} /> */}
                <h1 className='font-montserrat-bold text-2xl w-1/3 pl-5'>{heading}</h1>
                {/* </div> */}

                <div className="icons w-1/3 flex flex-row justify-between">
                    <Link to="/home/vet">
                        <Home className={`h-[24px] w-[24px] transition-colors duration-300 [&_*]:fill-current [&_*]:stroke-current [&_*]:stroke-[0.5] ${isActive("/home/vet") ? "text-[#F05147]" : "text-gray-500 hover:text-[#F05147]"}`} />
                    </Link>
                    <Link to="/bookings/vet">
                        <Bookings className={`h-[24px] w-[24px] transition-colors duration-300 [&_*]:fill-current [&_*]:stroke-current [&_*]:stroke-[0.5] ${isActive("/bookings/vet") ? "text-[#F05147]" : "text-gray-500 hover:text-[#F05147]"}`} />
                    </Link>
                    <Link to="/reviews/vet">
                        <Reviews className={`h-[24px] w-[24px] transition-colors duration-300 [&_*]:fill-current [&_*]:stroke-current [&_*]:stroke-[0.5] ${isActive("/reviews/vet") ? "text-[#F05147]" : "text-gray-500 hover:text-[#F05147]"}`} />
                    </Link>
                    <Link to="/scheduling">
                        <Timing className={`h-[24px] w-[24px] transition-colors duration-300 [&_*]:fill-current [&_*]:stroke-current [&_*]:stroke-[0.5] ${isActive("/scheduling") ? "text-[#F05147]" : "text-gray-500 hover:text-[#F05147]"}`} />
                    </Link>
                </div>

                <div className="w-1/3 flex justify-end">
                    <img src={NotificationIcon} alt="" className='h-6 w-auto cursor-pointer' onClick={() => { navigate('/notifications') }} />
                </div>
            </div>
        </>
    )
}

export default DrNav
