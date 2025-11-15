"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const winterItems = [
  { title: "JACKETS", img: "/winter-jacket-1.png" },
  { title: "HOODIES", img: "/winter-hoodie.png" },
  { title: "SWEATSHIRTS", img: "/winter-sweatshirt.png" },
  { title: "COATS", img: "/winter-coat.png" },
];

export default function WinterSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 mt-12">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-xl font-bold text-gray-900"
      >
        Winter Is Coming
      </motion.h2>

      <div className="h-1 bg-yellow-400 w-10 mt-1 mb-5" />

      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        slidesPerView={2}
        breakpoints={{
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        className="group"
      >
        {winterItems.map((item, index) => (
          <SwiperSlide key={index}>
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="relative rounded-xl overflow-hidden cursor-pointer"
            >
              <Image
                src={item.img}
                alt={item.title}
                width={400}
                height={600}
                className="w-full h-96 object-cover rounded-xl"
              />
              <div className="absolute bottom-6 left-0 right-0 text-center">
                <p className="text-white text-2xl font-medium capitalize drop-shadow-md">
                  {item.title}
                </p>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
