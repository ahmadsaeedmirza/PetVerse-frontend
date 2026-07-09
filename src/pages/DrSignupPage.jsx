import SignNav from "../components/auth/SignNav"
import Signup from '../components/auth/Signup';

const DrSignupPage = () => {
    return (
        <>
            <SignNav />
            <Signup isVet={true} />
        </>
    )
}

export default DrSignupPage
