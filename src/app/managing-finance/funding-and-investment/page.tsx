'use client'

import Header from '@/components/header'
import TopicsSideBar from '@/components/TopicsSideBar'
import ArticleCard from '@/components/ArticleCard'
import SubsectionsTop from '@/components/SubsectionsTop'
import useFilter from '@/hooks/useFilter'

const articles = [
  {
    id: 1,
    title: 'Freebird Club Raises €500k in Pre-Seed Investment Round',
    description:
      'Freebird Club, the innovative social travel and homestay club for older adults, has successfully raised €500,000 in pre-seed investment from...',
    tags: ['Global - Buyer', 'Food', 'Funding and Grants'],
    imageUrl: 'https://via.placeholder.com/300x200',
  },
  {
    id: 2,
    title:
      "Heidi Davis, Peri announced as 'Founder of the Year 2024' at Enterprise Ireland’s High Potential Start-up Awards",
    description:
      'Heidi Davis, CEO of Peri has been awarded the Enterprise Ireland High-Potential Start-Up (HPSU) Founder of the Year for 2024. The company uses AI...',
    tags: ['AI', 'Technology', 'Startup'],
    imageUrl: 'https://via.placeholder.com/300x200',
  },
]

export default function FundingAndInvestmentPage() {
  const topics = [
    'All',
    'Alternative Financing Options',
    'Preparing a Winning Funding Proposal',
    'Engaging with Angel Investors and Venture Capitalists',
    'Understanding Government Grants and Supports',
    'Crowdfunding Your Business',
    'Equity vs. Debt Financing',
    'Negotiating Investment Terms',
    'Managing Investor Relations Post-Funding',
    'Accessing EU Funding Opportunities',
    'Microfinance Options',
  ]
  const { filter, setFilter, searchQuery, setSearchQuery, filteredArticles } = useFilter(articles)

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <Header />

      <div className="container mx-auto px-4 py-8">
        <SubsectionsTop
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        {/* Main Content */}
        <div className="flex">
          <TopicsSideBar
            topics={topics}
            filter={filter}
            setFilter={setFilter}
          />
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {filteredArticles.map((article) => (
              <ArticleCard
                key={article.id}
                article={article}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
