'use client'
import { useRouter, useSearchParams } from 'next/navigation'
import { useCallback, useEffect } from 'react'
import { LoginResp, UserApi } from '@/lib/user'
import useAuthStore from '@/stores/auth'

export default function FinishingLoginComponent() {
  const searchParams = useSearchParams()
  // const [data, setData] = useState<LoginResp | null>(null)
  const authStore = useAuthStore()
  const router = useRouter()
  const userLogin = useCallback(
    async (code: string) => {
      try {
        const userApi = new UserApi(authStore)
        const resp: LoginResp = await userApi.loginByCognitoOAuthCode(code)
        authStore.setApiToken(resp.token)
        authStore.setUserId(resp.user_id)
        router.push('/')
      } catch {
        router.push('/')
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [router],
  )

  useEffect(() => {
    const code = searchParams.get('code')
    if (code) {
      userLogin(code)
    }
  }, [searchParams, userLogin])
  return (
    <div className="bg-white min-h-screen text-gray-800">
      <div>Loading...</div>
    </div>
  )
}