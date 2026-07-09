import SignNav from "../components/auth/SignNav"
import Login from "../components/auth/Login"

const DrLoginPage = () => {
    return (
        <>
            <SignNav />
            <Login isVet={true} />
        </>
    )
}

export default DrLoginPage
