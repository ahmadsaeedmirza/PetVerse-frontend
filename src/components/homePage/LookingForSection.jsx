import Dog from '../../assets/images/homePage/dog-icon.svg?react';
import Cat from '../../assets/images/homePage/cat-icon.svg?react';
import Bird from '../../assets/images/homePage/bird-icon.svg?react';
import Cow from '../../assets/images/homePage/cow-icon.svg?react';
import Horse from '../../assets/images/homePage/horse-icon.svg?react';
import Reptiles from '../../assets/images/homePage/reptiles-icon.svg?react';
import Fish from '../../assets/images/homePage/fish-icon.svg?react';
import Chicken from '../../assets/images/homePage/chicken.svg?react';
import LookingOne from './LookingOne';

const LookingForSection = () => {
    return (
        <div className="px-8 py-5">
            <h1 className="font-montserrat-semibold text-2xl pb-3">Looking For</h1>
            {/* <div className="flex flex-row space-x-4 overflow-x-auto flex-nowrap scrollbar-hide"> */}
            <div className="flex flex-row justify-between">

                <LookingOne Icon={Dog} title="Dog" subtitle='Specialist' />
                <LookingOne Icon={Cat} title="Cat" subtitle='Specialist' />
                <LookingOne Icon={Bird} title="Bird" subtitle='Specialist' />
                <LookingOne Icon={Cow} title="Cattle/Buffalo" subtitle='Specialist' />
                <LookingOne Icon={Horse} title="Equine" subtitle='Specialist' />
                <LookingOne Icon={Reptiles} title="Reptiles" subtitle='Specialist' />
                <LookingOne Icon={Fish} title="Aquatic Animals" subtitle='Specialist' />
                <LookingOne Icon={Chicken} title="Poultry" subtitle='Specialist' />
            </div>
        </div>
    )
}

export default LookingForSection 