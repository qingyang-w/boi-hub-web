import Image from 'next/image'
import Header from '@/components/header'
import InputBar from '@/components/InputBar'
import Subsections from '@/components/Subsections'
import FAQ from '@/components/FAQ'

export default function StartingBusinessPage() {
  const mainSections = [
    {
      title: 'Business Planning',
      description: 'Crafting business plans, setting goals, and strategizing',
      imageSrc: '/starting-business/Business Planning.jpg',
      url: '/starting-business/business-planning',
    },
    {
      title: 'Legal Structures',
      description: 'Information on sole proprietorships, partnerships, LLCs, corporations',
      imageSrc: '/starting-business/Legal Structures.jpg',
      url: '/starting-business/legal-structures',
    },
    {
      title: 'Registration and Licensing',
      description: 'Steps to register a business, obtain necessary permits and licenses',
      imageSrc: '/starting-business/Registration and Licensing.jpg',
      url: '/starting-business/registration-and-licensing',
    },
    {
      title: 'Funding Options',
      description: 'Exploring loans, grants, investors, and crowdfunding',
      imageSrc: '/starting-business/Funding Options.jpg',
      url: '/starting-business/funding-options',
    },
    {
      title: 'Market Research',
      description: 'Identifying target markets, competitors, and industry trends',
      imageSrc: '/starting-business/Market Research.jpg',
      url: '/starting-business/market-research',
    },
  ]
  const faqQuestions = [
    'How do I create a business plan?',
    'What are the best ways to fund my business?',
    'Do I need to register my business legally?',
    'How do I find my target audience?',
    'What licenses or permits are required?',
    'How do I handle taxes for my business?',
    'How do I hire my first employee?',
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
          src="/starting-business/bg.jpg"
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
                Welcome to Your Entrepreneurial Journey
              </h1>
              <p className="mt-10 text-lg md:text-xl max-w-2xl">
                Discover the essential steps to transform your business idea into a successful
                venture with expert guidance.
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
