import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const BookAppointment = () => {

    const navigate = useNavigate();
    const [week, setWeek] = useState([]);

    const timeOptions = [
        "09:00 AM", "09:30 AM",
        "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
        "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM",
        "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM",
        "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM",
        "06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM",
        "08:00 PM", "08:30 PM", "09:00 PM", "09:30 PM",
        "10:00 PM", "10:30 PM"
    ];

    useEffect(() => {
        const options = { timeZone: 'Asia/Karachi' };
        const today = new Date(new Date().toLocaleString('en-US', options));

        let days = [];
        for (let i = 0; i < 7; i++) {
            const nextDay = new Date(today);
            nextDay.setDate(today.getDate() + i);
            const day = new Intl.DateTimeFormat('en-Us', {
                weekday: 'short',
                timeZone: 'Asia/Karachi'
            }).format(nextDay);

            const date = new Intl.DateTimeFormat('en-US', {
                day: 'numeric',
                timeZone: 'Asia/Karachi'
            }).format(nextDay);

            days.push({ day, date });
        }

        setWeek(days);
    }, [])

    return (
        <div className="px-8 py-5">
            <h1 className="font-montserrat-extrabold text-[50px] text-center pb-3 uppercase">book an</h1>
            <h1 className="font-montserrat-extrabold text-[32px] text-center pb-3 -mt-8 uppercase c-text-orange">appointment</h1>

            <div className="flex flex-col">

                <h2 className="font-montserrat-medium capitalize">select type</h2>

                <div className="grid grid-cols-3 gap-4 py-5">
                    <div className="py-3 px-5 font-montserrat-bold text-[#F05147] border-2 border-[#F05147] rounded-full cursor-pointer text-center hover:bg-[#F05147] hover:text-white transition-colors duration-300">
                        Clinic Appointment
                    </div>
                    <div className="py-3 px-5 font-montserrat-bold text-[#F05147] border-2 border-[#F05147] rounded-full cursor-pointer text-center hover:bg-[#F05147] hover:text-white transition-colors duration-300">
                        Online Consultation
                    </div>
                    <div className="py-3 px-5 font-montserrat-bold text-[#F05147] border-2 border-[#F05147] rounded-full cursor-pointer text-center hover:bg-[#F05147] hover:text-white transition-colors duration-300">
                        Home Visit
                    </div>
                </div>

            </div>

            <div className="flex flex-col">

                <h2 className="font-montserrat-medium capitalize">select date and day</h2>
                <div className="grid grid-cols-7 gap-4 py-5">

                    {week.map((d, index) => (
                        <div key={index} className='flex flex-col items-center border-2 border-[#F05147] text-[#F05147] hover:text-white hover:bg-[#F05147] cursor-pointer rounded-lg transition-colors duration-300 p-3'>
                            <p className="font-montserrat-extrabold uppercase">{d.day}</p>
                            <p className="font-montserrat-extrabold">{d.date}</p>
                        </div>
                    ))}

                </div>

            </div>

            <div className="flex flex-col">

                <h2 className="font-montserrat-medium capitalize">select time</h2>

                <div className="grid grid-cols-7 gap-4 py-5">
                    {timeOptions.map((time, index) => (
                        <div
                            key={index}
                            className="py-3 px-5 text-[#F05147] border-2 border-[#F05147] 
                    rounded-full cursor-pointer text-center 
                    hover:bg-[#F05147] hover:text-white transition-colors duration-300"
                        >
                            {time}
                        </div>
                    ))}
                </div>

            </div>

            <button type="button" onClick={() => navigate('/book-appointment-details')} className='relative font-montserrat-regular text-xl cursor-pointer w-1/2 flex justify-center align-center p-3 c-orange text-white mx-auto border-0 rounded-lg'>Next</button>

        </div>
    )
}

export default BookAppointment
