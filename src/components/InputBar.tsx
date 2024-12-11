export default function InputBar() {
  return (
    <>
      <section className="mt-10 px-10">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 text-center mt-16 mb-10">
            Ask anything you need to start a business
          </h2>
          <div className="flex items-center bg-gray-100 border border-gray-300 rounded-lg overflow-hidden shadow-md">
            <input
              type="text"
              placeholder="Type your question here..."
              className="w-full px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 font-semibold">
              Search
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
