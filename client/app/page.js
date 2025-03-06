import Image from "next/image";
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: ['100','200','400','600'],
  subsets: ['latin'],
})

export default function Home() {
  return (
    <main className={poppins.className}>
      <selection>
        <h1>To Do List</h1>
      </selection>
    </main>
  );
}
