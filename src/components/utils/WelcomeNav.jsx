import { useLocation, useNavigate, Link } from "react-router-dom";
import Welcome from '../../assets/images/homePage/welcome-nav-logo.png';
import Default from '../../assets/images/homePage/default.jpg';
import NotificationIcon from '../../assets/images/homePage/notification-icon.svg';
import Home from '../../assets/images/homePage/home-icon.svg?react';
import Bookings from '../../assets/images/homePage/my-appointments.svg?react';
import History from '../../assets/images/homePage/history.svg?react';
import Pets from '../../assets/images/homePage/pets-icon.svg?react';

const WelcomeNav = () => {

    const location = useLocation();
    const isActive = (path) => location.pathname === path;

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/my-account');
    }

    return (
        <>
            <div className="flex flex-row py-5 px-8 items-center justify-between">
                <div className='flex flex-row w-1/3 justify-start items-center'>
                    <img src={Default} alt="" className='h-[30px] w-[30px] cursor-pointer rounded-full' onClick={handleClick} />
                    <h1 className='font-montserrat-bold text-2xl pl-5'>Hello! Ahmad</h1>
                </div>

                <div className="icons w-1/3 flex flex-row justify-between">
                    <Link to="/home">
                        <Home className={`h-[24px] w-[24px] transition-colors duration-300 [&_*]:fill-current [&_*]:stroke-current [&_*]:stroke-[0.5] ${isActive("/home") ? "text-[#F05147]" : "text-gray-500 hover:text-[#F05147]"}`} />
                    </Link>
                    <Link to="/my-appointments">
                        <Bookings className={`h-[24px] w-[24px] transition-colors duration-300 [&_*]:fill-current [&_*]:stroke-current [&_*]:stroke-[0.5] ${isActive("/my-appointments") ? "text-[#F05147]" : "text-gray-500 hover:text-[#F05147]"}`} />
                    </Link>
                    <Link to="/records">
                        <History className={`h-[24px] w-[24px] transition-colors duration-300 [&_*]:fill-current [&_*]:stroke-current [&_*]:stroke-[0.5] ${isActive("/records") ? "text-[#F05147]" : "text-gray-500 hover:text-[#F05147]"}`} />
                    </Link>
                    <Link to="/pets">
                        <Pets className={`h-[24px] w-[24px] transition-colors duration-300 [&_*]:fill-current [&_*]:stroke-current [&_*]:stroke-[0.5] ${isActive("/pets") ? "text-[#F05147]" : "text-gray-500 hover:text-[#F05147]"}`} />
                    </Link>
                </div>

                <div className="w-1/3 flex justify-end">
                    <img src={NotificationIcon} alt="" className='h-6 w-auto cursor-pointer' onClick={() => { navigate('/notifications') }} />
                </div>
            </div>
        </>
    )
}

export default WelcomeNav
