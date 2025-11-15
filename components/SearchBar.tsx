'use client'
import { useState } from 'react'


export default function SearchBar() {
const [q, setQ] = useState('')
return (
<form onSubmit={(e) => e.preventDefault()} className="flex-1 max-w-xl px-4">
<div className="relative">
<input
value={q}
onChange={(e) => setQ(e.target.value)}
placeholder="Search for products, brands and more"
className="w-full border rounded-full py-2 px-4 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
/>
<div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">🔍</div>
</div>
</form>
)
}