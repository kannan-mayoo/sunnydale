// 'use client'
// import { motion } from 'framer-motion'
// import Link from 'next/link'


// export default function Hero() {
// return (
// <section className="mt-6">
// <div className="relative rounded-lg overflow-hidden">
// <motion.div
// initial={{ opacity: 0, y: 20 }}
// animate={{ opacity: 1, y: 0 }}
// transition={{ duration: 0.6 }}
// className="h-56 md:h-96 bg-linear-to-r from-slate-100 to-white flex items-center"
// >
// <div className="container mx-auto px-4 flex flex-col md:flex-row gap-6 items-center">
// <div className="flex-1">
// <h1 className="text-3xl md:text-5xl font-bold">Discover Latest Trends</h1>
// <p className="mt-2 text-gray-600">Top brands. New arrivals. Great offers.</p>
// <div className="mt-4 flex gap-3">
// <Link href="/category" className="bg-accent text-white px-4 py-2 rounded">Shop Now</Link>
// <Link href="/sample-page" className="border px-4 py-2 rounded">Explore</Link>
// </div>
// </div>
// <div className="w-48 h-48 bg-gray-200 rounded shadow hidden md:block" />
// </div>
// </motion.div>
// </div>
// </section>
// )
// }








// 'use client'
// import { motion } from 'framer-motion'
// import React from 'react'


// export default function Hero() {
// return (
// <section className="bg-linear-to-r from-rose-50 via-white to-sky-50 py-20 overflow-hidden">
// <div className="container flex flex-col md:flex-row items-center gap-10">
// <motion.div
// initial={{ x: -80, opacity: 0 }}
// animate={{ x: 0, opacity: 1 }}
// transition={{ duration: 0.8, ease: 'easeOut' }}
// className="flex-1"
// >
// <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">
// Discover Latest <span className="text-rose-500">Trends</span> & Essentials
// </h1>
// <p className="text-slate-600 mb-6 text-lg">
// Free shipping on orders above ₹699. Explore premium fashion, home, and beauty products.
// </p>
// <div className="flex gap-4">
// <motion.button
// whileHover={{ scale: 1.05 }}
// whileTap={{ scale: 0.95 }}
// className="px-6 py-3 bg-rose-600 text-white rounded-full shadow-md hover:shadow-lg transition"
// >
// Shop Women
// </motion.button>
// <motion.button
// whileHover={{ scale: 1.05 }}
// whileTap={{ scale: 0.95 }}
// className="px-6 py-3 border border-rose-600 text-rose-600 rounded-full hover:bg-rose-50 transition"
// >
// Shop Men
// </motion.button>
// </div>
// </motion.div>


// <motion.div
// initial={{ x: 80, opacity: 0 }}
// animate={{ x: 0, opacity: 1 }}
// transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
// className="w-full md:w-1/2 h-72 rounded-xl overflow-hidden shadow-lg bg-gray-100 flex items-center justify-center"
// >
// <motion.img
// src="/placeholder-hero.jpg"
// alt="Hero Fashion Banner"
// className="object-cover w-full h-full"
// initial={{ scale: 1.1 }}
// animate={{ scale: 1 }}
// transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
// />
// </motion.div>
// </div>
// </section>
// )
// }











"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-[#9C5903] text-white">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col items-center text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-semibold tracking-wide"
          >
            Autumn/Winter 2025
          </motion.h2>
          <p className="mt-1 text-lg text-gray-100 hover:cursor-pointer hover:text-gray-900">New Deals Inside</p>
        </div>

        {/* Hero Images */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-6 flex flex-col items-center"
        >
          <Image
            width={1200}
            height={800}
            src="/autumn_banner.png"
            alt="Main banner"
            className="rounded-md w-full object-cover"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 w-full">
            <Image src="/autumn_banner_2.png" width={300} height={200} alt="" className="rounded-md w-full h-full object-cover" />
            <Image src="/autumn_banner_3.png" width={300} height={200} alt="" className="rounded-md w-full h-full object-cover" />
            <Image src="/autumn_banner_4.png" width={300} height={200} alt="" className="rounded-md w-full h-full object-cover" />
            <Image src="/autumn_banner_5.png" width={300} height={200} alt="" className="rounded-md w-full h-full object-cover" />
          </div>
        </motion.div>

        <div className="mt-6 text-center">
          <button className="inline-flex items-center text-white font-medium hover:underline cursor-pointer hover:text-2xl hover:text-gray-900">
            Discover now →
          </button>
        </div>
      </div>
    </section>
  );
}