'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'


export default function ProductCard({ id, title, price }: { id: number, title: string, price: number }) {
return (
<motion.div whileHover={{ scale: 1.02 }} className="bg-white rounded shadow-sm overflow-hidden">
<Link href="/product" className="block">
<div className="h-40 bg-gray-100 flex items-center justify-center">Img</div>
<div className="p-3">
<div className="text-sm text-gray-500">Brand</div>
<div className="font-medium mt-1">{title}</div>
<div className="mt-2 font-semibold">₹{price}</div>
</div>
</Link>
</motion.div>
)
}