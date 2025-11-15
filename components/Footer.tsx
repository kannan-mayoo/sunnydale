// export default function Footer() {
//     return (
//         <footer className="bg-gray-50 mt-12 border-t">
//             <div className="container mx-auto px-4 py-8 grid md:grid-cols-4 gap-8">
//                 <div>
//                     <h4 className="font-semibold mb-2">Company</h4>
//                     <ul className="text-sm text-gray-600 space-y-1">
//                         <li><a href="/sample-page">About</a></li>
//                         <li><a href="/sample-page">Careers</a></li>
//                     </ul>
//                 </div>
//                 <div>
//                     <h4 className="font-semibold mb-2">Help</h4>
//                     <ul className="text-sm text-gray-600 space-y-1">
//                         <li><a href="/sample-page">Contact</a></li>
//                         <li><a href="/sample-page">FAQs</a></li>
//                     </ul>
//                 </div>
//                 <div>
//                     <h4 className="font-semibold mb-2">Follow</h4>
//                     <div className="flex gap-3">SNS</div>
//                 </div>
//                 <div>
//                     <h4 className="font-semibold mb-2">Download</h4>
//                     <div className="text-sm text-gray-600">App badges (mock)</div>
//                 </div>
//             </div>
//             <div className="bg-white border-t">
//                 <div className="container mx-auto px-4 py-4 text-sm text-gray-500">© Lifestyle Clone</div>
//             </div>
//         </footer>
//     )
// }






"use client";

import Image from "next/image";
import { Mail, Phone, MessageCircle, Instagram, Twitter, Facebook } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-900 border-t border-gray-200 mt-12">
      {/* Top Subscription Section */}
      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-2 gap-6 border-b border-gray-200">
        <div>
          <h3 className="text-lg font-semibold">Subscribe to our awesome emails.</h3>
          <p className="text-sm text-gray-600 mt-1">
            Get our latest offers and news straight in your inbox.
          </p>

          <div className="mt-4 flex max-w-md">
            <input
              type="email"
              placeholder="Please enter an email address"
              className="w-full border border-gray-300 rounded-l-md px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-700"
            />
            <button className="bg-black text-white px-5 rounded-r-md text-sm font-medium hover:bg-gray-800">
              Subscribe
            </button>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Download our apps</h3>
          <p className="text-sm text-gray-600 mt-1">
            Shop our products and offers on-the-go.
          </p>
          <div className="flex gap-3 mt-4">
            <Image
              src="/appstore.png"
              alt="App Store"
              width={150}
              height={45}
              className="cursor-pointer"
            />
            <Image
              src="/googleplay.png"
              alt="Google Play"
              width={150}
              height={45}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* Middle Section — Links */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 border-b border-gray-200 text-sm">
        <div>
          <h4 className="font-semibold mb-3">Women</h4>
          <ul className="space-y-1 text-gray-600">
            <li><Link href="/">Tops</Link></li>
            <li><Link href="/">Ethnicwear</Link></li>
            <li><Link href="/">Bottoms</Link></li>
            <li><Link href="/">Dresses & Jumpsuits</Link></li>
            <li><Link href="/">Winterwear</Link></li>
            <li><Link href="/">Lingerie</Link></li>
            <li><Link href="/">Nightwear</Link></li>
            <li><Link href="/">Sportswear</Link></li>
            <li><Link href="/">Beauty</Link></li>
            <li><Link href="/">Watches & Sunglasses</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Men</h4>
          <ul className="space-y-1 text-gray-600">
            <li><Link href="/">Tops</Link></li>
            <li><Link href="/">Bottoms</Link></li>
            <li><Link href="/">Ethnicwear</Link></li>
            <li><Link href="/">Winterwear</Link></li>
            <li><Link href="/">Sportswear</Link></li>
            <li><Link href="/">Innerwear</Link></li>
            <li><Link href="/">Grooming</Link></li>
            <li><Link href="/">Watches</Link></li>
            <li><Link href="/">Sunglasses</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Kids</h4>
          <ul className="space-y-1 text-gray-600">
            <li><Link href="/">Girls Clothing</Link></li>
            <li><Link href="/">Boys Clothing</Link></li>
            <li><Link href="/">Infants Girls</Link></li>
            <li><Link href="/">Infants Boys</Link></li>
            <li><Link href="/">Winterwear</Link></li>
            <li><Link href="/">Add ons</Link></li>
            <li><Link href="/">The Teen Shop</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Shoes & Bags</h4>
          <ul className="space-y-1 text-gray-600">
            <li><Link href="/">Women</Link></li>
            <li><Link href="/">Men</Link></li>
            <li><Link href="/">Boys</Link></li>
            <li><Link href="/">Girls</Link></li>
            <li><Link href="/">Women Accessories</Link></li>
            <li><Link href="/">Men Accessories</Link></li>
            <li><Link href="/">Essential</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Beauty</h4>
          <ul className="space-y-1 text-gray-600">
            <li><Link href="/">Makeup Eyes</Link></li>
            <li><Link href="/">Makeup Face</Link></li>
            <li><Link href="/">Makeup Lips</Link></li>
            <li><Link href="/">Makeup Nails</Link></li>
            <li><Link href="/">Perfumes</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Home & Living</h4>
          <ul className="space-y-1 text-gray-600">
            <li><Link href="/">Decor</Link></li>
            <li><Link href="/">Furnishing</Link></li>
            <li><Link href="/">Kitchen</Link></li>
            <li><Link href="/">Tableware</Link></li>
            <li><Link href="/">Bath & Laundry</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Info Section */}
      <div className="max-w-7xl mx-auto px-6 py-8 text-sm text-gray-700">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-gray-200 pb-6">
          <div className="flex flex-wrap justify-center md:justify-start gap-8">
            <div className="flex items-center gap-2">
              <Phone className="hover:cursor-pointer" size={18} />
              <span>1800-123-1555</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="hover:cursor-pointer" size={18} />
              <span>help.lifestylestores.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="hover:cursor-pointer" size={18} />
              <span>help@lifestylestores.com</span>
            </div>
          </div>

          <div className="flex items-center gap-5 text-gray-700">
            <a href="https://facebook.com" target="_blank" className="hover:text-blue-500 transition">
                <Facebook className="cursor-pointer" size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" className="hover:text-sky-400 transition">
            <Twitter className="cursor-pointer" size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" className="hover:text-pink-400 transition">
                <Instagram size={20} />
            </a>

            
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-6 text-gray-500 text-xs">
          <p className="font-semibold text-gray-800 tracking-wide">LIFESTYLE</p>
          <p>© 2025 RNA Intellectual Property Limited. Terms & Conditions - Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
}
