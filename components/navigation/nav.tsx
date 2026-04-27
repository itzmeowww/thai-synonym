import Image from "next/image";
import Icon from '@/public/images/icons/icon-512x512.png'
import Link from "next/link";

const Nav = () => {
    return (
        <div className="w-full h-16 border-b px-4 flex items-center fixed bg-white/80 dark:bg-black/80 backdrop-blur-sm z-50 top-0">
            <div className="max-w-5xl mx-auto w-full flex items-center justify-between ">
                <Link href='/' className="flex gap-3 items-center">
                    <Image src={Icon} alt="Icon" width={32} height={32} />
                    ค้นหาคำไวพจน์
                </Link>
                <Link href="/list" className="flex gap-3 items-center">
                    ตารางคำไวพจน์
                </Link>
            </div>
        </div>
    );
}

export default Nav;