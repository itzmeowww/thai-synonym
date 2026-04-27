import { Button } from "@/components/ui/button";
import Link from "next/link";

const Page = () => {
    return (
        <div className="min-h-svh flex flex-col items-center justify-center gap-6 px-6">
            <h1 className="text-4xl lg:text-5xl text-center">
                404 - Not Found
            </h1>
            <p className="text-center mt-4 text-gray-500 dark:text-gray-300">
                ขอโทษด้วย เราไม่พบหน้าที่คุณกำลังมองหา
            </p>
            <div className="flex justify-center mt-6">
                <Link href="/" className="">
                    <Button variant="outline">
                        กลับสู่หน้าหลัก
                    </Button>
                </Link>

            </div>
        </div>
    );
}

export default Page;