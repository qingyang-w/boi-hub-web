'use client'

import React from 'react'
import Link from 'next/link'
import { useConfig, WebConfig } from '@/lib/config'
import useAuthStore from '@/stores/auth'
import { buildLoginUrl, buildLogoutUrl } from '@/lib/url'

export default function Header() {
  const authStore = useAuthStore()
  const webConfig: WebConfig | null = useConfig()
  // const router = useRouter()

  function redirectToUrl() {
    if (!webConfig) {
      return
    }
    if (authStore.apiToken !== null) {
      authStore.setApiToken(null)
      authStore.setUserId(null)
      authStore.setUserInfo(null)
      window.location.href = buildLogoutUrl(webConfig)
    } else {
      window.location.href = buildLoginUrl(webConfig)
    }
  }
  return (
    <header className="flex justify-between items-center px-10 py-3 shadow-md">
      <div className="text-2xl font-bold text-black">
        <Link
          href="/"
          className="rounded-full bg-black text-white px-3 py-2"
        >
          B
        </Link>
      </div>
      <nav className="flex space-x-6 text-gray-600">
        <Link
          href="/"
          className="hover:text-gray-900 font-semibold"
        >
          Home
        </Link>
        <Link
          href="/starting-business"
          className="hover:text-gray-90import { useRouter } from 'next/navigation'
0 font-semibold"
        >
          Starting a Business
        </Link>
        <Link
          href="/running-business"
          className="hover:text-gray-900 font-semibold"
        >
          Running a Business
        </Link>
        <Link
          href="/growing-business"
          className="hover:text-gray-900 font-semibold"
        >
          Growing a Business
        </Link>
        <Link
          href="/managing-finance"
          className="hover:text-gray-900 font-semibold"
        >
          Managing Fiance
        </Link>
      </nav>
      <div>
        <button className="bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 rounded-full mr-2">
          Contact us
        </button>

        <button
          onClick={redirectToUrl}
          className="bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 rounded-full"
        >
          {authStore.apiToken ? 'Sign out' : 'Sign in'}
        </button>
      </div>
    </header>
  )
}
