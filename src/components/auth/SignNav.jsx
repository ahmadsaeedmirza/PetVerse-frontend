import logo from './../../assets/images/signin-up/logo.svg';

const SignNav = () => {
    return (
        <div>
            <nav className='c-orange w-full h-auto py-5 px-8 flex flex-row justify-between'>
                <img src={logo} className='w-[100px] h-auto' alt="" />
                <button className='bg-white border-0 py-3 px-6 font-montserrat-regular font-bold cursor-pointer rounded-full c-text-orange'>
                    Doctor
                </button>
            </nav>
        </div>
    )
}

export default SignNav
