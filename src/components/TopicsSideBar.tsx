type FilterSidebarProps = {
  topics: string[]
  filter: { support: string; business: string; goal: string }
  setFilter: (filter: { support: string; business: string; goal: string }) => void
}

export default function TopicsSideBar({ topics, filter, setFilter }: FilterSidebarProps) {
  return (
    <aside className="w-1/4 pr-6">
      <h2 className="text-xl font-bold mb-4">Topics</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-md font-semibold mb-2">Filter by</h3>
          <div className="space-y-1">
            {topics.map((topic) => (
              <label
                key={topic}
                className="flex items-center space-x-2"
              >
                <input
                  type="radio"
                  name="support"
                  value={topic}
                  checked={filter.support === topic}
                  onChange={() => setFilter({ ...filter, support: topic })}
                  className="form-radio text-green-600"
                />
                <span className="text-sm max-w-48">{topic}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </aside>
  )
}
