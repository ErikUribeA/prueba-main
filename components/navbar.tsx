import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-10 w-full dark:bg-yellow-300 dark:border-gray-600">
            <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">

                <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <Image src="/media/notas.png" alt="Descripción" width={40} height={30} />
                    <span className="self-center text-xl italic font-semibold whitespace-nowrap dark:text-white">Post Page</span>
                </Link>

                <div className="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
                    <button 
                        type="button" 
                        className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                        onClick={() => window.location.href = '/'} // Corregido para redirigir al inicio
                    >
                        Dark
                    </button>

                    <button 
                        data-collapse-toggle="navbar-sticky" 
                        type="button" 
                        className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
                        aria-controls="navbar-sticky" 
                        aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>

                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg md:p-0 bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-yellow-300 dark:border-gray-700">
                        <li>
                            <Link href="/dashboard" className="block px-3 py-2 text-white bg-black rounded md:bg-transparent md:text-black md:p-0 md:dark:text-black" aria-current="page">Home</Link>
                        </li>
                        <li>
                            <Link href="/dashboard/newPost" className="block px-3 py-2 text-gray-900 rounded hover:bg-black md:hover:bg-transparent md:hover:text-black md:p-0 md:dark:hover:text-black dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Create Post</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
