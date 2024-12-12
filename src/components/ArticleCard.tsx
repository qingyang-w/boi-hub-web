import Image from 'next/image'

type Article = {
  id: number
  title: string
  description: string
  tags: string[]
  imageUrl: string
}

type ArticleCardProps = {
  article: Article
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
      <Image
        src="/growing-business/bg.jpg"
        alt={article.title}
        width={0}
        height={0}
        className="w-full h-56 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-medium mb-2">{article.title}</h3>
        <p className="text-sm text-gray-600 mb-4">{article.description}</p>
        <div className="flex flex-wrap items-center gap-2 mb-4">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <button className="bg-green-400 text-white text-sm px-4 py-2 rounded-full hover:bg-green-500">
          Read more
        </button>
      </div>
    </div>
  )
}
