import AppointmentIcon from '../../assets/images/appointmentPage/appointment-icon.svg';
import DefaultImg from "../../assets/images/homePage/default.jpg"
import AppointmentOne from './AppointmentOne';

const Appointment = () => {
    return (
        <div className="px-8 py-5">
            {/* <h1 className="font-montserrat-semibold text-2xl pb-3">Best Doctors In Area</h1> */}

            {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center h-80 w-full">
                <img src={AppointmentIcon} alt="" className='mx-auto' />
                <h1 className="font-montserrat-semibold text-2xl pt-3">No Appoinmtment Found</h1>
            </div> */}

            <div className="grid grid-cols-5 gap-4 justify-between">
                <div className="py-1 px-5 text-[#F05147] border-2 border-[#F05147] rounded-full cursor-pointer text-center hover:bg-[#F05147] hover:text-white transition-colors duration-300">
                    Today / Upcoming
                </div>
                <div className="py-1 px-5 text-[#F05147] border-2 border-[#F05147] rounded-full cursor-pointer text-center hover:bg-[#F05147] hover:text-white transition-colors duration-300">
                    Previous
                </div>
                <div className="py-1 px-5 text-[#F05147] border-2 border-[#F05147] rounded-full cursor-pointer text-center hover:bg-[#F05147] hover:text-white transition-colors duration-300">
                    Clinic Appointments
                </div>
                <div className="py-1 px-5 text-[#F05147] border-2 border-[#F05147] rounded-full cursor-pointer text-center hover:bg-[#F05147] hover:text-white transition-colors duration-300">
                    Online Consultations
                </div>
                <div className="py-1 px-5 text-[#F05147] border-2 border-[#F05147] rounded-full cursor-pointer text-center hover:bg-[#F05147] hover:text-white transition-colors duration-300">
                    Home Visits
                </div>
            </div>

            <div className="flex flex-col justify-start items-start">
                <AppointmentOne name='Dr Prem Kumar' type='online consultation' status='paid' pic={DefaultImg} />
                <AppointmentOne name='Dr Prem Kumar' type='online consultation' status='paid' pic={DefaultImg} />
                <AppointmentOne name='Dr Prem Kumar' type='online consultation' status='paid' pic={DefaultImg} />
                <AppointmentOne name='Dr Prem Kumar' type='online consultation' status='paid' pic={DefaultImg} />
                <AppointmentOne name='Dr Prem Kumar' type='online consultation' status='paid' pic={DefaultImg} />
                <AppointmentOne name='Dr Prem Kumar' type='online consultation' status='paid' pic={DefaultImg} />
                <AppointmentOne name='Dr Prem Kumar' type='online consultation' status='paid' pic={DefaultImg} />
                <AppointmentOne name='Dr Prem Kumar' type='online consultation' status='paid' pic={DefaultImg} />
                <AppointmentOne name='Dr Prem Kumar' type='online consultation' status='paid' pic={DefaultImg} />
            </div>

        </div>
    )
}

export default Appointment
