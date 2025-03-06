

export default function page() {
    return (
        <div className="mx-20 md:mx-40 lg:mx-70">
            <form>
                <div className="mb-5">
                    <label for="title" className="block mb-2 text-sm font-medium text-gray-900">Title</label>
                    <input type="title"  id="title" className="bg-gray-50 border border-gray-300  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="title" required />
                </div>

                <div className="mb-5">
                <label for="title" className="block mb-2 text-sm font-medium text-gray-900">Date</label>
                <input type="Date"
                
                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="name@flowbite.com" required />
                </div>

                <div className="">
                <label for="message" className="block mb-2 text-sm font-medium text-gray-900">Description</label>
                <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Write your thoughts here..."></textarea>
                </div>

                <div>
                    <button className="p-4 w-28 mt-5 text-white text-xl hover:bg-gray-600 bg-gray-500 rounded">Add</button>
                </div>

            </form>

        </div>
    )
}