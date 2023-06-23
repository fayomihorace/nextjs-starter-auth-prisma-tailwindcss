import { useSession, signIn, signOut } from "next-auth/react"
import { Dropdown, Avatar } from "flowbite-react";
import { useRouter } from "next/router"
import { useEffect } from "react"

export default function Component({text="Login", className=""}) {
  const { data: session }: any = useSession()
  const router = useRouter()

  const _signOut = () => {
    console.log('----sgin out: ', )
    signOut()
  }

  if (session) {
    return (
      <div className="flex items-center">
        {session.user.email?.split('@')[0]}
        <Dropdown
          dismissOnClick={false}
          label={<Avatar className="ml-2" rounded={true} />}
          inline={true}
        >
          <span onClick={() => router.push('/dashboard/home')} className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
            Dashboard
          </span>
          <button onClick={_signOut} className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
              Sign out
          </button>
        </Dropdown>
      </div>
    )
  }
  return (
    <>
      <button className={className} onClick={() => signIn()}>{text}</button>
    </>
  )
}
