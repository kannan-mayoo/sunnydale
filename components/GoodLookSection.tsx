"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const looksItems = [
  {
    title: "footwear",
    subtitle: "FROM ₹299",
    img: "/good-footwear.png",
  },
  {
    title: "ethnic",
    subtitle: "FROM ₹499",
    img: "/good-ethnic.png",
  },
  {
    title: "western",
    subtitle: "FROM ₹299",
    img: "/good-western.png",
  },
  {
    title: "men",
    subtitle: "FROM ₹499",
    img: "/good-men.png",
  },
];

export default function GoodLooksSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 mt-12">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-xl font-bold text-gray-900"
      >
        Good Looks. Great Prices
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
        {looksItems.map((item, index) => (
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
                <p className="text-white text-2xl font-medium capitalize leading-tight">
                  {item.title}
                </p>
                <p className="text-white text-sm opacity-90">{item.subtitle}</p>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
