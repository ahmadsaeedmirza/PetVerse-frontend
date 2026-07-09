import React from 'react'
import AppointmentCard from './AppointmentCard'

const AppointmentsToday = () => {
    return (
        <div className="px-8 py-5">
            <h1 className="font-montserrat-semibold text-2xl pb-3">Today's Appointments</h1>
            <AppointmentCard />
            <AppointmentCard />
            <AppointmentCard />
            <AppointmentCard />
            <AppointmentCard />
        </div>
    )
}

export default AppointmentsToday
