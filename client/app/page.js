"use client";
import Image from "next/image";
import { Poppins } from 'next/font/google'
import Sidbar from "./components/sidbar";
import { MdDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { MdCheck } from "react-icons/md";
import { useSearchParams } from "next/navigation";

const poppins = Poppins({
  weight: ['100', '200', '400', '600'],
  subsets: ['latin'],
})

export default function Home() {
  const searchParams=useSearchParams();

  const title=searchParams.get("title");
  const description=searchParams.get("description");
  const date=searchParams.get("date");
  
  return (
    
    <main className={`${poppins.className} p-5`} >
      <div className="mx-10 md:mx-40 lg:mx-70 ">
        <div className=" bg-gray-500 p-5 grid grid-cols-2 rounded-2xl border border-gray-800 focus:ring-blue-500 focus:border-gray-500 ">
          <div className="flex flex-col">
            <label className="font-bold">
              {title}
            </label>
            <label>
              {date}
            </label>
            <label>
              {description}
            </label>
          </div>
          <div className="flex gap-2 md:gap-4 lg:gap-7">
            <button className=" cursor-pointer hover:text-gray-700"><MdDeleteOutline/></button>
            <button className=" cursor-pointer hover:text-gray-700"><CiEdit/></button>
            <button className=" cursor-pointer hover:text-gray-700"><MdCheck/></button>


          </div>
        </div>

        

      </div>

    </main>
  );
}
