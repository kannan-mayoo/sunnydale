import Link from "next/link";

export default function BannerGrid() {
return (
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
{Array.from({ length: 4 }).map((_, i) => (
<Link key={i} href="/sample-page" className="block rounded overflow-hidden shadow-sm">
<div className="h-28 md:h-40 bg-gray-200 flex items-center justify-center">Banner {i + 1}</div>
</Link>
))}
</div>
)
}