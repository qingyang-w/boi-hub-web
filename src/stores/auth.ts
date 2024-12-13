import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type CachedUserInfoType = {
  userId: string
  username: string
  email: string | null
}

export type AuthStore = {
  userId: string | null
  apiToken: string | null
  userInfo: CachedUserInfoType | null
  isLoggingIn: boolean | null
  setUserId: (userId: string | null) => void
  setUserInfo: (userInfo: CachedUserInfoType | null) => void
  setApiToken: (apiToken: string | null) => void
  setIsLoggingIn: (isLoggingIn: boolean) => void
}

// 定义 Store
const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      userId: null,
      apiToken: null,
      isLoggingIn: false,
      userInfo: null,
      setUserId: (userId: string | null) => set({ userId }),
      setApiToken: (apiToken: string | null) => set({ apiToken }),
      setUserInfo: (userInfo: CachedUserInfoType | null) => set({ userInfo }),
      setIsLoggingIn: (isLoggingIn: boolean | null) => set({ isLoggingIn }),
    }),
    {
      name: 'auth-storage',
      // getStorage: () => localStorage,
    },
  ),
)

export default useAuthStore
