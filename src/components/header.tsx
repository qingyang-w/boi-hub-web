'use client'

import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="flex justify-between items-center px-10 py-3 shadow-md">
      <div className="text-2xl font-bold text-black">
        <span className="rounded-full bg-black text-white px-3 py-1">B</span>
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
          className="hover:text-gray-900 font-semibold"
        >
          Starting a Business
        </Link>
        <Link
          href="/running-business"
          className="hover:text-gray-900 font-semibold"
        >
          Running a Business
        </Link>
      </nav>
      <button className="bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 rounded-full">
        Contact us
      </button>
    </header>
  )
}
