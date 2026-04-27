import { SearchBox } from "@/components/search-box"
import { Metadata } from "next"

const BASE_URL = 'https://thai-synonym.vercel.app'

export const metadata: Metadata = {
  title: "ค้นหาคำไวพจน์ภาษาไทย",
  description: "เครื่องมือค้นหาคำไวพจน์ภาษาไทยออนไลน์ ค้นหาคำที่มีความหมายเหมือนกัน เช่น นก เต่า ต้นไม้ และอื่น ๆ อีกมากมาย",
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "คำไวพจน์ภาษาไทย",
  url: BASE_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${BASE_URL}/{search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="flex flex-col items-center justify-top min-h-svh px-6 bg-white dark:bg-black py-16 gap-6 lg:gap-12">
        <h1 className="text-4xl lg:text-5xl text-center mt-36">
          ค้นหาคำไวพจน์
        </h1>
        <SearchBox />
      </div>
    </>
  )
}
