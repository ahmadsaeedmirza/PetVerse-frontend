import NoPet from '../../assets/images/petPage/pet-logo.svg'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PetOne from './PetOne';
import axios from 'axios';
const API_URL = import.meta.env.VITE_API_URL;

const Pets = () => {

    const navigate = useNavigate();
    const [pets, setPets] = useState([]);

    useEffect(() => {
        const fetchPets = async () => {
            try {
                const res = await axios.get(`${API_URL}/api/v1/users/myPets`, {
                    withCredentials: true
                });
                console.log(res.data);
                if (res.data.status === 'success') {
                    console.log(res);
                    setPets(res.data.pets);
                    navigate('/pets');
                } else {
                    alert(res.data.message || 'Signup failed');
                }
            } catch (err) {
                alert(err);
            }
        };
        fetchPets();
    }, [])

    return (
        <div className="px-8 py-5">

            {pets.length === 0 ? (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col py-5 justify-center items-center">
                    <img src={NoPet} alt="" className='h-64 w-auto mt-10' />
                    <h2 className="font-moserrat-medium text-center pt-3 text-2xl">No Pet Found</h2>
                </div>
            ) : (
                <div className="flex flex-wrap py-5 justify-center gap-4 flex-1">
                    {pets.map((pet) => (
                        <PetOne
                            key={pet._id}
                            name={pet.name}
                            specie={pet.specie}
                            breed={pet.breed}
                            gender={pet.gender}
                            age={pet.age}
                            medicalHistory={pet.medicalHistory}
                        />
                    ))}
                </div>
            )}


            <button type='button' onClick={() => navigate('/add-pets')} className='absolute left-1/4 bottom-0 mb-5 cursor-pointer w-1/2 mt-10 flex justify-center align-center p-3 c-orange text-white mx-auto border-0 rounded-lg'>Add Pet</button>
        </div>
    )
}

export default Pets
