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
          src="https://cdn.a1.art/assets/images/app_1811317900177637378/1811317900181831681/cf96b0a3-3463-45e5-a1f4-27e39927b107.jpeg"
          fill
          style={{
            objectFit: 'cover',
            objectPosition: 'right center',
          }}
          priority
        />

        <h1 className="text-4xl md:text-5xl font-bold max-w-lg mt-32">
          Welcome to Your Entrepreneurial Journey
        </h1>
        <p className="mt-8 text-lg md:text-xl max-w-3xl">
          Discover the essential steps to transform your business idea into a successful venture
          with expert guidance.
        </p>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-16">
          <div>
            <h2 className="text-2xl font-bold">1000+</h2>
            <p>Successful Startups</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">200+</h2>
            <p>Expert Mentors</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">50+</h2>
            <p>Countries Served</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">20+</h2>
            <p>Years of Experience</p>
          </div>
        </div>
      </main>
    </div>
  )
}
