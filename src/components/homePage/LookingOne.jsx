import React from 'react'

const LookingOne = ({ Icon, title, subtitle = false }) => {
    return (
        <div className="flex flex-col items-center">
            <div className="rounded-full mb-3 p-5 bg-[#E9E9E9] group transition-colors duration-300 hover:bg-[#FF7A00]">
                <Icon className="h-[80px] w-[80px] text-gray-500 group-hover:text-white transition-colors duration-300 [&_*]:fill-current [&_*]:stroke-current [&_*]:stroke-[0.5]" />
            </div>
            <h2 className="font-montserrat-regular text-center">{title}</h2>
            {subtitle ? <h2 className="font-montserrat-regular text-center">{subtitle}</h2> : null}
        </div>
    )
}

export default LookingOne
