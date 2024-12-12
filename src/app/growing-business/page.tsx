'use client'

import Image from 'next/image'
import Header from '@/components/header'
import InputBar from '@/components/InputBar'
import Subsections from '@/components/Subsections'
import FAQ from '@/components/FAQ'

export default function GrowingBusinessPage() {
  const mainSections = [
    {
      title: 'Marketing Strategies',
      description: 'Enhancing brand awareness, advertising methods',
      imageSrc: '/growing-business/Marketing Strategies.jpg',
      url: '/growing-business/marketing-strategies',
    },
    {
      title: 'Sales Development',
      description: 'Improving sales techniques, customer acquisition',
      imageSrc: '/growing-business/Sales Development.png',
      url: '/growing-business/sales-development',
    },
    {
      title: 'Expansion Planning',
      description: 'Opening new locations, franchising, scaling operations',
      imageSrc: '/growing-business/Expansion Planning.jpg',
      url: '/growing-business/expansion-planning',
    },
    {
      title: 'Innovation',
      description: 'Implementing new technologies, product development',
      imageSrc: '/growing-business/Innovation.jpg',
      url: '/growing-business/innovation',
    },
    {
      title: 'Networking and Partnerships',
      description: 'Building strategic alliances',
      imageSrc: '/growing-business/Networking and Partnerships.jpg',
      url: '/growing-business/networking-and-partnerships',
    },
  ]
  const faqQuestions = [
    'What makes my business unique?',
    'What metrics define my growth?',
    'How can I maintain company culture?',
    'What funding strategy works best?',
    'How can technology improve efficiency?',
    'How can I diversify my revenue?',
    'Can I manage cash flow during expansion?',
  ]

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <main className="relative flex flex-col px-6 lg:px-32 h-screen bg-slate-100 overflow-hidden">
        {/* Background Image */}
        <Image
          className="opacity-20 z-0"
          alt="Background"
          src="/growing-business/bg.jpg"
          fill
          style={{
            objectFit: 'cover',
            objectPosition: 'right center',
          }}
          priority
        />

        <div className="relative z-10">
          {/* Input Bar Section */}
          <InputBar />

          <section className="flex justify-between mt-20 px-10 space-y-8 md:space-y-0">
            {/* Hero Section */}
            <div className="w-1/2 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold max-w-lg">
                Key Strategies for Scaling
              </h1>
              <p className="mt-10 text-lg md:text-xl max-w-3xl">
                Discover proven strategies to take your business to the next level and increase your
                profits.
              </p>
            </div>

            <div className="w-1/2 text-center md:text-left">
              <FAQ questions={faqQuestions} />
            </div>
          </section>
        </div>
      </main>

      <Subsections sections={mainSections} />
    </div>
  )
}
