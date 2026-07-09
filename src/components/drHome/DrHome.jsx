import React from 'react'

const DrHome = () => {
    return (
        <div className="px-8 py-5">
            {/* <h1 className="font-montserrat-semibold text-2xl pb-3">Best Doctors In Area</h1> */}

            <div className="grid grid-cols-2 gap-6">

                <div className="total-appointments rounded-xl border-0 flex flex-row justify-between items-center p-5">
                    <div className="flex flex-col text-white font-montserrat-bold text-xl capitalize">
                        Total <br />Appointments
                    </div>
                    <h2 className="font-montserrat-bold text-white text-3xl">50</h2>
                </div>

                <div className="total-reviews rounded-xl border-0 flex flex-row justify-between items-center p-5">
                    <div className="flex flex-col text-white font-montserrat-bold text-xl capitalize">
                        Total <br />Reviews
                    </div>
                    <h2 className="font-montserrat-bold text-white text-3xl">40</h2>
                </div>

                <div className="total-patients rounded-xl border-0 flex flex-row justify-between items-center p-5">
                    <div className="flex flex-col text-white font-montserrat-bold text-xl capitalize">
                        Total <br />Patients
                    </div>
                    <h2 className="font-montserrat-bold text-white text-3xl">60</h2>
                </div>

                <div className="total-revenue rounded-xl border-0 flex flex-row justify-between items-center p-5">
                    <div className="flex flex-col text-white font-montserrat-bold text-xl capitalize">
                        Total <br />Revenue
                    </div>
                    <h2 className="font-montserrat-bold text-white text-3xl">120000</h2>
                </div>

            </div>

        </div>
    )
}

export default DrHome
