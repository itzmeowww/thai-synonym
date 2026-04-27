import Link from "next/link";

const Footer = () => {
    return (
        <div className="w-full py-4 flex items-center justify-center text-sm border-t ">
            <span className="">
                Contribute on {" "}
                <Link href="https://github.com/itzmeowww/thai-synonym" target="_blank" rel="noopener noreferrer" className="text-purple-500 hover:underline">
                    {"GitHub"}
                </Link>
            </span>
        </div>
    );
}

export default Footer;