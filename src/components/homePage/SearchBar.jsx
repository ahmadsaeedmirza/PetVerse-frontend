import { IoIosArrowDropdown } from "react-icons/io";
import { use, useState } from "react";
import SearchIcon from '../../assets/images/homePage/search-icon.png';
import { useNavigate, Link } from "react-router-dom";

const SearchBar = () => {

    const [city, setCity] = useState('');
    const [search, setSearch] = useState('');

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/results');
    }

    return (
        <>
            <div className="flex flex-row-items-center font-montserrat-regular py-5 px-8">
                <div className="w-3/4 relative">
                    <img src={SearchIcon} onClick={handleClick} alt="" className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer" />
                    <input type="text" placeholder='Search Area' value={search} onChange={(e) => setSearch(e.target.value)} className='w-full mr-2 border-0 c-light-gray rounded-lg focus:outline-none p-3' />
                </div>
                <div className='w-1/4 relative'>
                    <select
                        name="city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className='p-3 ml-2 w-full appearance-none font-montserrat-regular c-light-gray rounded-lg focus:outline-none block mx-auto pr-10'
                    >
                        <option value="">City</option>
                        <option value="Gujranwala">Gujranwala</option>
                        <option value="Lahore">Lahore</option>
                        <option value="Islamabad">Islamabad</option>
                        <option value="Karachi">Karachi</option>
                        <option value="Sialkot">Sialkot</option>
                        <option value="Sargodha">Sargodha</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-700">
                        <IoIosArrowDropdown className="text-2xl" />
                    </div>
                </div>
            </div >
        </>
    )
}

export default SearchBar
