import NotificationIcon from '../../assets/images/homePage/notification-icon.svg';
import DefaultImg from "../../assets/images/homePage/default.jpg"
import NotificationOne from './NotificationOne';

const Notifications = () => {
    return (
        <div className="px-8 py-5">
            {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center h-80 w-full">
                <img src={NotificationIcon} alt="" className='mx-auto' />
                <h1 className="font-montserrat-semibold text-2xl pt-3">No Notifications Found</h1>
            </div> */}

            <div className="flex flex-col justify-start items-start">

                <NotificationOne pic={DefaultImg} />
                <NotificationOne pic={DefaultImg} />
                <NotificationOne pic={DefaultImg} />
                <NotificationOne pic={DefaultImg} />
                <NotificationOne pic={DefaultImg} />
                <NotificationOne pic={DefaultImg} />
                <NotificationOne pic={DefaultImg} />
                <NotificationOne pic={DefaultImg} />
                <NotificationOne pic={DefaultImg} />
                <NotificationOne pic={DefaultImg} />
            </div>

        </div>
    )
}

export default Notifications
