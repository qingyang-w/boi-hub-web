import React from 'react'

interface FAQProps {
  questions: string[]
}

const FAQ: React.FC<FAQProps> = ({ questions }) => {
  return (
    <div className="z-10 px-16">
      <h2 className="text-2xl font-semibold mb-2">FAQs</h2>
      <ul className="space-y-2 mt-4">
        {questions.map((question, index) => (
          <li
            key={index}
            className="text-lg text-gray-700 cursor-pointer"
          >
            <a className="font-medium text-blue-600">Q:</a> {question}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FAQ
