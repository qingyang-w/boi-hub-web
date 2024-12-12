import Image from 'next/image'
import Link from 'next/link'

interface Section {
  title: string
  description: string
  imageSrc: string
  url: string
}

interface SectionsProps {
  sections: Section[]
}

export default function Subsections({ sections }: SectionsProps) {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">
          Wherever you are on your journey, we’re here to help
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <div
              key={index}
              className="rounded-xl shadow-md overflow-hidden bg-white"
            >
              <div className="relative w-full h-48">
                <Image
                  src={section.imageSrc}
                  alt={section.title}
                  fill
                  style={{
                    objectFit: 'cover',
                  }}
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold">{section.title}</h2>
                <p className="text-md text-gray-600 mt-2">{section.description}</p>
                <Link href={section.url}>
                  <button className="mt-6 bg-green-400 px-4 py-2 rounded-full hover:bg-green-500">
                    Find out more
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
