import { useSession, signIn } from "next-auth/react"
import { useRouter } from 'next/router'
import { useEffect } from 'react'


export default function ({ children }: any) {
  const { data: session }: any = useSession()
  const router = useRouter()

  useEffect(() => {
    if (session !== undefined) {
      if (session?.error) console.log('------', session?.error)
      if (session?.error === "RefreshAccessTokenError") {
        signIn(); // Force sign in to hopefully resolve error
      } else if (!session) {
        router.push('/')
      }
    }
  }, [session]);
  if (session) {
    return children
  }
  return ''
}
