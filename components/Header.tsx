// 'use client'
// import Navbar from './Navbar'
// import SearchBar from './SearchBar'
// import Link from 'next/link'


// export default function Header() {
// return (
// <header className="shadow-sm sticky top-0 z-40 bg-white">
// <div className="container mx-auto px-4 py-3 flex items-center justify-between">
// <Link href="/" className="flex items-center gap-3">
// <div className="w-10 h-10 bg-gray-200 rounded flex items-center justify-center font-bold">L</div>
// <div className="hidden md:block">
// <div className="font-bold">Lifestyle</div>
// <div className="text-xs text-gray-500">Mall-ish demo</div>
// </div>
// </Link>
// <SearchBar />
// <div className="hidden sm:flex items-center gap-4">
// <Link href="/sample-page" className="text-sm">Sign in</Link>
// <Link href="/sample-page" className="text-sm">Cart</Link>
// </div>
// </div>
// <Navbar />
// </header>
// )
// }












// 'use client'
// import Link from 'next/link'
// import Navbar from './Navbar'
// import SearchBar from './SearchBar'


// export default function Header() {
// return (
// <header className="sticky top-0 z-50 bg-white shadow-subtle">
// <div className="container mx-auto px-4 flex items-center justify-between h-header">
// <Link href="/" className="flex items-center gap-3">
//     {/* <img src="/logo-placeholder.png" alt="logo" className="w-10 h-10" /> */}
//     <div className="hidden md:block">
//         <div className="font-bold">Lifestyle</div>
//         {/* <div className="text-xs text-gray-500">Mall-ish demo</div> */}
//     </div>
// </Link>


// <div className="flex-1 px-6 hidden md:block">
// <SearchBar />
// </div>


// <div className="flex items-center gap-6 text-sm text-lifestyle-primary font-medium">
// <a href="/sample-page" className="hover:text-lifestyle-accent">Sign In</a>
// <a href="/sample-page" className="hover:text-lifestyle-accent">Cart</a>
// </div>
// </div>


// <Navbar />
// </header>
// )
// }





// 'use client'
// import Link from 'next/link'
// import { motion } from 'framer-motion'
// import React, { useState } from 'react'


// export default function Header() {
// const [showSearch, setShowSearch] = useState(false)


// return (
// <motion.header
// initial={{ y: -60, opacity: 0 }}
// animate={{ y: 0, opacity: 1 }}
// transition={{ duration: 0.6, ease: 'easeOut' }}
// className="border-b sticky top-0 bg-white/80 backdrop-blur-md z-50 shadow-sm"
// >
// <div className="container flex items-center justify-between h-16">
// <Link href="/" className="flex items-center gap-3">
// <motion.div
// whileHover={{ scale: 1.1 }}
// className="w-10 h-10 bg-slate-800 text-white flex items-center justify-center rounded"
// >
// LS
// </motion.div>
// <span className="font-bold text-lg">Lifestyle</span>
// </Link>


{/* <nav className="hidden md:flex items-center gap-6 font-medium">
{['Women', 'Men', 'Kids', 'Home', 'Beauty'].map((item, i) => (
<motion.div key={i} whileHover={{ y: -2 }}>
<Link href="#" className="hover:text-slate-900 text-slate-700 transition-colors">
{item}
</Link>
</motion.div>
))}
</nav> */}


{/* <div className="flex items-center gap-4">
{showSearch && (
<motion.input
initial={{ width: 0, opacity: 0 }}
animate={{ width: 200, opacity: 1 }}
exit={{ width: 0, opacity: 0 }}
transition={{ duration: 0.3 }}
className="hidden md:block border rounded px-3 py-1"
placeholder="Search for products..."
/>
)}
<button
onClick={() => setShowSearch(!showSearch)}
className="text-sm hover:underline"
>
Search
</button>
<button className="text-sm border-b-amber-300">Sign in</button>
<button className="text-sm hover:underline">Basket</button>
</div>
</div>
</motion.header>
)
} */}




import { Heart, ShoppingBag, MoreVertical } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full bg-white border-b  shadow-sm border-yellow-300/50 space-x-2">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 ">
        {/* Logo */}
        <h1 className="text-2xl font-semibold tracking-tight hover:cursor-pointer mr-3 ml-[-6] text-gray-900">
          Sunnydale
        </h1>

        {/* Search */}
        <div className=" relative w-1/3">
          <input
            type="text"
            placeholder="Search products, brands and more"
            className="w-full border border-gray-300 rounded-full py-2 pl-4 pr-10 px-50 text-sm focus:outline-none focus:ring-1 focus:ring-orange-500"
          />
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-gray-500 absolute right-3 top-2.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m1.9-5.4a7.25 7.25 0 11-14.5 0 7.25 7.25 0 0114.5 0z" />
          </svg> */}
        </div>

        {/* Right icons */}
        <div className="flex items-center gap-6 text-sm text-gray-700 ">
          <button className="bg-[#9C5903] text-white font-semibold text-sm px-2 ml-4 sm:px-4 py-0.5 sm:py-2 rounded-sm hover:bg-[#e4a61e] hover:cursor-pointer transition-colors shadow-sm ">Sign In</button>
          <div className="flex flex-col items-center cursor-pointer">
            <Heart className="w-5 h-6 text-black" strokeWidth={1.5} />
            <button className="hidden md:flex  hover:border-b-4 border-orange-500 hover:cursor-pointer">Wishlist</button>
          </div>
          <div className="flex flex-col items-center cursor-pointer">
            <ShoppingBag className="w-5 h-6 text-black" strokeWidth={1.5} />
            <button className="hidden md:flex hover:border-b-4 border-orange-500 hover:cursor-pointer">Basket</button>
          </div>
          <div className="flex flex-col items-center cursor-pointer">
            <MoreVertical className="w-5 h-6 text-black" strokeWidth={1.5} />
            <button className="hidden md:flex hover:border-b-4 border-orange-500 hover:cursor-pointer">More</button>
          </div>
        </div>
      </div>
    </header>
  );
}