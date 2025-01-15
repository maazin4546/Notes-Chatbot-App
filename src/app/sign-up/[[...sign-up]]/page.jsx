import { SignUp } from '@clerk/nextjs'

export const metadata = {
    title:"Chatbot - Sign Up"
}

const Sign_Up = () => {
    return (
        <div className='flex items-center justify-center h-screen'>
            <SignUp appearance={{ variables: { colorPrimary: "#0F172A" } }} />
        </div>
    )
}

export default Sign_Up