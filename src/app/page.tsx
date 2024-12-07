import React from 'react'
import Image from 'next/image'

import MarqueeCarousel from '@/components/MarqueeCarousel'

export default function HomePage() {
  // images for Carrousel
  const images = [
    'https://cdn.a1.art/assets/images/app_1811317900177637378/1811317900181831681/aa9787c3-78ec-4ef2-ab0a-77cb5c082be2.jpeg',
    'https://cdn.a1.art/assets/images/app_1811317900177637378/1811317900181831681/e1a5b6e9-d4f1-4486-a3e0-405058acb4cc.jpeg',
    'https://cdn.a1.art/assets/images/app_1811317900177637378/1811317900181831681/f5cf24a9-bad9-4d79-84ef-8b807a9c7bfe.jpeg',
    'https://cdn.a1.art/assets/images/app_1811317900177637378/1811317900181831681/79d492fb-94ce-481e-b8ca-cab6a242cd6c.jpeg',
    'https://cdn.a1.art/assets/images/app_1811317900177637378/1811317900181831681/cf89af25-fc46-4258-909b-d3576ff4952a.jpeg',
    'https://cdn.a1.art/assets/images/app_1811317900177637378/1811317900181831681/0def887c-e0dd-4331-9a5c-e5c8fdb12574.jpeg',
    'https://cdn.a1.art/assets/images/app_1811317900177637378/1811317900181831681/000a727b-99dc-4dd8-a2b4-408437b4a988.jpeg',
    'https://cdn.a1.art/assets/images/app_1811317900177637378/1811317900181831681/27a4d1a8-5492-423c-984f-87482c9bc0bd.jpeg',
  ]

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="flex justify-between items-center px-10 py-3 shadow-md">
        <div className="text-2xl font-bold text-black">
          <span className="rounded-full bg-black text-white px-3 py-1">B</span>
        </div>
        <nav className="flex space-x-6 text-gray-600">
          <a
            href="#"
            className="hover:text-gray-900 font-semibold"
          >
            Home
          </a>
          <a
            href="#starting"
            className="hover:text-gray-900 font-semibold"
          >
            Starting a Business
          </a>
          <a
            href="#running"
            className="hover:text-gray-900 font-semibold"
          >
            Running a Business
          </a>
        </nav>
        <button className="bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 rounded-full">
          Contact us
        </button>
      </header>

      {/* Input Bar Section */}
      <section className="mt-10 px-10">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 text-center mt-16 mb-10">
            Ask anything you want to build a business
          </h2>
          <div className="flex items-center bg-gray-100 border border-gray-300 rounded-lg overflow-hidden shadow-md">
            <input
              type="text"
              placeholder="Type your question here..."
              className="w-full px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 font-semibold">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Hero and Features Section */}
      <section className="flex items-center justify-between mt-20 px-10 space-y-8 md:space-y-0">
        {/* Hero Section */}
        <div className="w-1/2 text-center md:text-left px-10">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Empower Your Business Journey</h1>
          <div className="flex justify-center md:justify-start space-x-4 mt-10">
            <button className="bg-blue-500 hover:bg-blue-400 text-white font-semibold px-6 py-3 rounded-full">
              CONTACT US
            </button>
            <button className="border border-gray-500 hover:bg-blue-100 text-gray-500 font-semibold px-6 py-3 rounded-full">
              LEARN MORE
            </button>
          </div>
        </div>

        {/* Features Section */}
        <div className="w-1/2 text-center md:text-left px-10">
          <Image
            src="/string.svg"
            alt=""
            width={70}
            height={70}
          />
          <p className="text-gray-400 mx-auto md:mx-0 text-xl mt-5">
            Join us to gain expert insights and strategies for a successful business venture. From
            inception to expansion, we are here to guide you.
          </p>
          <div className="flex justify-center md:justify-start space-x-8 mt-8">
            <div className="flex items-center space-x-2">
              <span>💡</span>
              <span className="text-2xl">Innovative Solutions</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>🤝</span>
              <span className="text-2xl">Partnership</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>📈</span>
              <span className="text-2xl">Growth</span>
            </div>
          </div>
        </div>
      </section>

      {/* Image carrousel */}
      <section className="w-full mt-20 px-20">
        <MarqueeCarousel images={images} />
      </section>

      {/* Business solutions */}
      <section className="flex flex-col items-center justify-center mt-40 px-6">
        <div className="max-w-3xl text-center">
          <h1 className="text-4xl font-bold text-gray-800 sm:text-4xl">
            Tailored Business Solutions
          </h1>
          <p className="mt-5 text-xl text-gray-500 text-center">
            Our expert team crafts personalized strategies to meet your unique business needs,
            ensuring sustainable growth and success.
          </p>
        </div>

        <div className="mt-16 mb-32 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
          {/* Strategic Planning */}
          <div className="flex flex-col items-center text-center">
            <Image
              src="/signs-post.svg"
              alt=""
              width={30}
              height={30}
            />
            <h3 className="my-6 text-xl font-semibold text-gray-800">Strategic Planning</h3>
            <p className="text-gray-500">
              Develop comprehensive strategies that align with your business goals and market
              demands.
            </p>
          </div>

          {/* Market Analysis */}
          <div className="flex flex-col items-center text-center">
            <Image
              src="/chart-pie.svg"
              alt=""
              width={30}
              height={30}
            />
            <h3 className="my-6 text-xl font-semibold text-gray-800">Market Analysis</h3>
            <p className="text-gray-500">
              Gain insights into market trends and customer behavior to stay ahead of the
              competition.
            </p>
          </div>

          {/* Operational Excellence */}
          <div className="flex flex-col items-center text-center">
            <Image
              src="/gears.svg"
              alt=""
              width={30}
              height={30}
            />
            <h3 className="my-6 text-xl font-semibold text-gray-800">Operational Excellence</h3>
            <p className="text-gray-500">
              Optimize your operations for efficiency and effectiveness.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
