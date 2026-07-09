import ReviewIcon from '../../assets/images/drAppointment/review-icon.svg'
import DrReviewOne from './DrReviewOne'

const DrReviews = () => {
    return (
        <div className='py-5 px-8 grid grid-cols-2 gap-3'>
            {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center h-80 w-full">
                <img src={ReviewIcon} alt="" />
                <h1 className="font-montserrat-semibold text-2xl pt-3">No Review Found</h1>
            </div> */}
            <DrReviewOne stars={4} />
            <DrReviewOne stars={5} />
            <DrReviewOne stars={4} />
            <DrReviewOne stars={2} />
            <DrReviewOne stars={2} />
            <DrReviewOne stars={4} />
            <DrReviewOne stars={3} />
            <DrReviewOne stars={5} />
        </div>
    )
}

export default DrReviews
