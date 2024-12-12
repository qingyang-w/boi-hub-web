'use client'

import Image from 'next/image'
import Header from '@/components/header'
import InputBar from '@/components/InputBar'
import Subsections from '@/components/Subsections'
import FAQ from '@/components/FAQ'

export default function RunningBusinessPage() {
  const mainSections = [
    {
      title: 'Operations Management',
      description: 'Streamlining processes, productivity tips',
      imageSrc: '/running-business/Operations Management.jpg',
      url: '/running-business/operations-management',
    },
    {
      title: 'Compliance and Regulations',
      description: 'Understanding legal obligations, industry standards',
      imageSrc: '/running-business/Compliance and Regulations.jpg',
      url: '/running-business/compliance-and-regulations',
    },
    {
      title: 'Risk Management',
      description: 'Identifying and mitigating business risks',
      imageSrc: '/running-business/Risk Management.jpg',
      url: '/running-business/risk-management',
    },
    {
      title: 'Customer Service',
      description: 'Building customer relationships, handling feedback',
      imageSrc: '/running-business/Customer Service.jpg',
      url: '/running-business/customer-service',
    },
    {
      title: 'Supply Chain Management',
      description: 'Managing suppliers, inventory control',
      imageSrc: '/running-business/Supply Chain Management.jpg',
      url: '/running-business/supply-chain-management',
    },
  ]
  const faqQuestions = [
    'How do I manage cash flow effectively?',
    'What can I use for tracking business expenses?',
    'How do I build a strong team for my business?',
    'What are the best ways to manage inventory?',
    'How do I handle tax compliance for my business?',
    'What are the steps to scale my business?',
    'How do I identify and mitigate risks in my business?',
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
          src="/running-business/bg.jpg"
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
                Optimize Your Business Operations
              </h1>
              <p className="mt-10 text-lg md:text-xl max-w-3xl">
                Unlock the potential of your business with expert insights and strategies for
                effective management.
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
