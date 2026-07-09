import React, { useState } from "react";
import Worm from '../../assets/images/homePage/worm.svg?react';
import Spaying from '../../assets/images/homePage/spaying.svg?react';
import Xray from '../../assets/images/homePage/xray-1.svg?react';
import Neutral from '../../assets/images/homePage/neutral.svg?react';
import Injection from '../../assets/images/homePage/injection.svg?react';
import Checkup from '../../assets/images/homePage/checkup.svg?react';
import Dental from '../../assets/images/homePage/dental.svg?react';
import Surgery from '../../assets/images/homePage/surgery.svg?react';
import ArtificialInsemination from '../../assets/images/homePage/artificialInsemination.svg?react';
import LabTest from '../../assets/images/homePage/labTest.svg?react';
import PregnanacyDiagnosis from '../../assets/images/homePage/pregnancyDiagnosis.svg?react';
import Groooming from '../../assets/images/homePage/grooming.svg?react';
import Consultation from '../../assets/images/homePage/consultation.svg?react';
import LookingOne from './LookingOne';

const services = [
    { Icon: Injection, title: "Vaccination" },
    { Icon: Worm, title: "Deworming" },
    { Icon: Neutral, title: "Neutering" },
    { Icon: Surgery, title: "Surgery" },
    { Icon: Xray, title: "X-Ray" },
    { Icon: Spaying, title: "Spaying" },
    { Icon: Checkup, title: "Checkup" },
    { Icon: Dental, title: "Dental Care" },
    { Icon: ArtificialInsemination, title: "Artificial", subtitle: "Insemination" },
    { Icon: LabTest, title: "Lab Test" },
    { Icon: PregnanacyDiagnosis, title: "Pregnancy", subtitle: "Diagnosis" },
    { Icon: Groooming, title: "Grooming" },
    { Icon: Consultation, title: "Consultation" },
];

const GetYourAnimalSection = () => {

    const [showMore, setShowMore] = useState(false);

    const firstRow = services.slice(0, 9);
    const secondRow = services.slice(9);

    return (
        <div className="px-8 py-5">
            <div className="flex flex-row justify-between">
                <h1 className="font-montserrat-semibold text-2xl pb-3">Get You Animal</h1>
                <button className="border-0 font-monserrat-regular cursor-pointer text-black" onClick={() => setShowMore(!showMore)}>{showMore ? "View Less" : "View More"} &gt;</button>
            </div>

            <div className="flex flex-row justify-between flex-wrap gap-4">
                {firstRow.map((service, index) => (
                    <LookingOne key={index} Icon={service.Icon} title={service.title} subtitle={service.subtitle} />
                ))}
            </div>

            {showMore && (
                <div className="flex flex-row justify-between w-1/2 flex-wrap gap-4 mt-4">
                    {secondRow.map((service, index) => (
                        <LookingOne key={index} Icon={service.Icon} title={service.title} subtitle={service.subtitle} />
                    ))}
                </div>
            )}

        </div>
    )
}

export default GetYourAnimalSection
