/*
  The filter used to filter articles in subSections page
*/

import { useState } from 'react'

type FilterState = {
  support: string
  business: string
  goal: string
}

type Article = {
  id: number
  title: string
  description: string
  tags: string[]
  imageUrl: string
}

export default function useFilter(articles: Article[]) {
  const [filter, setFilter] = useState<FilterState>({
    support: 'All',
    business: 'All',
    goal: 'All',
  })
  const [searchQuery, setSearchQuery] = useState('')

  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return {
    filter,
    setFilter,
    searchQuery,
    setSearchQuery,
    filteredArticles,
  }
}
