'use client'

import Image from 'next/image'
import Header from '@/components/header'

export default function StartingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <main className="relative flex flex-col px-6 lg:px-32 h-screen bg-slate-100 overflow-hidden">
        {/* Background Image */}
        <Image
          className="opacity-20 z-10"
          alt="Background"
          src="https://cdn.a1.art/assets/images/app_1811317900177637378/1811317900181831681/baf9ea8f-8ab1-49be-85ef-b6a2210d2b90.jpeg"
          fill
          style={{
            objectFit: 'cover',
            objectPosition: 'right center',
          }}
          priority
        />

        <h1 className="text-4xl md:text-5xl font-bold max-w-lg mt-32">
          Optimize Your Business Operations
        </h1>
        <p className="mt-8 text-lg md:text-xl max-w-3xl">
          Unlock the potential of your business with expert insights and strategies for effective
          management.
        </p>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-16">
          <div className="card p-6 border rounded-xl shadow-lg">
            <div className="flex items-center">
              <h2 className="text-xl font-bold">Operational Excellence</h2>
            </div>
            <p className="max-w-xs mt-4">
              Streamline processes to enhance productivity and efficiency.
            </p>
          </div>
          <div className="card p-6 border rounded-xl shadow-lg">
            <div className="flex items-center">
              <h2 className="text-xl font-bold">Risk Management</h2>
            </div>
            <p className="max-w-xs mt-4">
              Identify and mitigate potential business risks effectively.
            </p>
          </div>
          <div className="card p-6 border rounded-xl shadow-lg">
            <div className="flex items-center">
              <h2 className="text-xl font-bold">Customer Satisfaction</h2>
            </div>
            <p className="max-w-xs mt-4">
              Deliver exceptional service to retain and grow your customer base.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
