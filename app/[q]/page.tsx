
import { Button } from "@/components/ui/button";
import { lookup } from "@/lib/synonym";
import Link from "next/link";
import { CopyButton } from "@/components/copy-button";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const generateMetadata = async ({ params }: { params: Promise<{ q: string }> }): Promise<Metadata> => {
    const { q: rawWord } = await params;
    const word = decodeURIComponent(rawWord);
    const synonyms = lookup(word);
    const synonymList = synonyms.slice(0, 5).join(", ");
    const description = synonyms.length > 0
        ? `คำไวพจน์ของคำว่า "${word}" ได้แก่ ${synonymList}${synonyms.length > 5 ? " และอื่น ๆ" : ""}`
        : `ค้นหาคำไวพจน์สำหรับคำว่า "${word}"`
    return {
        title: `คำไวพจน์ของ "${word}" | ค้นหาคำไวพจน์`,
        description,
        openGraph: {
            title: `คำไวพจน์: ${word}`,
            description,
            images: [`/og/${encodeURIComponent(word)}`],
        },
        twitter: {
            card: 'summary_large_image',
            title: `คำไวพจน์: ${word}`,
            description,
            images: [`/og/${encodeURIComponent(word)}`],
        },
    };
};

export const generateStaticParams = async () => {
    const { default: data } = await import('@/app/data/synonym.json');
    const words = new Set(data.flat());
    return Array.from(words).map(word => ({ q: word }));
}

const BASE_URL = 'https://thai-synonym.vercel.app'

const Page = async ({ params }: { params: Promise<{ q: string }> }) => {

    const { q: rawWord } = await params;
    const word = decodeURIComponent(rawWord);
    const synonyms = lookup(word);

    if (synonyms.length === 0) notFound();

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "DefinedTerm",
        name: word,
        description: synonyms.length > 0
            ? `คำไวพจน์ของคำว่า "${word}" ได้แก่ ${synonyms.join(", ")}`
            : `ไม่พบคำไวพจน์สำหรับคำว่า "${word}"`,
        url: `${BASE_URL}/${encodeURIComponent(word)}`,
        inDefinedTermSet: {
            "@type": "DefinedTermSet",
            name: "คำไวพจน์ภาษาไทย",
            url: BASE_URL,
        },
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="min-h-svh flex flex-col items-center justify-center gap-6 px-6 py-16">
                <h1 className="text-4xl lg:text-5xl text-center mt-36">
                    คำไวพจน์สำหรับคำว่า &quot;{word}&quot;
                </h1>
                <div className="flex gap-3 flex-wrap justify-center">
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
        </>
    );
}

export default Page;