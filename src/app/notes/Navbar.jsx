import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { UserButton } from '@clerk/nextjs'
import { Button } from '../../components/ui/button'
import { Plus } from 'lucide-react'

const Navbar = () => {
    return (
        <div className='p-4 shadow'>
            <div className='m-auto flex justify-between items-center flex-wrap max-w-7xl'>
                <div className='flex items-center gap-2'>
                    <Link href="/notes">
                        <Image src="/logo.png" width={40} height={40} alt='logo' priority/>
                    </Link>
                    <Link href="/notes" className='font-bold text-lg'>Note App</Link>
                </div>
                <div className='flex items-center gap-2'>
                    <UserButton
                        afterSignOutUrl='/'
                        appearance={{
                            elements: { avatarBox: { width: "2.5rem", height: "2.5rem" } },
                        }}
                    />

                    <Button>
                        <Plus size={20} className='mr-2' />
                        Add Note
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Navbar