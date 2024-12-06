import React from 'react'

export default function HomePage() {
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
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
          Contact us
        </button>
      </header>

      {/* Input Bar Section */}
      <section className="mt-10 px-5">
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
      <section className="flex items-center justify-between mt-20 px-5 space-y-8 md:space-y-0">
        {/* Hero Section */}
        <div className="w-1/2 text-center md:text-left px-5">
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
        <div className="w-1/2 text-center md:text-left px-5">
          <p className="text-gray-600 mx-auto md:mx-0 text-xl">
            Join us to gain expert insights and strategies for a successful business venture. From
            inception to expansion, we are here to guide you.
          </p>
          <div className="flex justify-center md:justify-start space-x-8 mt-8">
            <div className="flex items-center space-x-2">
              <span>💡</span>
              <span className="font-semibold">Innovative Solutions</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>🤝</span>
              <span className="font-semibold">Partnership</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>📈</span>
              <span className="font-semibold">Growth</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
