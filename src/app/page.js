import Image from 'next/image'
import React from 'react'
import { Button } from '../components/ui/button'
import Link from 'next/link'
import { auth } from '@clerk/nextjs'
import { redirect } from 'next/navigation'

const page = () => {

  const { userId } = auth()

  if (userId) redirect("/notes")

  return (
    <main className='flex h-screen flex-col items-center justify-center gap-5'>
      <div className='flex items-center gap-4'>
        <Image src="/logo.png" width={100} height={100} alt='logo' />
        <span className='text-4xl font-extrabold tracking-tighter lg:text-5xl'>Notes - App</span>
      </div>
      <p className='text-center max-w-prose'>An intelligent note-taking app with AI integration, built with OpenAI, Pinecone, Next.js, Shadcn UI, Clerk and more.</p>
      <Button size='lg' asChild>
        <Link href="/notes">Open</Link>
      </Button>

    </main>
  )
}

export default page