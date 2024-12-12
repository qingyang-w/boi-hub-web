type SubsectionsTopProps = {
  searchQuery: string
  setSearchQuery: (query: string) => void
}

export default function SubsectionsTop({ searchQuery, setSearchQuery }: SubsectionsTopProps) {
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-3xl font-bold">Explore more...</h1>
      <div className="relative">
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-64 pl-4 pr-10 py-2 border rounded-full border-gray-300 focus:ring-2 focus:ring-green-400 focus:outline-none"
        />
      </div>
    </div>
  )
}
