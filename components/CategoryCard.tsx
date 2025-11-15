import Link from 'next/link'


export default function CategoryCard({ title }: { title: string }) {
return (
<Link href="/category" className="block rounded overflow-hidden text-center p-4 border">
<div className="h-32 bg-gray-100 mb-3 flex items-center justify-center">Img</div>
<div className="font-medium">{title}</div>
</Link>
)
}