import { auth, signIn, signOut } from '@/auth'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = async() => {
    const session = await auth()

  return (
    <header className='px-5 py-3 shadow-sm font-work-sans bg-white'>
        <nav className='flex justify-between items-center'>
            <Link href={'/'}>
                <Image src={'/logo.png'} alt='logo' width={144} height={30} />
            </Link>
            <div className="items-center gap-5 flex text-black">
                {session && session?.user ? (
                    <>
                        <Link href={'/startup/create'}>
                        <span>Create</span>
                        </Link>

                        <form action={async() => {
                            "use server"
                            await signOut({ options: { redirectTo: "/" } })
                        }}>
                            <button type='submit'>Logout</button>
                        </form>

                        <Link href={`/user/${session?.id}`}>
                            <span>{session?.user?.name}</span>
                        </Link>
                    </>
                ) :
                (
                    <form action={async()=> {
                        "use server"
                        await signIn({provider: 'github'})
                        
                        }}>
                            <button type='submit'>Login</button>
                        </form>
                )
                }
            </div>
        </nav>
    </header>
  )
}

export default Navbar