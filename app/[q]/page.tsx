
import { Button } from "@/components/ui/button";
import { lookup } from "@/lib/synonym";
import Link from "next/link";
import { CopyButton } from "@/components/copy-button";

export const generateStaticParams = async () => {
    const { default: data } = await import('@/app/data/synonym.json');
    const words = new Set(data.flat());
    return Array.from(words).map(word => ({ q: word }));
}

const Page = async ({ params }: { params: Promise<{ q: string }> }) => {

    const { q: rawWord } = await params;
    const word = decodeURIComponent(rawWord);
    const synonyms = lookup(word);
    return (
        <div className="min-h-svh flex flex-col items-center justify-center gap-6 px-6 py-16">
            <h1 className="text-4xl lg:text-5xl text-center mt-36">
                คำไวพจน์สำหรับคำว่า &quot;{word}&quot;
            </h1>
            <div className="flex gap-3">
                {
                    synonyms.length > 0 ? (
                        synonyms.map((synonym) => (
                            <CopyButton key={synonym} word={synonym} />

                        ))
                    ) : (
                        <p>ไม่พบคำไวพจน์สำหรับคำว่า &quot;{word}&quot;</p>
                    )
                }
            </div>
            <Link href="/">
                <Button>
                    ค้นหาคำไวพจน์อื่น ๆ
                </Button>
            </Link>
        </div>
    );
}

export default Page;