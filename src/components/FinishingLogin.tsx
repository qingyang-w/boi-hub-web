'use client'
import { useRouter, useSearchParams } from 'next/navigation'
import { useCallback, useEffect } from 'react'
import { LoginResp, UserApi } from '@/lib/user'
import useAuthStore from '@/stores/auth'
import { useConfig, WebConfig } from '@/lib/config'

export default function FinishingLoginComponent() {
  const searchParams = useSearchParams()
  // const [data, setData] = useState<LoginResp | null>(null)
  const authStore = useAuthStore()
  const router = useRouter()
  const webConfig: WebConfig = useConfig()
  console.log(webConfig)
  const userLogin = useCallback(
    async (code: string) => {
      try {
        const userApi = new UserApi(authStore, webConfig)
        const resp: LoginResp = await userApi.loginByCognitoOAuthCode(code)
        console.log(resp)
        authStore.setApiToken(resp.token)
        authStore.setUserId(resp.user_id)
        router.push('/')
      } catch {
        console.log('Error logging in')
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
