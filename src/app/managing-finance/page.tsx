'use client'

import Image from 'next/image'
import Header from '@/components/header'
import InputBar from '@/components/InputBar'
import Subsections from '@/components/Subsections'
import FAQ from '@/components/FAQ'

export default function ManagingFinancePage() {
  const mainSections = [
    {
      title: 'Accounting and Bookkeeping',
      description: 'Financial record-keeping, accounting systems',
      imageSrc: '/managing-finance/Accounting and Bookkeeping.jpg',
      url: '/managing-finance/accounting-and-bookkeeping',
    },
    {
      title: 'Budgeting and Forecasting',
      description: 'Financial planning, cash flow management',
      imageSrc: '/managing-finance/Budgeting and Forecasting.jpg',
      url: '/managing-finance/budgeting-and-forecasting',
    },
    {
      title: 'Taxation',
      description: 'Understanding tax obligations, filing procedures',
      imageSrc: '/managing-finance/Taxation.jpg',
      url: '/managing-finance/taxation',
    },
    {
      title: 'Financial Reporting',
      description: 'Analyzing financial statements, performance metrics',
      imageSrc: '/managing-finance/Financial Reporting.jpg',
      url: '/managing-finance/financial-reporting',
    },
    {
      title: 'Funding and Investment',
      description: 'Accessing capital, investor relations',
      imageSrc: '/managing-finance/Funding and Investment.jpg',
      url: '/managing-finance/funding-and-investment',
    },
  ]
  const faqQuestions = [
    'How do I create an effective budgeting process?',
    'What financial risks should I be tracking?',
    'How can I improve my profit margins?',
    'When should I consider taking on business debt?',
    'How can I optimize my tax strategy?',
    'How can I reduce unnecessary spending?',
    'How can I forecast my financial performance?',
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
          src="/managing-finance/bg.jpg"
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
                Financial Fitness for Business
              </h1>
              <p className="mt-10 text-lg md:text-xl max-w-3xl">
                Master the art of financial management, from budgeting and forecasting to taxation
                and investment.
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
