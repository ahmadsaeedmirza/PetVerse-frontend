import { useState } from "react";
import DefaultImg from "../../assets/images/homePage/default.jpg"
import RequestedAppoinments from "./RequestedAppoinments";
import AppointmentCard from "../drHome/AppointmentCard";
import NoAppointment from '../../assets/images/drAppointment/no-appointment.svg'
import ReviewIcon from '../../assets/images/drAppointment/review-icon.svg'
import ConfirmIcon from '../../assets/images/drAppointment/confirm-icon.svg'


const DrAppointment = () => {

    const [activeTab, setActiveTab] = useState("Requested");

    const tabs = [
        "Requested",
        "Today",
        "Upcoming",
        "Previous",
        "Clinic Appointments",
        "Online Consultations",
        "Home Visits",
    ];

    return (
        <div className="px-8 py-5">
            {/* Top buttons */}
            <div className="grid grid-cols-7 gap-4">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`py-1 px-5 rounded-full text-center border-2 transition-colors duration-300
              ${activeTab === tab
                                ? "bg-[#F05147] text-white border-[#F05147]"
                                : "text-[#F05147] border-[#F05147] hover:bg-[#F05147] hover:text-white"
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Render content based on active tab */}
            <div className="mt-8 p-6">
                {activeTab === "Requested" && (
                    <>
                        <RequestedAppoinments />
                        <RequestedAppoinments />
                        <RequestedAppoinments />
                        <RequestedAppoinments />
                        <RequestedAppoinments />
                        <RequestedAppoinments />
                        {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center h-80 w-full">
                            <img src={ConfirmIcon} alt="" />
                            <h1 className="font-montserrat-semibold text-2xl pt-3">No Appoinmtment To Confirm</h1>
                        </div> */}

                    </>
                )}

                {activeTab === "Upcoming" && (
                    <>
                        {/* <AppointmentCard />
                        <AppointmentCard />
                        <AppointmentCard />
                        <AppointmentCard /> */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center h-80 w-full">
                            <img src={NoAppointment} alt="" />
                            <h1 className="font-montserrat-semibold text-2xl pt-3">No Appoinmtment Found</h1>
                        </div>
                    </>
                )}
                {activeTab === "Today" && (
                    <>
                        <AppointmentCard />
                        <AppointmentCard />
                        <AppointmentCard />
                        <AppointmentCard />
                    </>
                )}
                {activeTab === "Previous" && (
                    <>
                        <AppointmentCard />
                        <AppointmentCard />
                        <AppointmentCard />
                        <AppointmentCard />
                    </>
                )}
                {activeTab === "Clinic Appointments" && (
                    <>
                        <AppointmentCard />
                        <AppointmentCard />
                        <AppointmentCard />
                        <AppointmentCard />
                    </>
                )}
                {activeTab === "Online Consultations" && (
                    <>
                        <AppointmentCard />
                        <AppointmentCard />
                        <AppointmentCard />
                        <AppointmentCard />
                    </>
                )}
                {activeTab === "Home Visits" && (
                    <>
                        <AppointmentCard />
                        <AppointmentCard />
                        <AppointmentCard />
                        <AppointmentCard />
                    </>
                )}
            </div>
        </div>
    );
};

export default DrAppointment
