import AppointmentDr from '../../assets/images/homePage/appointment-dr.svg';
import MobileVet from '../../assets/images/homePage/mobile-vets.svg';
import OnlineDr from '../../assets/images/homePage/online-dr.svg';

const ServiceSection = () => {
    return (
        <>
            <div className="px-8 py-5">
                <h1 className="font-montserrat-semibold text-2xl pb-3">Our Services</h1>

                <div className="grid grid-cols-3 gap-4">
                    <div className="p-5 rounded-lg c-tea-green w-full">
                        <div>
                            <h2 className="font-montserrat-semibold text-2xl">In Clinic Appointment</h2>
                            <p className="font-montserrat-light">Book an Appiontment</p>
                        </div>
                        <div className="flex justify-end">
                            <div className="c-lime-green rounded-lg">
                                <img src={AppointmentDr} alt="" className='h-[90px] w-auto -mt-6' />
                            </div>
                        </div>
                    </div>

                    <div className="p-5 rounded-lg c-light-pink w-full">
                        <div>
                            <h2 className="font-montserrat-semibold text-2xl">Mobile Vets</h2>
                            <p className="font-montserrat-light">Vets at Your Doorstep</p>
                        </div>
                        <div className="flex justify-end">
                            <div className="c-dark-pink rounded-lg">
                                <img src={MobileVet} alt="" className='h-[90px] w-auto -mt-6' />
                            </div>
                        </div>
                    </div>

                    <div className="p-5 rounded-lg c-light-purple w-full">
                        <div>
                            <h2 className="font-montserrat-semibold text-2xl">Online Consultation</h2>
                            <p className="font-montserrat-light">Video Call a Doctor</p>
                        </div>
                        <div className="flex justify-end">
                            <div className="c-dark-purple rounded-lg">
                                <img src={OnlineDr} alt="" className='h-[90px] w-auto -mt-6' />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ServiceSection
