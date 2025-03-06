import Link from "next/link";


export default function sidbar() {
  return (
    <aside className="bg-gray-500 w-64 h-screen text-white fixed p-5">
        <ul className="space-y-2">
            <li><Link href="/"  className="block p-2 hover:bg-gray-700 rounded text-center">Task</Link></li>
            <li><Link href="/completed" className="block p-2 hover:bg-gray-700 rounded text-center" >Completed</Link> </li>
            <li><Link href="/addtask" className="block p-2 hover:bg-gray-700 rounded text-center">Add task</Link></li>
        </ul>
    </aside>
  )
}