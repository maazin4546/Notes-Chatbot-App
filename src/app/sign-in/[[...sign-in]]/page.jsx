import { SignIn } from '@clerk/nextjs'

export const metadata = {
    title:"Chatbot - Sign In"
}

const Sign_In = () => {
    return (
        <div className='flex items-center justify-center h-screen'>
            <SignIn appearance={{ variables: { colorPrimary: "#0F172A" } }} />
        </div>
    )
}

export default Sign_In