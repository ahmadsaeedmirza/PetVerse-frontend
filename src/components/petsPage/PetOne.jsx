import NoPet from '../../assets/images/petPage/pet-logo.svg'

const PetOne = ({ name, specie, gender, breed }) => {
    return (
        <div className='flex flex-col items-center w-[150px]'>
            <img src={NoPet} alt="" className='h-[100px] w-[100px] rounded-full' />
            <div className='flex flex-col justify-center items-center c-light-gray mt-2 py-3 px-5 rounded-xl'>
                <h1 className="font-montserrat-extrabold c-text-orange text-xl text-center">{name}</h1>
                <h2 className="font-montserrat-medium text text-center capitalize">{specie} - {gender}</h2>
                <h2 className="font-montserrat-regular text-[14px] capitalize">{breed}</h2>
            </div>
        </div>
    )
}

export default PetOne
