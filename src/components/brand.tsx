import Image from 'next/image'
import Link from 'next/link'

const Brand = () => {
    return (
        <Link href="/" className="flex items-center gap-2">
            <Image
                src="/logo.png"
                alt="UnityAlgo"
                width={48} // default size (h-12)
                height={48}
                className="h-10 w-10 sm:h-12 sm:w-12"
                priority // ensures logo loads fast
            />
            <div className="font-bold text-base">UnityChats</div>
        </Link>
    )
}

export default Brand