'use client'
import { motion } from 'framer-motion'
import React from 'react'


const categories = [
'Tops & Tees',
'Jeans',
'Footwear',
'Accessories',
'Beauty',
'Home',
'Sports',
'Kids',
]


export default function CategoryGrid() {
return (
<motion.div
initial="hidden"
whileInView="visible"
viewport={{ once: true, amount: 0.2 }}
variants={{
hidden: { opacity: 0, y: 20 },
visible: {
opacity: 1,
y: 0,
transition: { staggerChildren: 0.1, duration: 0.6 },
},
}}
className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4"
>
{categories.map((c, i) => (
<motion.div
key={i}
variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
whileHover={{ scale: 1.05, y: -4 }}
className="flex flex-col items-center text-center p-3 border rounded-lg bg-white shadow-sm hover:shadow-md transition"
>
<div className="w-20 h-20 bg-linear-to-tr from-rose-100 to-sky-100 rounded-lg mb-2 flex items-center justify-center text-slate-500">
img
</div>
<div className="text-sm font-medium">{c}</div>
</motion.div>
))}
</motion.div>
)
}