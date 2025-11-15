'use client'
import Link from 'next/link'
// import { useState } from 'react'


const items = ['Men', 'Women', 'Kids', 'Home', 'Beauty', 'Offers']


export default function Navbar() {
// const [open, setOpen] = useState(false)
return (
<nav className="bg-white border-t">
<div className="container mx-auto px-4">
<div className="flex items-center gap-6 overflow-x-auto py-2">
{items.map((item) => (
<Link key={item} href="#categories" className="whitespace-nowrap text-sm hover:text-accent">{item}</Link>
))}
</div>
</div>
</nav>
)
}