import Image from 'next/image'
import Header from '@/components/header'
import InputBar from '@/components/InputBar'
import MarqueeCarousel from '@/components/MarqueeCarousel'

export default function HomePage() {
  // images for Carrousel
  const images = [
    '/home/carousel-1.jpg',
    '/home/carousel-2.jpg',
    '/home/carousel-3.jpg',
    '/home/carousel-4.jpg',
    '/home/carousel-5.jpg',
    '/home/carousel-6.jpg',
    '/home/carousel-7.jpg',
    '/home/carousel-8.jpg',
  ]

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <Header />

      {/* Input Bar Section */}
      <InputBar />

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
            src="/home/string.svg"
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
              src="/home/signs-post.svg"
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
              src="/home/chart-pie.svg"
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
              src="/home/gears.svg"
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
