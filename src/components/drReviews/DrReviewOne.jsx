import ReviewIcon from '../../assets/images/drAppointment/review-icon.svg'
import DefaultImg from "../../assets/images/homePage/default.jpg"
import { FaStar } from "react-icons/fa6";

const DrReviewOne = ({ stars }) => {
    return (
        <div className='flex flex-col p-5 overflow-hidden relative shadow-lg rounded-xl'>
            <img src={ReviewIcon} alt="" className='w-[50px] h-auto absolute top-2 right-2' />
            <div className="flex flex-row">
                <img src={DefaultImg} alt="" className='h-[50px] w-[50px] rounded-full mr-3' />
                <div className="flex flex-col">
                    <h2 className="font-montserrat-semibold capitalize">Ahmad Saeed</h2>
                    <div className="flex flex-row items-center">
                        {[...Array(stars)].map((_, i) => (
                            <FaStar key={i} className="inline text-yellow-500" />
                        ))}
                        <h2 className="font-montserrat-semibold ml-3">{stars}</h2>
                    </div>

                </div>
            </div>
            <div className="font-montserrat-regular text-justify pt-2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, eum impedit iste architecto tempore omnis neque id perferendis officiis harum atque aut nam optio adipisci iure minima qui. Assumenda, repellat.
                Enim dignissimos et doloremque iste cumque dolorum labore, sunt ipsum ad quo provident laboriosam voluptate aliquam harum blanditiis vero voluptatibus quam itaque, animi nihil inventore magnam pariatur deserunt! Doloremque, nulla.
                Commodi iste in eligendi beatae ipsum, itaque neque, fuga suscipit amet veniam, error impedit nemo! Quam quaerat, eveniet nihil porro repellat ratione maxime, consectetur numquam sit vitae ex voluptatem error.
            </div>
        </div>
    )
}

export default DrReviewOne
