"use client";
import Link from "next/link";
import { useState } from "react";

import { useRouter } from "next/navigation";

export default function page() {
    const [title,setTitle]=useState("");
    const [description,setDescription]=useState("");
    const [date,setDate]=useState("");

    const router=useRouter();

    const handleSubmit=(e)=>{
        e.preventDefault();
        router.push(`/?title=${title}&description=${description}&date=${date}`);
    }
  
    
    return (
        <div className="mx-20 md:mx-40 lg:mx-70">
            <form onSubmit={handleSubmit}>
                <div className="mb-5">
                    <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900">Title</label>
                    <input  type="text"  
                        id="title"
                        name="title"
                        value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                    className="bg-gray-50 border border-gray-300  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="title" required />
                </div>

                <div className="mb-5">
                <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900">Date</label>
                <input type="Date"
                 id="date"
                 name="date"
                 value={date}
                onChange={(e)=>setDate(e.target.value)}
                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="name@flowbite.com" required />
                </div>

                <div className="">
                <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900">Description</label>
                <textarea  id="description"
                        name="description"
                        value={description}
                onChange={(e)=>setDescription(e.target.value)}
                rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Write your thoughts here..."></textarea>
                </div>

                <div>
                    <button type="submit" className="p-4 w-28 mt-5 text-white text-xl hover:bg-gray-600 bg-gray-500 rounded">Add</button>
                </div>

            </form>

        </div>
    )
}