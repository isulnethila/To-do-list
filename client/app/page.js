import Image from "next/image";
import { Poppins } from 'next/font/google'
import Sidbar from "./components/sidbar";

const poppins = Poppins({
  weight: ['100','200','400','600'],
  subsets: ['latin'],
})

export default function Home() {
  return (
    <main className={`${poppins.className} p-5`} >
     
     
    </main>
  );
}
