'use client'
import { Suspense } from 'react'
import FinishingLoginComponent from '@/components/FinishingLogin'

export default function TestPage() {
  return (
    <Suspense fallback={<div className="bg-white">Loading...</div>}>
      <FinishingLoginComponent />
    </Suspense>
  )
}
